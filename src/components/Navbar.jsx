import { useState, useEffect } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);

    const navLinks = [
        { title: "HOME", href: "#hero" },
        { title: "ABOUT", href: "#about" },
        { title: "WORK", href: "#work" },
        { title: "CONTACT", href: "#contact" },
    ];

    const handleScroll = (href) => {
        setIsMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            setTimeout(() => {
                const start = window.scrollY;
                const end = element.getBoundingClientRect().top + window.scrollY;

                animate(start, end, {
                    duration: 1.2,
                    ease: "easeInOut",
                    onUpdate: (latest) => window.scrollTo(0, latest)
                });
            }, 300);
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start pointer-events-none mix-blend-difference text-white">
                <div className="pointer-events-auto z-50">
                    <a className="flex items-center gap-2 group" href="#">
                        <img src="/mhudas.svg" alt="MHUDAS Logo" className="h-12 w-auto object-contain" />
                    </a>
                </div>
                <div className="pointer-events-auto flex flex-col items-end gap-1 z-50">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="font-display font-bold text-sm tracking-widest hover:text-accent transition-colors uppercase"
                    >
                        {isMenuOpen ? "CLOSE" : "MENU"}
                    </button>
                    <span className={`block w-8 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? "w-0" : "w-8"}`}></span>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center pointer-events-auto"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.title}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleScroll(link.href);
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
                                    className="font-display font-black text-6xl md:text-8xl text-white hover:text-accent transition-all duration-300 cursor-pointer"
                                    style={{ willChange: "transform, opacity" }}
                                >
                                    {link.title}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
