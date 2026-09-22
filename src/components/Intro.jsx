import { motion } from "framer-motion";

export default function Intro({ onComplete }) {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            initial={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            <motion.div
                className="relative w-full max-w-4xl px-4"
                initial={{ scale: 1 }}
                animate={{ scale: 1.15 }}
                transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 2.5
                }}
            >
                <motion.svg
                    viewBox="0 0 800 200"
                    className="w-full h-auto"
                >
                    <motion.text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="font-display font-black text-[8rem] md:text-[10rem] tracking-tighter"
                        stroke="white"
                        strokeWidth="2"
                        fill="transparent"
                        initial={{
                            strokeDasharray: 1000,
                            strokeDashoffset: 1000,
                            fill: "rgba(255, 255, 255, 0)"
                        }}
                        animate={{
                            strokeDashoffset: 0,
                            fill: "rgba(255, 255, 255, 1)"
                        }}
                        transition={{
                            duration: 2.5,
                            ease: "easeInOut",
                            fill: { delay: 2, duration: 0.5 }
                        }}
                        onAnimationComplete={() => {
                            setTimeout(onComplete, 1000);
                        }}
                    >
                        MHUDAS
                    </motion.text>
                </motion.svg>
            </motion.div>
        </motion.div>
    );
}
