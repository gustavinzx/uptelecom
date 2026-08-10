import { Plus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/ui/Reveal";

const fibraPlans = [
  {
    name: "UP 500 MEGAS",
    speed: "500",
    fullPrice: "129",
    price: "99",
    cents: "90",
    features: [
      "Wi-Fi Grátis (Comodato)",
      "Sem Fidelidade",
      "100% Fibra Óptica",
      "Navegar, estudar e trabalhar"
    ],
    popular: false,
    badge: null,
  },
  {
    name: "600 MEGAS + 1 APP",
    speed: "600",
    fullPrice: "149",
    price: "119",
    cents: "90",
    features: [
      "Wi-Fi 6 Grátis",
      "Sem Fidelidade",
      "Disney+ OU HBO Max",
      "Estabilidade Total",
    ],
    popular: true,
    badge: "MAIS ESCOLHIDO",
  },
  {
    name: "800 MEGAS + 1 APP",
    speed: "800",
    fullPrice: "169",
    price: "139",
    cents: "90",
    features: [
      "Wi-Fi 6 Grátis",
      "Sem Fidelidade",
      "Disney+ OU HBO Max",
      "Navegação Ultra",
    ],
    popular: false,
    badge: "ULTRA",
  },
];

const comboPlans = [
  {
    name: "1 GIGA + 2 APPS",
    speed: "1000",
    fullPrice: "219",
    price: "189",
    cents: "90",
    features: [
      "Wi-Fi 6 de alta performance",
      "Disney+ e HBO Max inclusos",
      "Sem Fidelidade"
    ],
    popular: false,
    badge: "EXTREMO",
  },
  {
    name: "800 MEGAS + TV",
    speed: "800",
    fullPrice: "199",
    price: "169",
    cents: "90",
    features: [
      "Streaming by WATCH",
      "86 canais ao vivo",
      "Filmes On Demand"
    ],
    popular: true,
    badge: "EXPERIÊNCIA COMPLETA",
  }
];

export default function Plans() {
  return (
    <section id="planos" className="py-24 text-white relative overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/imgs/bg_plans_family.jpg')" }}>
      {/* Dark Overlay with smooth top/bottom gradients */}
      <div className="absolute inset-0 bg-[#0b1220]/75 backdrop-blur-[2px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0b1220] to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none z-0" />
      
      <Reveal className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-anton text-5xl md:text-6xl lg:text-7xl mb-6 text-white tracking-wide drop-shadow-lg">
            Escolha o seu novo <span className="text-[var(--brand-blue)]">Plano</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium">
            Descubra os melhores planos para turbinar sua navegação, filmes, jogos e rotina digital com mais velocidade e estabilidade.
          </p>
        </div>

        <Tabs defaultValue="fibra" className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <TabsList className="h-16 w-full max-w-md bg-white rounded-full p-2 mb-16 shadow-sm border border-slate-200">
            <TabsTrigger value="fibra" className="w-1/2 rounded-full h-full text-lg font-bold data-[state=active]:bg-[var(--brand-primary)] data-[state=active]:text-white text-slate-500 transition-all">
              Residencial
            </TabsTrigger>
            <TabsTrigger value="combo" className="w-1/2 rounded-full h-full text-lg font-bold data-[state=active]:bg-[var(--brand-primary)] data-[state=active]:text-white text-slate-500 transition-all">
              Combos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fibra" className="w-full">
            <div className="grid md:grid-cols-3 gap-6">
              {fibraPlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="combo" className="w-full">
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {comboPlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <p className="text-center text-slate-400 text-sm mt-12 font-medium">
          Esses são alguns dos planos que temos para você. <a href="https://wa.me/5561981765721" className="text-white hover:text-[var(--brand-blue)] font-bold transition-colors">Entre em contato</a> e vamos personalizar a melhor opção para sua necessidade.
        </p>
      </Reveal>
    </section>
  );
}

function PlanCard({ plan }: { plan: any }) {
  return (
    <div
      className={cn(
        "relative rounded-3xl p-8 flex flex-col transition-all duration-300 border bg-white",
        plan.popular 
          ? "border-[var(--brand-primary)]/30 shadow-[0_20px_50px_rgba(169,10,52,0.1)] -translate-y-2" 
          : "border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1"
      )}
    >
      {/* Top Badge */}
      <div className="flex justify-between items-start mb-6">
        <h3 className="font-anton text-3xl text-slate-900 tracking-wide">
          {plan.name}
        </h3>
        {plan.badge && (
          <span className="bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] px-3 py-1 rounded-full text-xs font-bold tracking-wide">
            {plan.badge}
          </span>
        )}
      </div>
      
      {/* Speed Display */}
      <div className="flex items-end gap-2 mb-6">
        <span className="font-anton text-8xl text-[var(--brand-primary)] leading-none tracking-normal">
          {plan.speed}
        </span>
        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-black mb-1 uppercase tracking-wider">
          mega
        </span>
      </div>

      {/* Discount / Full Price */}
      {plan.fullPrice && (
        <div className="bg-slate-50 inline-flex px-3 py-1 rounded-full text-xs font-bold text-slate-400 w-max mb-4">
          Apenas
        </div>
      )}

      {/* Price */}
      <div className="flex items-start gap-1 text-slate-900 mb-6">
        <span className="font-anton text-3xl mt-2">R$</span>
        <span className="font-anton text-7xl tracking-normal leading-none">
          {plan.price}
        </span>
        <div className="flex flex-col items-start justify-start">
          <span className="font-anton text-3xl leading-none">,{plan.cents}</span>
          <span className="text-sm font-bold text-slate-500 mt-1 uppercase">/mês</span>
        </div>
      </div>

      {/* Free Installation Pill */}
      <div className="bg-[var(--brand-blue)] text-white px-4 py-2 rounded-full text-sm font-black w-max mb-8 shadow-sm">
        INSTALAÇÃO GRATUITA
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-10 flex-1">
        {plan.features.map((feature: string) => (
          <li key={feature} className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[var(--brand-primary)]/10 flex items-center justify-center shrink-0">
              <Plus size={12} className="text-[var(--brand-primary)] font-bold" />
            </div>
            <span className="font-semibold text-slate-700 text-sm">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="#cobertura"
        className={cn(
          buttonVariants({ size: "lg" }),
          "w-full h-14 rounded-full font-black text-lg transition-all",
          "bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-hover)] shadow-lg shadow-red-500/20 hover:-translate-y-0.5 font-anton text-2xl tracking-wider pt-1"
        )}
      >
        Contratar
      </a>
    </div>
  );
}
