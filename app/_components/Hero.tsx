import Marquee from "react-fast-marquee";
import { VscSparkle } from "react-icons/vsc";
import MarqueeComponent from "./MarqueeComponent";
import "@devnomic/marquee/dist/index.css";
import { marqueeContent } from "./data";
import Link from "next/link";
import { ArrowRight, CaretDown, CaretRight } from "@phosphor-icons/react";
import { Outfit, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import HomeArrow from "@/public/HomeArrow.png";
import Amazon from "@/public/Amazon.png";
import Swiggy from "@/public/Swiggy.png";
import Brand2 from "@/public/Brand2.png";
import Brand3 from "@/public/Brand3.png";
import Image from "next/image";
import localFont from "next/font/local";
import ArrowRightSVG from "@/public/ArrowRight.svg";

const outfit = Outfit({ weight: "variable", subsets: ["latin"] });
const grotesk = localFont({
  src: [
    { path: "../../public/Font/ClashGrotesk-Extralight.woff2", weight: "200" },
    { path: "../../public/Font/ClashGrotesk-Light.woff2", weight: "300" },
    {
      path: "../../public/Font/ClashGrotesk-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/Font/ClashGrotesk-Medium.woff2",
      weight: "500",
    },
    { path: "../../public/Font/ClashGrotesk-Semibold.woff2", weight: "600" },
    { path: "../../public/Font/ClashGrotesk-Bold.woff2", weight: "700" },
  ],
});
const playfair = Playfair_Display({
  weight: "variable",
  style: "italic",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:min-h-screen overflow-hidden flex flex-col items-center justify-center gap-20 w-full relative"
    >
      <div className="absolute w-full h-full flex items-center justify-around">
        <div className="w-[1px] h-full bg-[#ECEEF2]"></div>
        <div className="w-[1px] h-full bg-[#ECEEF2]"></div>
        <div className="w-[1px] h-full bg-[#ECEEF2]"></div>
        <div className="w-[1px] h-full bg-[#ECEEF2]"></div>
        <div className="w-[1px] h-full bg-[#ECEEF2]"></div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-5 px-10 xl:px-20 2xl:px-32 z-10 py-52">
        <p
          className={cn(
            "text-black font-semibold text-center lg:text-5xl text-5xl xl:text-6xl 2xl:text-7xl",
            grotesk.className,
          )}
        >
          Fight Marketplace{" "}
          <span className={cn(playfair.className, "font-semibold")}>
            disputes
          </span>
          <br />
          <span className="inline-flex gap-2 text-center items-center">
            <span className="flex xl:text-3xl text-3xl 2xl:text-6xl tracking-tighter font-black">
              <Image src={ArrowRightSVG} alt="ArrowRightSVG" />
              <Image src={ArrowRightSVG} alt="ArrowRightSVG" />
              <Image src={ArrowRightSVG} alt="ArrowRightSVG" />
              {/* <CaretRight weight="bold" /> */}
              {/* <CaretRight weight="bold" /> */}
              {/* <CaretRight weight="bold" /> */}
            </span>
            with AI
          </span>
        </p>
        <p className="text-center lg:text-lg text-sm 2xl:text-lg font-medium text-[#A9A9A9]">
          Stop leaving money on the table.
          <br />
          Get started today and start reclaiming what's rightfully yours.
        </p>
        <div className="flex gap-4 items-center justify-center mt-2">
          <Image
            src={Amazon}
            alt="Amazon"
            quality={100}
            className=" aspect-square w-10"
          />
          <Image
            src={Brand2}
            alt="Amazon"
            quality={100}
            className=" aspect-square w-10"
          />
          <Image
            src={Brand3}
            alt="Amazon"
            quality={100}
            className=" aspect-square w-10"
          />
          <Image
            src={Swiggy}
            alt="Amazon"
            quality={100}
            className=" aspect-square w-10"
          />
        </div>
        <div className="flex items-center gap-5 mt-2">
          <Link target="_blank" href={"https://app.getinterface.tech"}>
            <button className="justify-center gap-2 rounded-xl  bg-neutral-50 border-t border-l border-r-2 border-b-4 border-neutral-950/20 items-center inline-flex text-center text-interface-black 2xl:text-lg lg:text-base text-sm font-medium leading-tight w-fit py-3 px-6">
              Login <ArrowRight weight="bold" />
            </button>
          </Link>
          <div className="relative">
            <Link
              target="_blank"
              href={"https://cal.com/rebhav-bharadwaj/introductory-chat"}
            >
              <button
                className={cn(
                  "bg-primary-green gap-2 justify-center border-r-2 border-t border-l border-b-4 border-secondary-green items-center inline-flex text-center rounded-xl text-interface-black 2xl:text-lg xl:text-base text-sm font-medium leading-tight w-fit py-3 px-6 relative",
                )}
              >
                Recover your Funds <ArrowRight weight="bold" />
              </button>
            </Link>
            <div className="absolute -top-10 -right-52 text-sm font-medium md:flex md:flex-row-reverse hidden">
              <p className="w-36">
                get a free audit of how much we can save you
              </p>
              <Image
                src={HomeArrow}
                alt="HomeArrow"
                quality={100}
                className="pt-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex flex-col items-center justify-center text-[#A9A9A9] gap-2 pb-10 z-10">
          <p className="text-center xl:text-lg text-base 2xl:text-xl font-medium text-[#A9A9A9]">
            See how much you can save
          </p>
          <div className="flex flex-col items-center justify-center">
            <CaretDown weight="bold" />
            <CaretDown weight="bold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
