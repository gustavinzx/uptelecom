import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Slides content using HTML rendering instead of pre-baked flyers
const slides = [
  {
    id: 1,
    title: (
      <>
        Internet rápida de verdade,<br />
        <span className="text-[#22c55e]">direto na sua casa.</span>
      </>
    ),
    subtitle: "100% fibra óptica própria, sem revenda e sem depender de terceiros.",
    bgImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1920",
    badge: "● Internet 100% fibra óptica"
  },
  {
    id: 2,
    title: (
      <>
        Use o mês inteiro.<br />
        <span className="text-[#a90a34]">Sem cair a velocidade.</span>
      </>
    ),
    subtitle: "Zero franquia de dados — baixe, assista e jogue sem se preocupar.",
    bgImage: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1920",
    badge: "● Acesso Ilimitado"
  },
  {
    id: 3,
    title: (
      <>
        Suporte de gente,<br />
        <span className="text-[#22c55e]">não de robô.</span>
      </>
    ),
    subtitle: "Equipe local, atendimento próximo, sem script de call center.",
    bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
    badge: "● Suporte Humanizado"
  },
  {
    id: 4,
    title: (
      <>
        Internet e streaming,<br />
        <span className="text-[#a90a34]">numa fatura só.</span>
      </>
    ),
    subtitle: "Catálogo completo Max incluso no plano — sem pagar separado.",
    bgImage: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1920",
    badge: "● Max Incluso"
  },
  {
    id: 5,
    title: (
      <>
        Conectando você<br />
        <span className="text-[#22c55e]">ao que importa.</span>
      </>
    ),
    subtitle: "Planos de alta velocidade com conexão estável para sua casa, trabalho e lazer.",
    bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1920",
    badge: "● UP Telecom"
  }
];

export default function BannerCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <section className="w-full relative overflow-hidden bg-[#0b1220] min-h-[90vh] md:min-h-[600px] flex items-center">
      
      {/* Light Beams Animation Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] opacity-20"
             style={{
               background: 'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.8) 50%, transparent 55%)',
               backgroundSize: '200% 200%',
               animation: 'lightBeam 8s infinite linear'
             }}
        />
        <style>{`
          @keyframes lightBeam {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </div>

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
              <div className="relative w-full h-[90vh] md:h-[100vh] min-h-[600px] flex items-center">
                
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                />
                
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220]/80 to-[#0b1220]/40" />

                {/* Content Container */}
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-20 flex flex-col pt-32 md:pt-0">
                  <div className="w-full md:w-3/5 lg:w-1/2">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                      {slide.badge}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-10 max-w-lg">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="#planos"
                        className={cn(
                          buttonVariants({ size: "lg" }),
                          "h-14 rounded-full bg-[#22c55e] hover:bg-[#1fa14f] text-white px-8 font-bold text-base shadow-lg shadow-[#22c55e]/20 tracking-wide"
                        )}
                      >
                        Ver Planos
                      </a>
                      <a
                        href="#cobertura"
                        className={cn(
                          buttonVariants({ size: "lg", variant: "outline" }),
                          "h-14 rounded-full border-2 border-white/30 hover:bg-white/10 hover:border-white text-white px-8 font-bold text-base backdrop-blur-sm tracking-wide"
                        )}
                      >
                        Assinar Agora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Buttons (hidden on very small screens) */}
        <CarouselPrevious className="hidden md:flex left-6 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/20 text-white shadow-md z-30" />
        <CarouselNext className="hidden md:flex right-6 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/20 text-white shadow-md z-30" />
      </Carousel>

      {/* Floating Price Card (Global over the Carousel) */}
      <div className="hidden lg:block absolute bottom-12 right-12 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-8 max-w-[340px] z-30 border-t-[6px] border-[#22c55e]">
        <p className="text-sm text-slate-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          Planos a partir de
        </p>
        <div className="flex items-start gap-1 mb-4">
          <span className="text-xl font-bold text-slate-900 mt-1">R$</span>
          <span className="text-6xl font-black text-slate-900 leading-none tracking-tighter">79</span>
          <span className="text-lg font-bold text-slate-500 self-end mb-1">,90<br/><span className="text-sm font-medium">/mês</span></span>
        </div>
        <div className="bg-slate-100 rounded-lg py-2 px-3 mb-6">
          <p className="text-sm text-slate-700 font-bold flex items-center gap-2">
            <span className="text-[#22c55e]">✔</span> Wi-Fi grátis + Instalação
          </p>
        </div>
        <a 
          href="#planos"
          className="w-full flex items-center justify-center h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors"
        >
          Ver todos os planos
        </a>
      </div>
    </section>
  );
}
