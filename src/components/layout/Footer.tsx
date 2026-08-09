import { Camera, AtSign, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="rodape" className="bg-[#151515] text-[#767676] py-16 border-t border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="#" className="flex items-center mb-10 mt-2 group inline-flex">
              <img src="/imgs/logo.png" alt="UP Telecom" className="h-40 w-auto object-contain transform-gpu origin-left" style={{ filter: "brightness(0) invert(1)" }} />
            </a>
            <p className="text-sm leading-relaxed mb-6">
              A UP telecom é um provedor de internet ultra rápida com tecnologia 100% fibra óptica, modernas redes próprias e equipamentos de última geração.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--brand-primary)] hover:text-white flex items-center justify-center transition-colors">
                <Camera size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--brand-primary)] hover:text-white flex items-center justify-center transition-colors">
                <AtSign size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase">Menu</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-[var(--brand-primary)] transition-colors">HOME</a></li>
              <li><a href="#vantagens" className="hover:text-[var(--brand-primary)] transition-colors">A EMPRESA</a></li>
              <li><a href="#planos" className="hover:text-[var(--brand-primary)] transition-colors">PLANOS</a></li>
              <li><a href="#blog" className="hover:text-[var(--brand-primary)] transition-colors">BLOG</a></li>
              <li><a href="#rodape" className="hover:text-[var(--brand-primary)] transition-colors">FALE CONOSCO</a></li>
              <li><a href="https://sistema.upconexion.com.br/central_assinante_web/login" target="_blank" rel="noreferrer" className="hover:text-[var(--brand-primary)] transition-colors">CENTRAL DO CLIENTE</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase">Institucional / Regulatório</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-[var(--brand-primary)] transition-colors">Política de Privacidade / LGPD</a></li>
              <li><a href="#" className="hover:text-[var(--brand-primary)] transition-colors">Termos de Uso</a></li>
              <li className="pt-2 border-t border-white/5">
                <p className="text-gray-500 text-xs leading-relaxed">
                  <span className="text-gray-400 font-semibold block mb-1">Razão Social:</span>
                  UP Conexion Telecomunicações Ltda.<br />
                  <span className="text-gray-500">CNPJ: 00.000.000/0000-00</span>
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase">Fale Conosco</h4>
            <ul className="space-y-4 text-sm font-medium mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-[var(--brand-primary)]" />
                <span>Col. Agrícola 26 de Setembro, Rua 01 chª. 13<br/>72155-000, DF</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[var(--brand-primary)]" />
                <span>61 98176-5721</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[var(--brand-primary)]" />
                <span>contato@upconexion.com.br</span>
              </li>
            </ul>
            {/* Google Maps embed */}
            <div className="rounded-lg overflow-hidden border border-white/10">
              <iframe
                title="Localização UP Telecom"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.0!2d-48.0!3d-15.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUVIgNjA1IENvbC4gQWdyw61jb2xhIDI2IGRlIFNldGVtYnJv!5e0!3m2!1spt-BR!2sbr!4v1000000000000"
                width="100%"
                height="140"
                style={{ border: 0, filter: "grayscale(80%) invert(90%) contrast(85%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Col.+Agrícola+26+de+Setembro,+Rua+01,+DF"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs text-[var(--brand-primary)] hover:underline font-bold"
            >
              <MapPin size={12} /> Abrir no Google Maps →
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm flex flex-col items-center justify-center gap-4">
          <p className="text-xs text-gray-500 bg-white/5 px-4 py-3 rounded-lg max-w-3xl font-medium border border-white/10 mb-2">
            ⚠️ Fique atento a golpes: a UP Telecom nunca solicita pagamento por links fora dos canais oficiais (WhatsApp 61 98176-5721 e site upconexion.com.br).
          </p>
          <p>© {new Date().getFullYear()} UP Telecom. Todos os direitos reservados.</p>
          <p className="opacity-60 text-xs">Desenvolvido por GSDS</p>
        </div>
      </div>
    </footer>
  );
}
