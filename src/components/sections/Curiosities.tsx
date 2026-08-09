import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const curiosities = [
  {
    id: 1,
    img: "/imgs/curiosity1.jpg",
    title: "Como surgiu a internet?",
    content: (
      <div className="space-y-4">
        <p>A internet começou em 1969 com o projeto militar <strong>ARPANET</strong>, criado pelos EUA durante a Guerra Fria. O objetivo era manter a comunicação entre bases e universidades, mesmo se parte da rede fosse destruída por um ataque.</p>
        <p>O primeiro envio de dados foi "LO" (tentando digitar "LOGIN") antes do sistema travar — um pequeno erro que marcou o início da maior revolução digital da história.</p>
        <p>Nos anos 80, a rede cresceu, e nos 90 se popularizou no mundo todo.</p>
      </div>
    )
  },
  {
    id: 2,
    img: "/imgs/curiosity2.jpg",
    title: "O Brasil nas Redes Sociais",
    content: (
      <div className="space-y-4">
        <p>O Brasil está entre os países que mais usam redes sociais no mundo.</p>
        <p>Em média, um brasileiro passa mais de 3 horas por dia conectado em plataformas como WhatsApp, Instagram, TikTok e Facebook.</p>
        <p><strong>🧠 Curiosidade:</strong> Mais de 90% dos brasileiros conectados à internet usam redes sociais todos os dias, o que coloca o Brasil no top 5 global de consumo digital.</p>
      </div>
    )
  },
  {
    id: 3,
    img: "/imgs/curiosity3.jpg",
    title: "Roteador com ONU Integrada vs. Separada",
    content: (
      <div className="space-y-4">
        <p><strong>Roteador com ONU integrada:</strong> é um único aparelho que recebe o sinal da fibra óptica e já distribui o Wi-Fi para seus dispositivos. É fácil de instalar e ocupa menos espaço para lugares menores.</p>
        <p><strong>ONU e roteador separados:</strong> a ONU é o equipamento que conecta a fibra, mas ela só recebe o sinal. O roteador, que é um aparelho separado, fica responsável por distribuir o Wi-Fi. Essa opção é boa para quem quer usar um roteador mais potente ou com mais funções.</p>
        <p>Ambas as opções entregam a mesma qualidade e velocidade de internet para você. A diferença está no que é mais prático ou no quanto você quer personalizar seu equipamento.</p>
      </div>
    )
  },
  {
    id: 4,
    img: "/imgs/curiosity4.jpg",
    title: "O Wi-Fi tem barreiras invisíveis",
    content: (
      <div className="space-y-4">
        <p>Você sabia que muitos problemas de WiFi não aparecem, mas estão bem na sua frente? Veja os principais obstáculos que enfraquecem seu sinal:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Paredes e estruturas pesadas</strong> — concreto, tijolo, metal e vidro escuro absorvem e bloqueiam o sinal sem você perceber.</li>
          <li><strong>Aparelhos eletrônicos</strong> — micro-ondas, telefones sem fio e outros equipamentos geram interferência e atrapalham sua conexão.</li>
          <li><strong>Posição e distância</strong> — quanto mais longe do roteador, pior o sinal. Colocar o roteador em armários, perto do chão ou atrás de móveis pode agravar isso.</li>
          <li><strong>Redes vizinhas</strong> — vários WiFis usando o mesmo canal geram conflito, diminuindo a velocidade e a estabilidade.</li>
        </ul>
        <p>Para melhorar, posicione o roteador em um local centralizado e amplo, livre de obstáculos e longe de aparelhos eletrônicos que possam causar interferência.</p>
      </div>
    )
  },
  {
    id: 5,
    img: "/imgs/curiosity5.jpg",
    title: "A internet via fibra é mais rápida que o som!",
    content: (
      <div className="space-y-4">
        <p><strong>Você sabia?</strong></p>
        <p>A internet via fibra óptica transmite dados a cerca de 200.000 km por segundo, enquanto o som viaja no ar a 343 metros por segundo. Isso torna a fibra mais de 580 mil vezes mais rápida! ⚡</p>
        <p>Enquanto o som leva quase 3 segundos para percorrer 1 km, a fibra envia dados nessa distância em apenas 5 milissegundos. É assim que você assiste vídeos, joga online ou faz chamadas quase em tempo real - tudo graças à luz viajando por cabos de vidro! 💡</p>
      </div>
    )
  }
];

export default function Curiosities() {
  const [selected, setSelected] = useState<typeof curiosities[0] | null>(null);

  return (
    <section className="py-24 bg-white border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-main)]">
            Curiosidades UP
          </h2>
          <p className="text-lg text-[var(--text-muted)] font-medium max-w-2xl mx-auto">
            Explore fatos interessantes sobre a internet, fibra óptica e o mundo da tecnologia. Clique para descobrir mais!
          </p>
        </div>

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {curiosities.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    onClick={() => setSelected(item)}
                    className="group cursor-pointer rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-black/5 relative h-80 flex items-center justify-center p-4"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                      <Search className="text-white w-12 h-12" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-12 h-12 -left-4 md:-left-12 bg-white hover:bg-gray-100 border-gray-200 text-[var(--brand-primary)] shadow-md" />
            <CarouselNext className="w-12 h-12 -right-4 md:-right-12 bg-white hover:bg-gray-100 border-gray-200 text-[var(--brand-primary)] shadow-md" />
          </Carousel>
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white rounded-lg border-0 shadow-2xl">
          <DialogTitle className="sr-only">{selected?.title}</DialogTitle>
          <DialogDescription className="sr-only">{selected?.title}</DialogDescription>
          
          {selected && (
            <div className="flex flex-col md:flex-row h-full max-h-[85vh]">
              {/* Image side */}
              <div className="w-full md:w-1/2 bg-black flex items-center justify-center overflow-hidden h-[40vh] md:h-auto">
                <img 
                  src={selected.img} 
                  alt={selected.title} 
                  className="w-full h-full object-contain p-4"
                />
              </div>
              
              {/* Content side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-[var(--surface-alt)] flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--brand-primary)] mb-6">
                  {selected.title}
                </h3>
                <div className="text-[var(--text-main)] text-base md:text-lg leading-relaxed font-medium">
                  {selected.content}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
