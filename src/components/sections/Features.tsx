import { Wifi, ShieldCheck, HeadphonesIcon } from "lucide-react";

// Merged from Stats.tsx — single source of truth for company highlights
const stats = [
  { value: "99.9%", label: "Uptime garantido" },
  { value: "24/7", label: "Suporte local" },
  { value: "Zero", label: "Franquia de dados" },
];

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
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Asymmetric hero grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          
          {/* Large hero card — dominant stat */}
          <div className="lg:col-span-2 bg-[var(--brand-primary)] text-white rounded-xl p-10 flex flex-col justify-between min-h-[280px] relative overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
              backgroundSize: "32px 32px"
            }} />
            <div className="relative z-10">
              <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-4">Tecnologia de ponta</p>
              <h2 className="font-bebas text-6xl md:text-8xl leading-[0.9] mb-4 text-white tracking-normal">
                100%<br />Fibra<br />Própria
              </h2>
              <p className="text-white/80 text-lg font-medium max-w-md">
                Da central até a sua casa — sem coaxial, sem par metálico, sem interrupções.
              </p>
            </div>
            <div className="relative z-10 mt-8">
              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 bg-white text-[var(--brand-primary)] px-8 py-4 rounded-full font-bebas text-xl tracking-wider hover:bg-gray-200 transition-colors pt-5"
              >
                Ver planos
              </a>
            </div>
          </div>

          {/* Stats column */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mt-24">
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            {stats.map((s) => (
              <div key={s.value} className="flex-1 bg-[#0b1220]/60 backdrop-blur-md border border-white/10 rounded-xl px-8 py-6 flex flex-col justify-center shadow-lg hover:-translate-y-1 transition-transform">
                <p className="font-bebas text-5xl md:text-6xl text-[var(--brand-blue)] leading-none mb-1 tracking-wide drop-shadow-md">{s.value}</p>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
          
          <div className="w-full lg:w-2/3 flex justify-center relative">
            <div className="absolute inset-0 bg-[var(--brand-blue)]/10 blur-3xl rounded-full" />
            <img src="/imgs/astro_2.png" alt="Mascotes UP Telecom Tech" className="relative z-10 w-full max-w-[500px] animate-float drop-shadow-2xl" />
          </div>
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

      </div>
    </section>
  );
}
