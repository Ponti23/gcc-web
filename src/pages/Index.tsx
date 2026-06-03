import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import EventsSection from "@/components/EventsSection";
import PastorMessage from "@/components/PastorMessage";
import SermonsSection from "@/components/SermonsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PastorMessage />
      <EventsSection />
      <SermonsSection />
      <Footer />
    </div>
  );
};

export default Index;
