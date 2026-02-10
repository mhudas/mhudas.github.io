import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function ProfileCard() {
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
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-full min-h-[400px] z-10 group perspective-[2000px]"
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
                        style={{ backgroundImage: "url('/profile.webp')" }}
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
    );
}
