import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ViabilityCheck() {
  return (
    <section className="relative z-30 -mt-16 md:-mt-24 px-6 max-w-6xl mx-auto w-full mb-16">
      <div className="bg-white rounded-lg shadow-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 border border-gray-100">
        
        <div className="flex items-center gap-4 md:w-5/12">
          <div className="w-16 h-16 rounded-full bg-[var(--brand-primary)]/10 flex items-center justify-center shrink-0">
            <MapPin className="text-[var(--brand-primary)] w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--text-main)] mb-1">
              Verifique nossa cobertura
            </h3>
            <p className="text-[var(--text-muted)] text-sm md:text-base font-medium">
              Descubra se a internet ultra rápida da UP Telecom já chegou no seu endereço.
            </p>
          </div>
        </div>

        <div className="w-full md:w-7/12 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              type="text" 
              placeholder="Digite seu CEP" 
              className="pl-12 h-14 rounded-lg text-lg font-medium border-gray-200 focus-visible:ring-[var(--brand-primary)]"
              maxLength={9}
            />
          </div>
          <Button className="h-14 rounded-lg bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white px-8 text-lg font-bold shadow-lg flex gap-2">
            <Search className="w-5 h-5" /> Consultar
          </Button>
        </div>

      </div>
    </section>
  );
}
