import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { projects } from "../data/projects";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import ProfileCard from "./ProfileCard";

function AnimatedCounter({ value }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 100, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.round(latest);
            }
        });
    }, [springValue]);

    return <span ref={ref} />;
}

export default function InfoSection() {
    const philosophyQuote = `"Clean code is not just about readability; it's about maintainability, scalability, and accessibility for everyone."`;

    const techStack = [
        { name: "React", color: "bg-blue-500" },
        { name: "Next.js", color: "bg-white" },
        { name: "TypeScript", color: "bg-blue-600" },
        { name: "Tailwind", color: "bg-cyan-400" },
        { name: "Figma", color: "bg-purple-500" },
        { name: "VS Code", color: "bg-blue-400" },
        { name: "Astro", color: "bg-orange-500" },
    ];

    const solutions = [
        "Web App Development",
        "Performance Opt.",
        "Framer Motion",
        "Responsive UI/UX"
    ];

    return (
        <section className="w-full px-4 py-24 lg:px-20 bg-background-dark relative z-10 border-b border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="font-mono text-sm tracking-widest text-gray-400 uppercase">Information & Context</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(280px,auto)]">


                    {/* Profile Card (Moved from Hero) */}
                    <div className="md:col-span-1 row-span-2">
                        <ProfileCard />
                    </div>

                    {/* Philosophy Card */}
                    <div className="md:col-span-2 bg-surface-dark rounded-xl p-8 border border-white/5 flex flex-col justify-center items-start gap-4 hover:border-accent/30 transition-colors group">
                        <span className="text-accent text-xs font-mono tracking-widest uppercase border border-accent/20 px-2 py-1 rounded">Philosophy</span>
                        <TextGenerateEffect
                            words={philosophyQuote}
                            className="text-xl md:text-3xl font-display font-medium text-white leading-relaxed"
                            highlightWords={["accessibility"]}
                            loop={true}
                            loopDelay={9000}
                        />
                        <div className="flex items-center gap-3 mt-4">
                            <div className="h-[1px] w-12 bg-white/20 group-hover:w-24 transition-all duration-300"></div>
                            <span className="text-gray-400 text-sm">Engineering Principles</span>
                        </div>
                    </div>

                    {/* NOW Card */}
                    <div className="bg-surface-dark rounded-xl p-6 border border-white/5 flex flex-col justify-between hover:border-accent/30 transition-colors group relative overflow-hidden">
                        <div className="flex justify-between items-start">
                            <span className="material-symbols-outlined text-white/40">calendar_month</span>
                            <span className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#A2FF00]"></span>
                        </div>
                        <div>
                            <h3 className="text-4xl font-display font-bold text-white mb-2">NOW</h3>
                            <p className="text-gray-400 text-sm">Currently accepting new freelance projects and contracts for Q3.</p>
                        </div>
                        <div className="mt-4">
                            <a href="https://wa.me/628970016988" target="_blank" rel="noopener noreferrer" className="block text-xs font-bold bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-full transition-colors w-full text-center">
                                Text Me on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Tech Arsenal Card */}
                    <div className="bg-surface-dark rounded-xl p-6 border border-white/5 flex flex-col hover:border-accent/30 transition-colors group relative overflow-hidden">
                        <div className="flex items-center gap-2 mb-6 text-white/60">
                            <span className="material-symbols-outlined text-xl">layers</span>
                            <span className="font-display font-bold text-sm tracking-wide">Tech Arsenal</span>
                        </div>
                        <div className="flex flex-wrap gap-2 content-start">
                            {techStack.map((tech) => (
                                <span key={tech.name} className="flex items-center gap-1.5 bg-background-dark border border-white/10 rounded-lg px-3 py-2 text-xs font-medium text-gray-300 hover:border-accent hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 ease-out cursor-default">
                                    <span className={`w-1.5 h-1.5 rounded-full ${tech.color}`}></span> {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Solutions Suite Card */}
                    <div className="bg-surface-dark rounded-xl p-6 border border-white/5 flex flex-col justify-between hover:border-accent/30 transition-colors group relative overflow-hidden">
                        <div className="flex items-center gap-2 mb-4 text-white/60">
                            <span className="material-symbols-outlined text-xl">handyman</span>
                            <span className="font-display font-bold text-sm tracking-wide">Solutions Suite</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            {solutions.map((item) => (
                                <div key={item} className="group/item flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors cursor-default">
                                    <span className="text-sm text-gray-300 font-medium">{item}</span>
                                    <span className="material-symbols-outlined text-gray-600 text-sm group-hover/item:text-accent">arrow_forward</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Card */}
                    <div className="bg-surface-dark rounded-xl p-6 border border-white/5 flex flex-col justify-between hover:border-accent/30 transition-colors group relative overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-display font-bold text-sm tracking-wide text-white/60 uppercase">Stats</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 h-full">
                            <div className="bg-background-dark border border-white/5 rounded-lg p-4 flex flex-col justify-center">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">YEARS EXP.</span>
                                <div className="flex flex-wrap items-baseline gap-x-2">
                                    <span className="text-3xl font-display font-black text-white">
                                        02<span className="text-accent">+</span>
                                    </span>
                                    <span className="text-[10px] text-gray-600 font-mono text-nowrap">(Self-Learning)</span>
                                </div>
                            </div>
                            <div className="bg-background-dark border border-white/5 rounded-lg p-4 flex flex-col justify-center">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">PROJECTS</span>
                                <span className="text-3xl font-display font-black text-white">
                                    <AnimatedCounter value={projects.length} />
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
