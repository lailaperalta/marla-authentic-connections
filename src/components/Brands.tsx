import { motion } from "framer-motion";

const brands: string[] = [
  "Vichy",
  "Santa Clara",
  "Mercado Libre",
  "Tevelam",
  "Gadnic",
  "Farmacia Leloir",
  "Las Margaritas",
  "Natura",
  "Neumáticos Corral",
  "CTRL Recovery",
  "Bloomei",
  "Berry Investing",
  "REVA",
  "Aperol",
  "Campari",
  "Colgate",
  "L'Oréal Elvive",
  "La Puissance",
  "TryAxon",
  "Cosméticos Debbie",
  "Detodito",
  "Bigland",
  "La Roche-Posay",
  "Concesionaria SVA",
  "Bagovit",
  "Megatone",
  "Interseller",
  "Armytech",
  "Hot Wheels",
  "Playmobil",
  "Levys Bazar",
  "Be Sembol",
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
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto"
        >
          {brands.map((brand) => (
            <motion.span
              key={brand}
              variants={item}
              className="px-5 py-2.5 rounded-full border border-border bg-card text-foreground text-sm md:text-base font-body transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5 cursor-default"
            >
              {brand}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
