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
        {/* Logo Lockup */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          {/* Logo Icon (Using the existing logo image as icon, or fallback styling) */}
          <div className="bg-[var(--brand-primary)] w-8 h-8 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span className="text-white font-black text-sm">UP</span>
          </div>
          <span className="font-black text-xl text-white tracking-tight">
            UP TELECOM
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "transition-colors uppercase tracking-wider text-xs",
                link.active
                  ? "text-[#00D4FF]" // Signal (Cyan)
                  : "text-slate-300 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:flex shrink-0">
          <a
            href="https://sistema.upconexion.com.br/central_assinante_web/login"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#a90a34] text-white px-6 py-2.5 text-sm font-bold hover:brightness-110 transition shadow-lg shadow-[#a90a34]/20"
          >
            Consultar viabilidade
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden ml-auto">
          <Sheet>
            <SheetTrigger className="p-2 -mr-2 text-white">
              <Menu size={28} />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0b1220] border-white/10">
              <SheetTitle className="text-left mb-10 mt-4 flex items-center gap-3">
                <div className="bg-[var(--brand-primary)] w-8 h-8 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-sm">UP</span>
                </div>
                <span className="font-black text-xl text-white tracking-tight">
                  UP TELECOM
                </span>
              </SheetTitle>
              <nav className="flex flex-col gap-6 mt-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-lg font-bold uppercase tracking-wider transition-colors",
                        link.active ? "text-[#00D4FF]" : "text-slate-300 hover:text-white"
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
                  className="text-lg font-bold text-white bg-[#a90a34] px-4 py-3 rounded-full text-center mt-4 transition-all"
                >
                  Consultar viabilidade
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
