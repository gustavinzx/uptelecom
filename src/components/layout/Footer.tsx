import { MapPin, Phone, Mail, ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer id="rodape" className="bg-[#0b1220] text-slate-400 py-16 border-t border-white/10 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--brand-primary)]/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-blue)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & About */}
          <div className="flex flex-col">
            <a href="#" className="flex items-center mb-8 group inline-block">
              <img src="/imgs/logo_up_horizontal.png" alt="UP Telecom" className="h-16 md:h-20 w-auto object-contain transform-gpu origin-left group-hover:scale-105 transition-transform duration-300" />
            </a>
            <p className="text-sm leading-relaxed mb-8 font-medium">
              A UP Telecom é um provedor de internet ultra rápida com tecnologia 100% fibra óptica, modernas redes próprias e equipamentos de última geração.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/uptelecom_conect" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:border-transparent text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1">
                <img src="/imgs/insta_logo.png" alt="Instagram" className="w-6 h-6 rounded-md" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-anton text-2xl text-white mb-6 tracking-wide">MENU</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-[var(--brand-blue)] flex items-center gap-2 transition-colors before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-[var(--brand-blue)]">HOME</a></li>
              <li><a href="#vantagens" className="hover:text-[var(--brand-blue)] flex items-center gap-2 transition-colors before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-[var(--brand-blue)]">A EMPRESA</a></li>
              <li><a href="#planos" className="hover:text-[var(--brand-blue)] flex items-center gap-2 transition-colors before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-[var(--brand-blue)]">PLANOS</a></li>
              <li><a href="#rodape" className="hover:text-[var(--brand-blue)] flex items-center gap-2 transition-colors before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-[var(--brand-blue)]">FALE CONOSCO</a></li>
              <li><a href="https://sistema.upconexion.com.br/central_assinante_web/login" target="_blank" rel="noreferrer" className="hover:text-[var(--brand-blue)] flex items-center gap-2 transition-colors before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-[var(--brand-blue)]">CENTRAL DO CLIENTE</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-anton text-2xl text-white mb-6 tracking-wide">LEGAL</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-[var(--brand-primary)] transition-colors">Política de Privacidade / LGPD</a></li>
              <li><a href="#" className="hover:text-[var(--brand-primary)] transition-colors">Termos de Uso</a></li>
              <li className="pt-6 mt-6 border-t border-white/10">
                <p className="text-slate-500 text-xs font-medium leading-relaxed">
                  <span className="text-slate-300 font-bold block mb-1">Razão Social:</span>
                  UP Conexion Telecomunicações Ltda.<br />
                  CNPJ: 00.000.000/0000-00
                </p>
              </li>
            </ul>
          </div>

          {/* Contact & Map */}
          <div>
            <h4 className="font-anton text-2xl text-white mb-6 tracking-wide">CONTATO</h4>
            <ul className="space-y-4 text-sm font-medium mb-6">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin size={18} className="shrink-0 mt-0.5 text-[var(--brand-primary)]" />
                <span>Col. Agrícola 26 de Setembro, Rua 01 chª. 13<br/>72155-000, DF</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone size={18} className="shrink-0 text-[var(--brand-primary)]" />
                <span className="font-bold tracking-wide">61 98176-5721</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Mail size={18} className="shrink-0 text-[var(--brand-primary)]" />
                <span>contato@upconexion.com.br</span>
              </li>
            </ul>
            
            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border-2 border-white/10 relative group">
              <div className="absolute inset-0 bg-[var(--brand-primary)]/10 mix-blend-overlay pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
              <iframe
                title="Localização UP Telecom"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.0!2d-48.0!3d-15.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUVIgNjA1IENvbC4gQWdyw61jb2xhIDI2IGRlIFNldGVtYnJv!5e0!3m2!1spt-BR!2sbr!4v1000000000000"
                width="100%"
                height="120"
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
              className="mt-3 inline-flex items-center gap-2 text-xs text-[var(--brand-primary)] hover:text-white font-bold transition-colors"
            >
              <MapPin size={12} /> Abrir no Google Maps →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col items-center justify-center gap-6">
          
          {/* Security Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500/90 px-6 py-3 rounded-2xl max-w-3xl font-medium text-sm shadow-[0_0_15px_rgba(234,179,8,0.05)] text-left sm:text-center">
            <ShieldAlert size={24} className="shrink-0 text-yellow-500" />
            <p>
              <strong className="text-yellow-500 block sm:inline">Aviso de Segurança:</strong> A UP Telecom nunca solicita pagamento por links fora dos canais oficiais (WhatsApp 61 98176-5721 e site upconexion.com.br).
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm font-medium text-slate-500">
            <p>© {new Date().getFullYear()} UP Telecom. Todos os direitos reservados.</p>
            <p className="opacity-60 text-xs tracking-wider uppercase">Desenvolvido por GSDS</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
