import Image from "next/image";
import { trustedByBrands } from "./data";
import Marquee from "react-fast-marquee";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  weight: "variable",
  style: "italic",
  subsets: ["latin"],
});

const TrustedBy = () => {
  return (
    <div className=" overflow-x-hidden w-full bg-interface-black flex flex-col items-center justify-center min-h-screen relative">
      <div className="absolute w-full h-full flex items-center justify-around">
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-5 px-10 xl:px-20 2xl:px-32 z-10">
        <p className="text-neutral-50 text-6xl text-center font-semibold max-w-4xl">
          Lorem ipsum dolor sit{" "}
          <span className="text-primary-green">amet consectetur</span>. Eu sed
          eget eu elementum sed est{" "}
          <span className={cn(playfair.className, "text-primary-green")}>
            aliquet lectus
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default TrustedBy;
