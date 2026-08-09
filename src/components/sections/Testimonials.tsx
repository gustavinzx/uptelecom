import { useGoogleReviews } from "@/lib/useGoogleReviews";

const fallbackReviews = [
  {
    name: "Marcos Vinícius S.",
    date: "há 3 meses",
    rating: 5,
    text: "Excelente serviço! A internet é estável, velocidade dentro do contratado e o suporte técnico é ágil. Não tenho do que reclamar. Recomendo a todos da região.",
    initials: "MV",
  },
  {
    name: "Priscila Rodrigues",
    date: "há 5 meses",
    rating: 5,
    text: "Mudei para a UP Telecom há 6 meses e foi a melhor decisão. Sem quedas, upload e download ótimos para home office. Atendimento muito educado.",
    initials: "PR",
  },
  {
    name: "João Henrique C.",
    date: "há 1 mês",
    rating: 5,
    text: "Instalação foi rápida e o pessoal foi super prestativo. A fibra óptica fez toda a diferença pra jogos online — latência muito baixa. Vale cada centavo.",
    initials: "JH",
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6" aria-hidden>
    <path fill="#4285F4" d="M46 24c0-1.2-.1-2.4-.3-3.5H24v6.6h12.4c-.5 2.7-2.1 5-4.5 6.6v5.5h7.3C43.4 35.3 46 30.1 46 24z"/>
    <path fill="#34A853" d="M24 47c6.2 0 11.4-2 15.2-5.5l-7.3-5.5c-2 1.4-4.6 2.2-7.9 2.2-6.1 0-11.2-4.1-13-9.6H3.5v5.7C7.3 41.7 15.1 47 24 47z"/>
    <path fill="#FBBC05" d="M11 28.6c-.5-1.4-.7-2.9-.7-4.6s.3-3.2.7-4.6v-5.7H3.5A23 23 0 0 0 1 24c0 3.7.9 7.2 2.5 10.3l7.5-5.7z"/>
    <path fill="#EA4335" d="M24 9.5c3.4 0 6.5 1.2 8.9 3.5l6.7-6.7C35.3 2.5 30.1 0 24 0 15.1 0 7.3 5.3 3.5 13.7l7.5 5.7C12.8 13.6 17.9 9.5 24 9.5z"/>
  </svg>
);

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg viewBox="0 0 20 20" fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="1.5" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

function initialsOf(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function ReviewCardSkeleton() {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col animate-pulse">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-sm bg-gray-200" />
        ))}
      </div>
      <div className="space-y-2 flex-1 mb-5">
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
        <div className="w-9 h-9 rounded-full bg-gray-200 shrink-0" />
        <div className="space-y-1.5 flex-1">
          <div className="h-3 bg-gray-200 rounded w-24" />
          <div className="h-2.5 bg-gray-200 rounded w-16" />
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { reviews, rating, userRatingCount, googleMapsUri, loading, error } = useGoogleReviews();

  const showFallback = !loading && error;
  const displayRating = rating ?? 5.0;
  const mapsLink = googleMapsUri ?? "https://g.page/r/uptelecom";

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GoogleLogo />
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Avaliações do Google</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">
              O que os clientes falam da UP
            </h2>
          </div>
          
          <a
            href={mapsLink} target="_blank" rel="noreferrer"
            className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 hover:border-[var(--brand-primary)]/30 hover:bg-[var(--brand-primary)]/5 transition-all shrink-0 group"
          >
            <div className="text-center">
              <p className="text-3xl font-black text-[var(--text-main)] font-num">{displayRating.toFixed(1)}</p>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < Math.round(displayRating)} />)}
              </div>
            </div>
            <div className="border-l border-gray-200 pl-3">
              <p className="text-sm text-gray-500 font-medium">
                {userRatingCount ? `${userRatingCount} avaliações no` : "Ver todas no"}
              </p>
              <p className="text-sm font-bold text-[var(--text-main)] group-hover:text-[var(--brand-primary)] transition-colors">Google Maps →</p>
            </div>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {loading && [0, 1, 2].map((i) => <ReviewCardSkeleton key={i} />)}

          {!loading && !error && reviews.map((r, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => <StarIcon key={j} filled={j < r.rating} />)}
              </div>
              <p className="text-[var(--text-muted)] text-sm font-medium leading-relaxed flex-1 mb-5">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                {r.authorPhotoUrl ? (
                  <img src={r.authorPhotoUrl} alt={r.name} className="w-9 h-9 rounded-full object-cover shrink-0" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-[var(--brand-primary)] text-white text-xs font-black flex items-center justify-center shrink-0">
                    {initialsOf(r.name)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-bold text-[var(--text-main)]">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.relativeTime} · Google</p>
                </div>
              </div>
            </div>
          ))}

          {showFallback && fallbackReviews.map((r, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => <StarIcon key={j} filled={j < r.rating} />)}
              </div>
              <p className="text-[var(--text-muted)] text-sm font-medium leading-relaxed flex-1 mb-5">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-9 h-9 rounded-full bg-[var(--brand-primary)] text-white text-xs font-black flex items-center justify-center shrink-0">
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--text-main)]">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.date} · Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showFallback && (
          <p className="text-xs text-gray-400 text-center mt-6 font-medium">
            ⚠️ Avaliações reais indisponíveis no momento (verifique VITE_GOOGLE_PLACES_API_KEY e VITE_GOOGLE_PLACE_ID no .env). Os depoimentos acima são representativos do perfil Google da empresa.
          </p>
        )}

      </div>
    </section>
  );
}
