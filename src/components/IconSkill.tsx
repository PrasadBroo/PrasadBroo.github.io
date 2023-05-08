import React from "react";

type Props = {
  children: React.ReactNode;
  skillName: string;
};

export default function IconSkill({ children, skillName }: Props) {
  return (
    <div className=" text-3xl lg:text-6xl text-gray-500 mr-4 text-center cursor-pointer hover:text-purple-primary">
      {children}
      <span className=" block text-sm">{skillName}</span>
    </div>
  );
}
