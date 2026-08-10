import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "#hero" },
  { name: "Planos", href: "#planos" },
  { name: "Avaliações", href: "#avaliacoes" },
  { name: "Contato", href: "#rodape" },
  { name: "Redes Sociais", href: "#redes-sociais" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -50% 0px" } // Adjust to trigger when section is in top part of screen
    );

    const sections = navLinks.map(link => document.getElementById(link.href.replace('#', ''))).filter(Boolean);
    sections.forEach(sec => {
      if (sec) observer.observe(sec);
    });

    return () => {
      sections.forEach(sec => {
        if (sec) observer.unobserve(sec);
      });
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 inset-x-0 z-50 transition-all duration-500 mx-auto max-w-7xl px-4",
      )}
    >
      <div className={cn(
        "flex items-center justify-between px-8 py-3 rounded-full transition-all duration-500 border",
        scrolled
          ? "bg-[#0b1220] shadow-2xl border-white/10"
          : "bg-transparent backdrop-blur-sm border-transparent"
      )}>
        {/* Logo */}
        <a href="#hero" className="flex items-center justify-center shrink-0 group relative h-10 overflow-hidden">
          <img 
            src="/imgs/logo_up_horizontal.png" 
            alt="UP Telecom" 
            className="h-full w-auto object-contain z-10 group-hover:scale-105 transition-transform duration-500" 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-anton text-xl pt-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative transition-all duration-300 tracking-wider group-hover:text-white py-1",
                  isActive
                    ? "text-[var(--brand-blue)] drop-shadow-[0_0_8px_rgba(0,85,255,0.5)]"
                    : "text-slate-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                )}
              >
                {link.name}
                {/* Animated underline */}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-[var(--brand-blue)] transition-all duration-300",
                  isActive ? "w-full shadow-[0_0_10px_rgba(0,85,255,0.8)]" : "w-0 group-hover:w-full"
                )} />
              </a>
            );
          })}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:flex shrink-0">
          <a
            href="https://sistema.upconexion.com.br/central_assinante_web/login"
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] text-white px-8 py-2 text-lg font-anton transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.4)] hover:shadow-[0_0_30px_rgba(230,0,0,0.6)] hover:-translate-y-1 overflow-hidden group pt-3"
          >
            <span className="relative z-10 tracking-wide uppercase">Consultar viabilidade</span>
            {/* Shine effect */}
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden ml-auto">
          <Sheet>
            <SheetTrigger className="p-2 -mr-2 text-white">
              <Menu size={28} />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0b1220]/95 backdrop-blur-xl border-white/10 flex flex-col">
              <SheetTitle className="text-left mb-10 mt-4 flex items-center gap-3">
                <img src="/imgs/logo_up_horizontal.png" alt="UP Telecom" className="h-10 w-auto" />
              </SheetTitle>
              <nav className="flex flex-col gap-6 mt-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <SheetClose asChild key={link.name}>
                      <a
                        href={link.href}
                        className={cn(
                          "font-anton text-2xl tracking-wider transition-colors pt-1",
                          isActive ? "text-[var(--brand-blue)]" : "text-slate-300 hover:text-white"
                        )}
                      >
                        {link.name}
                      </a>
                    </SheetClose>
                  );
                })}
                <a
                  href="https://sistema.upconexion.com.br/central_assinante_web/login"
                  target="_blank"
                  rel="noreferrer"
                  className="relative overflow-hidden text-xl font-anton text-white bg-[var(--brand-primary)] px-4 py-3 rounded-full text-center mt-auto mb-8 transition-all shadow-[0_0_20px_rgba(230,0,0,0.4)] pt-4"
                >
                  <span className="relative z-10 tracking-wide uppercase">Consultar viabilidade</span>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
