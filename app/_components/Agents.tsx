import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Agents = () => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start -0.1', '0.9 end']
    })
    const x = useTransform(scrollYProgress, [0, 1], ["12.5%", "-12.5%"]);
    return (
        <section ref={container} className="h-[250vh] w-full relative px-32">
            <div className="h-screen sticky top-0 w-full flex flex-col items-center justify-center gap-16 overflow-hidden">
                <h1 className="text-center text-black text-[64px] font-extrabold leading-[70.40px]">
                    Introducing the future of work
                </h1>
                <motion.div style={{ x: x }} className="flex gap-11">
                    <div className="border w-[496px] border-dashed border-neutral-400">
                        <video src="/Agents/Olivia.mp4" loop autoPlay className="w-[496px] h-[400px] object-fill border-b border-dashed border-neutral-400"></video>
                        <div className="w-full flex flex-col items-center p-6 justify-center gap-4">
                            <p className="text-center text-black text-[28px] font-bold leading-[21px]">Olivia</p>
                            <p className="text-center text-black text-2xl font-extrabold leading-normal">Your procurement Agent</p>
                        </div>
                    </div>
                    <div className="border w-[496px] border-dashed border-neutral-400">
                        <video src="/Agents/Rio.mp4" loop autoPlay className="w-[496px] h-[400px] object-cover border-b border-dashed border-neutral-400"></video>
                        <div className="w-full flex flex-col items-center p-6 justify-center gap-4">
                            <p className="text-center text-black text-[28px] font-bold leading-[21px]">Astrid</p>
                            <p className="text-center text-black text-2xl font-extrabold leading-normal">Your Data Scientist</p>
                        </div>
                    </div>
                    <div className="border w-[496px] border-dashed border-neutral-400">
                        <video src="/Agents/Rio.mp4" loop autoPlay={true} className="w-[496px] h-[400px] object-cover border-b border-dashed border-neutral-400"></video>
                        <div className="w-full flex flex-col items-center p-6 justify-center gap-4">
                            <p className="text-center text-black text-[28px] font-bold leading-[21px]">Rio</p>
                            <p className="text-center text-black text-2xl font-extrabold leading-normal">Your procurement Agent</p>
                        </div>
                    </div>
                    <div className="border w-[496px] border-dashed border-neutral-400">
                        <video src="/Agents/Rio.mp4" loop autoPlay className="w-[496px] h-[400px] object-cover border-b border-dashed border-neutral-400"></video>
                        <div className="w-full flex flex-col items-center p-6 justify-center gap-4">
                            <p className="text-center text-black text-[28px] font-bold leading-[21px]">Build Your Agent</p>
                            {/* <p className="text-center text-black text-2xl font-extrabold leading-normal">Your procurement Agent</p> */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Agents;