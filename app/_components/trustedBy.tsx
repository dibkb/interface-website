import Image from "next/image";
import { trustedByBrands } from "./data";

const TrustedBy = () => {
    return (
        <div className="py-20 px-10 xl:px-20 2xl:px-32">
            <p className="text-center hidden lg:block text-black text-3xl lg:text-5xl font-extrabold">
                is this you? you’re not alone
            </p>
            <p className="text-center text-black hidden lg:block text-3xl lg:text-2xl lg:text-neutral-400 lg:pt-5 font-extrabold">
                trusted by inventory teams at
            </p>
            <p className="text-center text-black text-3xl block lg:hidden lg:pt-5 font-extrabold">
                trusted by teams at
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 items-center mt-10">
                {trustedByBrands.map((brand, index) => {
                    return (
                        <div key={index} className="flex gap-2 p-4 border border-dashed border-neutral-400 items-center">
                            <Image src={brand.logo} alt={brand.brandName} quality={100} className="lg:w-fit w-6 h-6 lg:h-fit" />
                            <p className="text-center text-black text-xs sm:text-sm lg:text-lg font-extrabold leading-normal">
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