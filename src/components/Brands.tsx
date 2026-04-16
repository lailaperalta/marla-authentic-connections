import { motion } from "framer-motion";

interface Brand {
  name: string;
  logo: string;
  scale: number;
  invert?: boolean; // for white-only logos that need inversion on light bg
}

const brands: Brand[] = [
  { name: "La Roche-Posay", logo: "/brands/larocheposay.png", scale: 0.9 },
  { name: "Bagovit", logo: "/brands/bagovit.png", scale: 0.85 },
  { name: "Megatone", logo: "/brands/megatone.png", scale: 0.8 },
  { name: "Interseller", logo: "/brands/interseller.png", scale: 0.75 },
  { name: "Armytech", logo: "/brands/armytech.png", scale: 0.85 },
  { name: "Playmobil", logo: "/brands/playmobil.png", scale: 0.85 },
  { name: "Hot Wheels", logo: "/brands/hotwheels.png", scale: 0.9 },
  { name: "Bigland", logo: "/brands/bigland.png", scale: 0.85 },
  { name: "Levys Bazar", logo: "/brands/levysbazar.png", scale: 0.8 },
  { name: "Concesionaria SVA", logo: "/brands/sva.png", scale: 0.8 },
  { name: "Cosméticos Debbie", logo: "/brands/debbie.png", scale: 0.9 },
  { name: "Detodito", logo: "/brands/detodito.png", scale: 0.85 },
  { name: "TryAxon", logo: "/brands/axon.png", scale: 0.75 },
  { name: "Vichy", logo: "/brands/vichy.png", scale: 0.85 },
  { name: "La Puissance", logo: "/brands/lapuissance.png", scale: 0.85 },
  { name: "L'Oréal Elvive", logo: "/brands/elvive.png", scale: 0.8 },
  { name: "Colgate", logo: "/brands/colgate.png", scale: 0.9 },
  { name: "Campari", logo: "/brands/campari.png", scale: 0.85 },
  { name: "Aperol", logo: "/brands/aperol.png", scale: 0.75 },
  { name: "REVA", logo: "/brands/reva.png", scale: 0.8 },
  { name: "Berry Investing", logo: "/brands/berryinvesting.png", scale: 0.7 },
  { name: "Bloomei", logo: "/brands/bloomei.png", scale: 0.7, invert: true },
  { name: "CTRL Recovery", logo: "/brands/ctrl.png", scale: 0.8, invert: true },
  { name: "Neumáticos Corral", logo: "/brands/corral.png", scale: 0.7, invert: true },
  { name: "Natura", logo: "/brands/natura.png", scale: 0.75 },
  { name: "Las Margaritas", logo: "/brands/lasmargaritas.png", scale: 0.7 },
  { name: "Farmacia Leloir", logo: "/brands/leloir.png", scale: 0.8 },
  { name: "Gadnic", logo: "/brands/gadnic.png", scale: 0.9 },
  { name: "Tevelam", logo: "/brands/tevelam.png", scale: 0.7, invert: true },
  { name: "Mercado Libre", logo: "/brands/mercadolibre.png", scale: 0.75 },
  { name: "Santa Clara", logo: "/brands/santaclara.png", scale: 0.85 },
  { name: "Be Sembol", logo: "/brands/besembol.png", scale: 0.8 },
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
                className={`max-w-full max-h-full object-contain transition-all duration-300 ease-in-out
                  grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100
                  group-hover:scale-110
                  ${brand.invert ? "invert group-hover:invert-0" : ""}`}
                style={{ transform: `scale(${brand.scale})` }}
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
