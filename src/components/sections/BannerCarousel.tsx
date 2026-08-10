import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const banners = [
  {
    id: 1,
    image: "/imgs/cartaz.jpg",
    title: <></>,
    subtitle: <></>,
    buttonText: "",
    buttonLink: "",
    style: "image-only"
  },
  {
    id: 2,
    image: "/imgs/Banner2.jpg",
    title: <></>,
    subtitle: <></>,
    buttonText: "",
    buttonLink: "",
    style: "image-only-light"
  }
];

export default function BannerCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <section className="w-full bg-[#040a18] relative pt-24 md:pt-28">
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
              <div className={cn("relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden flex flex-col md:flex-row items-center", banner.style.includes("image-only") ? "justify-center" : "bg-[#0a1128]")}>
                
                {banner.style === "image-only" && (
                  <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-r from-[#03158c] to-[#010940]">
                    <img 
                      src={banner.image} 
                      alt="Promoção UP Telecom" 
                      className="w-full h-full object-contain md:object-cover"
                    />
                  </div>
                )}

                {banner.style === "image-only-light" && (
                  <div className="w-full h-full relative flex items-center justify-center bg-[#f3f4f6]">
                    <img 
                      src={banner.image} 
                      alt="Promoção UP Telecom" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {banner.style === "split" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128] to-[#040a18] z-0" />
                )}
                {banner.style === "split" && (
                  <div className="w-full h-full max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-8 pt-10 md:pt-0 relative z-10">
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
                            "h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 font-bold shadow-lg shadow-[#25D366]/20 text-lg rounded-full w-full md:w-auto uppercase tracking-wide"
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
                        className="relative z-10 w-full h-full object-contain drop-shadow-2xl" 
                      />
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex left-6 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 text-white shadow-md" />
        <CarouselNext className="hidden md:flex right-6 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 text-white shadow-md" />
      </Carousel>
    </section>
  );
}
