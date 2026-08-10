import { FileText, CreditCard, Wrench, Smartphone } from "lucide-react";

const services = [
  { icon: FileText, title: "2ª Via de Boleto", desc: "Acesse e pague sua fatura de forma rápida e segura." },
  { icon: CreditCard, title: "Pagamento com Pix", desc: "Liberação automática do sinal em minutos após o pagamento." },
  { icon: Wrench, title: "Suporte Técnico", desc: "Abra chamados e acompanhe o status diretamente pelo app." },
  { icon: Smartphone, title: "App do Assinante", desc: "Gerencie sua rede Wi-Fi e senhas pelo seu celular." },
];

export default function SelfService() {
  return (
    <section id="autoatendimento" className="py-24 bg-[var(--brand-blue)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl mb-6 tracking-wide drop-shadow-sm">Sua Conta <span className="text-white/80">Na Palma da Mão</span></h2>
          <p className="text-xl max-w-2xl mx-auto font-medium text-white/90">
            Acesse a Área do Assinante para emitir boletos, verificar conexão e abrir chamados de forma rápida.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 grid sm:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <a 
                key={i} 
                href="https://sistema.upconexion.com.br/central_assinante_web/login" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 text-center shadow-lg group block"
              >
                <div className="w-20 h-20 rounded-lg bg-white/10 text-white flex items-center justify-center mx-auto mb-8 group-hover:bg-[var(--brand-primary)] group-hover:scale-110 transition-all duration-300">
                  <s.icon size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-300 font-medium leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0 relative">
             <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full" />
             <img src="/imgs/astro_5.png" alt="Mascote UP Telecom no App" className="relative z-10 w-full max-w-[450px] animate-float drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
