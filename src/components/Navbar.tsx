"use client";
import { useState } from "react";
import clsx from "clsx";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import Link from "next/link";

// Array of navigation links
const NAVLINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState<boolean>(false);
  const listClassNames = clsx(
    "md:static md:flex md:visible md:items-center overflow-y-hidden  mt-2.5 md:mt-0 md:text-base lg:text-xl  md:overflow-clip  ease-in   py-2 md:py-0 md:pointer-events-auto shadow-md md:shadow-none md:justify-between md:h-auto transition-all duration-300 md:duration-0 text-xl absolute  left-0 right-0  top-14 border-b border-gray-700 md:border-none bg-background md:bg-transparent ",
    {
      " h-72  pointer-events-auto visible": navActive,
      " h-0  pointer-events-none border-none invisible": !navActive,
    }
  );

  return (
    <nav className="p-4  sticky bg-white dark:bg-background top-0 z-10 md:flex   md:items-center shadow-md md:justify-between border-b dark:border-gray-700 border-gray-200">
      <Link href="/" className=" text-2xl">
        <span className=" text-gray-500">{"<"} </span>
        <span className=" text-purple-800 dark:text-gray-50  md:text-xl lg:text-3xl hover:text-indigo-500 mx-2 tracking-widest">
          Prasadbro
        </span>
        <span className="text-gray-500"> {"/>"}</span>
      </Link>
      <div
        className="burger md:hidden inline-block float-right p-2"
        onClick={() => setNavActive(!navActive)}
        role="button"
      >
        <div
          className={
            "h-[2px] w-6 bg-foreground mt-1 transition " +
            (navActive ? "rotate-45 " : "rotate-0")
          }
        ></div>
        <div
          className={
            "h-[2px] w-6 bg-foreground mt-1 transition " +
            (navActive ? " -rotate-45 translate-y-[-5px]" : " rotate-0")
          }
        ></div>
        <div
          className={
            "h-[2px] w-6 bg-foreground mt-1 " +
            (navActive ? " hidden" : "block")
          }
        ></div>
      </div>
      <ul className={listClassNames}>
        {NAVLINKS.map((link) => (
          <a
            href={link.href}
            key={link.label}
            className=" lg:mr-8 md:mr-4 ease-in  hover:bg-gray-200 dark:hover:bg-purple-800 rounded-xs dark:hover:bg-purple-primary p-3  block"
          >
            {link.label}
          </a>
        ))}
        <div className="switch p-3 hover:bg-gray-200 dark:hover:bg-purple-800 rounded-xs">
          <ToggleThemeButton />
        </div>
      </ul>
    </nav>
  );
}
