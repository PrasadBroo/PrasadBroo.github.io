import IconSkill from "../components/IconSkill";
import typescriptImg from "../assets/icons/icons8-typescript-48.png";
import codingImg from "../assets/images/coding.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhatIDoSection() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.5 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.5 });

  return (
    <div
      id="skills"
      className="what-i-do mt-8 flex flex-col md:flex-row items-center justify-between  p-3"
    >
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: -50 }}
        animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        className="flex-1 order-2 md:order-none"
      >
        <img src={codingImg} alt="coding" className=" max-h-[500px]" />
      </motion.div>
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, x: 50 }}
        animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        className="flex-1 self-start order-1 md:order-none"
      >
        <h2 className=" text-5xl text-center md:text-left">What i do</h2>
        <p className="text-gray-500 dark:text-white md:text-2xl text-xl text-center md:text-left mt-8">
          Im Full Stack Developer,Focusing On Web Applications
        </p>
        <div className="skills-icons mt-6 flex items-center  flex-wrap  justify-center">
          <IconSkill skillName="html-5">
            <i className="fa-brands fa-html5"></i>
          </IconSkill>
          <IconSkill skillName="css3">
            <i className="fa-brands fa-css3-alt"></i>
          </IconSkill>
          <IconSkill skillName="sass">
            <i className="fa-brands fa-sass"></i>
          </IconSkill>
          <IconSkill skillName="javascript">
            <i className="fa-brands fa-js"></i>
          </IconSkill>
          <IconSkill skillName="reactjs">
            <i className="fa-brands fa-react"></i>
          </IconSkill>
          <IconSkill skillName="nodejs">
            <i className="fa-brands fa-node-js"></i>
          </IconSkill>
          <IconSkill skillName="mongodb">
            <i className="fa-solid fa-database"></i>
          </IconSkill>
          <IconSkill skillName="firebase">
            <i className="fa-solid fa-fire"></i>
          </IconSkill>
          <IconSkill skillName="typescript">
            <img
              src={typescriptImg}
              alt="typescript"
              className=" mx-auto my-0"
            />
          </IconSkill>
        </div>
        <div className="points text-gray-500 dark:text-white text-xl">
          <p>
            <i className="fa-solid fa-bolt  mr-4 text-yellow-400"></i>
            Develope good looking User Interfaces For Wesites,Web Applications
          </p>
          <p>
            <i className="fa-solid fa-bolt mr-4 text-yellow-400"></i>Makes Web
            Applications Interactive,With Responsiveness
          </p>
          <p>
            <i className="fa-solid fa-bolt mr-4 text-yellow-400"></i>
            Integrates Third Party Api's In Websites, Web Application
          </p>
        </div>
      </motion.div>
    </div>
  );
}
