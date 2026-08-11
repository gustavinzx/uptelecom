import { MapPin, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

import { DarkImageOverlay } from "@/components/ui/DarkImageOverlay";

export default function Coverage() {
  return (
    <section id="cobertura" className="py-24 relative overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/imgs/Cidades.jpg')" }}>
      <DarkImageOverlay />
      
      <Reveal direction="up" className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] mb-6 shadow-[0_0_30px_rgba(0,85,255,0.2)]">
            <MapPin size={32} />
          </div>
          <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl mb-6 text-white tracking-wide drop-shadow-md">
            Onde estamos <span className="text-[var(--brand-blue)]">presentes</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
            Nossa rede 100% fibra óptica é dedicada e exclusiva. Atendemos com excelência e estabilidade máxima nas seguintes regiões:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* Card 1: 26 de Setembro */}
          <div className="bg-[#0b1220]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden flex flex-col shadow-2xl group hover:border-[var(--brand-blue)]/30 hover:shadow-[0_10px_40px_rgba(0,85,255,0.15)] transition-all duration-300">
            <div className="w-full h-[250px] relative bg-slate-900 border-b border-white/10 overflow-hidden">
              <iframe 
                src="https://maps.google.com/maps?q=Col%C3%B4nia+Agr%C3%ADcola+26+de+Setembro,+DF&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(80%) invert(90%) contrast(85%)" }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Cobertura 26 de Setembro"
                className="group-hover:scale-105 transition-transform duration-700"
              ></iframe>
              <div className="absolute top-4 right-4 bg-[var(--brand-blue)] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                100% FIBRA
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-anton text-3xl text-white tracking-wide mb-1">
                26 de Setembro
              </h3>
              <p className="text-[var(--brand-primary)] font-bold text-sm tracking-widest uppercase mb-4">
                Distrito Federal
              </p>
              <p className="text-slate-400 font-medium leading-relaxed mb-8 flex-1">
                Atendimento premium com internet sem quedas para os moradores da Colônia Agrícola 26 de Setembro e região.
              </p>
              
              <a 
                href={`https://wa.me/5561981773495?text=${encodeURIComponent("Olá! Sou de 26 de Setembro e gostaria de saber mais sobre a internet de vocês.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full rounded-xl bg-white/5 hover:bg-[var(--brand-blue)] text-white hover:text-white border border-white/10 hover:border-[var(--brand-blue)] transition-all font-bold text-lg h-14"
                )}
              >
                <MessageCircle size={20} className="mr-2" />
                Quero assinar aqui
              </a>
            </div>
          </div>

          {/* Card 2: Jardim Serra Dourada */}
          <div className="bg-[#0b1220]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden flex flex-col shadow-2xl group hover:border-[var(--brand-primary)]/30 hover:shadow-[0_10px_40px_rgba(230,0,0,0.15)] transition-all duration-300">
            <div className="w-full h-[250px] relative bg-slate-900 border-b border-white/10 overflow-hidden">
              <iframe 
                src="https://maps.google.com/maps?q=Jardim+Serra+Dourada,+Santo+Ant%C3%B4nio+do+Descoberto+-+GO&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(80%) invert(90%) contrast(85%)" }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Cobertura Jardim Serra Dourada"
                className="group-hover:scale-105 transition-transform duration-700"
              ></iframe>
              <div className="absolute top-4 right-4 bg-[var(--brand-primary)] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                100% FIBRA
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-anton text-3xl text-white tracking-wide mb-1">
                Jardim Serra Dourada
              </h3>
              <p className="text-[var(--brand-blue)] font-bold text-sm tracking-widest uppercase mb-4">
                Santo Antônio do Descoberto - GO
              </p>
              <p className="text-slate-400 font-medium leading-relaxed mb-8 flex-1">
                Chegamos com tudo no SAD trazendo infraestrutura de ponta e suporte técnico local para a região do Jardim Serra Dourada.
              </p>
              
              <a 
                href={`https://wa.me/5561981773495?text=${encodeURIComponent("Olá! Sou do Jardim Serra Dourada (SAD) e gostaria de assinar a internet da UP Telecom.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full rounded-xl bg-white/5 hover:bg-[var(--brand-primary)] text-white hover:text-white border border-white/10 hover:border-[var(--brand-primary)] transition-all font-bold text-lg h-14"
                )}
              >
                <MessageCircle size={20} className="mr-2" />
                Quero assinar aqui
              </a>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
