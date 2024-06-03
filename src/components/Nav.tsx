// components/Nav.tsx
import React from 'react';

interface NavProps {
    switchSection: (section: 'hero' | 'about') => void;
    currentSection: 'hero' | 'about';
}

const Nav: React.FC<NavProps> = ({ switchSection, currentSection }) => {
    return (
        <nav className="flex justify-center space-x-4 absolute top-4 left-1/2 transform -translate-x-1/2">
            <button
                onClick={() => switchSection('hero')}
                className={`py-2 px-4 rounded-lg ${
                    currentSection === 'hero'
                        ? 'bg-transparent text-white'
                        : 'bg-white text-black'
                }`}
            >
                Hero
            </button>
            <button
                onClick={() => switchSection('about')}
                className={`py-2 px-4 rounded-lg ${
                    currentSection === 'about'
                        ? 'bg-transparent text-white'
                        : 'bg-white text-black'
                }`}
            >
                About
            </button>
        </nav>
    );
};

export default Nav;