import HeroSection from "@/components/sections/HeroSection";
import DemoSection from "@/components/sections/DemoSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WaitlistBenefitsSection from "@/components/sections/WaitlistBenefitsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DemoSection />
      <FeaturesSection />
      <WaitlistBenefitsSection />
      <HowItWorksSection />
      <FinalCTASection />
      <Footer />
    </>
  );
}
