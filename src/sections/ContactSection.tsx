import SocialLink from "../components/SocialLink";
import prasadbroImg from "../assets/images/prasadbro.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, amount: 0.5 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.5 });
  return (
    <div id="contact" className="contact mt-12 md:flex md:items-center md:justify-between">
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isContentInView ? { opacity: 1, y: 0 } : {}}
        className="flex-1  self-start"
      >
        <h2 className="text-5xl text-center md:text-left">Reach Out to me!</h2>
        <div className=" uppercase mt-4 text-gray-600">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </div>
        <address className=" text-gray-600 text-xl mt-2">
          <span className=" mr-2">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          Maharashtra , India
        </address>
        <span className=" text-2xl mt-2 block">
          Open for opportunities: Yes
        </span>
        <div className=" social md:w-1/2 my-4  md:flex-row flex items-center justify-between">
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
      </motion.div>
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isImageInView ? { opacity: 1, y: 0 } : {}}
        className="flex-1 flex items-center justify-center"
      >
        <img
          src={prasadbroImg}
          alt="prasad"
          className=" max-w-[350px] border-purple-primary  rounded-full border-4"
        />
      </motion.div>
    </div>
  );
}
