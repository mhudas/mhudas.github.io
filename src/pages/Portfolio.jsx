import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Footer from '../components/Footer';

export default function Portfolio() {
    return (
        <main className="w-full bg-background-dark min-h-screen">
            <section className="pt-32 pb-20 px-4 md:px-12 max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-6">
                        ALL <span className="text-outline-dark text-transparent bg-clip-text bg-gradient-to-br from-white/20 to-transparent">PROJECTS</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        A comprehensive archive of selected commercial works, experiments, and open source contributions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-surface-dark border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Image / Embed Thumnail */}
                            <div className="aspect-[4/3] w-full bg-black relative overflow-hidden">
                                {project.type === 'embed' ? (
                                    <iframe
                                        src={project.embedSrc}
                                        className="w-full h-full object-cover pointer-events-none"
                                        title={project.title}
                                        loading="lazy"
                                        scrolling="no"
                                    />
                                ) : (
                                    <div
                                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                        style={{ backgroundImage: `url('${project.image}')` }}
                                    />
                                )}

                                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-300" />

                                {/* Link Overlay */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]"
                                >
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        View Project <span className="material-symbols-outlined text-sm">north_east</span>
                                    </div>
                                </a>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-display font-bold text-white group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    {!project.hideYear && (
                                        <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                                            {project.year}
                                        </span>
                                    )}
                                </div>

                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
