import React from 'react';
import { motion } from 'framer-motion';
import { ProgressBar } from '../UI/ProgressBar';

export function Summary() {
    return (
        <section id="summary" className="py-20">
            <div className="grid md:grid-cols-2 gap-16">

                {/* Core Competencies using ProgressBar style */}
                <div>
                    <h2 className="text-2xl font-bold mb-8 text-brand-yellow uppercase tracking-wider">Core Competencies</h2>
                    <div className="space-y-8">
                        <ProgressBar label="Frontend (React, HTML, CSS, JavaScript)" percentage={90} color="bg-brand-orange" />
                        <ProgressBar label="Backend (Java, MySQL)" percentage={85} color="bg-blue-500" />
                        <ProgressBar label="Cyber Security (Beginner)" percentage={75} color="bg-green-500" />
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <h2 className="text-2xl font-bold mb-8 text-brand-yellow uppercase tracking-wider">Education</h2>

                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-xl font-bold text-white">Malnad College of Engineering</h3>
                            <p className="text-brand-orange mt-1 font-medium">B.E. in Computer Science — 2021-2025</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-xl font-bold text-white">Mahesh PU College</h3>
                            <p className="text-brand-orange mt-1 font-medium">Pre-University Course — 2020-2021</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-xl font-bold text-white">StellaMaris High School</h3>
                            <p className="text-brand-orange mt-1 font-medium">High School — 2019-2020</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
