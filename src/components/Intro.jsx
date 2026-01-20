import { motion } from "framer-motion";

export default function Intro({ onComplete }) {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            initial={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            <motion.h1
                className="font-display font-black text-white text-[15vw] leading-none tracking-tighter"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                onAnimationComplete={() => {
                    setTimeout(onComplete, 1000);
                }}
            >
                MHUDAS
            </motion.h1>
        </motion.div>
    );
}
