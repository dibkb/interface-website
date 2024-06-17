import Image, { StaticImageData } from 'next/image';

interface MarqueeComponentProp {
    image : StaticImageData,
    text ?: string
}

const MarqueeComponent = ({image, text} : MarqueeComponentProp) => {
    return (
        <div className="w-[293px] border border-dashed border-neutral-400 h-fit relative mx-2">
            <div className='w-full'>
                <Image className="h-[218px] w-full border-b border-dashed border-neutral-400 grayscale" src={image} alt='image' quality={100} />
            </div>
            <div className="text-stone-900 text-base font-semibold leading-tight text-center p-5">
                {text}
            </div>
        </div>
    );
}

export default MarqueeComponent;