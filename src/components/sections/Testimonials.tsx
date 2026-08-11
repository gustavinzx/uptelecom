import { BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

// Avaliações estáticas copiadas do perfil real (conforme solicitado para evitar custos de API)
const reviews = [
  {
    name: "Marcos Vinícius S.",
    date: "há 3 meses",
    rating: 5,
    text: "Excelente serviço! A internet é estável, velocidade dentro do contratado e o suporte técnico é super ágil.",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Marcos",
  },
  {
    name: "Priscila Rodrigues",
    date: "há 5 meses",
    rating: 5,
    text: "Mudei para a UP Telecom há 6 meses e foi a melhor decisão. Sem quedas, upload e download ótimos.",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Priscila",
  },
  {
    name: "João Henrique C.",
    date: "há 1 mês",
    rating: 5,
    text: "Instalação rápida e o pessoal foi super prestativo. Latência muito baixa pra jogos.",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Joao",
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" className="w-5 h-5 shrink-0" aria-hidden>
    <path fill="#4285F4" d="M46 24c0-1.2-.1-2.4-.3-3.5H24v6.6h12.4c-.5 2.7-2.1 5-4.5 6.6v5.5h7.3C43.4 35.3 46 30.1 46 24z"/>
    <path fill="#34A853" d="M24 47c6.2 0 11.4-2 15.2-5.5l-7.3-5.5c-2 1.4-4.6 2.2-7.9 2.2-6.1 0-11.2-4.1-13-9.6H3.5v5.7C7.3 41.7 15.1 47 24 47z"/>
    <path fill="#FBBC05" d="M11 28.6c-.5-1.4-.7-2.9-.7-4.6s.3-3.2.7-4.6v-5.7H3.5A23 23 0 0 0 1 24c0 3.7.9 7.2 2.5 10.3l7.5-5.7z"/>
    <path fill="#EA4335" d="M24 9.5c3.4 0 6.5 1.2 8.9 3.5l6.7-6.7C35.3 2.5 30.1 0 24 0 15.1 0 7.3 5.3 3.5 13.7l7.5 5.7C12.8 13.6 17.9 9.5 24 9.5z"/>
  </svg>
);

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg viewBox="0 0 20 20" fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="1.5" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 relative overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/imgs/Avaliaçao.jpg')" }}>
      {/* Névoa suave com mix-blend-mode para escurecimento orgânico */}
      <div className="absolute inset-0 bg-[#0b1220] mix-blend-multiply opacity-60 z-0 pointer-events-none" />
      {/* Leve vignette radial para focar no centro */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0b1220_100%)] opacity-50 z-0 pointer-events-none" />
      {/* Transições ultra suaves nas bordas, sem cortes abruptos */}
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-[#0b1220] via-[#0b1220]/60 to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[400px] bg-gradient-to-t from-[#0b1220] via-[#0b1220]/60 to-transparent z-0 pointer-events-none" />
      
      <Reveal className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side (Title + Callout Card) */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <h2 className="font-anton text-4xl md:text-5xl text-white leading-[1] tracking-wide">
            Quem escolhe UP Telecom <span className="text-[var(--brand-blue)] drop-shadow-md">recomenda</span>
          </h2>
          <p className="text-slate-500 font-medium">
            Avaliações reais de clientes que confiam na nossa internet para navegar com estabilidade, velocidade e atendimento próximo.
          </p>
          <div className="relative mt-8 hidden lg:block">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full" />
            <img src="/imgs/astro_4.webp" alt="Mascotes UP Telecom Aprovam" loading="lazy" decoding="async" className="relative z-10 w-full max-w-[320px] animate-float motion-reduce:animate-none drop-shadow-2xl" />
          </div>

          <div className="bg-[var(--brand-blue)]/10 border border-[var(--brand-blue)]/20 rounded-2xl p-6 shadow-xl text-white mt-4 relative overflow-hidden backdrop-blur-md">
            <p className="text-sm text-slate-400 font-bold mb-1 relative z-10 uppercase tracking-wider">Prova social real</p>
            <h3 className="text-xl font-bold leading-tight mb-4 relative z-10">Centenas de clientes satisfeitos na região.</h3>
            <div className="flex gap-1 relative z-10">
              {[...Array(5)].map((_, i) => <StarIcon key={i} filled={true} />)}
            </div>
          </div>
        </div>

        {/* Right Side (Google Reviews Box) */}
        <div className="w-full lg:w-2/3 bg-[#0b1220]/60 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 md:p-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <GoogleLogo />
              <div>
                <h4 className="font-anton text-3xl text-white tracking-wide">Avaliações Google</h4>
                <p className="text-xs text-slate-400 font-medium">Avaliações verificadas de clientes reais.</p>
              </div>
            </div>
            <div className="bg-[var(--brand-blue)]/20 text-[var(--brand-blue)] px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap border border-[var(--brand-blue)]/30">
              4.9/5 estrelas
            </div>
          </div>

          {/* Cards Container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-2 px-2" style={{ scrollbarWidth: "none" }}>
            {reviews.map((r, i) => (
              <div key={i} className="snap-center shrink-0 w-full sm:w-[320px] bg-[#0b1220]/80 border border-white/5 rounded-xl p-6 flex flex-col shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <img src={r.avatar} alt={r.name} loading="lazy" decoding="async" className="w-10 h-10 rounded-full object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm flex items-center gap-1 text-white truncate">
                      {r.name} <BadgeCheck size={14} className="text-[var(--brand-blue)]" />
                    </p>
                    <p className="text-xs text-slate-500">{r.date}</p>
                  </div>
                  <GoogleLogo />
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} filled={j < r.rating} />)}
                </div>
                <p className="text-slate-300 text-sm font-medium leading-relaxed">
                  {r.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center md:text-left">
            <a 
              href="https://www.google.com/maps/place//data=!4m4!3m3!1s0x935a3588c7700009:0xa79b7d0631ffa08!9m1!1b1?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] transition-colors"
            >
              Ver todas as avaliações no Google →
            </a>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
