import { motion } from "framer-motion";
import { Camera, BarChart3, Sparkles } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "UGC",
    subtitle: "User Generated Content",
    description:
      "Creamos contenido auténtico que se siente real y cercano. Videos, fotos y narrativas que conectan con tu audiencia como una recomendación genuina, no como publicidad.",
  },
  {
    icon: BarChart3,
    title: "Paid Ads",
    subtitle: "Publicidad Paga",
    description:
      "Estrategias de pauta digital que maximizan tu inversión. Combinamos creatividad UGC con segmentación inteligente para llegar a tus clientes potenciales.",
  },
  {
    icon: Sparkles,
    title: "Orgánico",
    subtitle: "Contenido Orgánico",
    description:
      "Desarrollamos la presencia orgánica de tu marca con contenido curado, estético y estratégico que construye comunidad y visibilidad sostenible.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <section id="servicios" className="py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <p className="text-sm font-body uppercase tracking-[0.3em] text-primary">
            Lo que hacemos
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground">
            Nuestros Servicios
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="group p-10 bg-background rounded-sm border border-border hover:border-primary/40 transition-colors duration-300"
            >
              <s.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-display font-medium text-foreground mb-1">
                {s.title}
              </h3>
              <p className="text-xs font-body uppercase tracking-[0.2em] text-primary mb-4">
                {s.subtitle}
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
