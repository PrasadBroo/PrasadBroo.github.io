"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function ProficiencySection() {
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, amount: 0.5 });
  return (
    <div
      id="proficiency"
      className="proficiency mt-8 flex flex-col md:flex-row items-center justify-between  p-3 scroll-mt-20"
    >
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isContentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="flex-1 self-start"
      >
        <div className="">
          <h2 className="text-5xl text-center md:text-left">Proficiency</h2>
          <div className="skill mt-6">
            <div className=" mb-4 text-2xl">Frontend</div>
            <div className="w-full h-4 rounded-lg bg-gray-300 dark:bg-gray-50">
              <div className=" w-11/12 h-full rounded-lg bg-purple-700 dark:bg-purple-500"></div>
            </div>
          </div>
          <div className="skill mt-6">
            <div className=" mb-4 text-2xl">Backend</div>
            <div className="w-full h-4 rounded-lg bg-gray-300 dark:bg-gray-50">
              <div className=" w-4/5 h-full rounded-lg bg-purple-700 dark:bg-purple-500"></div>
            </div>
          </div>
          <div className="skill mt-6">
            <div className=" mb-4 text-2xl">Programming</div>
            <div className="w-full h-4 rounded-lg bg-gray-300 dark:bg-gray-50">
              <div className=" w-4/5 h-full rounded-lg bg-purple-700 dark:bg-purple-500"></div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="flex-1">
        <Image
          src="/images/building-code.png"
          alt="coding"
          className=" h-auto w-auto mx-auto"
          width={700}
          height={700}
        />
      </motion.div>
    </div>
  );
}
