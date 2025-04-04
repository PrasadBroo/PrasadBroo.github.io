"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaBolt,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

import clsx from "clsx";

const SKILLS = [
  {
    id: "html-5",
    icon: <FaHtml5 />,
    borderColor: "dark:border-orange-600 dark:text-orange-600 border-gray-200",
  },
  {
    id: "css3",
    icon: <FaCss3Alt />,
    borderColor: "dark:border-blue-500 dark:text-blue-500 border-gray-200",
  },
  {
    id: "sass",
    icon: <FaSass />,
    borderColor: "dark:border-pink-500 dark:text-pink-500 border-gray-200",
  },
  {
    id: "javascript",
    icon: <FaJs />,
    borderColor: "dark:border-yellow-400 dark:text-yellow-400 border-gray-200",
  },
  {
    id: "react",
    icon: <FaReact />,
    borderColor: "dark:border-cyan-400 dark:text-cyan-400 border-gray-200",
  },
  {
    id: "nextjs",
    icon: <RiNextjsFill />,
    borderColor: "dark:border-white dark:text-white border-gray-200",
  },
  {
    id: "nodejs",
    icon: <FaNodeJs />,
    borderColor: "dark:border-green-500 dark:text-green-500 border-gray-200",
  },
  {
    id: "database",
    icon: <FaDatabase />,
    borderColor: "dark:border-gray-500 dark:text-gray-500 border-gray-200",
  },
  {
    id: "git",
    icon: <FaGitAlt />,
    borderColor: "dark:border-red-500 dark:text-red-500 border-gray-200",
  },
  {
    id: "typescript",
    icon: <SiTypescript />,
    borderColor: "dark:border-blue-600 dark:text-blue-600 border-gray-200",
  },
];

export default function WhatIDoSection() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.5 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.5 });

  return (
    <div
      id="skills"
      className="what-i-do mt-8 flex flex-col md:flex-row items-center justify-between  p-3 scroll-mt-20"
    >
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: -50 }}
        animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 order-2 md:order-none"
      >
        <Image
          src="/images/coding.png"
          alt="coding"
          className=" max-h-[500px]"
          loading="lazy"
          width={500}
          height={500}
        />
      </motion.div>
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, x: 50 }}
        animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 self-start order-1 md:order-none"
      >
        <h2 className="text-5xl font-bold text-center md:text-left bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">
          What I Do
        </h2>
        <p className="text-gray-500 dark:text-white md:text-2xl text-xl text-center md:text-left mt-6 tracking-wide">
          I&apos;m a Full Stack Developer specializing in modern web
          applications.
        </p>
        <div className="skills-icons mt-10 flex items-center justify-center md:justify-start flex-wrap gap-5 order-1">
          {SKILLS.map((skill) => (
            <div
              key={skill.id}
              className={clsx(
                "m-2 h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-2xl text-purple-700  hover:scale-110 transition-transform shadow-md hover:shadow-lg border",
                skill.borderColor
              )}
            >
              {skill.icon}
            </div>
          ))}
        </div>
        <div className="points text-gray-500 dark:text-white text-xl space-y-4 mt-8 order-2">
          <p className="flex items-center transition-transform hover:translate-x-2">
            <FaBolt className="mr-4 text-yellow-400 flex-shrink-0" />
            <span>
              Develop elegant and intuitive user interfaces for websites and web
              applications
            </span>
          </p>
          <p className="flex items-center transition-transform hover:translate-x-2">
            <FaBolt className="mr-4 text-yellow-400 flex-shrink-0" />
            <span>
              Create interactive and responsive web experiences that work across
              all devices
            </span>
          </p>
          <p className="flex items-center transition-transform hover:translate-x-2">
            <FaBolt className="mr-4 text-yellow-400 flex-shrink-0" />
            <span>
              Seamlessly integrate third-party APIs to enhance website
              functionality
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
