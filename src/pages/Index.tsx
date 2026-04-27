import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Book from "@/components/Book";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatsAppCTA />
      <Services />
      <Portfolio />
      <Book />
      <WhyUs />
      <About />
      <Brands />
      <Footer />
    </div>
  );
};

export default Index;
