import classNames from "classnames";
import { useState } from "react";
import Toggle from "./Toggle";

export default function Navbar() {
  const [navActive, setNavActive] = useState<boolean>(false);
  const listClassNames = classNames(
    "md:relative md:flex md:items-center transition-[max-height] ease-in-out  py-2 md:py-0 md:pointer-events-auto shadow-md md:shadow-none md:justify-between md:opacity-100 transition text-xl absolute bg-white left-0 right-0  top-200",
    {
      "max-h-64 opacity-100 pointer-events-auto": navActive,
      "max-h-0 opacity-0  pointer-events-none": !navActive,
    }
  );

  return (
    <nav className="p-4 relative md:flex md:items-center  shadow-md md:justify-between">
      <a href="/" className=" text-2xl">
        <span className=" text-gray-500">{"<"} </span>
        <span className=" text-purple-primary text-3xl hover:text-red-500">
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
        <a href="#skills" className=" md:mr-8 hover:bg-gray-200 p-3  block">
          Skills
        </a>
        <a href="#skills" className=" md:mr-8 hover:bg-gray-200 p-3 block">
          Projects
        </a>
        <a href="#skills" className=" md:mr-8 hover:bg-gray-200 p-3 block">
          Contact
        </a>
        <a href="#skills" className=" md:mr-8 hover:bg-gray-200 p-3 block">
          Support
        </a>
        <div className="switch p-3 hover:bg-gray-200">
          <Toggle />
        </div>
      </ul>
    </nav>
  );
}
