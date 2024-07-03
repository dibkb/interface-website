import { useMode } from '@/app/Providers/NavbarColor'
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Navbar = () => {
    const { mode, setMode } = useMode()
    return (
        <>
            <nav className={cn("flex justify-start lg:justify-evenly px-10 xl:px-20 2xl:px-32 items-center w-full fixed top-0 z-[999] transition-all ease-in-out", mode === "light" ? "bg-neutral-50" : "bg-stone-900")}>
                <Link href={""} onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                }}>
                    <p className="text-center text-violet-600 text-2xl lg:text-[28px] font-semibold leading-7 py-6">
                        interface
                    </p>
                </Link>
                <div className='hidden lg:block'>
                    <div className="w-full flex gap-6 items-center justify-center py-6">
                        <Link href="#agents" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("agents")?.scrollIntoView({ behavior: "smooth" });
                        }}>
                            <button className={cn("font-semibold leading-tight transition-all ease-in-out", mode === "light" ? "text-zinc-900" : "text-white")}>
                                agents
                            </button>
                        </Link>
                        <Link href="#faq" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                        }}>
                            <button className={cn("font-semibold leading-tight transition-all ease-in-out", mode === "light" ? "text-zinc-900" : "text-white")}>
                                faq
                            </button>
                        </Link>
                        <Link href='https://theinterfacecompany.notion.site/Interface-AI-Hiring-68fca33b53d6421dbd9b706f54fa035a?pvs=4'>
                            <button className={cn("font-semibold leading-tight transition-all ease-in-out", mode === "light" ? "text-zinc-900" : "text-white")}>
                                join us
                            </button>
                        </Link>
                        <Link href='#contact-us' onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                        }}>
                            <button className={cn("font-semibold leading-tight transition-all ease-in-out", mode === "light" ? "text-zinc-900" : "text-white")}>
                                contact us
                            </button>
                        </Link>
                    </div>
                </div>
                <Link target='_blank' href={'https://calendly.com/rebhav-getinterface/30min'} className='hidden lg:block'>
                    <button className={cn("text-center text-base font-bold leading-none py-3 px-6 transition-all ease-in-out text-neutral-50 bg-stone-900", mode === "light" ? "text-neutral-50 bg-stone-900" : "bg-neutral-50 text-stone-900")}>
                        book a call
                    </button>
                </Link>
            </nav>
            <div className={cn("fixed w-full bottom-0 z-[999] lg:hidden border-t border-dashed block border-neutral-400 px-10 xl:px-20 2xl:px-32 transition-all ease-in-out", mode === "light" ? "bg-neutral-50" : "bg-stone-900")}>
                <div className="lg:border-r lg:border-dashed lg:border-neutral-400 w-full flex gap-6 items-center justify-center lg:justify-start py-6">
                    <Link href="#agents" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("agents")?.scrollIntoView({ behavior: "smooth" });
                    }}>
                        <button className={cn("font-semibold leading-tight transition-all ease-in-out", mode === "light" ? "text-zinc-900" : "text-white")}>
                            agents
                        </button>
                    </Link>
                    <Link href="#faq" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                    }}>
                        <button className={cn("font-semibold leading-tight transition-all ease-in-out", mode === "light" ? "text-zinc-900" : "text-white")}>
                            faq
                        </button>
                    </Link>
                    <Link href='https://theinterfacecompany.notion.site/Interface-AI-Hiring-68fca33b53d6421dbd9b706f54fa035a?pvs=4'>
                        <button className={cn("font-semibold leading-tight transition-all ease-in-out", mode === "light" ? "text-zinc-900" : "text-white")}>
                            join us
                        </button>
                    </Link>
                    <Link href='#contact-us' onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                    }}>
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