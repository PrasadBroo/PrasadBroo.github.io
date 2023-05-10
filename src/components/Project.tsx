import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectType } from "../types/projectTypes";

type PropsType = {
  project: ProjectType;
};

type LanguageColorsType = {
  JavaScript: string;
  CSS: string;
  HTML: string;
  TypeScript: string;
};

const languageColors: LanguageColorsType = {
  JavaScript: "bg-yellow-400",
  CSS: "bg-blue-500",
  HTML: "bg-orange-500",
  TypeScript: "bg-blue-400",
};
export default function Project({ project }: PropsType) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      ref={ref}
      className="project  shadow-md dark:hover:bg-purple-primary dark:border dark:rounded transition dark:border-gray-400 p-3 my-4 hover:shadow-lg block "
      href={project.html_url}
      target="_blank"
    >
      <div className="">
        <i className="fa-solid fa-book  text-xl text-purple-primary dark:text-white"></i>

        <h3 className=" text-2xl inline ml-4">
          {project.name.split(/_|-/).join(" ")}
        </h3>
      </div>
      <div className="info mt-4 line-clamp-2 text-gray-700 dark:text-white">
        <span className="text-orange-600 text-xl mr-2">
          <i className="fa-solid fa-fire "></i>
        </span>
        {project.description}
      </div>
      <div className="">
        {project.topics.map((t: string) => (
          <span
            key={t}
            className={`inline-block m-2 ml-0 text-sm rounded-full transition hover:bg-purple-primary dark:hover:bg-white text-white dark:text-black p-2 bg-purple-light py-1 font-semibold`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between flex-wrap">
        <div className="flex items-center justify-between text-gray-700 dark:text-white">
          <div className=" flex items-center justify-between mr-4">
            <div
              className={
                " h-3 w-3 rounded-full  mr-2 " +
                languageColors[project.language as keyof LanguageColorsType]
              }
            ></div>
            <span>{project.language}</span>
          </div>
          <div className="flex items-center justify-between mr-4">
            <span className=" mr-2">
              <i className="fa-solid fa-code-fork"></i>
            </span>
            <span className="">{project.forks}</span>
          </div>
          <div className="flex items-center justify-between mr-4">
            <span className=" text-yellow-400 mr-2">
              <i className="fa-solid fa-star"></i>
            </span>
            <span>{project.stargazers_count}</span>
          </div>
        </div>
        <div className="">
          <span>{project.size} KB</span>
        </div>
      </div>
    </motion.a>
  );
}
