import React from 'react';

interface ProductProps {
    switchSection: (section: 'hero' | 'about' | 'product') => void;
    currentSection: 'hero' | 'about' | 'product';
}

const Product: React.FC<ProductProps> = ({ switchSection, currentSection }) => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-black-custom relative bg-cover bg-center" style={{ backgroundImage: "url('/bg3.png')" }}>
            <div className='flex flex-col justify-center items-center'>
                <div className="w-full h-[80%] absolute top-0">
                    <iframe src='https://my.spline.design/untitled-a3b57b9566980b78009fda005e3986ff/' frameBorder='0' width='100%' height='100%'></iframe>
                    <div className="absolute bottom-0 right-0 w-48 h-16 bg-black-custom"></div>
                </div>
                <div className='absolute flex flex-col justify-center items-center bottom-12'>
                    <h1 className="text-8xl text-center font-bold text-white mb-4">Discover <span className='text-purple-700'>Exclusive <br /> Products</span></h1>
                    <p className="text-white text-lg text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere luctus nisl in convallis. <br /> Mauris id ligula ut nunc tempus finibus Praesent tincidunt consequat nisl.</p>
                    <button className="bg-purple-700 text-white px-4 py-2 rounded-lg mb-4">Shop Now</button>
                </div>
            </div>
            <button
                onClick={() => switchSection('about')}
                className="absolute bottom-4 left-4 bg-purple-700 text-white px-4 py-2 rounded-lg"
            >
                Go to About
            </button>
        </div>
    );
};

export default Product;