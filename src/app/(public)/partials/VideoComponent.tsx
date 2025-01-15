import React from "react";

const VideoComponent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-gray-100 py-8 lg:py-16">
      <div className="max-w-sm md:max-w-2xl lg:max-w-7xl">
        {" "}
        <video
          className="max-w-full max-h-full rounded-lg shadow-md"
          controls
          autoPlay={true}
          loop
          muted
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <form className="flex flex-col md:flex-row my-8 lg:my-16 lg:flex-row items-center justify-center md:justify-start gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-green focus:outline-none"
        />
        <button
          type="submit"
          className="bg-brand-green text-white font-semibold py-2 px-6 rounded hover:bg-brand-green-dark transition duration-300"
        >
          Get Demo
        </button>
      </form>
    </div>
  );
};

export default VideoComponent;
