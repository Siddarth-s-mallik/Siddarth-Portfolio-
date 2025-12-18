import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

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

                <div className="flex gap-4">
                    {/* Placeholder for action buttons if needed */}
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
