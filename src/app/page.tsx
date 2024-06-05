// Page.tsx
'use client'
import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Product from '../components/Product';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<'hero' | 'about' | 'product' | 'contact'>('hero');

    const switchSection = (section: 'hero' | 'about' | 'product' | 'contact') => {
        setCurrentSection(section);
    };

    return (
        <div className="overflow-hidden relative"> 
            <div
                className={`flex transition-transform duration-700 ${currentSection === 'about' ? '-translate-x-full' : currentSection === 'product' ? '-translate-x-[200%]' : currentSection === 'contact' ? '-translate-x-[300%]' : ''}`}
                style={{ width: '100%' }}
            >
                <div className="w-screen flex-shrink-0">
                    <Hero switchSection={switchSection} currentSection={currentSection} />
                </div>
                <div className="w-screen flex-shrink-0">
                    <About switchSection={switchSection} currentSection={currentSection} />
                </div>
                <div className="w-screen flex-shrink-0">
                    <Product switchSection={switchSection} currentSection={currentSection} />
                </div>
                <div className="w-screen flex-shrink-0">
                    <Contact switchSection={switchSection} currentSection={currentSection} />
                </div>
            </div>
        </div>
    );
};

export default Home;