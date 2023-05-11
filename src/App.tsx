import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import LandingSection from "./sections/LandingSection";
import WhatIDoSection from "./sections/WhatIDoSection";
import ProficiencySection from "./sections/ProficiencySection";
import OpenSourceSection from "./sections/OpenSourceSection";
import ContactSection from "./sections/ContactSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProjectType } from "./types/projectTypes";

function App() {
  const [projects, setProjects] = useState<ProjectType[] | null>(null);
  const [projectsFetchError, setProjectsFetchError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://api.github.com/users/PrasadBroo/repos?type=owner&sort=updated&direction=desc&per_page=8"
        );
        setProjects(data);
      } catch (error) {
        if (error instanceof Error) {
          setProjectsFetchError(error.message);
        }
      }
    })();
  }, []);

  return (
    <div className="App font-mono">
      <Navbar />
      <main className="  w-11/12 mx-auto md:mt-16 mt-8">
        <LandingSection />
        <WhatIDoSection />
        <ProficiencySection />
        <OpenSourceSection
          projects={projects || []}
          fetchError={projectsFetchError}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
