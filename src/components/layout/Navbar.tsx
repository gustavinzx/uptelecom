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
        "sticky top-0 z-50 w-full transition-all duration-300 bg-white",
        scrolled
          ? "shadow-md border-b border-gray-100"
          : "border-b border-gray-100"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 w-full h-24 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center group shrink-0">
          <img src="/imgs/logo.png" alt="UP Telecom" className="h-16 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.filter(l => l.name !== "CENTRAL DO CLIENTE").map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14px] font-bold tracking-wide text-gray-700 hover:text-[var(--brand-primary)] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://sistema.upconexion.com.br/central_assinante_web/login"
            target="_blank"
            rel="noreferrer"
            className="text-[13px] font-bold tracking-wide text-[var(--brand-primary)] bg-transparent border-2 border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white px-6 py-2.5 rounded-full transition-all shadow-sm"
          >
            CENTRAL DO CLIENTE
          </a>
        </nav>

        {/* Desktop Contact */}
        <div className="hidden lg:flex flex-col text-right shrink-0">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Ligue agora</span>
          <span className="text-xl font-bold text-[var(--brand-primary)] font-num leading-tight">61 98176-5721</span>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden ml-auto">
          <Sheet>
            <SheetTrigger className="p-2 -mr-2 text-gray-800">
              <Menu size={28} />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-gray-100">
              <SheetTitle className="text-left mb-10 mt-4">
                <img src="/imgs/logo.png" alt="UP Telecom" className="h-14 w-auto object-contain" />
              </SheetTitle>
              <nav className="flex flex-col gap-6 mt-4">
                {navLinks.filter(l => l.name !== "CENTRAL DO CLIENTE").map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="text-lg font-bold text-gray-700 hover:text-[var(--brand-primary)] transition-colors"
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
                <a
                  href="https://sistema.upconexion.com.br/central_assinante_web/login"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-bold text-[var(--brand-primary)] border-2 border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white px-4 py-3 rounded-full text-center mt-4 transition-all"
                >
                  CENTRAL DO CLIENTE
                </a>
              </nav>
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Ligue agora</span>
                <span className="text-2xl font-bold text-[var(--brand-primary)] font-num">61 98176-5721</span>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
