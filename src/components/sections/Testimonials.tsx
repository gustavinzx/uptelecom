import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Cliente UP Telecom",
    role: "Assinante Fibra Óptica",
    initial: "UP",
    text: "Internet de altíssima qualidade e estabilidade, a taxa de download e upload sempre dentro do contratado. Além do suporte sempre atencioso.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[var(--surface-bg)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-main)] uppercase tracking-wide">
            O que nossos clientes tem a dizer
          </h2>
          <div className="w-24 h-1 bg-[var(--brand-primary)] mx-auto mt-6"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <div className="rounded-lg p-8 md:p-12 text-center flex flex-col items-center bg-white shadow-sm border border-black/5">
                    <div className="flex gap-1 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">★</span>
                      ))}
                    </div>
                    <p className="mb-10 text-[var(--text-muted)] font-medium text-lg md:text-xl leading-relaxed italic max-w-2xl mx-auto">
                      “{t.text}”
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 md:-left-12 bg-white border-black/10 hover:bg-gray-50" />
            <CarouselNext className="hidden md:flex -right-4 md:-right-12 bg-white border-black/10 hover:bg-gray-50" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
