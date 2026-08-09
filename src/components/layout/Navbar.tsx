import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "A EMPRESA", href: "#vantagens" },
  { name: "PLANOS", href: "#planos" },
  { name: "BLOG", href: "#blog" },
  { name: "FALE CONOSCO", href: "#rodape" },
  { name: "CENTRAL DO CLIENTE", href: "https://sistema.upconexion.com.br/central_assinante_web/login" },
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
        "sticky top-0 z-50 w-full transition-all duration-300 bg-[var(--surface-dark)]",
        scrolled
          ? "shadow-lg shadow-black/20 border-b border-white/5"
          : ""
      )}
    >
      <div className="max-w-6xl mx-auto px-6 w-full h-20 flex items-center justify-between gap-6">
        {/* Logo — white container to preserve brand colors against dark navbar */}
        <a href="#" className="flex items-center group shrink-0">
          <div className="bg-white rounded-xl px-3 py-1.5 shadow-sm">
            <img src="/imgs/logo.png" alt="UP Telecom" className="h-14 w-auto object-contain" />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.filter(l => l.name !== "CENTRAL DO CLIENTE").map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-bold tracking-wide text-[var(--text-on-dark-muted)] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://sistema.upconexion.com.br/central_assinante_web/login"
            target="_blank"
            rel="noreferrer"
            className="text-[13px] font-bold tracking-wide text-[var(--text-on-dark-muted)] bg-white/5 border border-white/15 hover:bg-[var(--brand-primary)] hover:border-[var(--brand-primary)] hover:text-white px-5 py-2 rounded-full transition-all"
          >
            CENTRAL DO CLIENTE
          </a>
        </nav>

        {/* Desktop Contact */}
        <div className="hidden lg:flex flex-col text-right shrink-0">
          <span className="text-xs font-medium text-[var(--text-on-dark-muted)]">contato@upconexion.com.br</span>
          <span className="text-sm font-bold text-white font-num">61 98176-5721</span>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden ml-auto">
          <Sheet>
            <SheetTrigger className="p-2 -mr-2">
              <Menu size={24} className="text-white" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[var(--surface-dark)] border-white/10">
              <SheetTitle className="text-left mb-10 mt-4">
                <div className="bg-white rounded-xl px-3 py-1.5 shadow-sm inline-block">
                  <img src="/imgs/logo.png" alt="UP Telecom" className="h-12 w-auto object-contain" />
                </div>
              </SheetTitle>
              <nav className="flex flex-col gap-6 mt-4">
                {navLinks.filter(l => l.name !== "CENTRAL DO CLIENTE").map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="text-lg font-bold text-[var(--text-on-dark-muted)] hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
                <a
                  href="https://sistema.upconexion.com.br/central_assinante_web/login"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-bold text-[var(--text-on-dark-muted)] border-2 border-white/15 hover:bg-[var(--brand-primary)] hover:border-[var(--brand-primary)] hover:text-white px-4 py-3 rounded-full text-center mt-4 transition-all"
                >
                  CENTRAL DO CLIENTE
                </a>
              </nav>
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-2">
                <span className="text-sm font-medium text-[var(--text-on-dark-muted)]">contato@upconexion.com.br</span>
                <span className="text-lg font-bold text-white font-num">61 98176-5721</span>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
