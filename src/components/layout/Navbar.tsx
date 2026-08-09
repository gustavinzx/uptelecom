import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "#" },
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
    <div className="w-full absolute top-0 z-50 pt-4 md:pt-6 px-4">
      <header
        className={cn(
          "max-w-6xl mx-auto rounded-full transition-all duration-300",
          scrolled
            ? "bg-[#0b1220]/95 backdrop-blur-md shadow-xl border border-white/10"
            : "bg-[#0b1220] shadow-lg border border-transparent"
        )}
      >
        <div className="w-full h-16 md:h-[72px] px-4 md:px-8 flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <div className="bg-white rounded-full px-4 py-2 shadow-inner">
              <img src="/imgs/logo.png" alt="UP Telecom" className="h-8 md:h-10 w-auto object-contain drop-shadow-sm" />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-bold tracking-wide text-gray-300 hover:text-[var(--brand-primary)] transition-colors"
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
              className="text-[14px] font-bold tracking-wide text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] px-8 py-3 rounded-full transition-all shadow-md hover:shadow-[var(--brand-primary)]/40 hover:-translate-y-0.5"
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
                <SheetTitle className="text-left mb-10 mt-4">
                  <div className="bg-white rounded-full px-4 py-2 inline-block">
                    <img src="/imgs/logo.png" alt="UP Telecom" className="h-10 w-auto object-contain" />
                  </div>
                </SheetTitle>
                <nav className="flex flex-col gap-6 mt-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <a
                        href={link.href}
                        className="text-lg font-bold text-gray-300 hover:text-[var(--brand-primary)] transition-colors"
                      >
                        {link.name}
                      </a>
                    </SheetClose>
                  ))}
                  <a
                    href="https://sistema.upconexion.com.br/central_assinante_web/login"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-bold text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] px-4 py-3 rounded-full text-center mt-4 transition-all"
                  >
                    Consultar viabilidade
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
