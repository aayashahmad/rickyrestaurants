import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import MenuSection from "@/components/MenuSection/MenuSection";
import CateringSection from "@/components/CateringSection/CateringSection";
import ReservationSection from "@/components/ReservationSection/ReservationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MenuSection />
      <CateringSection />
      <ReservationSection />
    </>
  );
}
