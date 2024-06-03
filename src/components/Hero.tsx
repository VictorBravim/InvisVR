// components/Hero.tsx
import React from 'react';
import Nav from './Nav';

interface HeroProps {
    switchSection: (section: 'hero' | 'about') => void;
    currentSection: 'hero' | 'about';
}

const Hero: React.FC<HeroProps> = ({ switchSection, currentSection }) => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-black-custom relative">
            {/* Título grande */}
            <h1 className="text-6xl font-bold text-white mb-4">Embark on Virtual Journeys</h1>

            {/* Botão */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4">Explore Now</button>

            {/* Texto curto */}
            <p className="text-white text-lg text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            {/* iframe para o 3D do spline */}
            <div className="w-full h-full absolute top-0 left-0">
                <iframe src='https://my.spline.design/untitled-a3b57b9566980b78009fda005e3986ff/' frameBorder='0' width='50%' height='50%'></iframe>
            </div>

            <Nav switchSection={switchSection} currentSection={currentSection} />
        </div>
    );
};

export default Hero;