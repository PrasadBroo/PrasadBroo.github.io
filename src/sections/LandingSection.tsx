import SocialLink from "../components/SocialLink";
import manOTableImg from "../assets/images/manOnTable.52be3144.svg";
import handImg from "../assets/images/hand.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
          Hi all, i'm Prasad{" "}
          <img
            className=" h-12 w-12 lg:h-16 lg:w-16 inline-block"
            src={handImg}
            alt="hand"
          />
        </h1>
        <p className=" text-gray-500 dark:text-white lg:text-3xl md:text-2xl  text-xl text-center md:text-left mt-8">
          <i className="fas fa-laptop-code mr-3  text-purple-primary dark:text-white"></i>
          I'm Prasad, a MERN full-stack developer with experience building
          visually appealing and functional web applications. When I'm not
          coding, I enjoy playing games <i className="fas fa-gamepad"></i> and
          staying up-to-date with the latest web development trends.
          <i className="fas fa-lightbulb text-yellow-500"></i>
        </p>
        <div className="social-links flex items-center justify-between lg:w-1/2 mt-6">
          <SocialLink href="https://github.com/PrasadBroo">
            <i className="fa-brands fa-github"></i>
          </SocialLink>

          <SocialLink
            className=" bg-pink-600 "
            href="https://www.instagram.com/prasad__bro/"
          >
            <i className="fa-brands fa-instagram"></i>
          </SocialLink>
          <SocialLink
            className=" bg-blue-700 "
            href="https://www.facebook.com/prasadshindebro"
          >
            <i className="fa-brands fa-facebook"></i>
          </SocialLink>

          <SocialLink
            className=" bg-orange-400"
            href="https://stackoverflow.com/users/12332711/prasadbro"
          >
            <i className="fa-brands fa-stack-overflow"></i>
          </SocialLink>
          <SocialLink
            className=" bg-blue-700 "
            href="https://www.linkedin.com/in/prasadbro/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </SocialLink>
          <SocialLink
            className=" bg-red-500"
            href="mailto:https://sketchware7@gmail.com"
          >
            <i className="fa-solid fa-envelope"></i>
          </SocialLink>
        </div>
        <div className="btns mt-8 lg:w-1/2 flex items-center justify-between">
          <a
            href="#contact"
            className=" bg-purple-primary  border-purple-primary border transition hover:bg-white hover:text-purple-primary  py-2 px-3 rounded-md uppercase text-white text-xl"
          >
            Contact Me
          </a>
          <Link
            to="resume"
            className=" bg-purple-primary border-purple-primary border transition hover:bg-white  hover:text-purple-primary   py-2 px-3 rounded-md uppercase text-white text-xl"
          >
            My Resume
          </Link>
        </div>
      </div>
      <div className=" flex-1 mt-16 md:mt-0">
        <img src={manOTableImg} alt="man-on-table" />
      </div>
    </motion.div>
  );
}
