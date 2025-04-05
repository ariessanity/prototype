import AvailableTestSection from "@/components/sections/available-test";
import BoostYourAbilitesSection from "@/components/sections/boost-your-abilities";
import HeroSection from "@/components/sections/hero";
import HowItWorksSection from "@/components/sections/how-it-works";
import WhatWillYouGetSection from "@/components/sections/what-will-you-get";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
      <HeroSection />
      <HowItWorksSection />
      <AvailableTestSection />
      <BoostYourAbilitesSection />
      <WhatWillYouGetSection />
    </section>
  );
}
