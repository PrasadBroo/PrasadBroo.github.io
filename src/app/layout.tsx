import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const montserrat = Montserrat({
  variable: "--font-geist-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "500", "600"],
});

export const metadata: Metadata = {
  title: "Prasad Shinde - Portfolio",
  description:
    "Full-stack developer specializing in React, Next.js, and modern web technologies. Explore my projects, skills, and professional experience.",
  keywords: [
    "Prasad",
    "Shinde",
    "Prasadbro",
    "Portfolio",
    "Prasad Shinde",
    "Shinde Prasad",
    "Prasadbro Portfolio",
    "Web Developer",
    "Full-stack Developer",
    "React Developer",
    "Next.js",
  ],
  metadataBase: new URL("https://prasadbro.com"),
  authors: [{ name: "Prasad Shinde", url: "https://prasadbro.com" }],
  creator: "Prasad Shinde",
  publisher: "Prasad Shinde",
  openGraph: {
    title: "Prasad Shinde - Portfolio",
    description:
      "Personal portfolio website of Prasad Shinde - Full-stack developer specializing in React, Next.js, and modern web technologies.",
    url: "https://prasadbro.com",
    siteName: "Prasad Shinde Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasad Shinde - Portfolio",
    description:
      "Personal portfolio website of Prasad Shinde - Full-stack developer specializing in React, Next.js, and modern web technologies.",
    creator: "@Prasad__bro",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={clsx(
          "antialiased text-foreground transition-colors duration-700",
          montserrat.className
        )}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
