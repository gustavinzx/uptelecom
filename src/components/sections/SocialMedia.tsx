import { Reveal } from "@/components/ui/Reveal";

export default function SocialMedia() {
  return (
    <section id="redes-sociais" className="py-24 relative overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/imgs/RedesSociais.jpg')" }}>
      {/* Névoa suave com mix-blend-mode para escurecimento orgânico */}
      <div className="absolute inset-0 bg-[#0b1220] mix-blend-multiply opacity-60 z-0 pointer-events-none" />
      {/* Leve vignette radial para focar no centro */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0b1220_100%)] opacity-50 z-0 pointer-events-none" />
      {/* Transições ultra suaves nas bordas, sem cortes abruptos */}
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-[#0b1220] via-[#0b1220]/60 to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[400px] bg-gradient-to-t from-[#0b1220] via-[#0b1220]/60 to-transparent z-0 pointer-events-none" />
      
      <Reveal className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text & Links Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h2 className="font-anton text-4xl md:text-5xl mb-6 text-white tracking-wide">
              Fique por dentro no <br /><span className="text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500">Instagram</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Acompanhe os bastidores, promoções exclusivas, dicas para melhorar seu Wi-Fi e todas as novidades da melhor conexão da cidade.
            </p>
            
            {/* Premium Profile Card */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-6 mb-8 bg-[#15233f]/40 p-6 rounded-2xl border border-white/10 backdrop-blur-md max-w-md mx-auto lg:mx-0 shadow-xl">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full blur opacity-75"></div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center border-2 border-[#0b1220] overflow-hidden">
                  <img src="/imgs/logo_insta_up.jpg" alt="UP Telecom" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">uptelecom_conect</h3>
                <p className="text-slate-400 text-sm mb-3">up_telecom</p>
                <div className="flex items-center justify-center sm:justify-start gap-4 text-sm text-slate-300 font-bold">
                  <div className="flex flex-col items-center">
                    <span className="text-white text-lg">131</span>
                    <span className="text-xs font-normal">posts</span>
                  </div>
                  <div className="w-px h-8 bg-white/20"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-lg">496</span>
                    <span className="text-xs font-normal">seguidores</span>
                  </div>
                  <div className="w-px h-8 bg-white/20"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-lg">117</span>
                    <span className="text-xs font-normal">seguindo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a 
                href="https://instagram.com/uptelecom_conect" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
              >
                <img src="/imgs/insta_logo.png" alt="Instagram" className="w-6 h-6 rounded-md" />
                Seguir @uptelecom_conect
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
      </Reveal>
    </section>
  );
}
