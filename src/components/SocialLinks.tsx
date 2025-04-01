import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type Link = {
  id: string;
  icon: IconType;
  url: string;
  className: string;
};
type Props = {
  social_links: Link[];
};
export default function SocialLinks({ social_links }: Props) {
    
  return (
    <div className="social-links flex items-center justify-between lg:w-1/2 mt-6">
      {social_links.map((link) => (
        <Link
          href={link.url}
          target="_blank"
          key={link.id}
          className={clsx(
            "h-10 w-10 rounded-full hover:bg-gray-800 text-white text-2xl flex items-center justify-center hover:scale-95 transition-transform",
            link.className
          )}
        >
          <link.icon/>
        </Link>
      ))}
    </div>
  );
}
