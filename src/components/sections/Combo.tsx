

const streamings = [
  { name: "Max", logo: "/imgs/hbo.png", desc: "Filmes, séries e documentários incríveis." },
  { name: "Disney+", logo: "/imgs/disney.png", desc: "A magia da Disney e esportes da ESPN." },
  { name: "Globoplay", logo: "/imgs/globoplay.png", desc: "Novelas, filmes e séries originais." },
  { name: "Apple TV", logo: "/imgs/appletv.png", desc: "Produções exclusivas e originais Apple." }
];

export default function Combo() {
  return (
    <section className="py-24 relative overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/imgs/bg_combo.jpg')" }}>
      {/* Dark Gradient Overlay for Fade effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0b1220]/70 to-[#0b1220] z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Seus <span className="text-[var(--brand-primary)]">Streamings</span> Favoritos
          </h2>
          <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            Com a UP Telecom você pode turbinar sua internet com os melhores serviços de filmes e séries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {streamings.map((s) => (
            <div key={s.name} className="rounded-xl bg-white p-8 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="h-16 flex items-center justify-center mb-6">
                <img src={s.logo} alt={s.name} className="max-h-full max-w-[120px] object-contain drop-shadow-sm" />
              </div>
              <p className="text-sm text-gray-500 mb-8 flex-1 font-medium leading-relaxed">{s.desc}</p>
              <a 
                href="https://wa.me/5561981765721" 
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] transition-colors uppercase tracking-wider py-2 border-t border-gray-100 block w-full"
              >
                Quero {s.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
