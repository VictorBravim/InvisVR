// components/Contact.tsx
import React, { useState } from 'react';

interface ContactProps {
    switchSection: (section: 'hero' | 'about' | 'product' | 'contact') => void;
    currentSection: 'hero' | 'about' | 'product' | 'contact';
}

const Contact: React.FC<ContactProps> = ({ switchSection, currentSection }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Mensagem:', message);
    };

    return (
        <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center bg-black-custom relative bg-cover bg-center" style={{ backgroundImage: "url('/bg2.png')" }}>
            <div className='w-full lg:w-1/2'></div>
            <div className='w-full lg:w-1/2 flex flex-col items-left pr-0 lg:pr-40'>
                <h1 className="text-4xl lg:text-8xl text-left font-bold text-white mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mb-4 p-2 bg-transparent border-b-2 border-white text-white focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-4 p-2 bg-transparent border-b-2 border-white text-white focus:outline-none"
                    />
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mb-4 p-2 bg-transparent border-b-2 border-white text-white focus:outline-none"
                    />
                    <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded-lg">
                        Send
                    </button>
                </form>
            </div>
            <button
                onClick={() => switchSection('product')}
                className="absolute bottom-4 left-4 bg-purple-700 text-white px-4 py-2 rounded-lg"
            >
                Go to Product
            </button>
        </div>
    );
};

export default Contact;