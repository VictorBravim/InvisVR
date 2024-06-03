// components/About.tsx
import React from 'react';
import Nav from './Nav';

interface AboutProps {
    switchSection: (section: 'hero' | 'about') => void;
    currentSection: 'hero' | 'about';
}

const About: React.FC<AboutProps> = ({ switchSection, currentSection }) => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-black-custom relative">
            <h1 className="text-4xl font-bold text-white mb-8">About Section</h1>
            <Nav switchSection={switchSection} currentSection={currentSection} />
        </div>
    );
};

export default About;