import React from 'react';

const Header = () => (
    <header className="bg-blue-500 text-white py-5">
        <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl text-center">Home Nursing Service</h1>
            <nav>
                <ul className="flex md:flex-row justify-center mt-4">
                    <li className="mb-2 md:mb-0 mr-6"><a href="#home" className="hover:underline">Home</a></li>
                    <li className="mb-2 md:mb-0 mr-6"><a href="#about" className="hover:underline">About Us</a></li>
                    <li className="mb-2 md:mb-0 mr-6"><a href="#services" className="hover:underline">Services</a></li>
                    <li><a href="#contact" className="hover:underline">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;
                