import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpiralCards3D from "@/components/SpiralCards3D";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ToolsSection from "@/components/ToolsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <SpiralCards3D />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ToolsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
