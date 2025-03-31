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
        className="flex-1 self-start w-full md:w-auto"
      >
        <div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h2 className="text-5xl font-bold text-center md:text-left bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent mb-8">
            Proficiency
          </h2>

          <div className="skill mt-8">
            <div className="flex justify-between mb-2">
              <span className="text-2xl font-semibold">Frontend</span>
              <span className="text-xl font-medium">90%</span>
            </div>
            <div className="w-full h-5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div className="w-11/12 h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-1000 ease-in-out"></div>
            </div>
          </div>

          <div className="skill mt-8">
            <div className="flex justify-between mb-2">
              <span className="text-2xl font-semibold">Backend</span>
              <span className="text-xl font-medium">80%</span>
            </div>
            <div className="w-full h-5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div className="w-4/5 h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-1000 ease-in-out"></div>
            </div>
          </div>

          <div className="skill mt-8">
            <div className="flex justify-between mb-2">
              <span className="text-2xl font-semibold">Programming</span>
              <span className="text-xl font-medium">80%</span>
            </div>
            <div className="w-full h-5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div className="w-4/5 h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-1000 ease-in-out"></div>
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
