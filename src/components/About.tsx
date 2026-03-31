import { motion } from "framer-motion";
import foto1 from "@/assets/foto1.png";
import foto2 from "@/assets/foto2.png";

const About = () => {
  return (
    <section id="nosotras" className="py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm font-body uppercase tracking-[0.3em] text-primary">
              Sobre nosotras
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground leading-tight">
              Martina & Laila
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Somos <strong className="text-foreground">Martina Lometti</strong> y{" "}
                <strong className="text-foreground">Laila Peralta</strong>, las creadoras detrás de MARLA. Combinamos nuestra pasión por el contenido visual con una visión estratégica de marketing digital.
              </p>
              <p>
                Creemos que las marcas que se destacan son las que se animan a comunicar de manera auténtica. Por eso, cada proyecto que tomamos tiene un enfoque único: entender tu esencia, traducirla en contenido real y conectarla con las personas correctas.
              </p>
              <p>
                Desde UGC hasta campañas de paid ads, nuestro objetivo es simple: que tu marca sea visible, relevante y memorable.
              </p>
            </div>
            <div className="flex gap-6 pt-4">
              <a
                href="https://instagram.com/martiilometti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-body text-primary hover:text-foreground transition-colors underline underline-offset-4"
              >
                @martiilometti
              </a>
              <a
                href="https://instagram.com/laila.peralta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-body text-primary hover:text-foreground transition-colors underline underline-offset-4"
              >
                @laila.peralta
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex gap-6 items-center justify-center"
          >
            <div className="relative">
              <img
                src={foto1}
                alt="Martina Lometti"
                className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
              />
              <p className="text-center mt-3 text-sm font-body text-muted-foreground">Martina</p>
            </div>
            <div className="relative">
              <img
                src={foto2}
                alt="Laila Peralta"
                className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
              />
              <p className="text-center mt-3 text-sm font-body text-muted-foreground">Laila</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
