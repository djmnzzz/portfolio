import { GraduationCap, Award } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Education() {
    return (
        <section id="education" className="py-16 px-6 max-w-5xl mx-auto border-t border-gray-800/60">
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <GraduationCap className="text-wine-500 w-6 h-6" />
                        <h2 className="text-2xl font-bold text-white tracking-tight">Education</h2>
                    </div>
                    <div className="space-y-6">
                        <div className="border-l-2 border-wine-500 pl-4">
                            <h3 className="text-base font-semibold text-white">B.S. in Software Engineering</h3>
                            <p className="text-sm text-gray-400">Universidad Técnica Nacional (UTN)</p>
                            <span className="text-xs font-mono text-wine-400">In Progress</span>
                        </div>
                        <div className="border-l-2 border-gray-800 pl-4">
                            <h3 className="text-base font-semibold text-white">Technical High School Diploma in ICT</h3>
                            <p className="text-sm text-gray-400">Colegio Gregorio José Ramírez Castro</p>
                            <span className="text-xs font-mono text-gray-500">Graduated 2024</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <Award className="text-blue-500 w-6 h-6" />
                        <h2 className="text-2xl font-bold text-white tracking-tight">Certifications</h2>
                    </div>
                    <div className="space-y-4">
                        {certificationsData.map((cert, idx) => (
                            <div key={idx} className="p-4 rounded-lg bg-gray-900/30 border border-gray-800/60">
                                <p className="text-sm font-semibold text-white">{cert.title}</p>
                                <p className="text-xs text-gray-400">{cert.issuer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}