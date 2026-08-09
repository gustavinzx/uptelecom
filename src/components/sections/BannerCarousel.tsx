export default function BannerCarousel() {
  return (
    <section className="w-full bg-[#040a18] relative pt-32 pb-16">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5">
          <img 
            src="/imgs/banner_horizontal.jpg" 
            alt="Instalação Grátis - UP Telecom" 
            className="w-full h-auto object-contain block"
          />
        </div>
      </div>
    </section>
  );
}
