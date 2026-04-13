import { motion } from "framer-motion";

interface Brand {
  name: string;
  logo: string;
  scale: number; // optical balance scale factor
}

const brands: Brand[] = [
  // Wide/horizontal logos → smaller scale
  { name: "La Roche-Posay", logo: "https://logo.clearbit.com/laroche-posay.com", scale: 0.95 },
  { name: "Bagovit", logo: "https://logo.clearbit.com/bagovit.com.ar", scale: 0.85 },
  { name: "Megatone", logo: "https://logo.clearbit.com/megatone.net", scale: 0.9 },
  { name: "Interseller", logo: "https://logo.clearbit.com/interseller.io", scale: 0.85 },
  { name: "Armytech", logo: "https://logo.clearbit.com/armytech.com.ar", scale: 0.85 },
  { name: "Intektoys", logo: "https://logo.clearbit.com/intektoys.com", scale: 0.85 },
  { name: "Buho", logo: "https://logo.clearbit.com/buho.la", scale: 0.8 },
  { name: "Levys Bazar", logo: "https://logo.clearbit.com/levysbazar.com", scale: 0.85 },
  { name: "Concesionaria SVA", logo: "https://logo.clearbit.com/sva.com.ar", scale: 0.9 },
  { name: "Cosméticos Debbie", logo: "https://logo.clearbit.com/cosmeticosdebbie.com", scale: 0.85 },
  { name: "Detodito", logo: "https://logo.clearbit.com/detodito.com.ar", scale: 0.85 },
  { name: "TryAxon", logo: "https://logo.clearbit.com/axonarg.com", scale: 0.85 },
  { name: "Vichy", logo: "https://logo.clearbit.com/vichy.com", scale: 0.85 },
  { name: "La Puissance", logo: "https://logo.clearbit.com/lapuissance.com.ar", scale: 0.9 },
  { name: "Ligero", logo: "https://logo.clearbit.com/ligero.com.ar", scale: 0.85 },
  { name: "L'Oréal Elvive", logo: "https://logo.clearbit.com/loreal.com", scale: 0.95 },
  { name: "Pantene", logo: "https://logo.clearbit.com/pantene.com", scale: 0.9 },
  { name: "Colgate", logo: "https://logo.clearbit.com/colgate.com", scale: 0.95 },
  { name: "Campari", logo: "https://logo.clearbit.com/campari.com", scale: 0.9 },
  { name: "Aperol", logo: "https://logo.clearbit.com/aperol.com", scale: 0.85 },
  { name: "REVA", logo: "https://logo.clearbit.com/reva.com", scale: 0.8 },
  { name: "Berry Investing", logo: "https://logo.clearbit.com/berryinvesting.com", scale: 0.85 },
  { name: "Bloomei", logo: "https://logo.clearbit.com/bloomei.com", scale: 0.85 },
  { name: "CTRL Recovery", logo: "https://logo.clearbit.com/ctrlrecovery.com", scale: 0.85 },
  { name: "Neumáticos Corral", logo: "https://logo.clearbit.com/neumaticoscorral.com", scale: 0.9 },
  { name: "Alpina", logo: "https://logo.clearbit.com/alpina.com", scale: 0.85 },
  { name: "Natura", logo: "https://logo.clearbit.com/natura.com.br", scale: 0.9 },
  { name: "Las Margaritas", logo: "https://logo.clearbit.com/lasmargaritas.com.ar", scale: 0.85 },
  { name: "Pilsar", logo: "https://logo.clearbit.com/pilsar.com.ar", scale: 0.85 },
  { name: "Farmacia Leloir", logo: "https://logo.clearbit.com/farmacialeloir.com.ar", scale: 0.85 },
  { name: "Gadnic", logo: "https://logo.clearbit.com/gadnic.com.ar", scale: 0.85 },
  { name: "Tevelam", logo: "https://logo.clearbit.com/tevelam.com", scale: 0.85 },
  { name: "Larpon", logo: "https://logo.clearbit.com/larpon.com.ar", scale: 0.85 },
  { name: "Mercado Libre", logo: "https://logo.clearbit.com/mercadolibre.com", scale: 0.95 },
  { name: "Santa Clara", logo: "https://logo.clearbit.com/santaclara.com.ar", scale: 0.85 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const BrandLogo = ({ brand }: { brand: Brand }) => {
  const [imgError, setImgError] = React.useState(false);

  if (imgError) {
    // Fallback: clean typographic logo
    return (
      <div
        className="flex items-center justify-center group"
        style={{ width: 120, height: 60 }}
      >
        <span
          className="font-display font-semibold text-foreground/40 group-hover:text-foreground transition-all duration-300 text-center leading-tight"
          style={{ fontSize: brand.name.length > 12 ? 11 : 13 }}
        >
          {brand.name}
        </span>
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center group"
      style={{ width: 120, height: 60 }}
    >
      <img
        src={brand.logo}
        alt={brand.name}
        onError={() => setImgError(true)}
        className="max-w-full max-h-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          transform: `scale(${brand.scale})`,
        }}
        loading="lazy"
      />
    </div>
  );
};

import React from "react";

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
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 md:gap-10 max-w-6xl mx-auto items-center justify-items-center"
        >
          {brands.map((brand) => (
            <motion.div key={brand.name} variants={item}>
              <BrandLogo brand={brand} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
