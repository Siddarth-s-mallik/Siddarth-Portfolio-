import React from 'react';
import { BottomNavbar } from '../Navigation/BottomNavbar';

export function AppLayout({ children, activeSection, onNavigate }) {
    return (
        <div className="relative min-h-screen bg-brand-dark text-white overflow-hidden selection:bg-brand-yellow selection:text-brand-dark">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Subtle Grain (optional, simulated with noise image or simple texture) */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

                {/* Dynamic Glow - Orange/Yellow */}
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[140px]" />
            </div>

            {/* Content */}
            <main className="relative z-10 max-w-5xl mx-auto px-6 py-20 pb-32 flex flex-col gap-24">
                {children}
            </main>

            {/* Navigation */}
            <BottomNavbar activeSection={activeSection} onNavigate={onNavigate} />
        </div>
    );
}
