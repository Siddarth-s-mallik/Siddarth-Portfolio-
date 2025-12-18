import React from 'react';
import { motion } from 'framer-motion';

export function ProgressBar({ label, percentage, color = 'bg-brand-yellow' }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <span className="text-white font-medium">{label}</span>
            </div>
            <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`h-full ${color} rounded-full`}
                />
            </div>
        </div>
    );
}
