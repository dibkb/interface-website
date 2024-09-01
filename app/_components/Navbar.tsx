import { useMode } from "@/app/Providers/NavbarColor";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { X } from "@phosphor-icons/react";

const outfit = Outfit({ weight: "variable", subsets: ["latin"] });

const Navbar = () => {
  const { mode, setMode } = useMode();
  return (
    <>
      <nav className={"w-full fixed top-0 z-[999] border-b border-neutral-200"}>
        <div className="w-full py-2 text-sm flex justify-around px-5 items-center bg-primary-green font-medium">
          <div></div>
          Lorem ipsum dolor sit amet consectetur. Eu sed eget eu Lorem ipsum
          dolor sit amet consectetur. Eu sed eget eu
          <div>
            <X size={20} />
          </div>
        </div>
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
                "text-center text-black text-2xl lg:text-[28px] font-medium leading-7 py-6",
              )}
            >
              interface
            </p>
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
              <Link
                target="_blank"
                href="https://calendly.com/rebhav-getinterface/30min"
              >
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
      <div
        className={cn(
          "fixed w-full bottom-0 z-[999] lg:hidden border-t border-dashed block border-neutral-400 px-10 xl:px-20 2xl:px-32 transition-all ease-in-out",
          mode === "light" ? "bg-neutral-50" : "bg-stone-900",
        )}
      >
        <div className="lg:border-r lg:border-dashed lg:border-neutral-400 w-full flex gap-6 items-center justify-center lg:justify-start py-6">
          <Link
            href="#agents"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("agents")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <button
              className={cn(
                "font-semibold leading-tight transition-all ease-in-out",
                mode === "light" ? "text-zinc-900" : "text-white",
              )}
            >
              agents
            </button>
          </Link>
          <div
            role="button"
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
              faq
            </button>
          </div>
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
              join us
            </button>
          </Link>
          <Link
            target="_blank"
            href="https://calendly.com/rebhav-getinterface/30min"
          >
            <button
              className={cn(
                "font-semibold leading-tight transition-all ease-in-out",
                mode === "light" ? "text-zinc-900" : "text-white",
              )}
            >
              contact us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

