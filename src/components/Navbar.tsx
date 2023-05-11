import classNames from "classnames";
import { useState } from "react";
import Toggle from "./Toggle";

export default function Navbar() {
  const [navActive, setNavActive] = useState<boolean>(false);
  const listClassNames = classNames(
    "md:relative md:flex md:items-center  md:text-base lg:text-xl  md:overflow-clip bg-white dark:bg-bg-secondary ease-in transition-[height]  py-2 md:py-0 md:pointer-events-auto shadow-md md:shadow-none md:justify-between md:h-auto transition text-xl absolute  left-0 right-0  top-200",
    {
      " h-72  pointer-events-auto": navActive,
      " h-0  pointer-events-none overflow-hidden": !navActive,
    }
  );

  return (
    <nav className="p-4 sticky top-0  z-10 md:flex  bg-white dark:bg-bg-secondary   md:items-center  shadow-md md:justify-between">
      <a href="/" className=" text-2xl">
        <span className=" text-gray-500">{"<"} </span>
        <span className=" text-purple-primary  dark:text-white  md:text-xl lg:text-3xl hover:text-red-500">
          Prasadbro
        </span>
        <span className="text-gray-500"> {"/>"}</span>
      </a>
      <div
        className="burger md:hidden inline-block float-right p-2"
        onClick={() => setNavActive(!navActive)}
      >
        <div
          className={
            "h-[2px] w-6 bg-purple-primary mt-1 transition " +
            (navActive ? "rotate-45 " : "rotate-0")
          }
        ></div>
        <div
          className={
            "h-[2px] w-6 bg-purple-primary mt-1 transition " +
            (navActive ? " -rotate-45 translate-y-[-5px]" : " rotate-0")
          }
        ></div>
        <div
          className={
            "h-[2px] w-6 bg-purple-primary mt-1 " +
            (navActive ? " hidden" : "block")
          }
        ></div>
      </div>
      <ul className={listClassNames}>
        <a
          href="#skills"
          className=" lg:mr-8 md:mr-4  hover:bg-gray-200 dark:hover:bg-purple-primary p-3  block"
        >
          Skills
        </a>
        <a
          href="#projects"
          className=" lg:mr-8 md:mr-4  hover:bg-gray-200 dark:hover:bg-purple-primary p-3 block"
        >
          Projects
        </a>
        <a
          href="#contact"
          className=" lg:mr-8 md:mr-4  hover:bg-gray-200 dark:hover:bg-purple-primary p-3 block"
        >
          Contact
        </a>
        <a
          href="#proficiency"
          className=" lg:mr-8 md:mr-4  hover:bg-gray-200 dark:hover:bg-purple-primary p-3 block"
        >
          Proficiency
        </a>
        <div className="switch p-3 hover:bg-gray-200 dark:hover:bg-purple-primary">
          <Toggle />
        </div>
      </ul>
    </nav>
  );
}
