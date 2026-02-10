import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-screen bg-background-dark overflow-hidden flex flex-col items-center justify-center p-6 sm:p-12">

            {/* Background Gradient */}
            <div
                className="absolute inset-0 bg-gradient-radial from-primary/10 via-background-dark to-background-dark pointer-events-none"
            />

            {/* 404 Code */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative font-display font-black text-[12rem] sm:text-[18rem] md:text-[24rem] leading-none text-transparent select-none z-10"
            >
                <span className="text-outline-dark opacity-20 absolute inset-0 blur-sm transform translate-y-4">404</span>
                <span className="text-outline relative z-10">404</span>
            </motion.h1>

            {/* Message */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="relative z-20 flex flex-col items-center gap-8 text-center -mt-12 sm:-mt-20"
            >
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-wider">
                    Page Not Found
                </h2>

                <p className="font-body text-base sm:text-lg text-white/60 max-w-md">
                    Oops! The page you are looking for seems to have wandered off into the void.
                </p>

                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:border-accent/50 hover:bg-white/10"
                >
                    <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    <span className="relative font-display font-bold text-sm tracking-widest text-white group-hover:text-accent transition-colors uppercase flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">arrow_back</span>
                        Back to Home
                    </span>
                </button>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-dark to-transparent pointer-events-none z-30" />

        </div>
    );
}
