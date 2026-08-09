import { Wifi, ShieldCheck, HeadphonesIcon, Zap } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "Wi-Fi de Alta Performance",
    desc: "Roteadores de última geração em comodato.",
  },
  {
    icon: Zap,
    title: "100% Fibra Óptica",
    desc: "Conexão de ponta a ponta sem interferências.",
  },
  {
    icon: ShieldCheck,
    title: "Estabilidade Garantida",
    desc: "Trabalhe e jogue online sem oscilações de rede.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento Premium",
    desc: "Suporte humano e ágil na sua região.",
  },
];

export default function Features() {
  return (
    <section id="vantagens" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-main)]">
            Vantagens UP Telecom
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-medium">
            Entregamos a melhor experiência de conexão da Colônia Agrícola.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-10 rounded-lg bg-gray-50 border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-[1.5rem] bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all duration-300 shadow-sm">
                <f.icon size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--text-main)] leading-tight">
                {f.title}
              </h3>
              <p className="text-[var(--text-muted)] text-lg font-medium leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
