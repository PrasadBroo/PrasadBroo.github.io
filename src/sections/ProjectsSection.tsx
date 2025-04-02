import { ProjectType } from "../types/projectTypes";
import Project from "@/components/Project";
import { USER } from "@/constants/user";
import { FaArrowRight } from "react-icons/fa";

async function fetchGithubProjects(): Promise<ProjectType[]> {
  const data = await fetch(
    `https://api.github.com/users/${USER.githubUsername}/repos?type=owner&sort=updated&direction=desc&per_page=8`,
    { next: { revalidate: 60 * 60 * 24 } }
  );
  if (!data.ok) {
    throw new Error("Error fetching github projects!");
  }
  const jsonData = await data.json();
  return jsonData;
}
export default async function ProjectsSection() {
  const projects = await fetchGithubProjects();
  return (
    <div id="projects" className="open-source-projects mt-6 scroll-mt-20">
      <h2 className="text-5xl font-bold text-center md:text-left bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent mb-8">
        Open Source Projects
      </h2>
      <div className="projects mt-8">
        <div className="md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {projects && projects.map((p) => <Project project={p} key={p.id} />)}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`https://github.com/${USER.githubUsername}`}
            target="_blank"
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider flex items-center justify-center mx-auto w-max"
          >
            <span>More Projects</span>
            <FaArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
