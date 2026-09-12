import {
    FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaDatabase,
    FaReact, FaNodeJs, FaGitAlt, FaGithub, FaGitlab, FaKey, FaCoffee
} from 'react-icons/fa';
import { TbBrandCpp, TbBrandCSharp, TbApi, TbCube, TbPlug } from 'react-icons/tb';
import { SiVite, SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si';
import { VscAzureDevops, VscCode } from 'react-icons/vsc';
import { Terminal, Layers, FileCode2, LayoutGrid, Workflow } from 'lucide-react';

export default function Skills() {
    const techCategories = [
        {
            name: "Languages",
            items: [
                { name: "C++", icon: TbBrandCpp },
                { name: "C#", icon: TbBrandCSharp },
                { name: "Java", icon: FaJava },
                { name: "Python", icon: FaPython },
                { name: "JavaScript", icon: FaJs },
                { name: "HTML5", icon: FaHtml5 },
                { name: "T-SQL / SQL", icon: FaDatabase },
                { name: "CSS3", icon: FaCss3Alt}
            ]
        },
        {
            name: "Frontend & UI",
            items: [
                { name: "React", icon: FaReact },
                { name: "Vite", icon: SiVite },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "shadcn/ui", icon: Layers },
            ]
        },
        {
            name: "Backend & APIs",
            items: [
                { name: "Node.js", icon: FaNodeJs },
                { name: "REST APIs", icon: TbApi },
                { name: "JWT Auth", icon: FaKey },
                { name: "ADO.NET", icon: TbPlug },
                { name: "SQL Server", icon: FaDatabase },
                { name: "MySQL", icon: SiMysql},
                { name: "MongoDB", icon: SiMongodb },
            ]
        },
        {
            name: "Architecture & Design",
            items: [
                { name: "OOP (POO)", icon: TbCube },
                { name: "GoF Design Patterns", icon: LayoutGrid },
                { name: "UML Modeling (StarUML)", icon: Workflow },
            ]
        },
        {
            name: "Tools & IDEs",
            items: [
                { name: "Git", icon: FaGitAlt },
                { name: "GitHub", icon: FaGithub},
                { name: "GitLab", icon: FaGitlab},
                { name: "Azure DevOps", icon: VscAzureDevops },
                { name: "VS Code & Visual Studio", icon: VscCode },
                { name: "NetBeans", icon: FaCoffee },
                { name: "Swagger", icon: FileCode2 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-800/60">
            <div className="flex items-center gap-2 mb-8">
                <Terminal className="text-blue-400 w-5 h-5" />
                <h2 className="text-xl font-bold text-white tracking-tight">Technical Stack</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {techCategories.map((cat, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                        <h3 className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest mb-4">{cat.name}</h3>
                        <ul className="space-y-3">
                            {cat.items.map((item, i) => {
                                const IconComponent = item.icon;
                                return (
                                    <li key={i} className="text-sm text-slate-300 flex items-center gap-2.5">
                                        <IconComponent className="text-blue-400/80 text-base flex-shrink-0" />
                                        <span className="font-medium text-slate-300">{item.name}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}