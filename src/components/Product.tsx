import React from 'react';

interface ProductProps {
    switchSection: (section: 'hero' | 'about' | 'product') => void;
    currentSection: 'hero' | 'about' | 'product';
}

const Product: React.FC<ProductProps> = ({ switchSection, currentSection }) => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-black-custom relative bg-cover bg-center" style={{ backgroundImage: "url('/bg3.png')" }}>
            <div className='flex flex-col justify-center items-center'>
                <div className="w-full h-full absolute">
                    <iframe src='https://my.spline.design/untitledcopy-58e570f699bb112bffabe274cac78a3c/' frameBorder='0' width='100%' height='100%'></iframe>
                    <div className="absolute bottom-0 right-0 w-48 h-16 bg-black-custom"></div>
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