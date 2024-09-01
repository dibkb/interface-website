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
import Image from "next/image";

const outfit = Outfit({ weight: "variable", subsets: ["latin"] });
const playfair = Playfair_Display({
  weight: "variable",
  style: "italic",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen overflow-hidden flex flex-col items-center justify-between pb-10 pt-56 gap-10 w-full relative"
    >
      <div className="absolute w-full h-full flex items-center justify-around">
        <div className="w-[1px] h-full bg-[#ECEEF2]"></div>
        <div className="w-[1px] h-full bg-[#ECEEF2]"></div>
        <div className="w-[1px] h-full bg-[#ECEEF2]"></div>
        <div className="w-[1px] h-full bg-[#ECEEF2]"></div>
        <div className="w-[1px] h-full bg-[#ECEEF2]"></div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-5 px-10 xl:px-20 2xl:px-32 z-10">
        <div className="text-zinc-900 font-semibold leading-tight py-2 px-5 rounded-full drop-shadow-md bg-neutral-50 border flex gap-3 items-center w-fit">
          Tailored for Amazon FBA Brands
        </div>
        <p className="text-black font-semibold text-center text-6xl xl:text-7xl">
          Lorem ipsum dolor sit
          <br />
          <span className="flex-wrap inline-flex items-center gap-4">
            Lorem ipsum dolor
            <span
              className={cn(
                playfair.className,
                "italic inline-flex items-center gap-2",
              )}
            >
              <Image src={Amazon} alt="HomeArrow" quality={100} />
              Amazon
            </span>
          </span>
          <br />
          <span className="inline-flex gap-2 text-center items-center">
            <span className="flex text-4xl font-bold">
              <CaretRight weight="bold" />
              <CaretRight weight="bold" />
              <CaretRight weight="bold" />
            </span>
            ipsum ipsum.
          </span>
        </p>
        <p className="text-center text-lg font-medium text-[#A9A9A9]">
          Lorem ipsum dolor sit amet consectetur. Eu sed eget eu
          <br />
          elementum sed est aliquet lectus.
        </p>
        <div className="flex items-center gap-5 mt-5">
          <Link target="_blank" href={"https://app.getinterface.tech"}>
            <button className="justify-center gap-2 rounded-xl  bg-neutral-50 border-t border-l border-r-2 border-b-4 border-neutral-950/20 items-center inline-flex text-center text-interface-black text-lg font-medium leading-tight w-fit py-3 px-6">
              Login <ArrowRight weight="bold" />
            </button>
          </Link>
          <Link
            target="_blank"
            href={"https://calendly.com/rebhav-getinterface/30min"}
          >
            <button
              className={cn(
                "bg-primary-green gap-2 justify-center border-r-2 border-t border-l border-b-4 border-secondary-green items-center inline-flex text-center rounded-xl text-interface-black text-lg font-medium leading-tight w-fit py-3 px-6 relative",
              )}
            >
              Book a Demo <ArrowRight weight="bold" />
              <div className="absolute -top-10 -right-52 text-sm font-medium flex flex-row-reverse">
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
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-[#A9A9A9] gap-2 z-10">
        <p className="text-center text-lg font-medium text-[#A9A9A9]">
          See how much you can save
        </p>
        <div className="flex flex-col items-center justify-center">
          <CaretDown weight="bold" />
          <CaretDown weight="bold" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
