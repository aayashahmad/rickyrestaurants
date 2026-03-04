import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import MenuSection from "@/components/MenuSection/MenuSection";
import DeliverySection from "@/components/DeliverySection/DeliverySection";
import CateringSection from "@/components/CateringSection/CateringSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MenuSection />
      <CateringSection />
      <DeliverySection />
    </>
  );
}
