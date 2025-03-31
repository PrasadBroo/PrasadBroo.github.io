import LandingSection from "@/sections/LandingSection";
import HomePageLayout from "./HomePageLayout";
import WhatIDoSection from "@/sections/WhatIDoSection";
import ProficiencySection from "@/sections/ProficiencySection";
import ProjectsSection from "@/sections/ProjectsSection";

export default function Home() {
  return (
    <HomePageLayout>
      <LandingSection />
      <WhatIDoSection />
      <ProficiencySection />
      <ProjectsSection />
    </HomePageLayout>
  );
}
