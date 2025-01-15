"use client";

import "../globals.css";
import { ReactNode, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import AnnouncementsBar from "../components/AnnouncementsBar";

type PublicLayoutProps = {
  children: ReactNode;
};

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  const [showAnnouncements, setShowAnnouncements] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setShowAnnouncements(currentScrollTop <= lastScrollTop || currentScrollTop < 10);
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {showAnnouncements && <AnnouncementsBar />}
      <div className="fixed top-0 left-0 w-full z-50">
      <Navigation  />
      </div>
      <main className="relative pt-20 md:pt-28">{children}</main>
    </div>
  );
};

export default PublicLayout;
