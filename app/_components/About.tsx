import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@phosphor-icons/react";
import { Manrope } from "next/font/google";
import { useEffect, useState } from "react";

const manrope = Manrope({
  weight: "variable",
  subsets: ["latin"],
  style: "normal",
});

const About = () => {
  const [compensatedValue, setCompensatedValue] = useState([15]);
  const [actualValue, setActualValue] = useState([150000000]);
  const [chargebackPercentage, setChargebackPercentage] = useState([3]);
  const [costSaved, setCostSaved] = useState([
    150000000 * (3 / 100) * (95 / 100),
  ]);
  useEffect(() => {
    const calculatedCostSaved =
      actualValue[0] * (chargebackPercentage[0] / 100) * (95 / 100);
    const intValue = Math.round(calculatedCostSaved);
    setCostSaved([intValue]);
  }, [compensatedValue, chargebackPercentage, actualValue]);
  return (
    <section id="about" className="bg-interface-black relative w-full">
      <div className="absolute w-full h-full flex items-center justify-around">
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
        <div className="w-[1px] h-full bg-[#2c2c2c]"></div>
      </div>
      <div className="z-10 relative flex flex-col gap-10 items-center justify-center min-h-screen w-full text-neutral-50 py-20 px-10 lg:px-32 2xl:px-64">
        <h1 className="font-semibold text-5xl max-w-lg text-center">
          Lorem ipsum dolor ipsum{" "}
          <span className="text-primary-green">dolor</span>
        </h1>
        <div className={cn("flex gap-24 w-full mt-10", manrope.className)}>
          <div className="w-full px-16 py-12 bg-[#FBFBFB]/10 rounded-xl border-4 border-secondary-green backdrop-blur-md flex flex-col items-center justify-center gap-5">
            <div className="flex w-full justify-between text-lg font-semibold mb-5">
              <p>Annual Sales</p>
              <p>₹{actualValue}</p>
            </div>
            <Slider
              defaultValue={[15.4]}
              value={compensatedValue}
              onValueChange={(value) => {
                setCompensatedValue(value);
                setActualValue([value[0] * 10000000]);
              }}
              max={100}
              min={1}
              step={0.1}
            />
            <div className="flex w-full justify-between text-lg font-semibold text-neutral-400">
              <p>₹1 Cr</p>
              <p>₹100 Cr</p>
            </div>
          </div>
          <div className="w-full px-16 py-12 bg-[#FBFBFB]/10 rounded-xl border-4 border-secondary-green backdrop-blur-md flex flex-col items-center justify-center gap-5">
            <div className="flex w-full justify-between text-lg font-semibold mb-5">
              <p>Chargeback %</p>
              <p>{chargebackPercentage}%</p>
            </div>
            <Slider
              defaultValue={[3]}
              onValueChange={(value) => setChargebackPercentage(value)}
              value={chargebackPercentage}
              max={10}
              min={0.5}
              step={0.1}
            />
            <div className="flex w-full justify-between text-lg font-semibold text-neutral-400">
              <p>0.5%</p>
              <p>10%</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-5">
          <p>cost saved</p>
          <div
            className={cn(
              "bg-primary-green py-3 px-8 rounded-xl text-interface-black font-bold text-4xl border border-r-2 border-b-4 border-secondary-green",
              manrope.className,
            )}
          >
            ₹{costSaved}
          </div>
        </div>
        <button className="bg-neutral-50 py-2 px-5 rounded-xl text-interface-black font-medium text-lg border border-r-2 border-b-4 border-neutral-400 flex gap-2 items-center">
          Get reimbursed now <ArrowRight />
        </button>
        <p className="text-center font-semibold text-lg">
          Lorem ipsum dolor ipsum dolor
        </p>
      </div>
    </section>
  );
};

export default About;

