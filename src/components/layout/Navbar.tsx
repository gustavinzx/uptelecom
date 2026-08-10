import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "#", active: true },
  { name: "Planos", href: "#planos" },
  { name: "Empresa", href: "#vantagens" },
  { name: "Avaliações", href: "#avaliacoes" },
  { name: "Contato", href: "#rodape" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 rounded-b-2xl border-b border-white/5",
        scrolled
          ? "bg-[#0b1220]/90 backdrop-blur-md shadow-xl py-3"
          : "bg-[#0b1220]/80 backdrop-blur-sm py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0 group relative">
          <div className="absolute inset-0 bg-[var(--brand-blue)] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full" />
          <img src="/imgs/imagemtelecom.png" alt="UP Telecom" className="h-16 w-auto relative z-10 group-hover:scale-105 transition-transform duration-300" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "relative transition-all duration-300 uppercase tracking-wider text-sm group-hover:text-white py-2",
                link.active
                  ? "text-[var(--brand-blue)] drop-shadow-[0_0_8px_rgba(0,85,255,0.5)]"
                  : "text-slate-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              )}
            >
              {link.name}
              {/* Animated underline */}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-[var(--brand-blue)] transition-all duration-300",
                link.active ? "w-full shadow-[0_0_10px_rgba(0,85,255,0.8)]" : "w-0 group-hover:w-full"
              )} />
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:flex shrink-0">
          <a
            href="https://sistema.upconexion.com.br/central_assinante_web/login"
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] text-white px-8 py-3 text-sm font-bold transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.4)] hover:shadow-[0_0_30px_rgba(230,0,0,0.6)] hover:-translate-y-1 overflow-hidden group"
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
                <img src="/imgs/imagemtelecom.png" alt="UP Telecom" className="h-14 w-auto" />
              </SheetTitle>
              <nav className="flex flex-col gap-6 mt-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-lg font-bold uppercase tracking-wider transition-colors",
                        link.active ? "text-[var(--brand-blue)]" : "text-slate-300 hover:text-white"
                      )}
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
                <a
                  href="https://sistema.upconexion.com.br/central_assinante_web/login"
                  target="_blank"
                  rel="noreferrer"
                  className="relative overflow-hidden text-lg font-bold text-white bg-[var(--brand-primary)] px-4 py-4 rounded-full text-center mt-auto mb-8 transition-all shadow-[0_0_20px_rgba(230,0,0,0.4)]"
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
