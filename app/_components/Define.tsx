import { AnimatePresence, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup'
import opti from '@/public/Efficiency/Optimization.png'
import integration from '@/public/Efficiency/integrations.png'
import Olivia from '@/public/Agents/icons/Agent_Olivia.png'
import Rio from '@/public/Agents/icons/Agent_Rio.png'
import Astrid from '@/public/Agents/icons/Agent_Astrid.png'
import EagleOwl from '@/public/Integrations/Eagleowl.png'
import Drive from '@/public/Integrations/Drive.png'
import epos from '@/public/Integrations/eposnow.png'
import Netsuite from '@/public/Integrations/Netsuite.png'
import Brightpearl from '@/public/Integrations/Brightpearl.png'
import { cn } from '@/lib/utils';
import { CheckCircle } from '@phosphor-icons/react';
import logo from '@/public/logo.png'

const Define = () => {
    const container = useRef(null)
    const isInView = useInView(container, { amount: 1 })
    const [value, setValue] = useState(500)
    const [agent, setAgent] = useState(0)
    const [oldValue, setOldValue] = useState(0)
    const [connected, setConnected] = useState(0)
    useEffect(() => {
        if (value < 50000) {
            setTimeout(() => {
                setOldValue(value)
                setValue(value + Math.random() * 2000)
            }, 2000)
        } else {
            setValue(500)
        }
    }, [value])
    useEffect(() => {
        setTimeout(() => {
            if (connected >= 4) {
                setConnected(0)
            } else {
                setConnected(connected + 1)
            }
        }, 5000)
    }, [connected])
    // useEffect(() => {
    //     setTimeout(() => {
    //         setAgent(Math.floor(Math.random() * 3));
    //         console.log(agent)
    //     }, 2000);
    // }, [agent])
    return (
        <>
            <section className='hidden md:block w-full'>
                <section ref={container} className="min-h-screen sticky top-0 flex flex-col items-center justify-center px-10 py-20 xl:px-20 2xl:px-32 gap-16 w-full">
                    <h1 className="text-center text-black text-5xl lg:text-6xl font-extrabold leading-[70.40px]">
                        how we define efficiency
                    </h1>
                    <div className="2xl:w-[80%] xl:w-[90%] w-full flex lg:gap-10 2xl:gap-40 flex-row justify-center items-center md:items-stretch">
                        <div className="w-1/2 border border-dashed border-neutral-400">
                            <div className="w-full aspect-square border-b border-dashed border-neutral-400 flex items-center justify-center relative">
                                {/* <Image src={opti} alt='' quality={100} /> */}
                                <div className='absolute h-full w-full flex items-center justify-center z-50'>
                                    <div className="h-32 w-32 p-5 rounded-full bg-white/80 shadow flex flex-col justify-center gap-1 items-center backdrop-blur">
                                        <p className="text-center text-lime-400 text-sm font-semibold leading-snug">
                                            Costs Optimised
                                        </p>
                                        <CountUp start={oldValue}
                                            end={value}
                                            duration={1.5}
                                            separator=", "
                                            prefix="$"
                                            className="text-gray-800 text-xl font-medium leading-[37.76px]"
                                            useEasing={true}
                                        />
                                    </div>
                                </div>
                                {/* {agent === 0 && */}
                                <motion.div
                                    initial={{ top: 0, left: 0, opacity: 1 }}
                                    animate={{ top: `50%`, left: `50%`, opacity: 0.5, transform: 'translate(-50%, -50%)' }}
                                    transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 5.5 }}
                                    className='absolute p-2 rounded-full overflow-hidden z-20 bg-white/60'>
                                    <Image src={Olivia} alt='agent' quality={100} className='h-12 w-12 rounded-full' />
                                </motion.div>
                                {/* } */}
                                {/* {agent === 1 && */}
                                <motion.div
                                    initial={{ top: 0, right: 0, opacity: 1 }}
                                    animate={{ top: `50%`, right: `50%`, opacity: 0.5, transform: 'translate(50%, -50%)' }}
                                    transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 5.5, delay: 2 }}
                                    className='absolute p-2 rounded-full overflow-hidden z-20 bg-white/60'>
                                    <Image src={Rio} alt='agent' quality={100} className='h-12 w-12 rounded-full' />
                                </motion.div>
                                {/* } */}
                                {/* {agent == 2 && */}
                                <motion.div
                                    initial={{ bottom: 0, left: 0, opacity: 1 }}
                                    animate={{ bottom: `50%`, left: `50%`, opacity: 0.5, transform: 'translate(-50%, 50%)' }}
                                    transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 5.5, delay: 4 }}
                                    className='absolute p-2 rounded-full overflow-hidden z-20 bg-white/60'>
                                    <Image src={Astrid} alt='agent' quality={100} className='h-12 w-12 rounded-full' />
                                </motion.div>
                                {/* } */}
                                <div className='h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-50/20 from-0% to-neutral-50 to-80% absolute z-10'></div>
                                <div className='h-[1px] w-full absolute bg-stone-900/20'></div>
                                <div className='h-full w-[1px] absolute bg-stone-900/20'></div>
                                <div className='h-[1px] -rotate-45 w-full absolute bg-stone-900/20'></div>
                                <div className='h-[1px] rotate-45 w-full absolute bg-stone-900/20'></div>
                            </div>
                            <div>
                                <p className="text-center text-black text-2xl font-extrabold leading-normal p-6">costs optimised due to our agents</p>
                            </div>
                        </div>
                        <div className="w-1/2 aspect-square border border-dashed border-neutral-400">
                            <div className="w-full aspect-square border-b border-dashed border-neutral-400 flex flex-col justify-center items-center relative">
                                <div className='absolute h-full w-full flex flex-col items-center justify-center z-10'>
                                    {/* <div className=' px-3 py-2 lg:px-6 lg:py-4 bg-white rounded-[10px] shadow border-2 border-violet-600/40 justify-center items-center gap-2.5 inline-flex text-center text-violet-600 text-sm lg:text-[28px] font-semibold leading-7'>
                                        interface
                                    </div> */}
                                    <Image src={logo} quality={100} alt='logo' className='xl:h-20 xl:w-20 lg:w-16 lg:h-16 md:h-14 md:w-14 w-10 h-10' />
                                </div>
                                {/* <div className='h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-50/20 from-0% to-neutral-50 to-80% absolute z-10'></div>
                                <div className='h-[1px] w-full absolute bg-stone-900/20'></div>
                                <div className='h-full w-[1px] absolute bg-stone-900/20'></div>
                                <div className='h-[1px] -rotate-45 w-full absolute bg-stone-900/20'></div>
                                <div className='h-[1px] rotate-45 w-full absolute bg-stone-900/20'></div> */}
                                <div className='absolute top-0 w-full h-full gap-y-20 z-10 grid grid-rows-3 px-5 xl:px-5 py-14'>
                                    <div className='w-full flex justify-between px-10 h-1/3'>
                                        <div className={cn('w-fit h-fit flex flex-col items-center gap-1 rounded-2xl transition-all ease-in-out relative')}>
                                            <Image src={EagleOwl} alt='integration' quality={100} className={cn('xl:h-16 sm:w-12 sm:h-12 h-8 w-8 xl:w-16 rounded-full', connected == 0 && "shadow-lg shadow-violet-600/20")} />
                                            <p className='text-xs mt-2'>
                                                EagelOwl
                                            </p>
                                            <AnimatePresence>
                                                {connected === 0 &&
                                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ ease: 'easeInOut' }} className='absolute transition-all ease-in-out -top-10 p-2 text-xs items-center rounded-full bg-white flex gap-2'>
                                                        <CheckCircle size={16} weight='fill' className='text-violet-600' />
                                                        <motion.p initial={{ width: 0 }} animate={{ width: 'fit-content' }} transition={{ ease: 'easeInOut', delay: 1 }} className='overflow-hidden'>
                                                            Connected
                                                        </motion.p>
                                                    </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                        <div className={cn('w-fit h-fit flex flex-col items-center gap-1 rounded-2xl transition-all ease-in-out relative')}>
                                            <Image src={Drive} alt='integration' quality={100} className={cn('xl:h-16 sm:w-12 sm:h-12 h-8 w-8 xl:w-16 rounded-full', connected == 1 && "shadow-lg shadow-violet-600/20")} />
                                            <p className='text-xs mt-2'>
                                                Drive
                                            </p>
                                            <AnimatePresence>
                                                {connected === 1 &&
                                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ ease: 'easeInOut' }} className='absolute transition-all ease-in-out -top-10 p-2 text-xs items-center rounded-full bg-white flex gap-2'>
                                                        <CheckCircle size={16} weight='fill' className='text-violet-600' />
                                                        <motion.p initial={{ width: 0 }} animate={{ width: 'fit-content' }} transition={{ ease: 'easeInOut', delay: 1 }} className='overflow-hidden'>
                                                            Connected
                                                        </motion.p>
                                                    </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-between px-2 h-1/3'>
                                        <div className={cn('w-fit h-fit flex flex-col items-center gap-1 rounded-2xl transition-all ease-in-out relative')}>
                                            <Image src={Brightpearl} alt='integration' quality={100} className={cn('xl:h-16 sm:w-12 sm:h-12 h-8 w-8 xl:w-16 rounded-full', connected == 2 && "shadow-lg shadow-violet-600/20")} />
                                            <p className='text-xs mt-2'>
                                                Brightpearl
                                            </p>
                                            <AnimatePresence>
                                                {connected === 2 &&
                                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ ease: 'easeInOut' }} className='absolute transition-all ease-in-out -top-10 p-2 text-xs items-center rounded-full bg-white flex gap-2'>
                                                        <CheckCircle size={16} weight='fill' className='text-violet-600' />
                                                        <motion.p initial={{ width: 0 }} animate={{ width: 'fit-content' }} transition={{ ease: 'easeInOut', delay: 1 }} className='overflow-hidden'>
                                                            Connected
                                                        </motion.p>
                                                    </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                        <div className={cn('w-fit h-fit flex flex-col items-center gap-1 rounded-2xl transition-all ease-in-out relative')}>
                                            <Image src={epos} alt='integration' quality={100} className={cn('xl:h-16 sm:w-12 sm:h-12 h-8 w-8 xl:w-16 rounded-full', connected == 3 && "shadow-lg shadow-violet-600/20")} />
                                            <p className='text-xs mt-2'>
                                                eposnow
                                            </p>
                                            <AnimatePresence>
                                                {connected === 3 &&
                                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ ease: 'easeInOut' }} className='absolute transition-all ease-in-out -top-10 p-2 text-xs items-center rounded-full bg-white flex gap-2'>
                                                        <CheckCircle size={16} weight='fill' className='text-violet-600' />
                                                        <motion.p initial={{ width: 0 }} animate={{ width: 'fit-content' }} transition={{ ease: 'easeInOut', delay: 1 }} className='overflow-hidden'>
                                                            Connected
                                                        </motion.p>
                                                    </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-center h-1/3 px-5'>
                                        <div className={cn('w-fit h-fit flex flex-col items-center gap-1 rounded-2xl transition-all ease-in-out relative')}>
                                            <Image src={Netsuite} alt='integration' quality={100} className={cn('xl:h-16 sm:w-12 sm:h-12 h-8 w-8 xl:w-16 rounded-full', connected == 4 && "shadow-lg shadow-violet-600/20")} />
                                            <p className='text-xs mt-2'>
                                                Netsuite
                                            </p>
                                            <AnimatePresence>
                                                {connected === 4 &&
                                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ ease: 'easeInOut' }} className='absolute transition-all ease-in-out -top-10 p-2 text-xs items-center rounded-full bg-white flex gap-2'>
                                                        <CheckCircle size={16} weight='fill' className='text-violet-600' />
                                                        <motion.p initial={{ width: 0 }} animate={{ width: 'fit-content' }} transition={{ ease: 'easeInOut', delay: 1 }} className='overflow-hidden'>
                                                            Connected
                                                        </motion.p>
                                                    </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-center text-black text-2xl font-extrabold leading-normal p-6">integrate with your preferred tech stack</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className='lg:h-[150vh] block md:hidden w-full'>
                <section ref={container} className="lg:h-screen min-h-screen lg:sticky top-0 flex flex-col items-center justify-center px-10 py-20 lg:py-0 xl:px-20 2xl:px-32 gap-16 w-full">
                    <h1 className="text-center text-black text-5xl lg:text-6xl font-extrabold leading-[70.40px]">
                        how we define efficiency
                    </h1>
                    <div className="w-full flex flex-col gap-10 lg:flex-row justify-center items-center lg:items-stretch lg:justify-around">
                        <div className="lg:w-[439px] w-full border border-dashed border-neutral-400">
                            <div className="w-full aspect-square lg:h-[439px] border-b border-dashed border-neutral-400 flex items-center justify-center relative">
                                {/* <Image src={opti} alt='' quality={100} /> */}
                                <div className='absolute h-full w-full flex items-center justify-center z-50'>
                                    <div className="h-32 w-32 p-5 rounded-full bg-white/80 shadow flex flex-col justify-center gap-1 items-center backdrop-blur">
                                        <p className="text-center text-lime-400 text-sm font-semibold leading-snug">
                                            Costs Optimised
                                        </p>
                                        <CountUp start={oldValue}
                                            end={value}
                                            duration={1.5}
                                            separator=", "
                                            prefix="$"
                                            className="text-gray-800 text-xl font-medium leading-[37.76px]"
                                            useEasing={true}
                                        />
                                    </div>
                                </div>
                                {/* {agent === 0 && */}
                                <motion.div
                                    initial={{ top: 0, left: 0, opacity: 1 }}
                                    animate={{ top: `50%`, left: `50%`, opacity: 0.5, transform: 'translate(-50%, -50%)' }}
                                    transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 5.5 }}
                                    className='absolute p-2 rounded-full overflow-hidden z-20 bg-white/60'>
                                    <Image src={Olivia} alt='agent' quality={100} className='h-12 w-12 rounded-full' />
                                </motion.div>
                                {/* } */}
                                {/* {agent === 1 && */}
                                <motion.div
                                    initial={{ top: 0, right: 0, opacity: 1 }}
                                    animate={{ top: `50%`, right: `50%`, opacity: 0.5, transform: 'translate(50%, -50%)' }}
                                    transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 5.5, delay: 2 }}
                                    className='absolute p-2 rounded-full overflow-hidden z-20 bg-white/60'>
                                    <Image src={Rio} alt='agent' quality={100} className='h-12 w-12 rounded-full' />
                                </motion.div>
                                {/* } */}
                                {/* {agent == 2 && */}
                                <motion.div
                                    initial={{ bottom: 0, left: 0, opacity: 1 }}
                                    animate={{ bottom: `50%`, left: `50%`, opacity: 0.5, transform: 'translate(-50%, 50%)' }}
                                    transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 5.5, delay: 4 }}
                                    className='absolute p-2 rounded-full overflow-hidden z-20 bg-white/60'>
                                    <Image src={Astrid} alt='agent' quality={100} className='h-12 w-12 rounded-full' />
                                </motion.div>
                                {/* } */}
                                <div className='h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-50/20 from-0% to-neutral-50 to-80% absolute z-10'></div>
                                <div className='h-[1px] w-full absolute bg-stone-900/20'></div>
                                <div className='h-full w-[1px] absolute bg-stone-900/20'></div>
                                <div className='h-[1px] -rotate-45 w-full absolute bg-stone-900/20'></div>
                                <div className='h-[1px] rotate-45 w-full absolute bg-stone-900/20'></div>
                            </div>
                            <div>
                                <p className="text-center text-black text-2xl font-extrabold leading-normal p-6">costs optimised due to our agents</p>
                            </div>
                        </div>
                        <div className="w-full aspect-square border border-dashed border-neutral-400">
                            <div className="w-full aspect-square border-b border-dashed border-neutral-400 flex flex-col justify-center items-center relative">
                                <div className='absolute h-full w-full flex flex-col items-center justify-center z-10'>
                                    {/* <div className=' px-3 py-2 lg:px-6 lg:py-4 bg-white rounded-[10px] shadow border-2 border-violet-600/40 justify-center items-center gap-2.5 inline-flex text-center text-violet-600 text-sm lg:text-[28px] font-semibold leading-7'>
                                        interface
                                    </div> */}
                                    <Image src={logo} quality={100} alt='logo' className='xl:h-20 xl:w-20 lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 sm:w-14 sm:h-14' />
                                </div>
                                <div className='absolute top-0 w-full h-full gap-y-[41.5px] md:gap-y-20 z-10 flex flex-col py-[44px] px-5 xl:px-5'>
                                    <div className='w-full flex justify-between px-10 h-full'>
                                        <div className={cn('w-fit h-fit flex flex-col items-center gap-1 rounded-2xl transition-all ease-in-out relative')}>
                                            <Image src={EagleOwl} alt='integration' quality={100} className={cn('xl:h-16 sm:w-12 sm:h-12 h-8 w-8 xl:w-16 rounded-full', connected == 0 && "shadow-lg shadow-violet-600/20")} />
                                            <p className='text-xs mt-2'>
                                                EagelOwl
                                            </p>
                                            <AnimatePresence>
                                                {connected === 0 &&
                                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ ease: 'easeInOut' }} className='absolute transition-all ease-in-out -top-10 p-2 text-[10px] sm:text-xs items-center rounded-full bg-white flex gap-2'>
                                                        <CheckCircle size={14} weight='fill' className='text-violet-600' />
                                                        <motion.p initial={{ width: 0 }} animate={{ width: 'fit-content' }} transition={{ ease: 'easeInOut', delay: 1 }} className='overflow-hidden'>
                                                            Connected
                                                        </motion.p>
                                                    </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                        <div className={cn('w-fit h-fit flex flex-col items-center gap-1 rounded-2xl transition-all ease-in-out relative')}>
                                            <Image src={Drive} alt='integration' quality={100} className={cn('xl:h-16 sm:w-12 sm:h-12 h-8 w-8 xl:w-16 rounded-full', connected == 1 && "shadow-lg shadow-violet-600/20")} />
                                            <p className='text-xs mt-2'>
                                                Drive
                                            </p>
                                            <AnimatePresence>
                                                {connected === 1 &&
                                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ ease: 'easeInOut' }} className='absolute transition-all ease-in-out -top-10 p-2 text-[10px] sm:text-xs items-center rounded-full bg-white flex gap-2'>
                                                        <CheckCircle size={14} weight='fill' className='text-violet-600' />
                                                        <motion.p initial={{ width: 0 }} animate={{ width: 'fit-content' }} transition={{ ease: 'easeInOut', delay: 1 }} className='overflow-hidden'>
                                                            Connected
                                                        </motion.p>
                                                    </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-between px-2 h-full'>
                                        <div className={cn('w-fit h-fit flex flex-col items-center gap-1 rounded-2xl transition-all ease-in-out relative')}>
                                            <Image src={Brightpearl} alt='integration' quality={100} className={cn('xl:h-16 sm:w-12 sm:h-12 h-8 w-8 xl:w-16 rounded-full', connected == 2 && "shadow-lg shadow-violet-600/20")} />
                                            <p className='text-xs mt-2'>
                                                Brightpearl
                                            </p>
                                            <AnimatePresence>
                                                {connected === 2 &&
                                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ ease: 'easeInOut' }} className='absolute transition-all ease-in-out -top-10 p-2 text-[10px] sm:text-xs items-center rounded-full bg-white flex gap-2'>
                                                        <CheckCircle size={14} weight='fill' className='text-violet-600' />
                                                        <motion.p initial={{ width: 0 }} animate={{ width: 'fit-content' }} transition={{ ease: 'easeInOut', delay: 1 }} className='overflow-hidden'>
                                                            Connected
                                                        </motion.p>
                                                    </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                        <div className={cn('w-fit h-fit flex flex-col items-center gap-1 rounded-2xl transition-all ease-in-out relative')}>
                                            <Image src={epos} alt='integration' quality={100} className={cn('xl:h-16 sm:w-12 sm:h-12 h-8 w-8 xl:w-16 rounded-full', connected == 3 && "shadow-lg shadow-violet-600/20")} />
                                            <p className='text-xs mt-2'>
                                                eposnow
                                            </p>
                                            <AnimatePresence>
                                                {connected === 3 &&
                                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ ease: 'easeInOut' }} className='absolute transition-all ease-in-out -top-10 p-2 text-[10px] sm:text-xs items-center rounded-full bg-white flex gap-2'>
                                                        <CheckCircle size={14} weight='fill' className='text-violet-600' />
                                                        <motion.p initial={{ width: 0 }} animate={{ width: 'fit-content' }} transition={{ ease: 'easeInOut', delay: 1 }} className='overflow-hidden'>
                                                            Connected
                                                        </motion.p>
                                                    </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-center px-5 h-full'>
                                        <div className={cn('w-fit h-fit flex flex-col items-center gap-1 rounded-2xl transition-all ease-in-out relative')}>
                                            <Image src={Netsuite} alt='integration' quality={100} className={cn('xl:h-16 sm:w-12 sm:h-12 h-8 w-8 xl:w-16 rounded-full', connected == 4 && "shadow-lg shadow-violet-600/20")} />
                                            <p className='text-xs mt-2'>
                                                Netsuite
                                            </p>
                                            <AnimatePresence>
                                                {connected === 4 &&
                                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ ease: 'easeInOut' }} className='absolute transition-all ease-in-out -top-10 p-2 text-[10px] sm:text-xs items-center rounded-full bg-white flex gap-2'>
                                                        <CheckCircle size={14} weight='fill' className='text-violet-600' />
                                                        <motion.p initial={{ width: 0 }} animate={{ width: 'fit-content' }} transition={{ ease: 'easeInOut', delay: 1 }} className='overflow-hidden'>
                                                            Connected
                                                        </motion.p>
                                                    </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-center text-black text-2xl font-extrabold leading-normal p-6">integrate with your preferred tech stack</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Define;
