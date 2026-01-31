import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function Hero() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-25deg", "-5deg"]);
    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = event.clientX - rect.left;
        const mouseYPos = event.clientY - rect.top;
        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <section className="relative w-full min-h-[100dvh] flex items-center justify-center pt-24 pb-12 overflow-hidden perspective-[2000px]">
            <div className="layout-content-container w-full max-w-[1400px] px-6 relative flex flex-col lg:flex-row items-center justify-center h-full">
                {/* Background Text */}
                <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden z-0 opacity-10 lg:opacity-100">
                    <h1 className="text-[20vw] leading-[0.8] font-display font-black text-white/5 whitespace-nowrap blur-sm">
                        LOVE
                    </h1>
                </div>

                <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Main Attributes */}
                    <div className="flex flex-col relative z-20 mix-blend-difference text-center lg:text-left">
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter leading-[0.85] text-white">
                            MHUDAS<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">PORTFOLIO</span>
                        </h1>
                        <div className="mt-8 flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
                            <p className="font-body font-light text-lg md:text-xl text-gray-400">
                                Crafting high-performance, interactive, and accessible web experiences.
                            </p>
                            <div className="flex gap-4 justify-center lg:justify-start">
                                <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-gray-400">REACT</span>
                                <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-gray-400">NEXT.JS</span>
                                <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-gray-400">TAILWIND</span>
                                <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-gray-400">ASTRO</span>
                            </div>
                        </div>
                    </div>

                    {/* Abstract 3D Image Card */}
                    <div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-[85%] max-w-[320px] lg:max-w-xl aspect-[4/5] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[45vw] z-10 group"
                    >
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d"
                            }}
                            className="w-full h-full"
                        >
                            <div className="w-full h-full overflow-hidden rounded-2xl shadow-2xl relative bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                                {/* Glass Glare */}
                                <motion.div
                                    style={{
                                        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, transparent 100%)`,
                                        opacity: 0.5
                                    }}
                                    className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
                                />

                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out"
                                    style={{ backgroundImage: "url('/IMG_4159.jpeg')" }}
                                >
                                </div>
                                <div className="absolute bottom-6 left-6 z-20 bg-black/60 backdrop-blur-md px-4 py-3 border border-white/10 rounded-xl shadow-lg">
                                    <p className="text-white font-display font-bold text-sm tracking-wider uppercase">Latest Project</p>
                                    <p className="text-gray-300 text-xs font-mono mt-1">Portfolio Redesign</p>
                                </div>
                            </div>

                            <div className="absolute -bottom-10 -left-10 w-24 h-24 border border-accent/50 rounded-full hidden md:flex items-center justify-center animate-spin-slow" style={{ transform: "translateZ(50px)" }}>
                                <span className="material-symbols-outlined text-accent text-3xl">north_east</span>
                            </div>
                        </motion.div>
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
