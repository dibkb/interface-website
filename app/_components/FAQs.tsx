import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useMode } from "../Providers/NavbarColor";
import { faqs } from "./data";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  AccordionItem,
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

const playfair = Playfair_Display({
  weight: "variable",
  subsets: ["latin"],
  style: "italic",
});

const FAQs = () => {
  const container = useRef(null);
  const scrollContainer = useRef(null);
  const isInView = useInView(container, { amount: 1 });
  const { mode, setMode } = useMode();
  // useEffect(() => {
  //   if (isInView) {
  //     setMode("dark");
  //   } else {
  //     setMode("light");
  //   }
  // }, [isInView]);
  // const { scrollYProgress } = useScroll({
  //   target: scrollContainer,
  //   offset: ["start -0.1", "0.9 end"],
  // });
  // const headingOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  return (
    <section
      id="faq"
      ref={scrollContainer}
      className="h-fit w-full py-20 lg:py-10 px-10 xl:px-20 2xl:px-48"
    >
      <div
        ref={container}
        className="w-full flex flex-col items-center justify-center gap-5 p-10 border border-neutral-200"
      >
        <h1 className="text-5xl xl:text-6xl font-semibold text-center">
          Lorem ipsum dolor sit{" "}
          <mark
            className={cn(
              "bg-primary-green rounded-xl px-4",
              playfair.className,
            )}
          >
            ipsum dolor sit
          </mark>{" "}
          <br />
          Lorem ipsum dolor sit lorem ipsum
        </h1>
        <div className="border border-neutral-200 w-full p-10 flex flex-col items-center justify-center gap-5 mt-10">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col items-center justify-center gap-5"
          >
            <AccordionItem value="item-1" className="w-full">
              <AccordionTrigger className="w-full border border-neutral-200 p-5">
                What does it cost to work with you?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="w-full">
              <AccordionTrigger className="w-full border border-neutral-200 p-5">
                What does it cost to work with you?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="w-full">
              <AccordionTrigger className="w-full border border-neutral-200 p-5">
                What does it cost to work with you?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="w-full">
              <AccordionTrigger className="w-full border border-neutral-200 p-5">
                What does it cost to work with you?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="w-full">
              <AccordionTrigger className="w-full border border-neutral-200 p-5">
                What does it cost to work with you?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
