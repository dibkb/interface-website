import Marquee from 'react-fast-marquee';
import { VscSparkle } from 'react-icons/vsc'
import MarqueeComponent from './MarqueeComponent';
import "@devnomic/marquee/dist/index.css";
import { marqueeContent } from './data';
import Link from 'next/link';

const Hero = () => {
    return (
        <section id='home' className="min-h-screen overflow-hidden flex flex-col justify-between py-20 gap-10 w-full">
            <div className="w-full flex flex-col items-center justify-center gap-5 px-10 md:pt-20 xl:px-20 2xl:px-32">
                <div className="text-zinc-900 font-semibold leading-tight p-2 border border-dashed flex gap-3 items-center w-fit">
                    <VscSparkle className='text-violet-600' />
                    Interface AI・[V1.0]
                </div>
                <h1 className="text-violet-600 font-extrabold lowercase text-center xl:leading-[85px] text-6xl lg:text-7xl xl:text-8xl">
                    run your inventory on autopilot.
                </h1>
                <div className='flex items-center gap-10'>
                    <Link target='_blank' href={'https://app.getinterface.tech'}>
                        <button className="justify-center border border-dashed border-neutral-400 items-center inline-flex text-center text-stone-900 lg:text-xl font-bold leading-tight w-fit mt-5 py-4 px-6">
                            sign up
                        </button>
                    </Link>
                    <Link target='_blank' href={'https://calendly.com/rebhav-getinterface/30min'}>
                        <button className="bg-stone-900 justify-center items-center inline-flex text-center text-neutral-50 lg:text-xl font-bold leading-tight w-fit mt-5 py-4 px-6">
                            book a call
                        </button>
                    </Link>
                </div>
            </div>
            <div className='min-h-fit'>
                <Marquee className='h-fit' autoFill direction='left'>
                    {marqueeContent.map((content, index) => {
                        return (
                            <MarqueeComponent key={index} image={content.image} text={content.text} />
                        )
                    })}
                </Marquee>
            </div>
        </section>
    );
}

export default Hero;