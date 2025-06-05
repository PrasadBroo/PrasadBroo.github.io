import { ProjectType } from "@/types/projectTypes";
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

export const DOMAIN_NAME = "prasadbro.com";

export const PRIVATE_PROJECTS: Partial<ProjectType>[] = [
  {
    id: 65465465,
    name: "LinkDB",
    description:
      "Create, visualize, and collaborate on database entity-relationship diagrams with the most intuitive ERD design tool. From concept to production-ready schemas in minutes, not hours.",
    topics: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk"],
    private: true,
    language: "TypeScript",
    html_url: "https://linkdb.prasadbro.com/",
    stargazers_count: 1565,
    forks: 0,
    size: 15239,
    archived: false,
  },
];
