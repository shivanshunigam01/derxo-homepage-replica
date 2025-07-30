import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import PriceComparisonSection from "@/components/PriceComparisonSection";
import PopularMedicinesSection from "@/components/PopularMedicinesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";
import HealthcareExpertsSection from "@/components/HealthcareExpertsSection ";
import CustomerTestimonials from "./CustomerTestimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategorySection />
      <HealthcareExpertsSection />
      <PriceComparisonSection />
      <PopularMedicinesSection />
      <HowItWorksSection />
      <CustomerTestimonials />
      <WhyChooseSection />
      <Footer />
    </div>
  );
};

export default Index;
