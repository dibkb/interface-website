import { Factory, MagicWand } from "@phosphor-icons/react"
import { motion, useTransform } from "framer-motion"
import { FaRegClock } from "react-icons/fa6"
import { RxCrumpledPaper } from "react-icons/rx"

interface WordProps {
    children: any,
    progress: any,
    range: any
}

const Word = ({ children, progress, range }: WordProps) => {
    const opacity = useTransform(progress, range, [0, 1])
    return (
        <>
            <span className="text-white text-2xl sm:text-3xl xl:text-5xl font-bold leading-[50px] xl:leading-[65.08px] relative mr-[12px] xl:mt-[12px]">
                <span className={"absolute opacity-20"}>{children}</span>
                <motion.span style={{ opacity: opacity }}>{children}</motion.span>
            </span>
            {children === "business" &&
                <span className="text-white text-3xl sm:text-4xl xl:text-6xl font-bold leading-[65.08px] relative mr-[12px] mt-[12px]">
                    <span className={"absolute opacity-20"}><Factory /></span>
                    <motion.span style={{ opacity: opacity }} className="text-violet-700"><Factory /></motion.span>
                </span>
            }
            {children === "work" &&
                <span className="text-white text-3xl sm:text-4xl xl:text-6xl font-bold leading-[65.08px] relative mr-[12px] mt-[12px]">
                    <span className={"absolute opacity-20"}><MagicWand /></span>
                    <motion.span style={{ opacity: opacity }} className="text-violet-700"><MagicWand /></motion.span>
                </span>
            }
            {children === "complicated" &&
                <span className="text-white text-3xl sm:text-4xl xl:text-6xl font-bold leading-[65.08px] relative mr-[12px] mt-[12px]">
                    <span className={"absolute opacity-20"}><RxCrumpledPaper /></span>
                    <motion.span style={{ opacity: opacity }} className="text-violet-700"><RxCrumpledPaper /></motion.span>
                </span>
            }
            {children === "efficiency" &&
                <span className="text-white text-3xl sm:text-4xl xl:text-6xl font-bold leading-[65.08px] relative mr-[12px] mt-[12px]">
                    <span className={"absolute opacity-20 text-2xl sm:text-3xl xl:text-5xl"}><FaRegClock /></span>
                    <motion.span style={{ opacity: opacity }} className="text-violet-700 text-2xl sm:text-3xl xl:text-5xl"><FaRegClock /></motion.span>
                </span>
            }
        </>
    )
}

export default Word;