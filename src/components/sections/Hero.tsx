import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const slides = [
  {
    id: 1,
    title: (
      <>
        PROVEDOR DE INTERNET<br />
        <span className="text-[var(--brand-primary)] drop-shadow-[0_0_20px_rgba(230,0,0,0.5)]">ULTRA RÁPIDO</span>
      </>
    ),
    subtitle: "Somos ultra rápido porque nossa rede é 100% em fibra óptica, com equipamentos modernos e de última geração. Planos de até 300MB.",
    bgImage: "/imgs/slide1.jpg",
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
    bgImage: "/imgs/bg_plans_hq.jpg",
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
    bgImage: "/imgs/bg_combo_hq.jpg",
  }
];

export default function Hero() {
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#0b1220] min-h-[90vh] md:min-h-[850px] flex items-center">
      
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full absolute inset-0 z-0"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative w-full h-[90vh] md:h-[850px] flex items-center justify-center">
                
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[15s] hover:scale-105"
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                />
                
                {/* Smooth Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220]/70 to-transparent z-10" />

                {/* Content Container */}
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-20 flex flex-col pt-32 pb-16 md:pt-40 md:pb-24">
                  <div className="w-full md:w-3/5 lg:w-[50%]">
                    
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[var(--brand-blue)]/20 border border-[var(--brand-blue)]/30 text-[var(--brand-blue)] text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,85,255,0.2)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)]" />
                      <span>Ultravelocidade para a família</span>
                    </div>
                    
                    <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-normal mb-8 drop-shadow-xl">
                      {slide.title}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-12 max-w-xl">
                      {slide.subtitle}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-5">
                      <a
                        href="#planos"
                        className="relative inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] text-white px-10 py-4 text-lg font-bold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,85,255,0.4)] hover:shadow-[0_0_30px_rgba(0,85,255,0.6)] hover:-translate-y-1 overflow-hidden group"
                      >
                        <span className="relative z-10">Ver Planos</span>
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
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
      <div className="hidden lg:block absolute bottom-16 right-16 z-30 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-primary)] rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition duration-500" />
        
        <div className="relative bg-[#0b1220]/70 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl p-10 max-w-[380px] hover:-translate-y-2 transition-all duration-300 flex flex-col">
          
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-blue)] shadow-[0_0_10px_rgba(0,85,255,1)] animate-pulse" />
            Planos a partir de
          </p>
          
          <div className="flex items-start gap-2 mb-6">
            <span className="font-bebas text-3xl text-white mt-1">R$</span>
            <span className="font-bebas text-8xl text-white leading-none tracking-normal drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">79</span>
            <span className="font-bebas text-3xl text-[var(--brand-blue)] self-end mb-2">,90<br/><span className="text-sm tracking-widest text-slate-400 uppercase">/mês</span></span>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 mb-8">
            <p className="text-sm text-slate-200 font-medium flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--brand-blue)]/20 text-[var(--brand-blue)] text-xs">✔</span> 
              Wi-Fi grátis + Instalação
            </p>
          </div>
          
          <a 
            href="#planos"
            className="w-full flex items-center justify-center h-14 rounded-full bg-white text-black font-bold text-lg hover:bg-slate-200 transition-colors shadow-lg"
          >
            <span>Ver todos os planos</span>
          </a>
        </div>
      </div>
    </section>
  );
}
