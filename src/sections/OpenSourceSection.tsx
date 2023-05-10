import { motion, useInView } from "framer-motion";
import Project from "../components/Project";
import { useRef } from "react";
import { ProjectType } from "../types/projectTypes";

type PropsType = {
  projects: ProjectType[];
};

export default function OpenSourceSection({ projects }: PropsType) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  return (
    <div id="projects" className="open-source-projects mt-6">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        ref={ref}
        className=" capitalize text-5xl text-center md:text-left"
      >
        Open source projects
      </motion.h2>
      <div className="projects  mt-6 ">
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {projects && projects.map((p) => <Project project={p} key={p.id} />)}
        </div>

        <div className="mt-4 text-center">
          <a
            href="https://github.com/PrasadBroo"
            target="_blank"
            className=" bg-purple-primary cursor-pointer border-purple-primary border transition hover:bg-white hover:text-purple-primary  py-2 px-3 rounded-md uppercase text-white text-xl"
          >
            More Projects
          </a>
        </div>
      </div>
    </div>
  );
}
