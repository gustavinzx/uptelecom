import { MapPin, Search } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Coverage() {
  const [cep, setCep] = useState("");

  return (
    <section id="cobertura" className="py-24 bg-[#0b1220] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#101a30] -skew-x-12 translate-x-20 z-0" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] mb-8">
              <MapPin size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight">
              Verifique a <span className="text-[var(--brand-primary)]">disponibilidade</span> na sua rua
            </h2>
            <p className="text-lg text-slate-400 mb-10 font-medium">
              Nossa rede 100% fibra óptica está em constante expansão na Colônia Agrícola 26 de Setembro. 
              Consulte agora se já chegamos no seu endereço.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search size={20} className="text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Digite seu CEP"
                  className="w-full h-14 pl-12 pr-4 rounded-full border border-slate-700 focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 outline-none transition-all bg-[#15233f] text-lg font-medium text-white placeholder-slate-500"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                />
              </div>
              <button
                type="button"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-14 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white px-8 font-black rounded-full text-lg shadow-lg shadow-[var(--brand-primary)]/20 transition-transform hover:-translate-y-1 w-full sm:w-auto uppercase tracking-wide"
                )}
              >
                Consultar
              </button>
            </form>
          </div>

          <div className="flex-1 w-full">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <div className="absolute inset-0 bg-slate-900">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15360.771141381387!2d-48.0673322!3d-15.7876879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33118d0cc493%3A0xc39cb6754093c8d1!2sCol%C3%B4nia%20Agr%C3%ADcola%2026%20de%20Setembro%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1709230000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "grayscale(80%) invert(90%) contrast(85%)" }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Cobertura"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
