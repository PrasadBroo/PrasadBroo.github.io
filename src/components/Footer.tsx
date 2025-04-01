import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-xl text-center p-2 mt-6">
      <p>
        Made With <FaHeart className="text-red-500 mr-2 animate-pulse inline" />
        By Prasad Shinde
      </p>
      <p className=" text-sm ">
        Design inspired from
        <a
          href="https://github.com/saadpasta/developerFolio"
          target="_blank"
          className=" underline text-purple-700 dark:text-white ml-1"
        >
          developerFolio
        </a>
      </p>
    </footer>
  );
}
