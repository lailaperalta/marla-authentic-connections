import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const contacts = [
  { name: "Martina", phone: "+54 9 297 409 8096", href: "https://wa.me/5492974098096" },
  { name: "Laila", phone: "+54 9 11 3106 0169", href: "https://wa.me/5491131060169" },
];

const WhatsAppCTA = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left space-y-2">
            <p className="text-sm font-body uppercase tracking-[0.3em] text-primary">
              Hablemos
            </p>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-foreground">
              Comunicate con nosotras por WhatsApp
            </h3>
            <p className="font-body text-muted-foreground">
              Respondemos rápido y te ayudamos a impulsar tu marca.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {contacts.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[hsl(142,70%,40%)] text-white font-body hover:scale-105 transition-transform shadow-lg"
              >
                <MessageCircle size={28} />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wider opacity-90">{c.name}</p>
                  <p className="text-sm font-medium">{c.phone}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
