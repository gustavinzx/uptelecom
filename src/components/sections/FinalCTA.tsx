import { MessageCircle, PhoneCall } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-main)] tracking-tight">
            Pronto para a verdadeira{" "}
            <span className="text-[var(--brand-primary)]">ultravelocidade?</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] font-medium max-w-2xl mx-auto">
            Fale com um consultor agora ou deixe seu número que nós ligamos para você em instantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* WhatsApp CTA */}
          <div className="bg-[var(--surface-bg)] p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6">
              <MessageCircle size={32} className="text-[#25D366]" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Atendimento Rápido</h3>
            <p className="text-gray-500 mb-8 font-medium">Chame no WhatsApp e tire todas as suas dúvidas na hora com um especialista.</p>
            <a
              href="https://wa.me/5561981765721"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
            >
              <MessageCircle size={24} />
              Assinar pelo WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5 border border-gray-100 flex flex-col justify-center relative overflow-hidden">
            {/* Decorator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-primary)]/5 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <PhoneCall className="text-[var(--brand-primary)]" size={24} />
              <h3 className="text-2xl font-bold">Nós te ligamos</h3>
            </div>
            <p className="text-gray-500 mb-6 font-medium relative z-10">Preencha os dados abaixo e entramos em contato rapidinho.</p>
            
            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Seu nome completo" className="h-12 bg-gray-50 border-gray-200" required />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Celular (DDD)" type="tel" className="h-12 bg-gray-50 border-gray-200" required />
                <Input placeholder="CEP" maxLength={9} className="h-12 bg-gray-50 border-gray-200" required />
              </div>
              <Button type="submit" className="w-full h-12 text-lg font-bold bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] mt-2 rounded-xl shadow-md">
                Quero que me liguem
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
