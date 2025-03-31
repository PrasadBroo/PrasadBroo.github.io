"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiLeetcode } from "react-icons/si";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaLaptopCode,
  FaStackOverflow,
  FaGamepad,
  FaLightbulb,
} from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";

// Social links data with icons from react-icons
const SOCIAL_LINKS = [
  {
    id: "github",
    icon: <FaGithub />,
    url: "https://github.com/PrasadBroo",
    className: "bg-gray-700 border dark:border-gray-700 border-gray-200",
  },
  {
    id: "leetcode",
    icon: <SiLeetcode />,
    url: "https://leetcode.com/u/Prasadbro/",
    className: "bg-green-600 border dark:border-gray-700 border-gray-200",
  },
  {
    id: "linkedin",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/prasad-shinde/",
    className: "bg-blue-600 border dark:border-gray-700 border-gray-200",
  },
  {
    id: "twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/prasad_bro",
    className: "bg-blue-400 border dark:border-gray-700 border-gray-200",
  },
  {
    id: "stackoverflow",
    icon: <FaStackOverflow />,
    url: "https://stackoverflow.com/users/prasad-shinde",
    className: "bg-orange-500 border dark:border-gray-700 border-gray-200",
  },
  {
    id: "email",
    icon: <FaEnvelope />,
    url: "mailto:contact@prasadshinde.com",
    className: "bg-red-500 border dark:border-gray-700 border-gray-200",
  },
];

const varinats = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
export default function LandingSection() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={varinats}
      transition={{ duration: 1 }}
      className="landing flex items-center justify-between p-3 flex-col md:flex-row"
    >
      <div className="flex-1 md:flex-[1.5] lg:flex-1">
        <h1 className=" font-extrabold text-3xl md:text-5xl  text-center md:text-left">
          Hi all, I&apos;m Prasad
          <motion.img
            className=" h-12 w-12 lg:h-16 lg:w-16 inline-block"
            src="images/hand.png"
            alt="hand"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -10, 12, -10, 9, 0, 0] }}
            transition={{
              duration: 1,
              delay: 2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </h1>
        <p className=" text-gray-500 dark:text-white lg:text-3xl md:text-2xl  text-xl text-center md:text-left mt-8 tracking-wider text-balance">
          <FaLaptopCode className="inline mr-3  text-purple-700 dark:text-white" />
          I&apos;m Prasad, a Full Stack Developer with hands-on experience in
          building scalable and visually appealing web applications. When
          I&apos;m not coding, I enjoy playing games
          <FaGamepad className="inline mx-2 text-blue-700 dark:text-white" />
          and staying updated with the latest trends in web development.
          <FaLightbulb className="inline mr-3 text-yellow-500 dark:text-white" />
        </p>
        <div className="social-links flex items-center justify-between lg:w-1/2 mt-6">
          {SOCIAL_LINKS.map((link) => (
            <Link
              href={link.url}
              target="_blank"
              key={link.id}
              className={clsx(
                "h-10 w-10 rounded-full hover:bg-gray-800 text-white text-2xl flex items-center justify-center hover:scale-95 transition-transform",
                link.className
              )}
            >
              {link.icon}
            </Link>
          ))}
        </div>
        <div className="btns mt-8 lg:w-1/2 flex items-center justify-between">
          <Link
            href="#contact"
            className=" bg-purple-900  border-purple-700 border transition hover:bg-white hover:text-purple-600 dark:hover:text-purple-700  py-2 px-3 rounded-md uppercase text-white text-xl"
          >
            Contact Me
          </Link>
          <Link
            href="resume"
            className=" bg-gray-900  border dark:border-gray-700 border-gray-200 transition hover:bg-white  hover:text-purple-600   py-2 px-3 rounded-md uppercase text-white text-xl"
          >
            My Resume
          </Link>
        </div>
      </div>
      <div className=" flex-1 mt-16 md:mt-0">
        <Image
          src="/svg/manOnTable.svg"
          alt="man-on-table"
          width={500}
          height={500}
          priority
          className="w-full h-auto"
        />
      </div>
    </motion.div>
  );
}
