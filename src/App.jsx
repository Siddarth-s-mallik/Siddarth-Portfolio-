import { useState, useEffect } from 'react';
import { AppLayout } from './components/Layout/AppLayout';
import { Hero } from './components/Sections/Hero';
import { Summary } from './components/Sections/Summary';
import { Experience } from './components/Sections/Experience';
import { Skills } from './components/Sections/Skills';
import { Contact } from './components/Sections/Contact';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (id) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'summary', 'experience', 'skills', 'links'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Adjust threshold based on section height/position
                    if (rect.top >= -400 && rect.top < 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppLayout activeSection={activeSection} onNavigate={scrollToSection}>
            <Hero />
            <Summary />
            <Experience />
            <Skills />
            <Contact />
        </AppLayout>
    );
}

export default App;
