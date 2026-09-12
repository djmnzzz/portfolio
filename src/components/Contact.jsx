import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const response = await fetch('https://formspree.io/f/xvkojore', {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
            setSubmitted(true);
            form.reset();
        }
    };

    return (
        <section id="contact" className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-800/60">
            <div className="text-center max-w-xl mx-auto mb-12">
                <h2 className="text-3xl font-extrabold text-white tracking-tight">Let's Connect</h2>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                    I'm currently open to new opportunities, collaborations, or technical projects. Feel free to reach out!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Enlaces de contacto directo */}
                <div className="space-y-4">
                    <a
                        href="mailto:dani05jimenez20@gmail.com"
                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/50 hover:bg-blue-950/20 transition-all text-slate-300"
                    >
                        <div className="p-3 rounded-lg bg-blue-950/80 text-blue-400">
                            <FiMail className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-xs text-slate-500 font-mono">Direct Email</div>
                            <div className="text-sm font-medium text-white">dani05jimenez20@gmail.com</div>
                        </div>
                    </a>

                    <a
                        href="https://github.com/djmnzzz"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/50 hover:bg-blue-950/20 transition-all text-slate-300"
                    >
                        <div className="p-3 rounded-lg bg-blue-950/80 text-blue-400">
                            <FiGithub className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-xs text-slate-500 font-mono">GitHub Profile</div>
                            <div className="text-sm font-medium text-white">github.com/djmnzzz</div>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/daniela-jimenezzz/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/50 hover:bg-blue-950/20 transition-all text-slate-300"
                    >
                        <div className="p-3 rounded-lg bg-blue-950/80 text-blue-400">
                            <FiLinkedin className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-xs text-slate-500 font-mono">LinkedIn</div>
                            <div className="text-sm font-medium text-white">daniela-jimenezzz</div>
                        </div>
                    </a>
                </div>

                {/* Formulario de Mensaje */}
                <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80">
                    {submitted ? (
                        <div className="text-center py-8">
                            <span className="text-2xl">🎉</span>
                            <h3 className="text-lg font-semibold text-white mt-2">Message Sent!</h3>
                            <p className="text-slate-400 text-sm mt-1">Thank you for reaching out. I will reply to you as soon as possible.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your name"
                                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="name@example.com"
                                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    placeholder="Hello Daniela, I would like to discuss a project..."
                                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20"
                            >
                                <FiSend className="w-4 h-4" />
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}