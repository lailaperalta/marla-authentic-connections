import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground">
              UGC · Paid Ads · Contenido Orgánico
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] text-foreground">
              Contenido que{" "}
              <span className="italic text-primary">conecta</span>,<br />
              resultados que{" "}
              <span className="italic text-primary">transforman</span>
            </h1>
          </div>
          <p className="text-lg font-body text-muted-foreground max-w-md leading-relaxed">
            Creamos contenido auténtico y estratégico que acerca tu marca a las personas que realmente importan.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="#servicios"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-body font-medium text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
            >
              Conocé nuestros servicios
            </a>
            <a
              href="#nosotras"
              className="inline-flex items-center px-8 py-4 border border-foreground text-foreground font-body font-medium text-sm uppercase tracking-wider rounded-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Sobre nosotras
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={heroImage}
              alt="Workspace creativo de MARLA agency"
              className="w-full h-full object-cover"
              width={1280}
              height={960}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/30 rounded-sm" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
