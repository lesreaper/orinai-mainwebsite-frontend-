import Image from "next/image";
import React from "react";

const SocialProof: React.FC = () => {
  const partnerLogos = [
    "/partner1.png",
    "/partner2.png",
    "/partner3.png",
    "/partner4.png",
    "/partner5.png",
  ];

  return (
    <section className="py-12 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Trusted Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-32 h-16 md:w-40 md:h-20 bg-white"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-w-full max-h-full object-contain"
                width={160}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
