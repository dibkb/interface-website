import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const videos = [
    "/Agents/Olivia.mp4",
    "/Agents/Rio1.mp4",
    "/Agents/Astrid1.mp4",
    "/Agents/Rio.mp4",
]

const Agents = () => {
    const [agent, setAgent] = useState(0)
    const container = useRef(null)
    const timer = useRef<any>(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start -0.1', '0.9 end']
    })
    useEffect(() => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            setAgent(prevAgent => prevAgent >= 3 ? 0 : prevAgent + 1);
        }, 20000);
    }, [agent]);
    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);
    return (
        <div id="agents" className="min-h-screen w-full flex flex-col items-center py-20 px-10 xl:px-20 2xl:px-32 justify-center gap-16 overflow-hidden">
            <h1 className="text-center text-black text-5xl lg:text-[64px] font-extrabold lg:leading-[70.40px]">
                introducing the future of work
            </h1>
            <div className="hidden lg:flex items-center justify-center w-full">
                <div className="w-full xl:w-full 2xl:w-[85%] text-left border-dashed border border-neutral-400 flex">
                    <div className="w-6/12 flex flex-col items-start">
                        <button onClick={() => {
                            clearTimeout(timer.current)
                            setAgent(0)
                        }} className={cn("w-full h-1/4 border-b border-dashed border-neutral-400 p-6 justify-center flex flex-col gap-4 transition-all ease-in-out", agent !== 0 && "bg-[#EAEAEA]")}>
                            <div className="p-2 border border-dashed border-neutral-400 w-fit">
                                <div className="text-stone-900 text-base font-extrabold leading-tight">Olivia- your data entry agent</div>
                            </div>
                            <p className="text-neutral-400 text-sm font-semibold leading-[16.80px] text-left">enters invoices and other sources of truth into Software 1.0</p>
                        </button>
                        <div role="button" onClick={() => {
                            clearTimeout(timer.current)
                            setAgent(1)
                        }} className={cn("w-full h-1/4 border-b border-dashed border-neutral-400 p-6 justify-center flex flex-col gap-4 transition-all ease-in-out", agent !== 1 && "bg-[#EAEAEA]")}>
                            <div className="p-2 border border-dashed border-neutral-400 w-fit">
                                <div className="text-stone-900 text-base font-extrabold leading-tight">Rio- your procurement analyst</div>
                            </div>
                            <p className="text-neutral-400 text-sm font-semibold leading-[16.80px] text-left">Tier maps all your vendors, drafts POs, communicates with your suppliers.</p>
                        </div>
                        <button onClick={() => {
                            clearTimeout(timer.current)
                            setAgent(2)
                        }} className={cn("w-full h-1/4 border-b border-dashed border-neutral-400 p-6 justify-center flex flex-col gap-4 transition-all ease-in-out", agent !== 2 && "bg-[#EAEAEA]")}>
                            <div className="p-2 border border-dashed border-neutral-400 w-fit">
                                <div className="text-stone-900 text-base font-extrabold leading-tight">Astrid- your data scientist</div>
                            </div>
                            <p className="text-neutral-400 text-sm font-semibold leading-[16.80px] text-left">automate and optimize data analysis to provide real-time insights.</p>
                        </button>
                        <button onClick={() => {
                            clearTimeout(timer.current)
                            setAgent(3)
                        }} className={cn("w-full h-1/4 border-b border-dashed border-neutral-400 p-6 justify-center flex flex-col gap-4 transition-all ease-in-out", agent !== 3 && "bg-[#EAEAEA]")}>
                            <div className="p-2 border border-dashed border-neutral-400 w-fit">
                                <div className="text-stone-900 text-base font-extrabold leading-tight">Train your own agent</div>
                            </div>
                            <p className="text-neutral-400 text-sm font-semibold leading-[16.80px] text-left">Train your own agent to a personalised workflow on your preferred tech stack.</p>
                        </button>
                    </div>
                    <div className="w-6/12 h-full border-l border-dashed border-neutral-400">
                        <video src={videos[agent]} autoPlay loop className="w-full aspect-square object-cover"></video>
                    </div>
                </div>
            </div>
            <div className="block lg:hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 justify-center">
                    <div className="border border-dashed border-neutral-400">
                        <video src="/Agents/Olivia.mp4" autoPlay loop className="w-full object-fill aspect-square border-b border-dashed border-neutral-400"></video>
                        <div className="w-full flex flex-col items-center justify-center py-4 gap-4">
                            <div className="p-2 border border-dashed border-neutral-400 w-fit">
                                <div className="text-stone-900 text-base font-bold leading-tight">olivia</div>
                            </div>
                            <p className="text-stone-900 text-sm font-extrabold leading-[16.80px] text-left">your data entry agent</p>
                        </div>
                    </div>
                    <div className="border border-dashed border-neutral-400">
                        <video src="/Agents/Rio.mp4" autoPlay loop className="w-full object-fill aspect-square border-b border-dashed border-neutral-400"></video>
                        <div className="w-full flex flex-col items-center justify-center py-4 gap-4">
                            <div className="p-2 border border-dashed border-neutral-400 w-fit">
                                <div className="text-stone-900 text-base font-bold leading-tight">rio</div>
                            </div>
                            <p className="text-stone-900 text-sm font-extrabold leading-[16.80px] text-left">your procurement agent</p>
                        </div>
                    </div>
                    <div className="border border-dashed border-neutral-400">
                        <video src="/Agents/Rio.mp4" autoPlay loop className="w-full object-fill aspect-square border-b border-dashed border-neutral-400"></video>
                        <div className="w-full flex flex-col items-center justify-center py-4 gap-4">
                            <div className="p-2 border border-dashed border-neutral-400 w-fit">
                                <div className="text-stone-900 text-base font-bold leading-tight">astrid</div>
                            </div>
                            <p className="text-stpne-900 text-sm font-extrabold leading-[16.80px] text-left">your data scientist</p>
                        </div>
                    </div>
                    <div className="border border-dashed border-neutral-400">
                        <video src="/Agents/Rio.mp4" autoPlay loop className="w-full object-fill aspect-square border-b border-dashed border-neutral-400"></video>
                        <div className="w-full flex flex-col items-center justify-center py-4 gap-4">
                            <div className="p-2 border border-dashed border-neutral-400 w-fit">
                                <div className="text-stone-900 text-base font-bold leading-tight">train your own agent</div>
                            </div>
                            <p className="text-stone-900 text-sm font-extrabold leading-[16.80px] text-left">on your personal workflow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Agents;