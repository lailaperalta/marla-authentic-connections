import { motion } from "framer-motion";
import { Heart, Eye, Target, Zap } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Autenticidad real",
    text: "No hacemos publicidad que parezca publicidad. Creamos contenido que se siente como una recomendación de un amigo.",
  },
  {
    icon: Eye,
    title: "Visión estratégica",
    text: "Cada pieza de contenido tiene un propósito claro: generar visibilidad, conexión y conversiones para tu marca.",
  },
  {
    icon: Target,
    title: "Resultados medibles",
    text: "Combinamos creatividad con data. Medimos, optimizamos y escalamos lo que funciona.",
  },
  {
    icon: Zap,
    title: "Enfoque integral",
    text: "UGC + Paid Ads + Orgánico. Una estrategia completa que cubre todos los frentes del marketing digital.",
  },
];

const WhyUs = () => {
  return (
    <section id="porque" className="py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20 space-y-4"
        >
          <p className="text-sm font-body uppercase tracking-[0.3em] text-primary">
            Nuestro diferencial
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg font-body text-muted-foreground leading-relaxed">
            Aprovechamos la magia del UGC para crear material visual y narrativo que se siente real, cercano y valioso.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <r.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-display font-medium text-foreground mb-2">
                  {r.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {r.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
