import { motion } from "framer-motion";

const Book = () => {
  return (
    <section id="book" className="py-32 bg-background border-t border-border/40">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-sm font-body uppercase tracking-[0.3em] text-primary">
            Fotografía
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground">
            Book
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center py-24 border border-dashed border-border rounded-sm"
        >
          <p className="text-center text-muted-foreground/70 font-body italic text-lg tracking-wide">
            Próximamente...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Book;
