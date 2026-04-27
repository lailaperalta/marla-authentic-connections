import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import marlaLogo from "@/assets/marla-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const servicesSubLinks = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Book", href: "#book" },
  ];

  const links = [
    { label: "Por qué elegirnos", href: "#porque" },
    { label: "Nosotras", href: "#nosotras" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-20">
        <a href="#" className="flex items-center">
          <img src={marlaLogo} alt="MARLA" className="h-40 w-auto object-contain" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {/* Servicios dropdown */}
          <div className="relative group">
            <a
              href="#servicios"
              className="flex items-center gap-1 text-sm font-body uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors py-6"
            >
              Servicios
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </a>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background border border-border/50 rounded-sm shadow-lg py-2 min-w-[160px]">
                {servicesSubLinks.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="block px-5 py-2.5 text-sm font-body uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full text-sm font-body uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
              <ChevronDown
                size={14}
                className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mt-3 pl-4 space-y-3 border-l border-border">
                {servicesSubLinks.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="block text-sm font-body uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-body uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
