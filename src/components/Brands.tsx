import { motion } from "framer-motion";

const brands = [
  "La Roche-Posay",
  "Bagovit",
  "Megatone",
  "Interseller",
  "Armytech",
  "Intektoys",
  "Buho",
  "Levys Bazar",
  "Concesionaria SVA",
  "Cosméticos Debbie",
  "Detodito",
  "TryAxon",
  "Vichy",
  "La Puissance",
  "Ligero",
  "L'Oréal Elvive",
  "Pantene",
  "Colgate",
  "Campari",
  "Aperol",
  "REVA",
  "Berry Investing",
  "Bloomei",
  "CTRL Recovery",
  "Neumáticos Corral",
  "Alpina",
  "Natura",
  "Las Margaritas",
  "Pilsar",
  "Farmacia Leloir",
  "Gadnic",
  "Tevelam",
  "Larpon",
  "Mercado Libre",
  "Santa Clara",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Brands = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-sm font-body uppercase tracking-[0.3em] text-primary">
            Confían en nosotras
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground">
            Marcas
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-5xl mx-auto"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand}
              variants={item}
              className="px-5 py-3 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <span className="text-sm font-body text-muted-foreground whitespace-nowrap">
                {brand}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
