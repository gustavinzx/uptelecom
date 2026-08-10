import { FileText, CreditCard, Wrench, Smartphone } from "lucide-react";

const services = [
  { icon: FileText, title: "2ª Via de Boleto", desc: "Acesse e pague sua fatura de forma rápida e segura." },
  { icon: CreditCard, title: "Pagamento com Pix", desc: "Liberação automática do sinal em minutos após o pagamento." },
  { icon: Wrench, title: "Suporte Técnico", desc: "Abra chamados e acompanhe o status diretamente pelo app." },
  { icon: Smartphone, title: "App do Assinante", desc: "Gerencie sua rede Wi-Fi e senhas pelo seu celular." },
];

export default function SelfService() {
  return (
    <section id="autoatendimento" className="py-24 bg-[#0b1220] text-white relative">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl mb-4 tracking-wide text-white">
              Sua Área do <span className="text-[var(--brand-primary)]">Assinante</span>
            </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            Com a central do assinante e nosso app exclusivo, você resolve tudo sem precisar ligar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
}
