// components/Hero.tsx
import React from 'react';
import Nav from './Nav';

interface HeroProps {
    switchSection: (section: 'hero' | 'about') => void;
    currentSection: 'hero' | 'about';
}

const Hero: React.FC<HeroProps> = ({ switchSection, currentSection }) => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-black-custom relative bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')", }}>
            <div className='flex flex-col justify-center items-center'>
                <div className="w-full h-[50%] absolute top-16">
                    <iframe src='https://my.spline.design/untitled-a3b57b9566980b78009fda005e3986ff/' frameBorder='0' width='100%' height='100%'></iframe>
                </div>
                <div className='absolute flex flex-col justify-center items-center bottom-12'>
                    <h1 className="text-8xl text-center font-bold text-white mb-4">Embark on <span className='text-purple-700'>Virtual <br /> Journeys</span></h1>
                    <p className="text-white text-lg text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> Lorem ipsum dolor sit amet.</p>
                    <button className="bg-purple-700 text-white px-4 py-2 rounded-lg mb-4">Explore Now</button>
                </div>
            </div>
            <Nav switchSection={switchSection} currentSection={currentSection} />
        </div>
    );
};

export default Hero;