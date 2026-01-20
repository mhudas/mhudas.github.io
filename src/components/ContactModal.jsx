import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative w-full max-w-md bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5">
                    <h2 className="text-xl font-display font-bold text-white tracking-wide">Get in Touch</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white"
                    >
                        <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">

                    {/* Email Option */}
                    <a
                        href="mailto:sumiftahulhuda@gmail.com"
                        className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-accent/50 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-2xl">mail</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-white/50 font-mono mb-1">Email Me</span>
                            <span className="text-sm font-body text-white font-medium group-hover:text-accent transition-colors">sumiftahulhuda@gmail.com</span>
                        </div>
                    </a>

                    {/* LinkedIn Option */}
                    <a
                        href="https://www.linkedin.com/in/mhudas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-2xl">post_add</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-white/50 font-mono mb-1">LinkedIn Resume</span>
                                <span className="text-sm font-body text-white font-medium group-hover:text-blue-400 transition-colors">LinkedIn Profile</span>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-white/20 group-hover:text-white transition-colors">open_in_new</span>
                    </a>

                    {/* Behance Option */}
                    <a
                        href="https://www.behance.net/mhudas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-400/20 text-blue-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-2xl">palette</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-white/50 font-mono mb-1">Behance Portfolio</span>
                                <span className="text-sm font-body text-white font-medium group-hover:text-blue-300 transition-colors">Check my work</span>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-white/20 group-hover:text-white transition-colors">open_in_new</span>
                    </a>

                </div>
            </motion.div>
        </div>
    );
}
