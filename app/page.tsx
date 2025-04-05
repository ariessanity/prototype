import AvailableTest from "@/components/sections/available-test";
import HeroSection from "@/components/sections/hero";
import HowItWorksSection from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <HeroSection />
      <HowItWorksSection />
      <AvailableTest />
    </section>
  );
}
