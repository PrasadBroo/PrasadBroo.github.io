"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectType } from "@/types/projectTypes";
import { FaFire, FaStar, FaBook } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

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
      transition={{ duration: 0.5 }}
      ref={ref}
      className="project dark:hover:bg-purple-900 shadow-2xl dark:border dark:rounded transition border dark:border-gray-700 border-gray-200 p-3 my-4 hover:shadow-lg flex flex-col "
      href={project.html_url}
      target="_blank"
    >
      <div className="">
        <FaBook className=" inline text-xl text-purple-70 dark:text-white" />

        <h3 className=" text-2xl inline ml-4">
          {project.name.split(/_|-/).join(" ")}
          {project.archived && (
            <sup className="archived bg-red-400 align-super text-white p-1 rounded-lg text-[10px]">
              archived
            </sup>
          )}
        </h3>
      </div>
      <div className="info mt-4 line-clamp-2 text-gray-700 dark:text-white h-14 overflow-hidden">
        <span className="text-orange-600 text-xl mr-2">
          <FaFire className=" inline" />
        </span>
        {project.description}
      </div>
      <div className="">
        {project.topics.map((t) => (
          <span
            key={t}
            className={`inline-block capitalize m-2 ml-0 text-sm rounded-full transition hover:bg-purple-700 dark:hover:bg-white text-white dark:text-black p-2 bg-purple-500 py-1 font-semibold`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center justify-between text-gray-700 dark:text-white">
          <div className=" flex items-center justify-between mr-4">
            <div
              className={` h-3 w-3 rounded-full  mr-2 ${
                languageColors[project.language as keyof LanguageColorsType] ??
                " bg-purple-light"
              }`}
            ></div>
            <span>{project.language ?? "💗"}</span>
          </div>
          <div className="flex items-center justify-between mr-4">
            <span className=" mr-2">
              <FaCodeFork className=" inline" />
            </span>
            <span className="">{project.forks}</span>
          </div>
          <div className="flex items-center justify-between mr-4">
            <span className=" text-yellow-400 mr-2">
              <FaStar className=" inline" />
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
