import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const banners = [
  {
    id: 1,
    image: "/imgs/IMG-20250723-WA0081.jpg",
    title: (
      <>
        Conectando você <br />
        <span className="text-[var(--brand-primary)]">de verdade</span>
      </>
    ),
    subtitle: (
      <>
        Fibra Óptica 100% própria, sem fidelidade e com os melhores serviços.<br />
        <span className="inline-block mt-2">Acesso a Disney+, HBO Max, Globoplay e muito mais!</span>
      </>
    ),
    buttonText: "Fale com um consultor",
    buttonLink: "https://wa.me/5561981765721",
    style: "split" // Custom style for the poster
  },
  {
    id: 2,
    image: "/imgs/slide1.jpg",
    title: (
      <>
        CONECTANDO VOCÊ <br /> AO MUNDO
      </>
    ),
    subtitle: (
      <>
        Equipamentos modernos e de última geração <br />
        diretamente na sua casa.
      </>
    ),
    buttonText: "Saiba mais",
    buttonLink: "#vantagens",
    style: "cover"
  },
];

export default function BannerCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="w-full bg-black relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className={cn("relative w-full h-[65vh] md:h-[75vh] overflow-hidden bg-[var(--surface-dark)] flex flex-col md:flex-row items-center", banner.style === "cover" ? "justify-center" : "")}>
                
                {banner.style === "cover" && (
                  <>
                    <img src={banner.image} alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--surface-dark)] to-transparent z-10" />
                    <div className="absolute inset-0 z-20 flex items-center">
                      <div className="w-full max-w-6xl mx-auto px-6 text-center md:text-left">
                        <div className="max-w-2xl">
                          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight text-white leading-[1.1]">
                            {banner.title}
                          </h2>
                          <p className="text-lg md:text-2xl text-gray-300 mb-8 font-medium">
                            {banner.subtitle}
                          </p>
                          <a
                            href={banner.buttonLink}
                            className={cn(
                              buttonVariants({ size: "lg" }),
                              "h-14 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white px-10 font-semibold shadow-sm text-lg rounded-md"
                            )}
                          >
                            {banner.buttonText}
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Floating price card */}
                    <div className="absolute bottom-8 right-6 md:bottom-10 md:right-12 z-30 bg-white rounded-xl shadow-2xl p-5 max-w-[200px] md:max-w-xs border border-gray-100">
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Planos a partir de</p>
                      <p className="text-4xl font-black text-[var(--brand-primary)] leading-none">
                        R$&nbsp;79<span className="text-base font-semibold text-gray-400">/mês</span>
                      </p>
                      <p className="text-xs text-gray-400 mt-2 font-medium">+ velocidade · + estabilidade</p>
                      <a href="#planos" className="mt-3 block text-center text-xs font-bold text-[var(--brand-primary)] hover:underline">
                        Ver todos os planos →
                      </a>
                    </div>
                  </>
                )}

                {banner.style === "split" && (
                  <div className="w-full h-full max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-8 pt-10 md:pt-0">
                    <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left pb-10 md:pb-0 z-20">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white leading-[1.1] uppercase">
                        {banner.title}
                      </h2>
                      <p className="text-lg md:text-xl text-gray-300 mb-10 font-medium leading-relaxed">
                        {banner.subtitle}
                      </p>
                      <div>
                        <a
                          href={banner.buttonLink}
                          target="_blank"
                          rel="noreferrer"
                          className={cn(
                            buttonVariants({ size: "lg" }),
                            "h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 font-bold shadow-sm text-lg rounded-md w-full md:w-auto uppercase tracking-wide"
                          )}
                        >
                          {banner.buttonText}
                        </a>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 h-[40vh] md:h-[80%] relative flex items-center justify-center">
                      <img 
                        src={banner.image} 
                        alt="Cartaz UP Telecom" 
                        className="relative z-10 w-full h-full object-contain" 
                      />
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex left-6 w-12 h-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
        <CarouselNext className="hidden md:flex right-6 w-12 h-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
      </Carousel>
    </section>
  );
}
