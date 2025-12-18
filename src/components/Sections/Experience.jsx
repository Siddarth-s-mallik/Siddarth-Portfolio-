import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Taste Explorer',
        subtitle: 'Restaurant discovery platform using HTML, CSS, JS, SQL',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 2,
        title: 'Online Canteen',
        subtitle: 'Full-stack delivery system with order tracking',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 3,
        title: 'Smart IOT Fan',
        subtitle: 'Automated temperature control using Arduino',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000', // Circuit board
        link: '#'
    },
    {
        id: 4,
        title: 'Sentiment Analysis',
        subtitle: 'Aspect based analysis using Machine Learning',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
        link: '#'
    }
];

function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-96 rounded-3xl overflow-hidden bg-zinc-800 cursor-pointer"
        >
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end">
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-zinc-300 font-medium">{project.subtitle}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-4xl font-bold text-brand-yellow">Internships & Work</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            <div className="mt-20 space-y-8">
                <h3 className="text-3xl font-bold text-white mb-8">Work Experience</h3>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-brand-orange pl-6 py-2"
                >
                    <h4 className="text-xl font-bold text-white">Full Stack Developer Intern @ JSpiders</h4>
                    <p className="text-sm text-brand-orange mb-2">Mar 2025 - Sep 2025</p>
                    <p className="text-lg text-zinc-300">
                        Developed end-to-end web applications using Java, HTML, CSS, and JavaScript. Implemented RESTful APIs and MySQL integrations.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-brand-orange pl-6 py-2"
                >
                    <h4 className="text-xl font-bold text-white">Web Developer Intern @ JV Global Service Ltd</h4>
                    <p className="text-sm text-brand-orange mb-2">Oct 2022 - Nov 2022</p>
                    <p className="text-lg text-zinc-300">
                        Designed user-friendly interfaces and maintained web applications. Improved website performance and troubleshooting.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-brand-orange pl-6 py-2"
                >
                    <h4 className="text-xl font-bold text-white">CyberSecurity Intern @ PlasmidInnovations</h4>
                    <p className="text-sm text-brand-orange mb-2">Oct 2023 - Nov 2023</p>
                    <p className="text-lg text-zinc-300">
                        Assisted in identification and mitigation of security vulnerabilities. Utilized ethical hacking tools to assess security protocols.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
