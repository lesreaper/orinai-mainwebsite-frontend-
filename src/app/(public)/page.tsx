"use client";

import HomeHeader from "./partials/HomeHeader";
import SocialProof from "./partials/SocialProof";
import VideoComponent from "./partials/VideoComponent";

export default function Home() {
  return (
    <div className="relative bg-white">
      <HomeHeader />
      <VideoComponent />
      <SocialProof />
    </div>
  );
}
