import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useMode } from "../Providers/NavbarColor";
import { faqs } from "./data";

const FAQs = () => {
    const container = useRef(null)
    const scrollContainer = useRef(null)
    const isInView = useInView(container, { amount: 1 })
    const { mode, setMode } = useMode()
    useEffect(() => {
        if (isInView) {
            setMode("dark")
        } else {
            setMode("light")
        }
    }, [isInView])
    const { scrollYProgress } = useScroll({
        target: scrollContainer,
        offset: ['start -0.1', '0.9 end']
    })
    const headingOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])
    return (
        <section id="faq" ref={scrollContainer} className="lg:h-[250vh] h-fit bg-stone-900 w-full py-20 lg:py-0 px-10 xl:px-20 2xl:px-32">
            <div ref={container} className="lg:sticky top-0 min-h-screen lg:h-screen bg-stone-900 w-full flex flex-col items-center justify-center gap-10 lg:gap-16">
                <div className="relative">
                    <motion.h1 className="text-neutral-50 text-5xl lg:text-6xl font-extrabold lg:leading-[70.40px]">faqs</motion.h1>
                </div>
                <div className="lg:grid hidden lg:grid-cols-3 lg:gap-14 gap-y-5 lg:gap-y-16">
                    {faqs.map((faq, index) => {
                        const start = index / faqs.length
                        const end = start + (1 / faqs.length)
                        const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
                        const y = useTransform(scrollYProgress, [start, end], [50, 0])
                        return (
                            <div key={index} className="relative">
                                <motion.div style={{ opacity: opacity }}>
                                    <p className="text-violet-400 lg:text-xl font-semibold leading-7">
                                        {faq.question}
                                    </p>
                                    <p className="text-neutral-50 text-sm lg:text-lg font-medium leading-7">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                                <motion.div className="opacity-20 absolute top-0 left-0">
                                    <p className="text-violet-400 lg:text-xl font-semibold leading-7">
                                        {faq.question}
                                    </p>
                                    <p className="text-neutral-50 text-sm lg:text-lg font-medium leading-7">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
                <div className="lg:hidden grid grid-cols-1 lg:gap-14 gap-y-10 lg:gap-y-16">
                    {faqs.map((faq, index) => {
                        // const start = index / faqs.length
                        // const end = start + (1 / faqs.length)
                        // const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
                        // const y = useTransform(scrollYProgress, [start, end], [50, 0])
                        return (
                            <div key={index} className="relative">
                                <motion.div>
                                    <p className="text-violet-400 lg:text-xl font-semibold leading-7">
                                        {faq.question}
                                    </p>
                                    <p className="text-neutral-50 text-sm lg:text-lg font-medium leading-7">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                                {/* <motion.div className="opacity-20 absolute top-0 left-0">
                                    <p className="text-violet-400 lg:text-xl font-semibold leading-7">
                                        {faq.question}
                                    </p>
                                    <p className="text-neutral-50 text-sm lg:text-lg font-medium leading-7">
                                        {faq.answer}
                                    </p>
                                </motion.div> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQs;