

const streamings = [
  { name: "Max", logo: "/imgs/hbo.png", desc: "Filmes, séries e documentários incríveis." },
  { name: "Disney+", logo: "/imgs/disney.png", desc: "A magia da Disney e esportes da ESPN." },
  { name: "Globoplay", logo: "/imgs/globoplay.png", desc: "Novelas, filmes e séries originais." },
  { name: "Apple TV", logo: "/imgs/appletv.png", desc: "Produções exclusivas e originais Apple." }
];
import { Reveal } from "@/components/ui/Reveal";

export default function Combo() {
  return (
    <section id="combos" className="py-24 relative overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/imgs/bg_combo_hq.jpg')" }}>
      {/* Dark Gradient Overlay for Fade effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0b1220]/70 to-[#0b1220] z-0" />

      <Reveal delay={200} className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
          
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1 relative">
             <div className="absolute inset-0 bg-[var(--brand-primary)]/20 blur-3xl rounded-full" />
             <img src="/imgs/astro_1.webp" alt="Mascotes UP Telecom com Pipoca" loading="lazy" decoding="async" className="relative z-10 w-full max-w-[400px] animate-float motion-reduce:animate-none drop-shadow-2xl" />
          </div>

          <div className="w-full lg:w-1/2 text-left order-1 lg:order-2">
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--brand-primary)]/20 border border-[var(--brand-primary)]/30 text-[var(--brand-primary)] text-xs font-bold tracking-widest uppercase mb-4">
              Diversão Completa
            </span>
            <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl mb-6 text-white tracking-wide">
              Seus <span className="text-[var(--brand-primary)]">Streamings</span> Favoritos
            </h2>
            <p className="text-lg text-slate-300 font-medium">
              Conexão sem gargalos para você assistir séries, filmes e vídeos com a máxima qualidade, sem aquela tela chata de carregamento.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden w-full group -mx-6 px-6 py-4">
          <div className="flex gap-6 min-w-max animate-[marquee_25s_linear_infinite] motion-reduce:animate-none">
            {[...streamings, ...streamings, ...streamings, ...streamings].map((s, idx) => (
              <div key={idx} className="w-[280px] rounded-xl bg-white p-8 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col shrink-0">
                <div className="h-16 flex items-center justify-center mb-6">
                  <img src={s.logo} alt={s.name} loading="lazy" decoding="async" className="max-h-full max-w-[120px] object-contain drop-shadow-sm" />
                </div>
                <p className="text-sm text-gray-500 mb-8 flex-1 font-medium leading-relaxed">{s.desc}</p>
                <a 
                  href={`https://wa.me/5561981773495?text=${encodeURIComponent(`Olá! Quero turbinar minha internet e adicionar o *${s.name}* no meu plano. Como funciona?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] transition-colors uppercase tracking-wider py-2 border-t border-gray-100 block w-full min-h-[44px] flex items-center justify-center"
                >
                  Quero {s.name}
                </a>
              </div>
            ))}
          </div>
          
          {/* Fades na borda */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0b1220] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0b1220] to-transparent z-10 pointer-events-none" />
        </div>
      </Reveal>
    </section>
  );
}
