import { Marquee } from '@devnomic/marquee';
import { VscSparkle } from 'react-icons/vsc'
import MarqueeComponent from './MarqueeComponent';
import "@devnomic/marquee/dist/index.css";
import { marqueeContent } from './data';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="h-screen overflow-hidden flex justify-between gap-10 px-32 w-full">
            <div className="w-1/2 h-screen flex flex-col justify-center gap-5">
                <div className="text-zinc-900 font-semibold leading-tight p-2 border border-dashed flex gap-3 items-center w-fit">
                    <VscSparkle className='text-violet-600' />
                    Interface AI・[V1.0]
                </div>
                <h1 className="text-violet-600 font-extrabold lowercase leading-[85px] text-8xl">
                    run your inventory on autopilot.
                </h1>
                <Link target='_blank' href={'https://calendly.com/rebhavbharadwaj/introductory-call'}>
                    <button className="bg-stone-900 justify-center items-center inline-flex text-center text-neutral-50 text-xl font-bold leading-tight w-fit mt-5 py-4 px-6">
                        book a 15-min call
                    </button>
                </Link>
            </div>
            <div className='h-screen flex gap-6 justify-end'>
                <Marquee className='h-[100vh] p-0 m-0 [--duration:25s]' innerClassName='gap-4' direction='up'>
                    {marqueeContent.map((content, index) => {
                        return (
                            <MarqueeComponent key={index} image={content.image} text={content.text} />
                        )
                    })}
                </Marquee>
                <Marquee className='h-[100vh] p-0 m-0 [--duration:25s]' innerClassName='gap-4' direction='up' reverse>
                    {marqueeContent.map((content, index) => {
                        return (
                            <MarqueeComponent key={index} image={marqueeContent[marqueeContent.length - index - 1].image} text={marqueeContent[marqueeContent.length - index - 1].text} />
                        )
                    })}
                </Marquee>
            </div>
        </section>
    );
}

export default Hero;