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
import localFont from "next/font/local";

const playfair = Playfair_Display({
  weight: "variable",
  subsets: ["latin"],
  style: "italic",
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
        className="w-full flex flex-col items-center justify-center gap-5 p-5 lg:p-10 border border-neutral-200"
      >
        <h1
          className={cn(
            "xl:text-5xl lg:text-4xl text-3xl 2xl:text-6xl font-semibold text-center",
            grotesk.className,
          )}
        >
          FAQs
        </h1>
        <div className="border border-neutral-200 w-full lg:p-10 p-5 flex flex-col items-center justify-center gap-5">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col items-center justify-center gap-5"
          >
            {faqs.map((faq, index) => {
              return (
                <AccordionItem
                  key={index}
                  value={"item-" + index}
                  className="w-full"
                >
                  <AccordionTrigger className="w-full lg:text-xl border-t border-r text-sm border-l border-neutral-200 px-5 text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="border-r border-l border-b text-sm lg:text-xl border-neutral-200 px-5 text-neutral-400 font-medium">
                    <div
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                      className="lg:pr-10"
                    />
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
