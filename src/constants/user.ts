import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const USER = {
  name: "Prasad",
  githubUsername: "PrasadBroo",
  title: "Full Stack Developer",
  email: "gainerinfo@gmail.com",
  location: "Maharashtra, India",
  openToOpportunities: true,
  bio: "I'm Prasad, a Full Stack Developer with hands-on experience in building scalable and visually appealing web applications. When I'm not coding, I enjoy playing games and staying updated with the latest trends in web development.",
  resume: "/resume",
  profileImage: "/images/prasadbro.webp",
};

export const SOCIAL_LINKS = [
  {
    id: "github",
    icon: FaGithub,
    url: "https://github.com/PrasadBroo",
    className: "bg-gray-700 border dark:border-gray-700 border-gray-200",
  },
  {
    id: "leetcode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/Prasadbro/",
    className: "bg-green-600 border dark:border-gray-700 border-gray-200",
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/prasadshinde-dev/",
    className: "bg-blue-600 border dark:border-gray-700 border-gray-200",
  },
  {
    id: "twitter",
    icon: FaTwitter,
    url: "https://twitter.com/Prasad__bro",
    className: "bg-blue-400 border dark:border-gray-700 border-gray-200",
  },
  {
    id: "stackoverflow",
    icon: FaStackOverflow,
    url: "https://stackoverflow.com/users/12332711/prasadbro",
    className: "bg-orange-500 border dark:border-gray-700 border-gray-200",
  },
  {
    id: "email",
    icon: FaEnvelope,
    url: "mailto:gainerinfo@gmail.com",
    className: "bg-red-500 border dark:border-gray-700 border-gray-200",
  },
];
