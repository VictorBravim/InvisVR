// components/About.tsx
import React from 'react';
import Nav from './Nav';

interface AboutProps {
    switchSection: (section: 'hero' | 'about') => void;
    currentSection: 'hero' | 'about';
}

const About: React.FC<AboutProps> = ({ switchSection, currentSection }) => {
    return (
        <div className="w-full h-screen flex flex-row items-center justify-center bg-black-custom relative bg-cover bg-center" style={{ backgroundImage: "url('/bg2.png')", }}>
            <div className='w-1/2'>
            </div>
            <div className='w-1/2 flex flex-col items-left'>
                <h1 className="text-8xl text-left font-bold text-white mb-4">Uncover <span className='text-purple-700'>Hidden <br /> Wonders</span></h1>
                <p className="text-white text-lg text-left mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere luctus nisl in convallis. <br /> Mauris id ligula ut nunc tempus finibus. Praesent tincidunt consequat nisl, sed laoreet massa <br /> gravida id. Fusce ullamcorper pulvinar condimentum.</p>
                <div>
                    <button className="bg-purple-700 text-white px-4 py-2 rounded-lg mb-4">Explore Now</button>
                </div>
            </div>
            <Nav switchSection={switchSection} currentSection={currentSection} />
        </div>
    );
};

export default About;