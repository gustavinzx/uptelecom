import { useEffect, useState, useCallback } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  { id: 1, src: "/imgs/telecom_fiber_optics_1786209850043.jpg" },
  { id: 2, src: "/imgs/telecom_technician_installation_1786209870078.jpg" },
  { id: 3, src: "/imgs/telecom_modern_router_1786209880475.jpg" },
  { id: 4, src: "/imgs/telecom_connectivity_home_1786209859973.jpg" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = useCallback(() => {
    if (!paused) {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  }, [paused]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-white"
      style={{ minHeight: "65vh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background Carousel ── */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-black/70 z-10" />
            <img
              src={slide.src}
              alt="UP Telecom"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* ── Content Wrapper ── */}
      <div className="relative z-20 w-full min-h-[65vh] flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
              PROVEDOR DE INTERNET <br/>
              <span className="text-[var(--brand-primary)]">ULTRA RÁPIDO</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-medium mx-auto md:mx-0">
              Somos ultra rápido porque nossa rede é 100% em fibra óptica, com equipamentos modernos e de ultima geração. Conectando você ao mundo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#planos"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-14 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white px-8 font-semibold shadow-lg text-base rounded-xl"
                )}
              >
                Ver planos
              </a>
              <a
                href="#cobertura"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-14 border-[var(--brand-primary)] text-[var(--brand-primary)] bg-white/10 hover:bg-[var(--brand-primary)] hover:text-white px-8 font-semibold shadow-sm text-base rounded-xl transition-colors backdrop-blur-sm"
                )}
              >
                Verificar cobertura
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
