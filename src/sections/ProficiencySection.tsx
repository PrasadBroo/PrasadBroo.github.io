import { useRef } from "react";
import buildingCodeImg from "../assets/images/building-code.png";
import { motion, useInView } from "framer-motion";

export default function ProficiencySection() {
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, amount: 0.5 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.5 });
  return (
    <div
      id="proficiency"
      className="proficiency mt-8 flex flex-col md:flex-row items-center justify-between  p-3"
    >
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isContentInView ? { opacity: 1, y: 0 } : {}}
        className="flex-1 self-start"
      >
        <div className="">
          <h2 className="text-5xl text-center md:text-left">Proficiency</h2>
          <div className="skill mt-6">
            <div className=" mb-4 text-2xl">Frontend/Design</div>
            <div className="w-full h-4 rounded-lg bg-gray-300">
              <div className=" w-11/12 h-full rounded-lg bg-purple-light"></div>
            </div>
          </div>
          <div className="skill mt-6">
            <div className=" mb-4 text-2xl">Backend</div>
            <div className="w-full h-4 rounded-lg bg-gray-300">
              <div className=" w-3/5 h-full rounded-lg bg-purple-light"></div>
            </div>
          </div>
          <div className="skill mt-6">
            <div className=" mb-4 text-2xl">Programming</div>
            <div className="w-full h-4 rounded-lg bg-gray-300">
              <div className=" w-4/5 h-full rounded-lg bg-purple-light"></div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isImageInView ? { opacity: 1, y: 0 } : {}}
        className="flex-1"
      >
        <img src={buildingCodeImg} alt="coding" className=" max-h-[500px]" />
      </motion.div>
    </div>
  );
}
