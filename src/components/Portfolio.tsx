import { motion } from "framer-motion";

const reels = [
  "DWUl-3KD_sC",
  "DVe1m0cERRc",
  "DVMh9dRjwue",
  "DUWhWEgj366",
  "DV9fK3voBta",
  "DU4RPUWDXH5",
  "DQaOu0eDQ54",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <p className="text-sm font-body uppercase tracking-[0.3em] text-primary">
            Nuestro trabajo
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground">
            Portfolio
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {reels.map((id) => (
            <motion.div
              key={id}
              variants={item}
              className="aspect-[9/16] rounded-sm overflow-hidden border border-border"
            >
              <iframe
                src={`https://www.instagram.com/reel/${id}/embed/`}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
