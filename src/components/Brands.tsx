import { motion } from "framer-motion";

interface Brand {
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { name: "Vichy", logo: "/brands/vichy.png" },
  { name: "Santa Clara", logo: "/brands/santaclara.png" },
  { name: "Mercado Libre", logo: "/brands/mercadolibre.png" },
  { name: "Tevelam", logo: "/brands/tevelam.png" },
  { name: "Gadnic", logo: "/brands/gadnic.png" },
  { name: "Farmacia Leloir", logo: "/brands/leloir.png" },
  { name: "Las Margaritas", logo: "/brands/lasmargaritas.png" },
  { name: "Natura", logo: "/brands/natura.png" },
  { name: "Neumáticos Corral", logo: "/brands/corral.png" },
  { name: "CTRL Recovery", logo: "/brands/ctrl.png" },
  { name: "Bloomei", logo: "/brands/bloomei.png" },
  { name: "Berry Investing", logo: "/brands/berryinvesting.png" },
  { name: "REVA", logo: "/brands/reva.png" },
  { name: "Aperol", logo: "/brands/aperol.png" },
  { name: "Campari", logo: "/brands/campari.png" },
  { name: "Colgate", logo: "/brands/colgate.png" },
  { name: "L'Oréal Elvive", logo: "/brands/elvive.png" },
  { name: "La Puissance", logo: "/brands/lapuissance.png" },
  { name: "TryAxon", logo: "/brands/axon.png" },
  { name: "Cosméticos Debbie", logo: "/brands/debbie.png" },
  { name: "Detodito", logo: "/brands/detodito.png" },
  { name: "Bigland", logo: "/brands/bigland.png" },
  { name: "La Roche-Posay", logo: "/brands/larocheposay.png" },
  { name: "Concesionaria SVA", logo: "/brands/sva.png" },
  { name: "Bagovit", logo: "/brands/bagovit.png" },
  { name: "Megatone", logo: "/brands/megatone.png" },
  { name: "Interseller", logo: "/brands/interseller.png" },
  { name: "Armytech", logo: "/brands/armytech.png" },
  { name: "Hot Wheels", logo: "/brands/hotwheels.png" },
  { name: "Playmobil", logo: "/brands/playmobil.png" },
  { name: "Levys Bazar", logo: "/brands/levysbazar.png" },
  { name: "Be Sembol", logo: "/brands/besembol.png" },
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
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-8 md:gap-10 max-w-6xl mx-auto items-center justify-items-center"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={item}
              className="flex items-center justify-center w-[80px] h-[60px] md:w-[100px] md:h-[70px] group cursor-pointer"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain transition-all duration-300 ease-in-out grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
