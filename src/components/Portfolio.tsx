import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Category = {
  id: string;
  label: string;
  description: string;
  videos: string[]; // YouTube short IDs
};

const categories: Category[] = [
  {
    id: "redes",
    label: "Redes Sociales",
    description: "Contenido orgánico estilo de vida que transmite autenticidad, storytelling, tendencias y experiencias reales.",
    videos: ["LF5KR9OlrbM", "9TuK_54edQw", "eiFYI_y0gVg", "iDhWL8QSfas", "i9KAMvFFVg4"],
  },
  {
    id: "ads",
    label: "Performance & Ads",
    description: "Videos de alta conversión para publicidad paga: reviews, testimoniales y contenido orientado a ventas.",
    videos: ["o3ylRRGQCa0", "TFlHcsiOLr8", "1qQ66toWSLM", "GCeS8GIlABo", "Va3fsqkixX4"],
  },
  {
    id: "product",
    label: "Product Showcase",
    description: "Videos centrados en el producto: unboxing, demostraciones, tomas detalle y contenido e-commerce.",
    videos: ["MbJDLduYy9M", "49QUbT_iJN0", "7UE5fs0IWYc", "z48Y0VGyZcg", "VQB66X6WRnQ", "y0W-_YYGlYc", "oLR0z9eQAAc", "GO8le-JrqeI", "lHq6ToCcAIY", "1g0-K6yzKPc"],
  },
  {
    id: "educativo",
    label: "Educativo & How-To",
    description: "Videos educativos cortos: beneficios del producto, tutoriales, tips, hacks y guías de uso.",
    videos: ["1yCK_8YDak4", "_fJCmWvQ0lw", "EkL_WxvCqic", "oH-NHsYCttg", "KJ04tEDThGg"],
  },
  {
    id: "lifestyle",
    label: "Lifestyle & Brand",
    description: "Contenido que humaniza la marca: storytelling lifestyle, integración del producto y conexión emocional.",
    videos: ["qkhfGOgVYtc", "ovcd7_O_qZs"],
  },
  {
    id: "business",
    label: "Business Content",
    description: "Contenido creado en locación para empresas, restaurantes y marcas, mostrando espacios, equipos de trabajo, servicios y experiencias reales de clientes a través de un storytelling auténtico y humano.",
    videos: ["XFt3lVlrT60", "jyHUC7-Nsw0", "gC41WPwtD_8"],
  },
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

        <Tabs defaultValue="redes" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-12">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-body rounded-full border border-border bg-transparent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted-foreground font-body max-w-2xl mx-auto mb-10"
              >
                {cat.description}
              </motion.p>

              {cat.videos.length === 0 ? (
                <p className="text-center text-muted-foreground/60 font-body italic py-16">
                  Próximamente...
                </p>
              ) : (
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center"
                >
                  {cat.videos.map((id) => (
                    <motion.div
                      key={id}
                      variants={item}
                      className="aspect-[9/16] w-full max-w-[280px] rounded-sm overflow-hidden border border-border"
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
