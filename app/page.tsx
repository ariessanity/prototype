import AvailableTestSection from "@/components/sections/available-test";
import BoostYourAbilitesSection from "@/components/sections/boost-your-abilities";
import CommunitySection from "@/components/sections/community";
import FaqSection from "@/components/sections/faq";
import HeroSection from "@/components/sections/hero";
import HowItWorksSection from "@/components/sections/how-it-works";
import PricingSection from "@/components/sections/pricing";
import WhatWillYouGetSection from "@/components/sections/what-will-you-get";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
      <HeroSection />
      <HowItWorksSection />
      <AvailableTestSection />
      <BoostYourAbilitesSection />
      <WhatWillYouGetSection />
      <PricingSection />
      <CommunitySection />
      <FaqSection />
    </section>
  );
}
