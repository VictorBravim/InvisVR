// components/Hero.tsx
import React from 'react';

interface HeroProps {
    switchSection: (section: 'hero' | 'about' | 'product' | 'contact') => void;
    currentSection: 'hero' | 'about' | 'product' | 'contact';
}

const Hero: React.FC<HeroProps> = ({ switchSection, currentSection }) => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-black-custom relative bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className='flex flex-col justify-center items-center'>
                <div className="w-full h-full lg:h-[80%] absolute top-0">
                    <iframe src='https://my.spline.design/untitled-a3b57b9566980b78009fda005e3986ff/' frameBorder='0' width='100%' height='100%'></iframe>
                    <div className="absolute bottom-0 right-0 w-48 h-16 bg-black-custom"></div>
                </div>
                <div className='absolute flex flex-col justify-center items-center bottom-48 lg:bottom-12'>
                    <h1 className="text-7xl lg:text-8xl text-center font-bold text-white mb-4">Embark on <span className='text-purple-700'>Virtual <br /> Journeys</span></h1>
                    <p className="text-white text-lg text-center mb-8 p-1 lg:p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere luctus nisl in convallis. <br /> Mauris id ligula ut nunc tempus finibus Praesent tincidunt consequat nisl.</p>
                    <button className="bg-purple-700 text-white px-4 py-2 rounded-lg mb-4">Explore Now</button>
                </div>
            </div>
            <button
                onClick={() => switchSection('about')}
                className="absolute bottom-4 right-4 bg-purple-700 text-white px-4 py-2 rounded-lg"
            >
                Go to About
            </button>
        </div>
    );
};

export default Hero;