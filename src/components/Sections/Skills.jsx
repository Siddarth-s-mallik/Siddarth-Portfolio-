import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiHtml5, SiCss3, SiJavascript, SiMysql, SiPython, SiNodedotjs, SiGit } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skills = [
    { name: 'Java', icon: FaJava, color: '#f89820' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
];

const listSkills = [
    "Web Technology", "Core Java", "OOPs", "Cyber Security",
    "Software Application", "Database Management", "Data Structures"
];

export function Skills() {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-4xl font-bold mb-12 text-brand-yellow">Key Skills</h2>

            {/* List */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-4 mb-20">
                {listSkills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-brand-orange" />
                        <span className="text-xl font-medium text-zinc-200">{skill}</span>
                    </div>
                ))}
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex flex-col items-center justify-center gap-4 bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-zinc-600 transition-colors group"
                        >
                            <Icon size={48} className="text-zinc-400 group-hover:text-white transition-colors" style={{ color: '' }} />
                            <span className="font-medium text-zinc-400 group-hover:text-white">{skill.name}</span>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
