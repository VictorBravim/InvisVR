// components/Hero.tsx
import React from 'react';
import Nav from './Nav';

interface HeroProps {
    switchSection: (section: 'hero' | 'about') => void;
    currentSection: 'hero' | 'about';
}

const Hero: React.FC<HeroProps> = ({ switchSection, currentSection }) => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-black relative">
            <h1 className="text-4xl font-bold text-white mb-8">Hero Section</h1>
            <Nav switchSection={switchSection} currentSection={currentSection} />
        </div>
    );
};

export default Hero;