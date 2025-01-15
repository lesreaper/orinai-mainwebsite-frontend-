import Image from "next/image";
import React from "react";

const HomeHeader: React.FC = () => {
  return (
    <section className="bg-white border-b">
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8 py-12 mx-auto max-w-7xl">
        <div className="w-full md:w-1/2 text-center md:text-left lg:py-8 lg:mr-8 mb-8 md:mb-0">
          <h1 className="text-3xl lg:text-5xl font-bold text-brand-darkest-gray mb-4 lg:leading-tight md:mr-6 lg:mr-8">
             Industry&apos;s First Fintech AI Reps for Customer Support Success
          </h1>
          <p className="text-lg text-gray-600 mb-6 md:max-w-xs lg:max-w-lg">
            Support big accounts without a big team. Streamline ticketing, live
            chat, help centers, and feedback with pre-trained AI agents built
            for fintech.
          </p>
          <form className="flex flex-col lg:flex-row items-center justify-center md:justify-start gap-4 md:mr-16">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-green focus:outline-none"
            />
            <button
              type="submit"
              className="bg-brand-green text-white font-semibold py-2 px-6 rounded hover:bg-brand-green-dark transition duration-300"
            >
              Watch Video
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative w-full h-auto">
            <Image
              src="/header-sidebar.png"
              alt="Header Sidebar"
              objectFit="cover"
              className="rounded-lg"
              height={280}
              width={960}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
