"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ProjectType } from "../types/projectTypes";
import Project from "@/components/Project";
import { FaArrowRight, FaExclamationCircle } from "react-icons/fa";
import { USER } from "@/constants/user";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [projects, setProjects] = useState<ProjectType[] | null>(null);
  const [projectsFetchError, setProjectsFetchError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(
          `https://api.github.com/users/${USER.githubUsername}/repos?type=owner&sort=updated&direction=desc&per_page=81`
        );
        if (data.ok) {
          const jsonData = await data.json();
          setProjects(jsonData);
        }
      } catch (error) {
        if (error instanceof Error) {
          setProjectsFetchError(error.message);
        }
      }
    })();
  }, []);
  return (
    <div id="projects" className="open-source-projects mt-6 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        ref={ref}
        className="text-5xl font-bold text-center md:text-left bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent mb-8"
      >
        Open Source Projects
      </motion.h2>
      <div className="projects mt-8">
        {projectsFetchError && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg mb-6">
            <span className="text-xl font-semibold flex items-center">
              <FaExclamationCircle className="w-6 h-6 mr-2" />
              {projectsFetchError}
            </span>
          </div>
        )}

        <div className="md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {!projects && !projectsFetchError && (
            <div className="col-span-full flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-700"></div>
            </div>
          )}
          {projects && projects.map((p) => <Project project={p} key={p.id} />)}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/PrasadBroo"
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
