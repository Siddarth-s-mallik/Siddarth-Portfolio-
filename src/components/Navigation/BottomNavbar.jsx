import React from 'react';
import { User, FileText, Briefcase, Zap, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'summary', label: 'Summary', icon: FileText },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'links', label: 'Links', icon: LinkIcon },
];

export function BottomNavbar({ activeSection, onNavigate }) {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                className="bg-zinc-800/90 backdrop-blur-md border border-zinc-700/50 rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl shadow-black/50"
            >
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={clsx(
                                'relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300',
                                isActive ? 'text-brand-dark' : 'text-zinc-400 hover:text-white'
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-nav-pill"
                                    className="absolute inset-0 bg-white rounded-full"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2 text-sm font-medium">
                                <Icon size={16} />
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </motion.nav>
        </div>
    );
}
