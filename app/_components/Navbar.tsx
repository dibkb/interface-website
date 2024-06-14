import { useMode } from '@/app/Providers/NavbarColor'
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Navbar = () => {
    const { mode, setMode } = useMode()
    return (
        <>
            <nav className={cn("flex justify-between px-32 items-center border-b border-dashed w-full border-neutral-400 fixed top-0 z-[999] transition-all ease-in-out", mode === "light" ? "bg-neutral-50" : "bg-stone-900")}>
                <p className="text-center text-violet-600 text-[28px] font-semibold leading-7">
                    interface
                </p>
                <Link target='_blank' href={'https://calendly.com/rebhavbharadwaj/introductory-call'}>
                    <button className={cn("text-center text-base font-bold leading-none py-6 px-6 border-r border-l border-neutral-400 border-dashed transition-all ease-in-out", mode === "light" ? "text-stone-900" : "text-white")}>
                        book a call
                    </button>
                </Link>
            </nav>
            <div className={cn("fixed w-full bottom-0 z-[999] border-t border-dashed border-neutral-400 px-32 transition-all ease-in-out", mode === "light" ? "bg-neutral-50" : "bg-stone-900")}>
                <div className="border-r border-dashed border-neutral-400 w-full flex gap-6 items-center py-6">
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
            </div >
        </>
    );
}

export default Navbar;