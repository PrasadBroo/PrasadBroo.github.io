import SocialLinks from "@/components/SocialLinks";
import { SOCIAL_LINKS, USER } from "@/constants/user";
import Image from "next/image";

export default function ContactSection() {
  return (
    <div
      id="contact"
      className="contact mt-16 py-12 md:flex md:items-center md:justify-between scroll-mt-20 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md px-6 dark:border-gray-700 border-gray-200 border"
    >
      <div className="flex-1 self-start">
        <h2 className="text-5xl font-bold text-center md:text-left bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Reach Out to me!
        </h2>
        <div className="uppercase mt-6 text-gray-600 dark:text-gray-300 font-medium tracking-wide">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </div>
        <address className="text-gray-600 dark:text-gray-300 text-xl mt-4 flex items-center">
          <span className="mr-3 text-purple-600 dark:text-purple-400">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          Maharashtra, India
        </address>
        <div className="mt-4 flex items-center">
          <span className="text-xl font-medium text-gray-800 dark:text-white">
            Open for opportunities:
          </span>
          <span
            className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${
              USER.openToOpportunities
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
            }`}
          >
            {USER.openToOpportunities ? "Yes" : "No"}
          </span>
        </div>
        <SocialLinks social_links={SOCIAL_LINKS} />
      </div>
      <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-30 animate-pulse"></div>
          <Image
            src={USER.profileImage}
            alt="prasad image"
            className="h-auto w-auto border-purple-600 dark:border-purple-700 rounded-full border-4 hover:scale-105 transition-transform duration-300 relative z-10"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
