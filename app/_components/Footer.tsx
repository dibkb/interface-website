import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer
      id="contact-us"
      className="bg-interface-black pt-5 pb-20 lg:py-5 w-full relative group"
    >
      <h1
        id="logoFooter"
        className="text-center text-[80px] sm:text-[100px] lg:text-[150px] xl:text-[200px] 2xl:text-[280px] font-extrabold lowercase text-stone-900 group-hover:text-neutral-50 transition-all ease-in-out duration-500 drop-shadow-[0_1px_1px_rgba(250,250,250,1)]"
      >
        Interface
      </h1>
      <div
        className={cn(
          "w-full h-[55%] sm:h-[50%] lg:h-[37.5%] bottom-0 left-0 absolute z-10 bg-stone-900 border-t-4 border-primary-green group-hover:bg-stone-900/50 group-hover:backdrop-blur-md",
        )}
      ></div>
      <div className="h-full absolute w-[25%] left-0 top-0 bg-gradient-to-r from-stone-900 via-stone-900 to-transparent z-20"></div>
      <div className="h-full absolute w-[25%] right-0 top-0 bg-gradient-to-l from-stone-900 via-stone-900 to-transparent z-10"></div>
    </footer>
  );
};

export default Footer;

