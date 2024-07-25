import React from 'react';

const Contact = () => (
    <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto">
            <h2 className="text-4xl text-center mb-8">Contact Us</h2>
            <form action="submit-form.php" method="POST" className="contact-form">
                <label htmlFor="name" className="block mb-2">Name:</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-4" />
                
                <label htmlFor="email" className="block mb-2">Email:</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-4" />
                
                <label htmlFor="phone" className="block mb-2">Contact Number:</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-4" />
                
                <label htmlFor="message" className="block mb-2">Message:</label>
                <textarea id="message" name="message" required className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-4"></textarea>
                
                <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">Submit</button>
            </form>
        </div>
    </section>
);

export default Contact;
