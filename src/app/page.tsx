// Page.tsx
'use client'
import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';

const Home: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<'hero' | 'about'>('hero');

    const switchSection = (section: 'hero' | 'about') => {
        setCurrentSection(section);
    };

    return (
        <div className="overflow-hidden">
            <div
                className={`flex transition-transform duration-700 ${currentSection === 'about' ? '-translate-x-full' : ''
                    }`}
                style={{ width: '100%' }}
            >
                <div className="w-screen flex-shrink-0">
                    <Hero />
                    <button
                        onClick={() => switchSection('about')}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
                    >
                        Go to About
                    </button>
                </div>
                <div className="w-screen flex-shrink-0">
                    <About />
                    <button
                        onClick={() => switchSection('hero')}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
                    >
                        Go to Hero
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;