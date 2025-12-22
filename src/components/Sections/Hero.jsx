import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Linkedin, Phone, Download } from 'lucide-react';

export function Hero() {
    return (
        <section id="home" className="min-h-[85vh] flex flex-col justify-center relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
                    <span className="text-zinc-500">I'm </span>
                    <span className="text-brand-yellow">Siddarth.</span>
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Full Stack Developer<br />
                    based in India.
                </h2>
                <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-12">
                    Computer Science Engineering student with hands-on experience in Web Development and Cyber Security.
                    Building secure and scalable applications.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="mailto:ssiddarthsmallik@gmail.com"
                        className="flex items-center gap-2 px-5 py-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-all hover:scale-105 border border-zinc-700"
                    >
                        <Mail size={20} className="text-brand-yellow" />
                        <span className="text-white font-medium">Email</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/siddarth-s-mallik-ab23aa229"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-all hover:scale-105 border border-zinc-700"
                    >
                        <Linkedin size={20} className="text-[#0077b5]" />
                        <span className="text-white font-medium">LinkedIn</span>
                    </a>
                    <a
                        href="tel:+917483780500"
                        className="flex items-center gap-2 px-5 py-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-all hover:scale-105 border border-zinc-700"
                    >
                        <Phone size={20} className="text-green-500" />
                        <span className="text-white font-medium">Phone</span>
                    </a>
                    <a
                        href={`${import.meta.env.BASE_URL}resume.pdf`}
                        download="Siddarth_Resume.pdf"
                        className="flex items-center gap-2 px-5 py-3 bg-brand-yellow text-zinc-900 rounded-full hover:bg-yellow-400 transition-all hover:scale-105 font-bold shadow-lg shadow-yellow-500/20"
                    >
                        <Download size={20} />
                        <span>Download CV</span>
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-0"
            >
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                    <ArrowDown size={16} className="animate-bounce" />
                    Scroll for more
                </div>
            </motion.div>
        </section>
    );
}
