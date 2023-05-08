import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export default function SocialLink({ children, className, href }: Props) {
  const socialLinkClassnames = classNames(
    " h-10 w-10 rounded-full transition hover:bg-gray-800 bg-[#333] block text-white text-2xl flex items-center justify-center",
    className
  );
  return (
    <a className={socialLinkClassnames} href={href} target="_blank">
      {children}
    </a>
  );
}
