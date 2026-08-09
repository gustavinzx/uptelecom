import { Check, Info } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fibraPlans = [
  {
    name: "300MB",
    fullPrice: "109",
    price: "79",
    cents: "90",
    features: [
      "Wi-Fi Grátis (Comodato)",
      "Sem Fidelidade",
      "100% Fibra Óptica",
      "Suporte Especializado"
    ],
    popular: false,
    apps: []
  },
  {
    name: "500MB",
    fullPrice: "129",
    price: "99",
    cents: "90",
    features: [
      "Wi-Fi Grátis (Comodato)",
      "Sem Fidelidade",
      "100% Fibra Óptica",
      "Serviço Telefônico Fixo Incluso",
    ],
    popular: true,
    badge: "Mais Vendido",
    apps: []
  },
  {
    name: "800MB",
    fullPrice: "169",
    price: "139",
    cents: "90",
    features: [
      "Wi-Fi Grátis (Comodato)",
      "Sem Fidelidade",
      "100% Fibra Óptica",
      "Serviço Telefônico Fixo Incluso",
    ],
    popular: false,
    apps: []
  },
];

const comboPlans = [
  {
    name: "500MB + Streamings",
    fullPrice: "179",
    price: "149",
    cents: "90",
    features: [
      "Tudo do plano 500MB",
      "Sem Fidelidade",
      "Serviço Telefônico Fixo"
    ],
    popular: false,
    apps: [
      { name: "Disney+", img: "/imgs/disney.png" },
      { name: "HBO Max", img: "/imgs/hbo.png" }
    ],
    astronaut: true
  },
  {
    name: "700MB + Canais Premium",
    fullPrice: "219",
    price: "189",
    cents: "90",
    features: [
      "Tudo do plano 700MB",
      "Sem Fidelidade",
      "+80 Canais (ESPN, Gloob, etc)"
    ],
    popular: true,
    badge: "COMPLETO",
    apps: [
      { name: "Globoplay", img: "/imgs/globoplay.png" },
      { name: "Apple TV", img: "/imgs/appletv.png" }
    ]
  }
];

export default function Plans() {
  return (
    <section id="planos" className="py-24 bg-[var(--surface-alt)] relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-main)]">
            Escolha o plano ideal para você
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-medium">
            Velocidade simétrica, sem limite de download e estabilidade garantida.
          </p>
        </div>

        <Tabs defaultValue="fibra" className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <TabsList className="h-16 w-full max-w-md bg-white rounded-full p-2 mb-12 shadow-sm border border-gray-100">
            <TabsTrigger value="fibra" className="w-1/2 rounded-full h-full text-lg font-bold data-[state=active]:bg-[var(--brand-primary)] data-[state=active]:text-white transition-all">
              Internet Fibra
            </TabsTrigger>
            <TabsTrigger value="combo" className="w-1/2 rounded-full h-full text-lg font-bold data-[state=active]:bg-[var(--brand-primary)] data-[state=active]:text-white transition-all">
              Combos (Internet + TV)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fibra" className="w-full">
            <div className="grid md:grid-cols-3 gap-8">
              {fibraPlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="combo" className="w-full relative mt-16 md:mt-24">
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto relative z-10">
              {comboPlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: any }) {
  return (
    <div
      className={cn(
        "relative rounded-lg p-8 md:p-10 transition-transform duration-300 hover:-translate-y-2 flex flex-col bg-white border border-gray-100",
        plan.popular ? "shadow-2xl scale-105 z-10 border-[var(--brand-primary)] border-2" : "shadow-sm"
      )}
    >
      {plan.astronaut && (
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-48 h-auto z-30 hover:scale-110 hover:-translate-y-4 transition-all duration-500 origin-bottom cursor-pointer">
          <img 
            src="/imgs/astronautas_cinema.png" 
            alt="Astronautas" 
            className="w-full h-full object-contain drop-shadow-2xl animate-pulse"
            title="Bora assistir um filme? Assine os combos com Streaming!"
          />
        </div>
      )}

      {plan.badge && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[var(--brand-primary)] text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-md z-20">
          {plan.badge}
        </div>
      )}
      
      <div className="mb-8 text-center mt-4 flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-4 text-[var(--text-muted)]">
          {plan.name}
        </h3>
        {plan.fullPrice && (
          <p className="text-sm text-gray-400 line-through font-bold mb-1">De R$ {plan.fullPrice},90/mês</p>
        )}
        <div className="flex items-start justify-center gap-1 text-[var(--text-main)]">
          <span className="text-2xl font-bold mt-2">R$</span>
          <span className="text-7xl font-black tracking-tighter leading-none">
            {plan.price}
          </span>
          <div className="flex flex-col items-start justify-start">
            <span className="text-3xl font-bold leading-none">,{plan.cents}</span>
            <span className="text-sm font-bold text-gray-400 mt-1 uppercase tracking-wider">/mês</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3 font-medium bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
          no débito automático, sem fidelidade
        </p>
      </div>

      <div className="h-px w-full bg-gray-100 mb-8" />

      <ul className="space-y-4 mb-10 flex-1">
        {plan.features.map((feature: string) => (
          <li key={feature} className="flex items-start gap-3">
            <div className="mt-1">
              <Check size={20} className="text-[var(--brand-primary)]" />
            </div>
            <span className="font-semibold text-[var(--text-main)] text-lg">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {plan.apps && plan.apps.length > 0 && (
        <div className="mb-8 flex flex-wrap justify-center items-center gap-3 bg-gray-50 py-4 px-2 rounded-lg border border-gray-100">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider w-full text-center mb-2">Incluso no plano:</span>
          {plan.apps.map((app: any, idx: number) => (
             app.img ? (
               <div key={idx} className="h-10 w-auto bg-white rounded-md p-1.5 shadow-sm border border-gray-100 flex items-center justify-center hover:scale-105 transition-transform" title={app.name}>
                 <img src={app.img} alt={app.name} className="h-full w-auto object-contain" />
               </div>
             ) : (
               <span key={idx} className="bg-[var(--surface-alt)] text-[var(--brand-primary)] text-sm font-bold px-3 py-1 rounded-full border border-black/5 shadow-sm">
                 {app}
               </span>
             )
          ))}
        </div>
      )}

      <a
        href="#cobertura"
        className={cn(
          buttonVariants({ size: "lg" }),
          "w-full h-16 rounded-lg font-bold text-xl transition-all shadow-md",
          plan.popular 
            ? "bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-hover)] hover:shadow-lg" 
            : "bg-gray-100 text-[var(--text-main)] hover:bg-gray-200"
        )}
      >
        Assine Já
      </a>
      
      <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-gray-400 hover:text-[var(--brand-primary)] cursor-pointer transition-colors">
        <Info size={16} /> Ver regulamento
      </div>
    </div>
  );
}
