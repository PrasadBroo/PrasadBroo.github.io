import LandingSection from "@/sections/LandingSection";
import HomePageLayout from "./HomePageLayout";
import WhatIDoSection from "@/sections/WhatIDoSection";

export default function Home() {
  return (
    <HomePageLayout>
      <LandingSection />
      <WhatIDoSection />
    </HomePageLayout>
  );
}
