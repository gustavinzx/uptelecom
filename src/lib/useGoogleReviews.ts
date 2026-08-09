import { useEffect, useState } from "react";

export interface GoogleReview {
  name: string;
  rating: number;
  text: string;
  relativeTime: string;
  authorPhotoUrl?: string;
}

interface GoogleReviewsResult {
  reviews: GoogleReview[];
  rating: number | null;
  userRatingCount: number | null;
  googleMapsUri: string | null;
  loading: boolean;
  error: boolean;
}

const CACHE_KEY = "google_reviews_cache";
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

interface CacheShape {
  timestamp: number;
  data: Omit<GoogleReviewsResult, "loading" | "error">;
}

interface PlacesApiReview {
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string; photoUri?: string };
}

interface PlacesApiResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesApiReview[];
}

/**
 * Fetches real Google reviews for this business via the Places API (New).
 *
 * Requires two env vars (Vite exposes anything prefixed VITE_ to the client bundle):
 *   VITE_GOOGLE_PLACES_API_KEY  — restrict this key by HTTP referrer in Google Cloud Console
 *   VITE_GOOGLE_PLACE_ID        — the Place ID for the business's Google Business Profile
 *
 * If either is missing, or the request fails, `error` is set to true and the
 * caller is expected to fall back to static placeholder content — this hook
 * never fabricates review data.
 */
export function useGoogleReviews(): GoogleReviewsResult {
  const [state, setState] = useState<GoogleReviewsResult>({
    reviews: [],
    rating: null,
    userRatingCount: null,
    googleMapsUri: null,
    loading: true,
    error: false,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY as string | undefined;
      const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID as string | undefined;

      if (!apiKey || !placeId) {
        if (!cancelled) setState((s) => ({ ...s, loading: false, error: true }));
        return;
      }

      try {
        const cachedRaw = sessionStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          const cached: CacheShape = JSON.parse(cachedRaw);
          if (Date.now() - cached.timestamp < CACHE_TTL_MS) {
            if (!cancelled) {
              setState({ ...cached.data, loading: false, error: false });
            }
            return;
          }
        }
      } catch {
        // Corrupt cache entry — ignore and refetch
      }

      try {
        const res = await fetch(
          `https://places.googleapis.com/v1/places/${placeId}`,
          {
            headers: {
              "X-Goog-Api-Key": apiKey,
              "X-Goog-FieldMask": "reviews,rating,userRatingCount,googleMapsUri",
            },
          }
        );

        if (!res.ok) throw new Error(`Places API responded ${res.status}`);

        const data: PlacesApiResponse = await res.json();

        const reviews: GoogleReview[] = (data.reviews ?? [])
          .filter((r) => (r.text?.text ?? "").trim().length > 0)
          .slice(0, 3)
          .map((r) => ({
            name: r.authorAttribution?.displayName ?? "Cliente Google",
            rating: r.rating ?? 5,
            text: r.text?.text ?? "",
            relativeTime: r.relativePublishTimeDescription ?? "",
            authorPhotoUrl: r.authorAttribution?.photoUri,
          }));

        if (reviews.length === 0) throw new Error("No reviews with text returned");

        const result = {
          reviews,
          rating: data.rating ?? null,
          userRatingCount: data.userRatingCount ?? null,
          googleMapsUri: data.googleMapsUri ?? null,
        };

        try {
          sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), data: result } satisfies CacheShape)
          );
        } catch {
          // sessionStorage may be unavailable (private mode, quota) — non-fatal
        }

        if (!cancelled) setState({ ...result, loading: false, error: false });
      } catch {
        if (!cancelled) setState((s) => ({ ...s, loading: false, error: true }));
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
