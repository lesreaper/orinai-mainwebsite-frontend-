"use client";

import "../globals.css";
import { ReactNode } from "react";
import Navigation from "../components/Navigation";

type PublicLayoutProps = {
  children: ReactNode;
};

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="fixed top-8 left-0 w-full z-10">
        <Navigation />
      </div>
      <main className="relative pt-24 md:pt-32">{children}</main>
    </div>
  );
};

export default PublicLayout;
