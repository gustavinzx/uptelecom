import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "#hero" },
  { name: "Planos", href: "#planos" },
  { name: "Avaliações", href: "#avaliacoes" },
  { name: "Cidades", href: "#cobertura" },
  { name: "Contato", href: "#rodape" },
  { name: "Redes Sociais", href: "#redes-sociais" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Get all sections that are actually in the header navigation
      const navSectionIds = navLinks.map(link => link.href.replace('#', ''));
      const elements = navSectionIds
        .map(id => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      if (elements.length === 0) return;

      // Find the current active section based on scroll position
      let currentActive = activeSection;
      const scrollPosition = window.scrollY + window.innerHeight * 0.4; // 40% down the screen

      // Loop backwards to find the last section we scrolled past
      for (let i = elements.length - 1; i >= 0; i--) {
        const element = elements[i];
        if (element.offsetTop <= scrollPosition) {
          currentActive = element.id;
          break;
        }
      }

      // If we are at the absolute bottom of the page, force the last nav link
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        if (elements.length > 0) {
          currentActive = elements[elements.length - 1].id;
        }
      }

      if (currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount to set initial state
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <header
      className={cn(
        "fixed top-4 inset-x-0 z-50 transition-all duration-500 mx-auto max-w-7xl px-4",
      )}
    >
      <div className={cn(
        "flex items-center justify-between gap-6 px-8 py-3 rounded-full transition-all duration-500 border",
        scrolled
          ? "bg-[#0b1220] shadow-2xl border-white/10"
          : "bg-transparent backdrop-blur-sm border-transparent"
      )}>
        {/* Logo */}
        <a href="#hero" className="flex items-center justify-center shrink-0 group relative w-[160px] h-[40px] overflow-hidden">
          <img 
            src="/imgs/logo_up_horizontal.webp" 
            alt="UP Telecom" 
            className="w-[140px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-10 group-hover:scale-105 transition-transform duration-500" 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "font-nav font-semibold normal-case text-sm px-5 py-2.5 rounded-full transition-all duration-300",
                  isActive
                    ? "bg-[var(--brand-blue)] text-white shadow-[0_0_15px_rgba(0,85,255,0.4)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
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
            className="relative inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] text-white px-8 py-3 transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.4)] hover:shadow-[0_0_30px_rgba(230,0,0,0.6)] hover:-translate-y-1 overflow-hidden group"
          >
            <span className="relative z-10 font-nav font-semibold text-sm normal-case">Central do Assinante</span>
            {/* Shine effect */}
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden ml-auto">
          <Sheet>
            <SheetTrigger className="p-2 -mr-2 text-white flex items-center justify-center min-w-[44px] min-h-[44px]">
              <Menu size={28} />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0b1220]/95 backdrop-blur-xl border-white/10 flex flex-col">
              <SheetTitle className="mb-12 mt-8 flex items-center justify-center w-full">
                <img src="/imgs/logo_up_horizontal.webp" alt="UP Telecom" className="w-[180px] sm:w-[220px] object-contain" />
              </SheetTitle>
              <nav className="flex flex-col items-center justify-center gap-8 mt-4 text-center">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <SheetClose asChild key={link.name}>
                      <a
                        href={link.href}
                        className={cn(
                          "font-nav font-semibold normal-case text-2xl sm:text-3xl px-6 py-2 rounded-full transition-all",
                          isActive
                            ? "bg-[var(--brand-blue)] text-white shadow-[0_0_15px_rgba(0,85,255,0.4)]"
                            : "text-slate-300 hover:text-white"
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
                  className="relative overflow-hidden text-lg font-nav font-semibold normal-case text-white bg-[var(--brand-primary)] px-6 py-4 rounded-full text-center mt-auto mb-8 transition-all shadow-[0_0_20px_rgba(230,0,0,0.4)]"
                >
                  <span className="relative z-10">Central do Assinante</span>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
