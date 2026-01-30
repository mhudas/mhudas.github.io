import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function SelectedWorks() {
    // Show only first 3 projects
    const displayedProjects = projects.slice(0, 3);

    return (
        <section className="w-full px-4 py-32 lg:px-20 bg-background-dark">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <h2 className="text-5xl lg:text-8xl font-display font-black text-white tracking-tighter leading-[0.85]">
                        SELECTED<br />
                        <span className="text-outline-dark text-transparent bg-clip-text bg-gradient-to-br from-white/20 to-transparent">WORKS</span>
                    </h2>
                    <div className="flex items-center gap-4">
                        <span className="hidden md:block font-mono text-gray-500 text-sm text-right max-w-[200px]">
                            Featured commercial projects and experiments (2024 — now)
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group cursor-default"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            {project.type === 'embed' ? (
                                <div className="aspect-[4/3] w-full bg-surface-dark rounded-2xl overflow-hidden relative mb-6 border border-white/5">
                                    <iframe
                                        src={project.embedSrc}
                                        height="100%"
                                        width="100%"
                                        allowFullScreen
                                        lazyLoad="true"
                                        frameBorder="0"
                                        scrolling="no"
                                        allow="clipboard-write"
                                        refererPolicy="strict-origin-when-cross-origin"
                                        className="absolute inset-0 w-full h-full"
                                        style={{ border: 'none', overflow: 'hidden' }}
                                        title={project.title}
                                    ></iframe>
                                </div>
                            ) : (
                                project.disableZoom ? (
                                    <div className="block aspect-[4/3] w-full bg-surface-dark rounded-2xl overflow-hidden relative mb-6 border border-white/5">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                                            style={{ backgroundImage: `url('${project.image}')` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

                                        {/* Github Logo Bottom Right */}
                                        <div className="absolute bottom-4 right-4 opacity-80 z-10 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full backdrop-blur-sm p-1.5 border border-white/10">
                                            <svg role="img" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                            </svg>
                                        </div>

                                        {/* Hover Overlay Button - Only clickable part */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-black/80 backdrop-blur-md text-white font-bold py-3 px-6 rounded-full border border-white/10 transform scale-90 group-hover:scale-100 transition-all duration-300 pointer-events-auto hover:bg-black hover:scale-105 flex items-center gap-2"
                                            >
                                                View on Github
                                                <span className="material-symbols-outlined text-sm">north_east</span>
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] w-full bg-surface-dark rounded-2xl overflow-hidden relative mb-6 border border-white/5">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url('${project.image}')` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

                                        {/* Top Right Info Pill (Only if year is not hidden) */}
                                        {!project.hideYear && (
                                            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                                                <span className="text-xs font-mono text-white">{project.year}</span>
                                                {project.link && <span className="material-symbols-outlined text-[10px] text-white">north_east</span>}
                                            </div>
                                        )}

                                        {/* Hover Overlay Button */}
                                        {project.link && (
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                                <div className="bg-black/70 backdrop-blur-md text-white font-bold py-3 px-6 rounded-full border border-white/10 transform scale-90 group-hover:scale-100 transition-all duration-300">
                                                    View on Github
                                                </div>
                                            </div>
                                        )}
                                    </a>
                                )
                            )}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                                        {project.link ? (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-accent/50 underline-offset-4 flex items-center gap-2">
                                                {project.title}
                                            </a>
                                        ) : (
                                            project.title
                                        )}
                                    </h3>
                                    <p className="text-gray-400 text-sm max-w-sm mb-3">{project.description}</p>
                                    <div className="flex gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-500 border border-white/10 px-2 py-1 rounded">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="flex justify-center mt-16">
                    <Link
                        to="/portfolio"
                        className="group flex items-center gap-3 bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent/30 text-white px-8 py-4 rounded-full font-bold transition-all duration-300"
                    >
                        View All Projects
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
