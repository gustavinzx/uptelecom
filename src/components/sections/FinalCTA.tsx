import { MessageCircle, PhoneCall } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#0b1220] relative overflow-hidden">
      {/* Background Blobs for Visual Interest */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--brand-blue)]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <div className="relative mb-8">
           <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full" />
           <img src="/imgs/astro_3.png" alt="Mascote UP Telecom Assinando" className="relative z-10 w-full max-w-[200px] animate-float drop-shadow-2xl mx-auto" />
        </div>

        <h2 className="font-bebas text-6xl md:text-7xl mb-6 text-white tracking-wide">
          Pronto para ser <span className="text-[var(--brand-blue)] drop-shadow-md">Ultra?</span>
        </h2>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Fale com um consultor agora ou deixe seu número que nós ligamos para você em instantes.
          </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12 w-full">
          
          {/* WhatsApp CTA */}
          <div className="bg-[#101a30] p-8 rounded-2xl shadow-sm border border-white/10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6">
              <MessageCircle size={32} className="text-[#25D366]" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Atendimento Rápido</h3>
            <p className="text-slate-400 mb-8 font-medium">Chame no WhatsApp e tire todas as suas dúvidas na hora com um especialista.</p>
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
          <div className="bg-[#101a30] p-8 rounded-2xl shadow-xl shadow-black/5 border border-white/10 flex flex-col justify-center relative overflow-hidden">
            {/* Decorator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-primary)]/5 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <PhoneCall className="text-[var(--brand-primary)]" size={24} />
              <h3 className="text-2xl font-bold text-white">Nós te ligamos</h3>
            </div>
            <p className="text-slate-400 mb-6 font-medium relative z-10">Preencha os dados abaixo e entramos em contato rapidinho.</p>
            
            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Seu nome completo" className="h-12 bg-[#15233f] border-white/10 text-white placeholder-slate-400" required />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Celular (DDD)" type="tel" className="h-12 bg-[#15233f] border-white/10 text-white placeholder-slate-400" required />
                <Input placeholder="CEP" maxLength={9} className="h-12 bg-[#15233f] border-white/10 text-white placeholder-slate-400" required />
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
