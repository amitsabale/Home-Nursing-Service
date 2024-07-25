import React from 'react';

const ServiceCard = ({ title, description, image, contactLink }) => (
    <div className="service bg-white rounded-lg shadow-md p-4 mb-8 w-full sm:w-1/2 md:w-1/3 lg:w-[320px]">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <img src={image} alt={`${title} Image`} className="w-full mb-4" />
        <a href={contactLink} target="_blank" rel="noopener noreferrer" className="contact-button bg-blue-500 text-white text-center py-2 rounded-lg block">Contact Us</a>
    </div>
);

export default ServiceCard;
