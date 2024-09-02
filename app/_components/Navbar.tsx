import { useMode } from "@/app/Providers/NavbarColor";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const outfit = Outfit({ weight: "variable", subsets: ["latin"] });

const Navbar = () => {
  const { mode, setMode } = useMode();
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const targetDate: Date = new Date("2024-10-23T00:00:00Z");

    const updateTimer = () => {
      const now: Date = new Date();
      const timeDifference: number = targetDate.getTime() - now.getTime();

      if (timeDifference <= 0) {
        setTimeLeft("00:00:00");
        return;
      }

      const days: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours: number = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes: number = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
      );

      const formattedTime: string = `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
      setTimeLeft(formattedTime);
    };

    const intervalId = setInterval(updateTimer, 60000); // Update every minute

    updateTimer(); // Initial call to set the timer immediately

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);
  return (
    <>
      <nav className={"w-full fixed top-0 z-[999] border-b border-neutral-200"}>
        <AnimatePresence>
          {visible && (
            <motion.div
              exit={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.1 }}
              className="w-full py-2 text-xs lg:text-sm flex justify-around px-5 items-center bg-primary-green font-medium"
            >
              <div></div>
              <div className="text-center text-lg">
                ⚠️ {timeLeft} : Claim 18 months of Amazon Refunds before new
                Reimbursement Policy
              </div>
              <div
                role="button"
                onClick={() => {
                  setVisible(false);
                }}
              >
                <X size={20} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={cn(
            outfit.className,
            "flex justify-between px-10 xl:px-20 2xl:px-32 items-center w-full transition-all ease-in-out",
            mode === "light" ? "bg-neutral-50" : "bg-stone-900",
          )}
        >
          <Link
            href={""}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <p
              className={cn(
                "text-center text-black text-lg lg:text-2xl lg:text-[28px] font-medium leading-7 py-6",
              )}
            >
              interface
            </p>
          </Link>
          <Link
            target="_blank"
            href={"https://calendly.com/rebhav-getinterface/30min"}
            className="lg:hidden block"
          >
            <button
              className={cn(
                "text-center text-sm font-medium leading-none py-2 px-4 border-t boreder-l border-b-4 border-r-2 border-secondary-green transition-all ease-in-out rounded-xl text-black bg-primary-green",
              )}
            >
              Recover your Funds
            </button>
          </Link>
          <div className="hidden lg:block">
            <div className="w-full flex gap-6 items-center justify-center">
              <Link
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("faq")
                    ?.scrollIntoView({ behavior: "smooth", block: "end" });
                }}
              >
                <button
                  className={cn(
                    "font-semibold leading-tight transition-all ease-in-out",
                    mode === "light" ? "text-zinc-900" : "text-white",
                  )}
                >
                  FAQ
                </button>
              </Link>
              <Link
                target="_blank"
                href="https://theinterfacecompany.notion.site/Interface-AI-Hiring-68fca33b53d6421dbd9b706f54fa035a?pvs=4"
              >
                <button
                  className={cn(
                    "font-semibold leading-tight transition-all ease-in-out",
                    mode === "light" ? "text-zinc-900" : "text-white",
                  )}
                >
                  Join Us
                </button>
              </Link>
              <Link target="_blank" href="https://app.getinterface.tech">
                <button
                  className={cn(
                    "font-semibold leading-tight transition-all ease-in-out",
                    mode === "light" ? "text-zinc-900" : "text-white",
                  )}
                >
                  Login
                </button>
              </Link>
              <Link
                target="_blank"
                href={"https://calendly.com/rebhav-getinterface/30min"}
                className="hidden lg:block"
              >
                <button
                  className={cn(
                    "text-center text-sm font-medium leading-none py-3 px-6 border-t boreder-l border-b-4 border-r-2 border-secondary-green transition-all ease-in-out rounded-xl text-interface-black bg-primary-green",
                  )}
                >
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* <div */}
      {/*   className={cn( */}
      {/*     "fixed w-full bottom-0 z-[999] lg:hidden border-t border-dashed block border-neutral-400 px-10 xl:px-20 2xl:px-32 transition-all ease-in-out", */}
      {/*     mode === "light" ? "bg-neutral-50" : "bg-stone-900", */}
      {/*   )} */}
      {/* > */}
      {/*   <div className="lg:border-r lg:border-dashed lg:border-neutral-400 w-full flex gap-6 items-center justify-center lg:justify-start py-6"> */}
      {/*     <Link */}
      {/*       href="#agents" */}
      {/*       onClick={(e) => { */}
      {/*         e.preventDefault(); */}
      {/*         document */}
      {/*           .getElementById("agents") */}
      {/*           ?.scrollIntoView({ behavior: "smooth" }); */}
      {/*       }} */}
      {/*     > */}
      {/*       <button */}
      {/*         className={cn( */}
      {/*           "font-semibold leading-tight transition-all ease-in-out", */}
      {/*           mode === "light" ? "text-zinc-900" : "text-white", */}
      {/*         )} */}
      {/*       > */}
      {/*         agents */}
      {/*       </button> */}
      {/*     </Link> */}
      {/*     <div */}
      {/*       role="button" */}
      {/*       onClick={(e) => { */}
      {/*         e.preventDefault(); */}
      {/*         document */}
      {/*           .getElementById("faq") */}
      {/*           ?.scrollIntoView({ behavior: "smooth", block: "end" }); */}
      {/*       }} */}
      {/*     > */}
      {/*       <button */}
      {/*         className={cn( */}
      {/*           "font-semibold leading-tight transition-all ease-in-out", */}
      {/*           mode === "light" ? "text-zinc-900" : "text-white", */}
      {/*         )} */}
      {/*       > */}
      {/*         faq */}
      {/*       </button> */}
      {/*     </div> */}
      {/*     <Link */}
      {/*       target="_blank" */}
      {/*       href="https://theinterfacecompany.notion.site/Interface-AI-Hiring-68fca33b53d6421dbd9b706f54fa035a?pvs=4" */}
      {/*     > */}
      {/*       <button */}
      {/*         className={cn( */}
      {/*           "font-semibold leading-tight transition-all ease-in-out", */}
      {/*           mode === "light" ? "text-zinc-900" : "text-white", */}
      {/*         )} */}
      {/*       > */}
      {/*         join us */}
      {/*       </button> */}
      {/*     </Link> */}
      {/*     <Link */}
      {/*       target="_blank" */}
      {/*       href="https://calendly.com/rebhav-getinterface/30min" */}
      {/*     > */}
      {/*       <button */}
      {/*         className={cn( */}
      {/*           "font-semibold leading-tight transition-all ease-in-out", */}
      {/*           mode === "light" ? "text-zinc-900" : "text-white", */}
      {/*         )} */}
      {/*       > */}
      {/*         contact us */}
      {/*       </button> */}
      {/*     </Link> */}
      {/*   </div> */}
      {/* </div> */}
    </>
  );
};

export default Navbar;
