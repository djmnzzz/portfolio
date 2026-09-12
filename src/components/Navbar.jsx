import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' }, 
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070e17]/80 backdrop-blur-md border-b border-slate-800/60">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo / Nombre */}
                <a href="#about" className="font-mono text-sm font-bold text-white tracking-wider hover:text-blue-400 transition-colors">
                    <span className="text-blue-400">~/</span>daniii
                </a>

                {/* Links de escritorio */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Botón Menú Móvil */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-slate-400 hover:text-white transition-colors"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Menú desplegable Móvil */}
            {isOpen && (
                <div className="md:hidden bg-[#070e17] border-b border-slate-800/80 px-6 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm font-mono text-slate-300 hover:text-blue-400 transition-colors py-1"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}