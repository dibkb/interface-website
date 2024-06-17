'use client'
import Image from "next/image";
import Lenis from 'lenis'
import { useEffect } from "react";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import { trustedByBrands } from "./_components/data";
import TrustedBy from "./_components/trustedBy";
import About from "./_components/About";
import Agents from "./_components/Agents";
import Define from "./_components/Define";
import FAQs from "./_components/FAQs";
import JoinUs from "./_components/JoinUs";
import Footer from "./_components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-neutral-50 scroll-smooth">
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <Agents />
      <Define />
      <FAQs />
      <JoinUs />
      <Footer />
    </main>
  );
}
