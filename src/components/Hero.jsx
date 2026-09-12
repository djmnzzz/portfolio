import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Hero() {
    return (
        <section id="about" className="pt-36 pb-20 px-6 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-mono mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                Software Engineering Student
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-blue-400">Daniela Jiménez</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed font-normal">
                Software Engineering student at UTN focused on clean architecture, full-stack systems, and algorithmic efficiency.
            </p>

            <div className="mt-8 flex items-center gap-4">
                <a href="#projects" className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25">
                    Explore Work
                </a>
                <a href="mailto:tu-correo@ejemplo.com" className="px-5 py-2.5 rounded-lg border border-slate-800 hover:border-blue-500/50 hover:bg-blue-950/20 text-slate-300 font-medium text-sm transition-all">
                    Get in touch
                </a>
            </div>

            <div className="mt-10 flex gap-5 text-slate-400">
                <a href="https://github.com/djmnzzz" target="_blank" rel="noreferrer" className="hover:text-blue-400 text-xl transition-colors">
                    <FiGithub />
                </a>
                <a href="#" className="hover:text-blue-400 text-xl transition-colors">
                    <FiLinkedin />
                </a>
                <a href="mailto:tu-correo@ejemplo.com" className="hover:text-blue-400 text-xl transition-colors">
                    <FiMail />
                </a>
            </div>
        </section>
    );
}