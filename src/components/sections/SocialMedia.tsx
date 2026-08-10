import { Smartphone, Share2, MonitorPlay } from "lucide-react";

export default function SocialMedia() {
  return (
    <section id="redes-sociais" className="py-24 border-t border-white/5 relative overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/imgs/bg_features.jpg')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0b1220]/80 backdrop-blur-[2px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text & Links Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h2 className="font-bebas text-5xl md:text-6xl mb-6 text-white tracking-wide">
            Siga-nos nas <span className="text-[var(--brand-primary)]">Redes Sociais</span>
          </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Fique por dentro das nossas novidades, promoções exclusivas e dicas para melhorar ainda mais a sua conexão em casa. Siga nossos perfis oficiais!
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="https://instagram.com/uptelecom_conect" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
              >
                <Smartphone size={24} />
                @uptelecom_conect
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-[#15233f] text-blue-400 rounded-lg hover:bg-[#1e325c] border border-white/10 hover:border-blue-400/50 hover:scale-105 transition-all shadow-sm"
              >
                <Share2 size={24} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-[#15233f] text-red-400 rounded-lg hover:bg-[#1e325c] border border-white/10 hover:border-red-400/50 hover:scale-105 transition-all shadow-sm"
              >
                <MonitorPlay size={24} />
              </a>
            </div>
          </div>

          {/* Video / Phone Mockup Side */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-[var(--brand-primary)]/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Video Container (Smartphone Mockup style) */}
              <div className="flex-1 w-full max-w-[280px] md:max-w-[320px] aspect-[9/16] bg-transparent rounded-[2rem] overflow-hidden border-[6px] border-white/20 shadow-2xl relative mx-auto group">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-gray-800">
                
                {/* Real Instagram Embed */}
                <iframe 
                  src="https://www.instagram.com/p/DbDoVDMO_F7/embed" 
                  className="absolute top-0 left-0 w-full h-[110%] border-0" 
                  scrolling="no" 
                  allowTransparency={true}
                  allow="encrypted-media"
                ></iframe>

              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
