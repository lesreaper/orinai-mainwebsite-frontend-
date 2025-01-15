"use client";

import { FC } from "react";

type AnnouncementsBarProps = {
  message?: string;
};

const AnnouncementsBar: FC<AnnouncementsBarProps> = ({ message }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-brand-darkest-gray text-white text-center text-xs md:text-sm py-2 z-50">
      {message || "Come see our CEO Harish Maiya speak at NeurIPS 2025!"}
      <a
        href="#"
        className="text-white underline ml-2"
        onClick={(e) => {
          e.preventDefault();
          alert("Thanks for clicking!");
        }}
      >
        Register
      </a>
    </div>
  );
};

export default AnnouncementsBar;
