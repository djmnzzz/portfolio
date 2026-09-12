import { Code2 } from 'lucide-react';
import { FiGithub } from 'react-icons/fi'; // <-- Quitamos FiExternalLink

export default function Projects() {
    const projects = [
        {
            title: "El Rancho - Veterinary Management System",
            image: "/public/el-rancho.png",
            tech: ["React", "Node.js", "REST API", "Tailwind CSS"],
            description: "Full-stack web application with role-based access control (Client, Employee, Admin) to manage appointments, medical services, and system metrics.",
            github: "https://github.com/JesusM2007/El-Rancho.git"
        },
        {
            title: "EcoMap Costa Rica",
            image: "/public/ecomap.png",
            tech: ["HTML5", "CSS3", "JavaScript", "JSON"],
            description: "Interactive web platform designed to locate recycling collection points across Costa Rica and log user ecological activities.",
            github: "https://github.com/djmnzzz/EcoMap.git"
        },
        {
            title: "Condominium Management System",
            image: "/public/condominium.png",
            tech: ["C#", "ADO.NET", "SQL Server", "Windows Forms"],
            description: "Desktop software built using N-Tier Client-Server Architecture to streamline condominium administration and database operations.",
            github: "https://git.isw.utn.ac.cr/danielajmnz/gestioncondominios.git"
        },
        {
            title: "Knight's Tour Algorithmic Solver",
            image: "/public/knights-tour.png",
            tech: ["C++", "Algorithms", "Data Structures"],
            description: "Comparative study and benchmark of graph exploration algorithms, comparing Backtracking vs. Warnsdorff's heuristic strategy.",
            github: "https://git.isw.utn.ac.cr/danielajmnz/recorridodelcaballo.git"
        }
    ];

    return (
        <section id="projects" className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-800/60">
            <div className="flex items-center gap-2 mb-8">
                <Code2 className="text-blue-400 w-5 h-5" />
                <h2 className="text-xl font-bold text-white tracking-tight">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((proj, idx) => (
                    <div key={idx} className="group rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all overflow-hidden flex flex-col justify-between">
                        <div>
                            {/* Contenedor panorámico adaptativo */}
                            <div className="aspect-video w-full bg-slate-950/80 overflow-hidden border-b border-slate-800/60 flex items-center justify-center p-3">
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 rounded-md"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>

                            {/* Contenido del proyecto */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-white">{proj.title}</h3>
                                    {proj.github && (
                                        <a
                                            href={proj.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-slate-400 hover:text-blue-400 text-lg transition-colors"
                                            title="View Source Code"
                                        >
                                            <FiGithub />
                                        </a>
                                    )}
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">{proj.description}</p>
                            </div>
                        </div>

                        <div className="px-6 pb-6 flex flex-wrap gap-2 pt-2">
                            {proj.tech.map((t, i) => (
                                <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-blue-300 border border-slate-700/50">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}