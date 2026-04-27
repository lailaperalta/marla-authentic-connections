import marlaLogo from "@/assets/marla-logo.png";

const Footer = () => {
  return (
    <footer id="contacto" className="py-20 border-t border-border">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="space-y-4">
            <img src={marlaLogo} alt="MARLA" className="h-36 w-auto object-contain" />
            <p className="font-body text-sm text-muted-foreground max-w-xs">
              Agencia de UGC y Marketing Digital. Contenido auténtico que conecta.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg text-foreground">Navegación</h4>
            <div className="flex flex-col gap-2">
              {["Servicios", "Por qué elegirnos", "Nosotras"].map((l) => (
                <a
                  key={l}
                  href={`#${l === "Servicios" ? "servicios" : l === "Nosotras" ? "nosotras" : "porque"}`}
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg text-foreground">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm font-body text-muted-foreground">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-foreground/70">Martina</p>
                <a
                  href="https://wa.me/5492974098096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-foreground transition-colors"
                >
                  WhatsApp: +54 9 297 409 8096
                </a>
                <a
                  href="https://instagram.com/martiilometti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-foreground transition-colors"
                >
                  @martiilometti
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-foreground/70">Laila</p>
                <a
                  href="https://wa.me/5491131060169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-foreground transition-colors"
                >
                  WhatsApp: +54 9 11 3106 0169
                </a>
                <a
                  href="https://instagram.com/laila.peralta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-foreground transition-colors"
                >
                  @laila.peralta
                </a>
              </div>

              <div className="pt-3 border-t border-border space-y-1">
                <p className="text-xs uppercase tracking-wider text-foreground/70">MARLA</p>
                <a href="mailto:marlaaggency@gmail.com" className="block hover:text-foreground transition-colors">
                  marlaaggency@gmail.com
                </a>
                <a
                  href="https://www.instagram.com/marlaagency?igsh=MXY2ems0bWF6dTByMA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-foreground transition-colors"
                >
                  @marlaagency
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-xs font-body text-muted-foreground">
            © {new Date().getFullYear()} MARLA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
