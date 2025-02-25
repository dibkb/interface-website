import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
import React, { forwardRef } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";
import DiagnoseImage from "@/public/Features/Diagnose.png";
import Retrieve from "@/public/Features/Retrieve/retrieve.png";
import Dispute from "@/public/Features/Dispute.png";
import Chat from "@/public/Features/FollowUp/Chat.png";
import StarIcon from "@/public/Features/FollowUp/StarIcon.png";
import localFont from "next/font/local";
import LLMs from "@/public/Features/Diagnose/LLMs.png";
import Arrows from "@/public/Features/Diagnose/Arrows.png";
import Storage from "@/public/Features/Diagnose/Storage.png";
import Database from "@/public/Features/Retrieve/Database.png";
import IPA from "@/public/Features/Retrieve/IPA.png";
import SingleArrow from "@/public/Features/Retrieve/SingleArrow.png";
import MultipleArrow from "@/public/Features/Retrieve/MultipleArrow.png";
import ZIP from "@/public/Features/Retrieve/ZIP.png";

import Ticket1 from "@/public/Features/Dispute/Tickets/Ticket1.png";
import Ticket2 from "@/public/Features/Dispute/Tickets/Ticket2.png";
import Ticket3 from "@/public/Features/Dispute/Tickets/Ticket3.png";
import DoneTicket1 from "@/public/Features/Dispute/DoneTickets/DoneTicket1.png";
import DoneTicket2 from "@/public/Features/Dispute/DoneTickets/DoneTicket2.png";
import DoneTicket3 from "@/public/Features/Dispute/DoneTickets/DoneTicket3.png";

import LastTickets from "@/public/Features/Dispute/LastTickets.png";
import Diagnose from "./svg/diagnose";
import Automate from "./svg/automate";
import Integrate from "./svg/integrate";
import Optimize from "./svg/optimize";

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
        <div className="flex flex-col items-center justify-center gap-0 md:gap-3">
          <p
            className={cn(
              "text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-center",
              grotesk.className
            )}
          >
            <span className="z-10 text-[50%] md:text-[100%] whitespace-nowrap">
              Our Proprietary Models supercharge
            </span>
          </p>
          <p
            className={cn(
              "text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-center",
              grotesk.className
            )}
          >
            <mark
              className={cn(
                "bg-primary-green rounded-lg px-4 mt-10 text-[50%] md:text-[100%]",
                playfairNormal.className
              )}
            >
              your operations by 92.5%
            </mark>
          </p>
        </div>
        <p className="text-neutral-400 2xl:text-2xl xl:text-xl lg:text-lg text-center">
          transform your supply chain in 4 simple steps
        </p>
        <div className="border border-neutral-200 w-full grid grid-cols-1 md:grid-cols-2 justify-center gap-10 mt-10 py-16">
          <div
            className={cn(
              "relative flex flex-col w-full items-center justify-between gap-10 overflow-hidden md:border-r border-t border-b p-5 h-full aspect-square"
            )}
            ref={containerRef}
          >
            {/* <Diagnose /> */}
            <div className="flex-1 flex items-center justify-center">
              <Diagnose />
            </div>

            <div className="w-full mt-5 min-h-16">
              <h2
                className={cn(
                  playfairNormal.className,
                  "font-semibold text-left text-lg lg:text-xl"
                )}
              >
                Diagnose
              </h2>
              <p className="text-neutral-400 font-medium text-sm lg:text-base">
                We distill LLMs on transaction data to flag payment
                discrepancies and potential disputes before they impact your
                bottom line.
              </p>
            </div>
          </div>
          <div
            className={cn(
              "relative flex flex-col w-full items-center justify-between gap-10 overflow-hidden md:border-l border-t border-b p-5 aspect-square"
            )}
            ref={containerRef}
          >
            <div className="flex-1 flex items-center justify-center">
              <Automate />
            </div>
            <div className="w-full mt-5">
              <h2
                className={cn(
                  playfairNormal.className,
                  "font-semibold text-left text-lg lg:text-xl"
                )}
              >
                Automate
              </h2>
              <p className="text-neutral-400 font-medium text-sm lg:text-base">
                Our AI-powered procurement system streamlines sourcing,
                negotiation, and approval workflows, reducing cycle times by
                78%.
              </p>
            </div>
          </div>
          <div
            className={cn(
              "relative flex flex-col w-full items-center justify-between gap-10 overflow-hidden md:border-r border-t border-b p-5 aspect-square"
            )}
            ref={containerRef}
          >
            <div className="flex-1 flex items-center justify-center">
              <Integrate />
            </div>
            <div className="w-full mt-5">
              <h2
                className={cn(
                  playfairNormal.className,
                  "font-semibold text-left text-lg lg:text-xl"
                )}
              >
                Integrate
              </h2>
              <p className="text-neutral-400 font-medium text-sm lg:text-base">
                Our platform synchronizes product listings and catalogs across
                multiple marketplaces, maintaining consistent data and pricing.
              </p>
            </div>
          </div>
          <div
            className={cn(
              "relative flex flex-col w-full items-center justify-between gap-10 overflow-hidden md:border-l border-t border-b p-5 aspect-square"
            )}
            ref={containerRef}
          >
            <div className="flex-1 flex items-center justify-center">
              <Optimize />
            </div>
            <div className="w-full mt-5 pt-7">
              <h2
                className={cn(
                  playfairNormal.className,
                  "font-semibold text-left text-lg lg:text-xl"
                )}
              >
                Optimize
              </h2>
              <p className="text-neutral-400 font-medium text-sm lg:text-base">
                Our analytics engine identifies supplier relationship
                opportunities and operational bottlenecks, turning supply chain
                data into strategic advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Define;
