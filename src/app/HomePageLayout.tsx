import { ReactNode } from "react";

interface HomePageLayoutProps {
  children: ReactNode;
}

export default function HomePageLayout({ children }: HomePageLayoutProps) {
  return (
    <main>
      <div className="w-11/12 mx-auto md:mt-16 mt-8 overflow-hidden">
        {children}
      </div>
    </main>
  );
}
