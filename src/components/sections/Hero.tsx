import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const slides = [
  {
    id: 1,
    title: (
      <>
        PROVEDOR DE INTERNET<br />
        <span className="text-[var(--brand-primary)] bg-clip-text text-transparent bg-[linear-gradient(110deg,#E60000,45%,#ff6666,55%,#E60000)] bg-[length:200%_100%] animate-[shine_3s_linear_infinite] motion-reduce:animate-none drop-shadow-[0_0_20px_rgba(230,0,0,0.5)]">ULTRA RÁPIDO</span>
      </>
    ),
    subtitle: "Somos ultra rápido porque nossa rede é 100% em fibra óptica, com equipamentos modernos e de última geração. Planos de até 300MB.",
    bgImage: "/imgs/slide1.webp",
  },
  {
    id: 2,
    title: (
      <>
        CONEXÃO CONSTANTE<br />
        <span className="text-[var(--brand-blue)] drop-shadow-[0_0_20px_rgba(0,85,255,0.5)]">SEM QUEDAS</span>
      </>
    ),
    subtitle: "Trabalhe, assista a filmes em 4K e jogue online com estabilidade máxima para toda a família.",
    bgImage: "/imgs/bg_plans_hq.webp",
  },
  {
    id: 3,
    title: (
      <>
        DIVERSÃO COMPLETA<br />
        <span className="text-[var(--brand-primary)] drop-shadow-[0_0_20px_rgba(230,0,0,0.5)]">EM CASA</span>
      </>
    ),
    subtitle: "A melhor experiência de streaming e jogos com roteadores Wi-Fi de longo alcance.",
    bgImage: "/imgs/bg_combo_hq.webp",
  }
];


export default function Hero() {
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#0b1220] lg:min-h-[850px] flex flex-col lg:block">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full relative lg:absolute lg:inset-0 z-0"
        opts={{
          loop: true,
          duration: 60,
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full transform-gpu will-change-transform">
              <div className="relative w-full min-h-[85vh] lg:min-h-[850px] flex items-center justify-center transform-gpu">
                
                {/* Background Image */}
                <img 
                  src={slide.bgImage}
                  alt=""
                  loading={slide.id === 1 ? "eager" : "lazy"}
                  fetchPriority={slide.id === 1 ? "high" : "auto"}
                  className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform"
                />


                {/* Premium Dark Gradient Overlays for Readability & Navbar Protection */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220]/80 via-40% to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0b1220] via-[#0b1220]/50 to-transparent z-10 pointer-events-none" />

                {/* Content Container */}
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-20 flex flex-col pt-32 pb-16 lg:pt-40 lg:pb-24">
                  <div className="w-full md:w-3/5 lg:w-[50%]">
                    
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[var(--brand-blue)]/20 border border-[var(--brand-blue)]/30 text-[var(--brand-blue)] text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,85,255,0.2)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)]" />
                      <span>Ultravelocidade para a família</span>
                    </div>
                    
                    <h1 className="font-anton text-[clamp(2.5rem,6vw,4.5rem)] text-white leading-[1.05] tracking-normal mb-8 drop-shadow-xl">
                      {slide.title}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-12 max-w-xl">
                      {slide.subtitle}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-5">
                      <a
                        href="#planos"
                        className="group relative inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] text-white px-10 py-4 text-lg font-bold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,85,255,0.4)] hover:shadow-[0_0_30px_rgba(0,85,255,0.6)] hover:-translate-y-1 overflow-hidden"
                        onMouseMove={(e) => {
                          // Magnet Effect
                          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                          const rect = e.currentTarget.getBoundingClientRect();
                          const x = e.clientX - rect.left - rect.width / 2;
                          const y = e.clientY - rect.top - rect.height / 2;
                          e.currentTarget.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = '';
                        }}
                      >
                        <span className="relative z-10 pointer-events-none">Ver Planos</span>
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite] motion-reduce:group-hover:animate-none pointer-events-none" />
                      </a>
                      
                      <a
                        href="#cobertura"
                        className="relative inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 text-white px-10 py-4 text-lg font-bold tracking-wide transition-all duration-300 backdrop-blur-md"
                      >
                        <span className="relative z-10">Assinar Agora</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Buttons */}
        <CarouselPrevious className="hidden md:flex left-6 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/20 text-white shadow-md z-30" />
        <CarouselNext className="hidden md:flex right-6 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/20 text-white shadow-md z-30" />
      </Carousel>

      {/* Floating Price Card (Premium Glassmorphism) */}
      <div className="w-full px-4 sm:px-6 py-12 lg:absolute lg:w-auto lg:p-0 lg:bottom-16 lg:right-24 xl:right-32 z-30 group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-primary)] rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition duration-500 hidden lg:block" />
        
        <div className="relative bg-[#0b1220]/70 lg:bg-[#0b1220]/70 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl p-6 sm:p-8 lg:p-10 max-w-[380px] mx-auto lg:mx-0 lg:hover:-translate-y-2 transition-all duration-300 flex flex-col">
          
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-blue)] shadow-[0_0_10px_rgba(0,85,255,1)] animate-pulse motion-reduce:animate-none" />
            Planos a partir de
          </p>
          
          <div className="flex items-start gap-2 mb-6">
            <span className="font-anton text-2xl text-white mt-1">R$</span>
            <span className="font-anton text-6xl text-white leading-none tracking-normal drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">79</span>
            <span className="font-anton text-2xl text-[var(--brand-blue)] self-end mb-2">,90<br/><span className="text-sm tracking-widest text-slate-400 uppercase">/mês</span></span>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 mb-8">
            <p className="text-sm text-slate-200 font-medium flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--brand-blue)]/20 text-[var(--brand-blue)] text-xs min-w-[24px]">✔</span> 
              Wi-Fi grátis + Instalação
            </p>
          </div>
          
          <a 
            href="#planos"
            className="w-full flex items-center justify-center min-h-[44px] h-14 rounded-full bg-white text-black font-bold text-lg hover:bg-slate-200 transition-colors shadow-lg"
          >
            <span>Ver todos os planos</span>
          </a>
        </div>
      </div>
    </section>
  );
}
