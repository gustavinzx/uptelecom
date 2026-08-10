import { Wifi, ShieldCheck, HeadphonesIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

// Removed unused stats array

const features = [
  {
    icon: Wifi,
    title: "Wi-Fi de Alta Performance",
    desc: "Roteadores de última geração em comodato, instalados pela nossa equipe técnica.",
  },
  {
    icon: ShieldCheck,
    title: "Estabilidade Garantida",
    desc: "Trabalhe e jogue online sem oscilações — rede própria, sem depender de terceiros.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento Premium",
    desc: "Suporte humano e ágil na sua região. Sem chatbot, sem fila de espera.",
  },
];

export default function Features() {
  return (
    <section id="vantagens" className="py-24 relative overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/imgs/bg_features.jpg')" }}>
      {/* Dark Gradient Overlay for Fade effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0b1220]/70 to-[#0b1220] z-0" />
      <Reveal direction="left" className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          {/* Main Card - 100% Fibra */}
          <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-[var(--brand-primary)] to-[#8a082a] text-white rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_rgba(169,10,52,0.3)] group hover:-translate-y-2 transition-transform duration-500">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:bg-white/20 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Tecnologia de Ponta
              </div>
              
              <h2 className="font-bebas text-7xl md:text-8xl leading-[0.9] mb-6 text-white tracking-normal drop-shadow-lg">
                100%<br />FIBRA<br />PRÓPRIA
              </h2>
              
              <p className="text-white/90 text-lg md:text-xl font-medium max-w-md leading-relaxed">
                Da central até a sua casa — sem coaxial, sem par metálico, sem interrupções.
              </p>
            </div>
            
            <div className="relative z-10 mt-10">
              <a
                href="#planos"
                className="inline-flex items-center justify-center bg-white text-[var(--brand-primary)] px-8 py-4 rounded-full font-bebas text-2xl tracking-wide hover:bg-slate-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all pt-5"
              >
                VER PLANOS
              </a>
            </div>
          </div>

          {/* Uptime Card */}
          <div className="bg-[#0b1220]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden shadow-xl hover:border-[var(--brand-blue)]/50 hover:shadow-[0_0_30px_rgba(0,85,255,0.2)] hover:-translate-y-2 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-blue)]/20 blur-2xl group-hover:bg-[var(--brand-blue)]/30 transition-all" />
            <p className="font-bebas text-6xl text-[var(--brand-blue)] leading-none tracking-normal mb-2 drop-shadow-md group-hover:scale-105 transition-transform origin-left">
              99.9%
            </p>
            <p className="text-sm font-bold text-slate-300 uppercase tracking-widest">
              Uptime<br/>Garantido
            </p>
          </div>

          {/* Support Card */}
          <div className="bg-[#0b1220]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden shadow-xl hover:border-[var(--brand-primary)]/50 hover:shadow-[0_0_30px_rgba(230,0,0,0.2)] hover:-translate-y-2 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-primary)]/20 blur-2xl group-hover:bg-[var(--brand-primary)]/30 transition-all" />
            <p className="font-bebas text-6xl text-[var(--brand-primary)] leading-none tracking-normal mb-2 drop-shadow-md group-hover:scale-105 transition-transform origin-left">
              24/7
            </p>
            <p className="text-sm font-bold text-slate-300 uppercase tracking-widest">
              Suporte<br/>Local
            </p>
          </div>

          {/* Zero Data Card */}
          <div className="bg-[#0b1220]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden shadow-xl hover:border-white/30 hover:-translate-y-2 transition-all duration-300 group">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 blur-2xl transition-all" />
            <p className="font-bebas text-6xl text-white leading-none tracking-normal mb-2 drop-shadow-md group-hover:scale-105 transition-transform origin-left">
              ZERO
            </p>
            <p className="text-sm font-bold text-slate-300 uppercase tracking-widest">
              Franquia<br/>de Dados
            </p>
          </div>

          {/* Mascot Image Box */}
          <div className="bg-gradient-to-br from-[#0b1220] to-[#0a101c] border border-white/10 rounded-[2rem] p-6 flex items-center justify-center relative overflow-hidden shadow-xl">
             <div className="absolute inset-0 bg-[var(--brand-blue)]/5 blur-3xl rounded-full" />
             <img 
               src="/imgs/astro_1.png" 
               alt="Mascote UP Telecom" 
               className="relative z-10 w-full max-w-[200px] animate-float drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] scale-110" 
             />
          </div>

        </div>

        {/* Supporting feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-8 rounded-xl bg-[#0b1220]/60 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-[#0b1220]/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] flex items-center justify-center mb-6 group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all duration-300">
                <f.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed flex-1">{f.desc}</p>
            </div>
          ))}
        </div>

      </Reveal>
    </section>
  );
}
