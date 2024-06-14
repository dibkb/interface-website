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
        <section ref={scrollContainer} className="h-[250vh] bg-stone-900 w-full px-32">
            <div ref={container} className="sticky top-0 h-screen bg-stone-900 w-full flex flex-col items-center justify-center gap-16">
                <div className="relative">
                    <motion.h1 className="text-neutral-50 text-6xl font-extrabold leading-[70.40px]">faqs</motion.h1>
                </div>
                <div className="grid grid-cols-3 gap-14 gap-y-16">
                    {faqs.map((faq, index) => {
                        const start = index / faqs.length
                        const end = start + (1 / faqs.length)
                        const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
                        const y = useTransform(scrollYProgress, [start, end], [50, 0])
                        return (
                            <div className="relative">
                                <motion.div style={{ opacity: opacity }}>
                                    <p className="text-violet-400 text-xl font-semibold leading-7">
                                        {faq.question}
                                    </p>
                                    <p className="text-neutral-50 text-lg font-medium leading-7">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                                <motion.div className="opacity-20 absolute top-0 left-0">
                                    <p className="text-violet-400 text-xl font-semibold leading-7">
                                        {faq.question}
                                    </p>
                                    <p className="text-neutral-50 text-lg font-medium leading-7">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQs;