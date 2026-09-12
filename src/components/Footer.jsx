import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="py-10 border-t border-slate-800/60 bg-[#05080e]">
            <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="font-mono text-xs text-slate-500">
                    <span className="text-blue-400">~/daniiii</span> — Designed & Developed by Daniela Jiménez
                </div>
                <div className="flex gap-5 text-slate-400 text-lg">
                    <a
                        href="https://github.com/djmnzzz"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-400 transition-colors"
                        title="GitHub"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-400 transition-colors"
                        title="LinkedIn"
                    >
                        <FiLinkedin />
                    </a>
                    <a
                        href="mailto:tu-correo@ejemplo.com"
                        className="hover:text-blue-400 transition-colors"
                        title="Contact"
                    >
                        <FiMail />
                    </a>
                </div>
            </div>
        </footer>
    );
}