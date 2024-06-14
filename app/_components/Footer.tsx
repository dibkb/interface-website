import { cn } from "@/lib/utils";

const Footer = () => {
    return (
        <footer id="contact-us" className="bg-stone-900 py-20 w-full relative group">
            <h1 id="logoFooter" className="text-center text-[280px] font-extrabold lowercase text-stone-900 group-hover:text-neutral-50 transition-all ease-in-out duration-500 drop-shadow-[0_1px_1px_rgba(250,250,250,1)]">Interface</h1>
            <div className={cn("w-full h-[37.5%] bottom-0 left-0 absolute z-10 bg-stone-900 border-t border-violet-600 group-hover:bg-stone-900/50 group-hover:backdrop-blur-md")}></div>
            <div className="h-full absolute w-[25%] left-0 top-0 bg-gradient-to-r from-stone-900 to-transparent z-20"></div>
            <div className="h-full absolute w-[25%] right-0 top-0 bg-gradient-to-l from-stone-900 to-transparent z-10"></div>
        </footer>
    );
}
 
export default Footer;