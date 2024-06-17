import { useMode } from '@/app/Providers/NavbarColor'
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Navbar = () => {
    const { mode, setMode } = useMode()
    return (
        <>
            <nav className={cn("flex justify-around px-10 xl:px-20 2xl:px-32 items-center w-full fixed top-0 z-[999] transition-all ease-in-out", mode === "light" ? "bg-neutral-50" : "bg-stone-900")}>
                <p className="text-center text-violet-600 text-2xl lg:text-[28px] font-semibold leading-7 py-6">
                    interface
                </p>
                <div className="flex gap-6 items-center justify-center lg:justify-start py-6">
                    <Link href="#agents">
                        <button className={cn("font-semibold leading-tight transition-all ease-in-out", mode === "light" ? "text-zinc-900" : "text-white")}>
                            agents
                        </button>
                    </Link>
                    <Link href="#faq">
                        <button className={cn("font-semibold leading-tight transition-all ease-in-out", mode === "light" ? "text-zinc-900" : "text-white")}>
                            faq
                        </button>
                    </Link>
                    <Link href='#join-us'>
                        <button className={cn("font-semibold leading-tight transition-all ease-in-out", mode === "light" ? "text-zinc-900" : "text-white")}>
                            join us
                        </button>
                    </Link>
                    <Link href='#contact-us'>
                        <button className={cn("font-semibold leading-tight transition-all ease-in-out", mode === "light" ? "text-zinc-900" : "text-white")}>
                            contact us
                        </button>
                    </Link>
                </div>
                <Link target='_blank' href={'https://calendly.com/rebhavbharadwaj/introductory-call'} className='hidden lg:block'>
                    <button className={cn("text-center text-base font-bold leading-none py-3 px-6 bg-stone-900 transition-all ease-in-out text-neutral-50")}>
                        book a call
                    </button>
                </Link>
            </nav>
            <div className={cn("fixed w-full bottom-0 z-[999] lg:hidden border-t border-dashed border-neutral-400 px-10 xl:px-20 2xl:px-32 transition-all ease-in-out", mode === "light" ? "bg-neutral-50" : "bg-stone-900")}>
            </div >
        </>
    );
}

export default Navbar;