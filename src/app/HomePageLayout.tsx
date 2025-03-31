"use client";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";

interface HomePageLayoutProps {
  children: ReactNode;
}

export default function HomePageLayout({ children }: HomePageLayoutProps) {
  return (
    <ThemeProvider>
      <main>
        <Navbar />
        <div className="w-11/12 mx-auto md:mt-16 mt-8 overflow-hidden">
          {children}
        </div>
      </main>
    </ThemeProvider>
  );
}
