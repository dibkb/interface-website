import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@phosphor-icons/react";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const manrope = Manrope({
  weight: "variable",
  subsets: ["latin"],
  style: "normal",
});

const About = () => {
  const [compensatedValue, setCompensatedValue] = useState([30]);
  const [actualValue, setActualValue] = useState(["30,000,000"]);
  const [chargebackPercentage, setChargebackPercentage] = useState([3]);
  const [costSaved, setCostSaved] = useState(["855,000"]);
  function formatNumberWithCommas(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  useEffect(() => {
    const calculatedCostSaved =
      compensatedValue[0] *
      1000000 *
      (chargebackPercentage[0] / 100) *
      (95 / 100);
    const intValue = Math.round(calculatedCostSaved);
    const formattedIntValue = formatNumberWithCommas(intValue);
    setCostSaved([formattedIntValue]);
  }, [compensatedValue, chargebackPercentage, actualValue]);
  return (
    <section
      id="about"
      className="bg-interface-black relative w-full snap-start"
    >
      <div className="absolute w-full h-full flex items-center justify-around">
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
      </div>
      <div className="z-10 relative flex flex-col gap-10 items-center justify-center w-full text-neutral-50 py-40 px-10 sm:px-16 lg:px-28 2xl:px-64">
        <h1 className="font-semibold 2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl text-center max-w-3xl">
          Check how much you can reclaim from marketplaces
        </h1>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 xl:gap-20 lg:gap-16 gap-10 2xl:gap-24 w-full lg:mt-10 mt-2",
          )}
        >
          <div className="w-full px-8 py-6 xl:px-16 xl:py-12 bg-[#FBFBFB]/10 rounded-lg border-2 border-secondary-green backdrop-blur-md flex flex-col items-center justify-center gap-2">
            <div className="flex w-full justify-between 2xl:text-lg lg:text-base text-sm font-semibold mb-5">
              <p>Annual Sales</p>
              <p>${actualValue}</p>
            </div>
            <div className="relative w-full">
              <Slider
                defaultValue={compensatedValue}
                value={compensatedValue}
                onValueChange={(value) => {
                  if (value[0] === 1) {
                    setCompensatedValue([1]);
                    setActualValue([formatNumberWithCommas(1000000)]);
                  } else if (value[0] === 100) {
                    setCompensatedValue([100]);
                    setActualValue([formatNumberWithCommas(1000000 * 100)]);
                  } else {
                    setCompensatedValue([value[0] - 1]);
                    setActualValue([
                      formatNumberWithCommas(1000000 * (value[0] - 1)),
                    ]);
                  }
                }}
                max={100}
                min={1}
                step={10}
                className="z-10"
              />
              {/* <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center"> */}
              {/*   <div></div> */}
              {/*   <div className="w-[4px] h-[4px] aspect-square bg-white opacity-50 rounded-full p-2"></div> */}
              {/*   <div className="w-[4px] h-[4px] aspect-square bg-white opacity-50 rounded-full p-2"></div> */}
              {/*   <div className="w-[4px] h-[4px] aspect-square bg-white opacity-50 rounded-full p-2"></div> */}
              {/*   <div className="w-[4px] h-[4px] aspect-square bg-white opacity-50 rounded-full p-2"></div> */}
              {/*   <div className="w-[4px] h-[4px] aspect-square bg-white opacity-50 rounded-full p-2"></div> */}
              {/*   <div className="w-[4px] h-[4px] aspect-square bg-white opacity-50 rounded-full p-2"></div> */}
              {/*   <div className="w-[4px] h-[4px] aspect-square bg-white opacity-50 rounded-full p-2"></div> */}
              {/*   <div className="w-[4px] h-[4px] aspect-square bg-white opacity-50 rounded-full p-2"></div> */}
              {/*   <div className="w-[4px] h-[4px] aspect-square bg-white opacity-50 rounded-full p-2"></div> */}
              {/*   <div></div> */}
              {/*   <div className="w-[4px] h-[4px] aspect-square bg-white opacity-50 rounded-full p-2"></div> */}
              {/* </div> */}
            </div>
            <div className="flex w-full justify-between lg:text-base text-sm 2xl:text-lg font-semibold text-neutral-400">
              <p>$1 M</p>
              <p>$100 M</p>
            </div>
          </div>
          <div className="w-full xl:px-16 xl:py-12 px-8 py-6 bg-[#FBFBFB]/10 rounded-lg border-2 border-secondary-green backdrop-blur-md flex flex-col items-center justify-center gap-2">
            <div className="flex w-full justify-between lg:text-base text-sm 2xl:text-lg font-semibold mb-5">
              <p>Chargeback %</p>
              <p>{chargebackPercentage}%</p>
            </div>
            <div className="relative w-full">
              <Slider
                defaultValue={[3]}
                onValueChange={(value) => setChargebackPercentage(value)}
                value={chargebackPercentage}
                max={10}
                min={0.5}
                step={1}
              />
            </div>
            <div className="flex w-full justify-between 2xl:text-lg lg:text-base text-sm font-semibold text-neutral-400">
              <p>0.5%</p>
              <p>10%</p>
            </div>
          </div>
        </div>
        <div className="lg:mt-10 mt-2 flex flex-col items-center justify-center gap-2">
          <p>Your Savings</p>
          <div
            className={cn(
              "bg-primary-green py-3 px-14 rounded-lg text-interface-black font-bold xl:text-3xl text-2xl 2xl:text-4xl border border-r-2 border-b-4 border-secondary-green",
            )}
          >
            ${costSaved}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <Link
            href={"https://cal.com/rebhav-bharadwaj/introductory-chat"}
            target="_blank"
          >
            <button className="bg-neutral-50 py-2 px-5 rounded-xl text-interface-black font-medium lg:text-base text-sm 2xl:text-lg border border-r-2 border-b-4 border-neutral-400 flex gap-2 items-center">
              Recover your Funds <ArrowRight />
            </button>
          </Link>
          <p className="text-center font-semibold lg:text-base text-sm 2xl:text-lg">
            save time and money
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
