"use client";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface HomePageLayoutProps {
  children: ReactNode;
}

export default function HomePageLayout({ children }: HomePageLayoutProps) {
  return (
    <main>
      <Navbar />
      <div className="w-11/12 mx-auto md:mt-16 mt-8 overflow-hidden">
        {children}
      </div>
    </main>
  );
}
