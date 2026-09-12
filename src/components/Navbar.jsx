export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-[#070e17]/85 backdrop-blur-md z-50 border-b border-blue-950/60">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#about" className="font-mono text-sm font-semibold tracking-wide text-blue-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                    <span className="text-cyan-500">~/</span>daniiii<span className="animate-pulse text-blue-400">_</span>
                </a>
                <div className="flex gap-6 text-xs uppercase font-mono tracking-widest text-slate-400">
                    <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                    <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                    <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
                    <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
                </div>
            </div>
        </nav>
    );
}