import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import HeroBackground from './HeroBackground';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[100dvh] flex items-center justify-center pt-24 pb-12 overflow-hidden perspective-[2000px]">
            {/* Full-screen background animation */}
            <HeroBackground />

            <div className="layout-content-container w-full max-w-[1400px] px-6 relative flex flex-col lg:flex-row items-center justify-center h-full">

                <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center gap-10">

                    {/* Main Attributes */}
                    <div className="flex flex-col relative z-20 text-center items-center">
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter leading-[0.85] text-white drop-shadow-2xl">
                            MHUDAS<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 drop-shadow-sm">PORTFOLIO</span>
                        </h1>
                        <div className="mt-8 flex flex-col gap-4 max-w-md mx-auto items-center">
                            <p className="font-body font-light text-lg md:text-xl text-gray-100 drop-shadow-md bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                                Crafting high-performance, interactive, and accessible web experiences.
                            </p>
                            <div className="flex gap-4 justify-center flex-wrap">
                                <span className="px-3 py-1 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-xs font-mono text-white shadow-sm">REACT</span>
                                <span className="px-3 py-1 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-xs font-mono text-white shadow-sm">NEXT.JS</span>
                                <span className="px-3 py-1 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-xs font-mono text-white shadow-sm">TAILWIND</span>
                                <span className="px-3 py-1 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-xs font-mono text-white shadow-sm">ASTRO</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Scroll Indicator (Below Content) */}
                <div className="relative mt-8 lg:hidden flex flex-col items-center gap-2 text-white/50 animate-bounce z-20">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
                    <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                </div>
            </div>

            {/* Desktop Scroll Indicator (Bottom of Viewport) */}
            <div className="hidden lg:flex absolute bottom-2 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/50 animate-bounce z-20">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
                <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </div>
        </section>
    );
}
