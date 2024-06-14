import Image from "next/image";
import { trustedByBrands } from "./data";

const TrustedBy = () => {
    return (
        <div className="py-20 px-32">
            <p className="text-center text-black text-5xl font-extrabold">
                trusted by teams at
            </p>
            <div className="flex gap-8 items-center mt-10">
                {trustedByBrands.map((brand, index) => {
                    return (
                        <div key={index} className="flex gap-2 p-4 border border-dashed border-neutral-400 items-center">
                            <Image src={brand.logo} alt={brand.brandName} quality={100} className="w-fit h-fit" />
                            <p className="text-center text-black text-2xl font-extrabold leading-normal">
                                {brand.brandName}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default TrustedBy;