import LandingSection from "@/sections/LandingSection";
import HomePageLayout from "./HomePageLayout";
import WhatIDoSection from "@/sections/WhatIDoSection";
import ProficiencySection from "@/sections/ProficiencySection";

export default function Home() {
  return (
    <HomePageLayout>
      <LandingSection />
      <WhatIDoSection />
      <ProficiencySection />
    </HomePageLayout>
  );
}
