import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, color: 'bg-[#0077b5]', url: 'https://linkedin.com/in/siddarth-s-mallik-ab23aa229' },
    { name: 'GitHub', icon: Github, color: 'bg-[#333]', url: 'https://github.com/Siddarth-s-mallik' },
];

export function Contact() {
    return (
        <section id="links" className="py-20 min-h-[60vh] flex flex-col justify-between">
            <div>
                <h2 className="text-4xl font-bold mb-12 text-brand-yellow">Get In Touch</h2>

                <div className="flex flex-wrap gap-4 mb-20">
                    {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 px-6 py-4 bg-zinc-800 rounded-2xl hover:bg-zinc-700 transition-colors"
                            >
                                <div className={`p-2 rounded-lg bg-transparent`}>
                                    <Icon size={24} className="text-white" />
                                </div>
                                <span className="text-lg font-medium text-white">{link.name}</span>
                            </motion.a>
                        )
                    })}
                </div>

                <div className="flex flex-col gap-6 text-zinc-300">
                    <div className="flex items-center gap-3">
                        <Mail className="text-brand-yellow" />
                        <span className="font-semibold text-lg">ssiddarthsmallik@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="text-brand-yellow" />
                        <span className="font-semibold text-lg">+91 7483780500</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="text-brand-yellow" />
                        <span className="font-semibold text-lg">Karnataka, India</span>
                    </div>
                </div>
            </div>

            <div className="mt-20 pt-10 border-t border-zinc-800 text-zinc-500 text-sm flex justify-between items-center">
                <p>© 2025 Siddarth S Mallik</p>
                <a
                    href="/resume.pdf"
                    download
                    className="bg-brand-yellow text-brand-dark px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors inline-block"
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
}
