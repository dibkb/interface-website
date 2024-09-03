import { cn } from "@/lib/utils";
import { ArrowLeft, Buildings } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import EagleOwl from "@/public/Integrations/Eagleowl.png";
import Drive from "@/public/Integrations/Drive.png";
import epos from "@/public/Integrations/eposnow.png";
import Netsuite from "@/public/Integrations/Netsuite.png";
import Brightpearl from "@/public/Integrations/Brightpearl.png";
import Link from "next/link";

const JoinUs = () => {
  const [organised, setOrganised] = useState(false);
  const [newsletter, setNewsLetter] = useState(false);
  useEffect(() => {
    const Yes = document.getElementById("yes");
    Yes?.addEventListener("mouseenter", () => {
      setOrganised(true);
    });
    const No = document.getElementById("no");
    No?.addEventListener("mouseenter", () => {
      setOrganised(false);
    });
  });
  return (
    <div id="join-us" className="w-full min-h-screen relative overflow-hidden">
      <div className="bg-[url('/JoinUs/background.svg')] w-full h-full absolute"></div>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="lg:w-[850px] w-[425px] h-[425px] lg:h-[850px] absolute rounded-full border border-zinc-900/opacity-10" />
        <div className="lg:w-[1250px] w-[625px] h-[625px] lg:h-[1250px] relative rounded-full border border-zinc-900/opacity-10" />
      </div>
      <div className="absolute top-0 left-0 h-full w-full z-10">
        <div className="relative w-full h-full">
          <div
            className={cn(
              "w-[72px] h-[72px] right-24 top-16 xl:top-16 xl:right-[40%] absolute rotate-[20.12deg] bg-white rounded-[6.86px] shadow border border-zinc-900/20 justify-center items-center inline-flex transition-all ease-in-out duration-700",
              organised &&
                "opacity-0 top-[50%] xl:right-[50%] xl:top-[50%] right-[50%] rotate-0 scale-0",
            )}
          >
            <Image className="" src={EagleOwl} alt="" />
          </div>
          <div
            className={cn(
              "w-[72px] h-[72px] rotate-[-10deg] top-44 left-10 xl:top-[30rem] xl:left-32 absolute  rounded-[6.86px] justify-center items-center inline-flex transition-all ease-in-out duration-700 delay-100",
              organised &&
                "opacity-0 top-[50%] xl:left-[50%] xl:bottom-[50%] left-[50%] rotate-0 scale-0",
            )}
          >
            <Image className="" src={Brightpearl} alt="" />
          </div>
          <div
            className={cn(
              "w-[72px] h-[72px] rotate-[32deg] top-52 right-4 xl:top-96 xl:right-32 absolute rounded-[6.86px] justify-center items-center inline-flex transition-all ease-in-out duration-700 delay-100",
              organised &&
                "opacity-0 top-[50%] xl:right-[50%] xl:top-[50%] right-[50%] rotate-0 scale-0",
            )}
          >
            <Image className="" src={epos} alt="" />
          </div>
          <div
            className={cn(
              "w-[72px] h-[72px] rotate-[-18.46deg] bottom-16 left-20 xl:bottom-24 xl:left-96 absolute bg-white rounded-[6.86px] shadow border border-zinc-90020 justify-center items-center inline-flex transition-all duration-700 delay-150 ease-in-out",
              organised &&
                "opacity-0 bottom-[50%] left-[50%] rotate-0 scale-0 xl:left-[50%] xl:bottom-[50%]",
            )}
          >
            <Image className="" src={Drive} alt="" />
          </div>
          <div
            className={cn(
              "w-[72px] h-[72px] rotate-[17.99deg] bottom-32 right-24 xl:bottom-32 xl:right-[50%] absolute bg-white rounded-[6.86px] shadow border border-zinc-90020 justify-center items-center inline-flex transition-all duration-700 delay-200 ease-in-out",
              organised &&
                "opacity-0 bottom-[50%] xl:right-[50%] xl:bottom-[50%] right-[50%] rotate-0 scale-0",
            )}
          >
            <Image className="" src={Netsuite} alt="" />
          </div>
          <div
            className={cn(
              "w-[214px] h-[245px] origin-top-left rotate-[42.48deg] bg-white rounded-3xl shadow border border-zinc-900/20 transition-all duration-1000 ease-in-out absolute opacity-100 top-10 -right-48 xl:right-24 hidden lg:block",
              organised &&
                "opacity-0 top-[50%] right-[50%] xl:right-[50%] xl:top-[50%] rotate-0 scale-0",
            )}
          >
            <div className="left-[23.16px] top-[27.27px] absolute text-zinc-400 text-xl font-extrabold">
              Payment Report
            </div>
            <div className="left-[151px] top-[206px] absolute text-zinc-400 text-[8px] font-extrabold">
              sign here
            </div>
            <div className="w-40 h-[17px] left-[23.16px] top-[73.27px] absolute bg-zinc-300 rounded-3xl" />
            <div className="w-[107px] h-[17px] left-[23.15px] top-[104.27px] absolute bg-zinc-300 rounded-3xl" />
            <div className="w-12 h-12 left-[145px] top-[158px] absolute" />
          </div>
          <div
            className={cn(
              "w-[214px] h-[245px] origin-top-left rotate-[-33.98deg] bg-white rounded-3xl shadow border border-zinc-900/20 absolute transition-all ease-in-out delay-150 duration-1000 opacity-100 top-64 xl:top-52 -left-16 xl:left-24 hidden lg:block",
              organised &&
                "opacity-0 top-[50%] left-[50%] rotate-0 scale-0 xl:left-[50%] xl:top-[50%]",
            )}
          >
            <div className="left-[23.16px] top-[27.27px] absolute text-zinc-400 text-xl font-extrabold ">
              Settlement Report
            </div>
            <div className="left-[22.32px] top-[63.94px] absolute text-zinc-400 text-[11px] font-extrabold ">
              FBA Fees:
            </div>
            <div className="w-[88.34px] h-[9.39px] left-[22.09px] top-[87.80px] absolute bg-zinc-300 rounded-[13.25px]" />
            <div className="w-[59.08px] h-[9.39px] left-[22.09px] top-[104.92px] absolute bg-zinc-300 rounded-[13.25px]" />
            <div className="left-[22.09px] top-[130.80px] absolute flex-col justify-start items-start gap-[9px] inline-flex">
              <div className="text-zinc-400 text-[11px] font-extrabold ">
                Amount Settled:
              </div>
              <div className="w-[88.34px] h-[9.39px] bg-zinc-300 rounded-[13.25px]" />
              <div className="w-[59.08px] h-[9.39px] bg-zinc-300 rounded-[13.25px]" />
            </div>
            <div className="left-[149.09px] top-[168.80px] absolute flex-col justify-center items-center inline-flex">
              <div className="w-12 h-12 relative" />
              <div className="text-zinc-400 text-[8px] font-extrabold ">
                sign here
              </div>
            </div>
          </div>
          <div
            className={cn(
              "w-[424px] h-[218px] overflow-hidden origin-top-left rotate-[-25.84deg] bg-white rounded-3xl shadow border border-zinc-900/20 absolute transition-all ease-in-out delay-200 duration-1000 opacity-100 bottom-0 -right-40 xl:right-24 hidden lg:block",
              organised &&
                "opacity-0 bottom-[50%] xl:right-[50%] xl:bottom-[50%] scale-0 right-[50%] rotate-0",
            )}
          >
            <div className="left-[23.16px] top-[27.27px] absolute text-zinc-400 text-xl font-extrabold ">
              Goods Received Note (GRN)
            </div>
            <div className="left-[20px] top-[63px] absolute flex-col justify-start items-start inline-flex">
              <div className="justify-start items-start inline-flex">
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
              </div>
              <div className="justify-start items-start inline-flex">
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
              </div>
              <div className="justify-start items-start inline-flex">
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
              </div>
              <div className="justify-start items-start inline-flex">
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
              </div>
              <div className="justify-start items-start inline-flex">
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
              </div>
              <div className="justify-start items-start inline-flex">
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
              </div>
              <div className="justify-start items-start inline-flex">
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
              </div>
              <div className="justify-start items-start inline-flex">
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
              </div>
              <div className="justify-start items-start inline-flex">
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
              </div>
              <div className="justify-start items-start inline-flex">
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
                <div className="w-[97px] h-[21px] border border-zinc-300" />
              </div>
            </div>
            <div className="left-[26px] top-[69px] absolute justify-start items-start gap-[17px] inline-flex">
              <div className="flex-col justify-start items-start gap-[11px] inline-flex">
                <div className="w-[73px] h-[9px] bg-neutral-400 rounded-[12.88px]" />
                <div className="w-[73px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[81px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[25px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[62px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[51px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[73px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[62px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[51px] h-[9px] bg-gray-200 rounded-[12.88px]" />
              </div>
              <div className="flex-col justify-start items-start gap-[11px] inline-flex">
                <div className="w-[73px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[73px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[81px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[25px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[62px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[51px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[73px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[62px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[51px] h-[9px] bg-neutral-400 rounded-[12.88px]" />
              </div>
              <div className="w-[81px] h-[169px] flex-col justify-start items-start gap-[11px] inline-flex">
                <div className="w-[67px] h-[9px] bg-neutral-400 rounded-[12.88px]" />
                <div className="w-[67px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[74px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[23px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[57px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[47px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[67px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[57px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[47px] h-[9px] bg-gray-200 rounded-[12.88px]" />
              </div>
              <div className="w-[81px] h-[169px] flex-col justify-start items-start gap-[11px] inline-flex">
                <div className="w-[57px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[57px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[63px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-5 h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[49px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[39px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[57px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[49px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[39px] h-[9px] bg-neutral-400 rounded-[12.88px]" />
              </div>
              <div className="w-[81px] h-[169px] flex-col justify-start items-start gap-[11px] inline-flex">
                <div className="w-[73px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[73px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[81px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[26px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[63px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[50px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[73px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[63px] h-[9px] bg-gray-200 rounded-[12.88px]" />
                <div className="w-[50px] h-[9px] bg-gray-200 rounded-[12.88px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full z-50 flex flex-col items-center justify-center px-32">
        <div
          className={cn(
            "flex flex-col items-center justify-center bg-neutral-50 border border-dashed border-neutral-400 p-7 lg:p-24 gap-4 lg:gap-9 transition-all duration-500 ease-in-out h-fit aspect-square sm:aspect-video",
            organised && "drop-shadow-[0_12px_12px_rgba(81,235,130,0.45)]",
          )}
        >
          {!newsletter && (
            <>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-stone-900 text-xs lg:text-base font-semibold border border-dashed border-neutral-400 p-2 leading-tight w-fit">
                  <p>Interface AI・[V1.1]</p>
                </div>
                <p className="text-center w-max text-stone-900 text-xl md:text-2xl lg:text-[44.12px] font-semibold  leading-[58.50px]">
                  Start Recovering Now
                </p>
              </div>
              <div className="flex gap-5 lg:gap-10 justify-center items-center w-full mt-2">
                <Link
                  target="_blank"
                  href={"https://cal.com/rebhav-bharadwaj/introductory-chat"}
                >
                  <button
                    id="yes"
                    className={cn(
                      "text-center bg-stone-900 text-neutral-50 text-base rounded-lg border border-b-4 border-r-2 border-neutral-400 lg:text-2xl font-semibold lg:leading-7 tracking-tight px-8 w-max sm:px-10 lg:px-16 py-3 transition-all ease-in-out duration-500",
                      organised &&
                        "bg-primary-green text-interface-black border-secondary-green",
                    )}
                  >
                    Yes
                  </button>
                </Link>
                <button
                  onClick={() => {
                    setNewsLetter(true);
                    setOrganised(false);
                  }}
                  id="no"
                  className="text-center text-stone-900 text-base lg:text-2xl font-semibold lg:leading-7 tracking-tight py-3 px-8 sm:px-10 lg:px-16 border border-b-4 border-r-2 rounded-lg border-neutral-400"
                >
                  No?
                </button>
              </div>
              <div className="text-center text-zinc-600 text-xs w-max lg:text-[21.92px] font-semibold flex gap-2 lg:gap-5 leading-loose items-center mt-2">
                Get a free audit of how much we can save you.
              </div>
            </>
          )}
          {newsletter && (
            <>
              <div className="flex flex-col items-center justify-center gap-3">
                <div
                  role="button"
                  onClick={() => {
                    setNewsLetter(false);
                  }}
                  className="text-stone-900 text-xs lg:text-base font-semibold border border-dashed border-neutral-400 p-2 leading-tight w-fit flex gap-2 items-center"
                >
                  <ArrowLeft />
                  <p>Go back</p>
                </div>
                <p className="text-center w-max text-stone-900 text-lg md:text-2xl lg:text-[44.12px] font-semibold  leading-[58.50px]">
                  Follow our journey
                </p>
              </div>
              <div className="flex justify-between border border-dashed border-neutral-400 mt-5 w-full">
                {/* <div> */}
                <input
                  placeholder="Enter your mail"
                  className="pl-4 outline-none bg-transparent placeholder:text-neutral-500 w-full text-xs lg:text-[21.74px] font-semibold lg:leading-7 tracking-tight"
                />
                <button
                  className={cn(
                    "text-center min-w-max bg-stone-900 text-neutral-50 text-xs lg:text-[21.74px] font-semibold lg:leading-7 tracking-tight w-max px-3 py-3",
                  )}
                >
                  Get Updates
                </button>
                {/* </div> */}
              </div>
              <div className="text-center text-zinc-600 text-xs lg:text-[21.92px] font-semibold flex gap-2 lg:gap-5 leading-loose items-center mt-2">
                {/* <Buildings weight="duotone" size={24} /> */}
                Get emails for new features. Nothing else.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
