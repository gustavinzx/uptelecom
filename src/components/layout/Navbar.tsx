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
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-white py-4"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 w-full h-28 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img src="/imgs/logo.png" alt="UP Telecom" className="h-32 w-auto object-contain transform-gpu origin-left" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.filter(l => l.name !== "CENTRAL DO CLIENTE").map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-bold tracking-wide text-[var(--text-main)] hover:text-[var(--brand-primary)] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://sistema.upconexion.com.br/central_assinante_web/login"
            target="_blank"
            rel="noreferrer"
            className="text-[13px] font-bold tracking-wide text-[var(--brand-primary)] border-2 border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white px-5 py-2 rounded-md transition-all"
          >
            CENTRAL DO CLIENTE
          </a>
        </nav>

        {/* Desktop Contact */}
        <div className="hidden lg:flex flex-col text-right">
          <span className="text-xs font-medium text-[var(--text-muted)]">contato@upconexion.com.br</span>
          <span className="text-sm font-bold text-[var(--brand-primary)]">61 98176-5721</span>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger className="p-2 -mr-2">
              <Menu size={24} className="text-[var(--text-main)]" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <SheetTitle className="text-left mb-10 mt-4">
                <img src="/imgs/logo.png" alt="UP Telecom" className="h-20 w-auto object-contain transform-gpu origin-left" />
              </SheetTitle>
              <nav className="flex flex-col gap-6 mt-4">
                {navLinks.filter(l => l.name !== "CENTRAL DO CLIENTE").map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="text-lg font-bold text-[var(--text-main)] hover:text-[var(--brand-primary)]"
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
                <a
                  href="https://sistema.upconexion.com.br/central_assinante_web/login"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-bold text-[var(--brand-primary)] border-2 border-[var(--brand-primary)] px-4 py-3 rounded-md text-center mt-4 hover:bg-[var(--brand-primary)] hover:text-white transition-all"
                >
                  CENTRAL DO CLIENTE
                </a>
              </nav>
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-2">
                <span className="text-sm font-medium text-[var(--text-muted)]">contato@upconexion.com.br</span>
                <span className="text-lg font-bold text-[var(--brand-primary)]">61 98176-5721</span>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
