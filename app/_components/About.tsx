import { useEffect, useRef } from 'react'
import { inView, motion, useInView, useScroll } from 'framer-motion'
import Word from '@/app/_components/Word'
import { useMode } from '../Providers/NavbarColor';

const About = () => {
    const container = useRef(null);
    const scrollContainer = useRef(null)
    const {mode, setMode} = useMode()
    const paragraph = "At some point, businesses became bogged down by manual processes and data silos. Instead of simplifying work they made it more complicated So, we stripped it all away and focused on the most fundamental need: efficiency"
    const words = paragraph.split(" ")
    const { scrollYProgress } = useScroll({
        target: scrollContainer,
        offset: ["start -0.05", "0.95 end"]
    })
    const isInView = useInView(container, {amount:1})
    useEffect(() => {
        if (isInView) {
            setMode("dark")
        } else {
            setMode("light")
        }
    }, [isInView])
    return (
        <section ref={scrollContainer} id='about' className='bg-stone-900 relative h-[250vh] w-full px-10 lg:px-32 2xl:px-64'>
            <div ref={container} className='w-full h-screen items-center justify-center sticky top-0 flex'>
                <div className='flex flex-wrap w-full items-center'>
                    {words.map((word, i) => {
                        const start = i / words.length
                        const end = start + (1 / words.length)
                        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                    })}
                </div>
            </div>
        </section>
    );
}

export default About;