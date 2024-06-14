import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup'
import opti from '@/public/Efficiency/Optimization.png'
import integration from '@/public/Efficiency/integrations.png'

const Define = () => {
    const container = useRef(null)
    const isInView = useInView(container, { amount: 1 })
    const [value, setValue] = useState(500)
    useEffect(() => {
        if (isInView) {
            setValue(30583)
        }
    })
    return (
        <section className='h-[150vh] w-full'>
            <section ref={container} className="h-screen sticky top-0 flex flex-col items-center justify-center px-32 gap-16 w-full">
                <h1 className="text-center text-black text-6xl font-extrabold leading-[70.40px]">
                    how we define efficiency
                </h1>
                <div className="w-full flex justify-around">
                    <div className="w-[496px] border border-dashed border-neutral-400">
                        <div className="w-full h-fit border-b border-dashed border-neutral-400 flex items-center justify-center">
                            <Image src={opti} alt='' quality={100} />
                            {/* <div className="h-44 w-44 p-5 rounded-full bg-white/60 shadow flex flex-col justify-center gap-1 items-center">
                                <p className="text-center text-lime-400 text-lg font-semibold leading-snug">
                                    Costs Optimised
                                </p>
                                <CountUp start={0}
                                    end={value}
                                    duration={1.5}
                                    separator=", "
                                    prefix="$"
                                    // suffix={"$"}
                                    className="text-gray-800 text-3xl font-medium leading-[37.76px]"
                                    useEasing={true}
                                />
                            </div> */}
                        </div>
                        <div>
                            <p className="text-center text-black text-2xl font-extrabold leading-normal p-6">costs optimised due to our agents</p>
                        </div>
                    </div>
                    <div className="w-[496px] border border-dashed border-neutral-400">
                        <div className="w-full h-fit border-b border-dashed border-neutral-400 flex flex-col justify-center items-center">
                            {/* <div className=' px-6 py-4 bg-white rounded-[10px] shadow border-2 border-violet-600/40 justify-center items-center gap-2.5 inline-flex text-center text-violet-600 text-[28px] font-semibold leading-7'>
                                interface
                            </div> */}
                            <Image src={integration} alt='' quality={100} />
                        </div>
                        <div>
                            <p className="text-center text-black text-2xl font-extrabold leading-normal p-6">Integrations</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Define;