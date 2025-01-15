import React from "react";
import { inter } from "../utils/fonts";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div
        className={`${inter.className} font-bold text-brand-dark-gray flex flex-row items-center`}
      >
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <div className="ml-2 text-2xl font-bold">Orin</div>
      </div>
    </Link>
  );
};

export default Logo;
