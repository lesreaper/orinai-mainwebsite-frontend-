"use client";

import { FC } from "react";

type AnnouncementsBarProps = {
  message?: string;
};

const AnnouncementsBar: FC<AnnouncementsBarProps> = ({ message }) => {
  return (
    <div className="bg-brand-dark-gray text-white text-center text-sm py-2">
      {message || "Welcome to our site! Stay tuned for updates."}
    </div>
  );
};

export default AnnouncementsBar;
