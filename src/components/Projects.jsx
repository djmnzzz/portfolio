import { Code2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
    return (
        <section id="projects" className="py-16 px-6 max-w-5xl mx-auto border-t border-gray-800/60">
            <div className="flex items-center gap-2 mb-8">
                <Code2 className="text-wine-500 w-6 h-6" />
                <h2 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {projectsData.map((proj, idx) => (
                    <div key={idx} className="p-6 rounded-xl bg-gray-900/40 border border-gray-800/80 hover:border-gray-700 transition-all flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">{proj.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">{proj.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
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