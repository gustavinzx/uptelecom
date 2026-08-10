import { Wifi } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "500 MEGAS",
    desc: "Ideal para navegar, estudar e trabalhar com estabilidade total.",
    streamings: [],
    tv: false,
    delay: "0",
  },
  {
    name: "600 MEGAS",
    subtitle: "+ 1 STREAMING",
    desc: "",
    streamings: ["disney.png", "hbo.png"],
    or: true,
    tv: false,
    delay: "100",
  },
  {
    name: "800 MEGAS",
    subtitle: "+ 1 STREAMING",
    desc: "",
    streamings: ["disney.png", "hbo.png"],
    or: true,
    tv: false,
    delay: "200",
  },
  {
    name: "1 GIGA",
    subtitle: "+ 2 STREAMINGS",
    desc: "",
    streamings: ["disney.png", "hbo.png"],
    or: false,
    tv: false,
    delay: "300",
  },
  {
    name: "800 MEGAS",
    subtitle: "+ TV",
    desc: "A experiência completa de TV e Internet.",
    streamings: [],
    tv: true,
    delay: "400",
  },
];

export default function Plans() {
  return (
    <section id="planos" className="py-24 relative overflow-hidden bg-[#0b1220]">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-[url('/imgs/bg_plans_hq.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" />
      <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-br from-[var(--brand-primary)]/10 via-[var(--brand-blue)]/5 to-transparent blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-16 gap-8">
          
          <div className="bg-[#a90a34] rounded-[2rem] p-8 md:p-12 w-full lg:w-2/3 shadow-2xl relative overflow-hidden border border-white/20">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            
            <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide mb-4 relative z-10 leading-[1.1]">
              Qual desses planos <br/>
              <span className="text-yellow-400 drop-shadow-md text-6xl md:text-7xl block mt-2">Combina mais com você?</span>
            </h2>
            <p className="text-white/90 text-xl font-medium max-w-xl relative z-10">
              Mais conexão, mais entretenimento e mais liberdade para o que <span className="text-yellow-400 font-bold">realmente importa.</span>
            </p>
          </div>

        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          
          {/* Astronaut Mascote Left */}
          <div className="hidden lg:flex w-1/3 justify-center relative">
             <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full" />
             <img 
               src="/imgs/astro_1.png" 
               alt="Mascote UP Telecom Voando" 
               className="relative z-10 w-full max-w-[450px] animate-float drop-shadow-2xl scale-125 origin-center" 
             />
          </div>

          {/* Cards Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {plans.map((plan, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-xl shadow-black/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--brand-blue)]/20 transition-all duration-300 border border-slate-100 group"
                  style={{ animationDelay: `${plan.delay}ms` }}
                >
                  <h3 className="font-bebas text-5xl text-[var(--brand-blue)] tracking-wide leading-none mb-1 group-hover:scale-105 transition-transform">
                    {plan.name.split(' ')[0]} <br/>
                    <span className="text-3xl text-[var(--brand-blue)]">{plan.name.split(' ')[1]}</span>
                  </h3>
                  
                  {plan.subtitle && (
                    <span className="font-bebas text-2xl text-[var(--brand-primary)] tracking-wide mb-4">
                      {plan.subtitle}
                    </span>
                  )}

                  {plan.desc && !plan.tv && (
                    <p className="text-slate-500 font-medium text-sm mt-4 mb-6 leading-relaxed max-w-[200px]">
                      {plan.desc}
                    </p>
                  )}

                  {/* Streamings Logos */}
                  {plan.streamings.length > 0 && (
                    <div className="flex flex-col items-center justify-center gap-3 mt-6 mb-6 flex-1">
                      <img src={`/imgs/${plan.streamings[0]}`} alt="Streaming 1" className="h-8 object-contain" />
                      <span className="text-slate-400 font-black text-xs uppercase tracking-widest">{plan.or ? 'ou' : 'e'}</span>
                      <img src={`/imgs/${plan.streamings[1]}`} alt="Streaming 2" className="h-6 object-contain" />
                    </div>
                  )}

                  {/* TV Logic */}
                  {plan.tv && (
                    <div className="flex flex-col items-center mt-6 mb-6 flex-1">
                      <div className="text-black font-black text-lg mb-2 flex items-center justify-center border-b-2 border-red-600 pb-1">
                        WATCH
                        <span className="text-[10px] uppercase align-top ml-1 bg-black text-white px-1 rounded-sm">TV</span>
                      </div>
                      <p className="text-[var(--brand-primary)] font-bold text-sm leading-tight mb-2">86 canais ao vivo <br/>+ Filmes On Demand.</p>
                      <p className="text-slate-500 font-medium text-xs max-w-[180px]">{plan.desc}</p>
                    </div>
                  )}

                  {/* Bottom Icon/Button Space */}
                  <div className={cn("mt-auto pt-6 w-full flex justify-center border-t border-slate-100", plan.streamings.length === 0 && !plan.tv ? "mt-8" : "")}>
                    <div className="w-12 h-12 rounded-full bg-[var(--brand-blue)]/10 flex items-center justify-center text-[var(--brand-blue)] group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-colors">
                      <Wifi size={24} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center w-full">
              <a 
                href="https://wa.me/5561981765721"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-12 py-5 rounded-full bg-transparent border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] font-bebas text-3xl tracking-wide hover:bg-[var(--brand-blue)] hover:text-white transition-all shadow-[0_0_20px_rgba(0,85,255,0.2)] hover:shadow-[0_0_30px_rgba(0,85,255,0.4)]"
              >
                ESCOLHA SEU PLANO
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
