export default function Footer() {
    return (
        <footer className="w-full px-6 py-20 bg-black text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter">
                    READY TO <br />
                    <span className="text-outline">BUILD?</span>
                </h2>
                <p className="text-gray-400 max-w-xl mb-10 text-lg">
                    I'm currently open for freelance projects and full-time opportunities. Let's create something exceptional.
                </p>
                <div className="flex flex-wrap justify-center gap-8 mb-16 font-mono text-sm text-gray-500">
                    <a className="hover:text-white transition-colors" href="https://github.com/mhudas" target="_blank" rel="noopener noreferrer">GITHUB</a>
                    <a className="hover:text-white transition-colors" href="https://linkedin.com/in/mhudas" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                    <a className="hover:text-white transition-colors" href="https://behance.net/mhudas" target="_blank" rel="noopener noreferrer">BEHANCE</a>
                    <a className="hover:text-white transition-colors" href="https://instagram.com/hud0s" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                </div>
                <img src="/mhudas.svg" alt="MHUDAS Logo" className="h-24 w-auto object-contain mb-8" />
                <p className="text-gray-600 text-xs font-mono">
                    © 2025 mhudas. all right reserved
                </p>
            </div>
        </footer>
    );
}
