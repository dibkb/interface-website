import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
import React, { forwardRef } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";
import DiagnoseImage from "@/public/Features/Diagnose.png";
import Retrieve from "@/public/Features/Retrieve.png";
import Dispute from "@/public/Features/Dispute.png";
import FollowUp from "@/public/Features/FollowUp.png";
import localFont from "next/font/local";
import { Diagnose } from "./Diagnose";

const playfair = Playfair_Display({
  weight: "variable",
  subsets: ["latin"],
  style: "italic",
});
const playfairNormal = Playfair_Display({
  weight: "variable",
  subsets: ["latin"],
  style: "normal",
});

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

const Define = () => {
  const container = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  return (
    <section
      // id="faq"
      // ref={scrollContainer}
      className="h-fit w-full py-20 lg:py-10 px-10 xl:px-20 2xl:px-48"
    >
      <div
        ref={container}
        className="w-full flex flex-col items-center justify-center gap-5 lg:p-10 p-5 border border-neutral-200"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <p
            className={cn(
              "text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-center",
              grotesk.className,
            )}
          >
            <span className="z-10">Our Proprietary Models supercharge</span>
          </p>
          <p
            className={cn(
              "text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-center",
              grotesk.className,
            )}
          >
            <mark
              className={cn(
                "bg-primary-green rounded-lg px-4 mt-10",
                playfairNormal.className,
              )}
            >
              win rates to 92.5%
            </mark>
          </p>
        </div>
        <p className="text-neutral-400 2xl:text-2xl xl:text-xl lg:text-lg text-center">
          dispute on autopilot in 4 simple steps
        </p>
        <div className="border border-neutral-200 w-full grid grid-cols-1 md:grid-cols-2 justify-center gap-10 mt-10 py-16">
          <div
            className={cn(
              "relative flex flex-col w-full items-center gap-10 overflow-hidden md:border-r border-t border-b p-5 h-full",
            )}
            ref={containerRef}
          >
            {/* <Diagnose /> */}
            <Image
              src={DiagnoseImage}
              alt=""
              quality={100}
              className=" object-cover"
            />
            <div className="w-full mt-5 min-h-16">
              <h2
                className={cn(
                  playfairNormal.className,
                  "font-semibold text-left text-lg lg:text-xl",
                )}
              >
                Diagnose
              </h2>
              <p className="text-neutral-400 font-medium text-sm lg:text-base">
                We distill LLMs on deductions data to flag huge payment records
                for discrepancies
              </p>
            </div>
          </div>
          <div
            className={cn(
              "relative flex flex-col w-full items-center gap-10 overflow-hidden md:border-l border-t border-b p-5",
            )}
            ref={containerRef}
          >
            <Image
              src={Retrieve}
              alt=""
              quality={100}
              className=" object-cover"
            />
            <div className="w-full mt-5">
              <h2
                className={cn(
                  playfairNormal.className,
                  "font-semibold text-left text-lg lg:text-xl",
                )}
              >
                Retrieve
              </h2>
              <p className="text-neutral-400 font-medium text-sm lg:text-base">
                Our browser agents navigate your stack to create a rebuttal
                package
              </p>
            </div>
          </div>
          <div
            className={cn(
              "relative flex flex-col w-full items-center gap-10 overflow-hidden md:border-r border-t border-b p-5",
            )}
            ref={containerRef}
          >
            <Image
              src={Dispute}
              alt=""
              quality={100}
              className=" object-cover"
            />
            <div className="w-full mt-5">
              <h2
                className={cn(
                  playfairNormal.className,
                  "font-semibold text-left text-lg lg:text-xl",
                )}
              >
                Dispute
              </h2>
              <p className="text-neutral-400 font-medium text-sm lg:text-base">
                Our agents use chain of thought reasoning to validate and
                dispute all your false deductions
              </p>
            </div>
          </div>
          <div
            className={cn(
              "relative flex flex-col w-full items-center gap-10 overflow-hidden md:border-l border-t border-b p-5",
            )}
            ref={containerRef}
          >
            <Image
              src={FollowUp}
              alt=""
              quality={100}
              className=" object-cover"
            />
            <div className="w-full mt-5">
              <h2
                className={cn(
                  playfairNormal.className,
                  "font-semibold text-left text-lg lg:text-xl",
                )}
              >
                Follow Up
              </h2>
              <p className="text-neutral-400 font-medium text-sm lg:text-base">
                Our agents follow up with Marketplaces to convert disputes into
                successful collections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Define;
