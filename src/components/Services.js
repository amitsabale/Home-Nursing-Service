import React from 'react';
import ServiceCard from './ServiceCard';
import nursingCareImage from '../assets/nursingcare.jpeg';
import postSurgicalCareImage from '../assets/postsurgicalcare.jpeg';
// import physiotherapyImage from '../assets/physiotherapy.jpeg';
// import infantCareImage from '../assets/.jpeg';

const Services = () => (
    <section id="services" className="py-20 mt-[-80px] ">
        <div className="container mx-auto ">
            <h2 className="text-4xl text-center mb-8">Our Services</h2>
            <div className="services-container flex flex-wrap justify-between gap-[10px]">
                <ServiceCard
                    title="Nursing Care"
                    description="Skilled nursing care for patients at home."
                    image={nursingCareImage}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    title="Post-Surgical Care"
                    description="Comprehensive post-surgical care for faster recovery."
                    image={nursingCareImage}
                    // image={postSurgicalCareImage}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    title="Physiotherapy"
                    description="Personalized physiotherapy sessions at your home."
                    // image={physiotherapyImage}
                    image={nursingCareImage}

                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    title="Infant Care"
                    description="Specialized care for newborns and infants."
                    // image={infantCareImage}
                    image={nursingCareImage}

                    contactLink="https://wa.me/7709750465"
                />
                {/* Add more ServiceCard components here if needed */}
            </div>
        </div>
    </section>
);

export default Services;
