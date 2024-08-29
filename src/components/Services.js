import React from 'react';
import ServiceCard from './ServiceCard';
import nursingCareImage from '../assets/nursingcare.jpeg';
import postSurgicalCareImage from '../assets/postsurgicalcare.jpeg';
import physiotherapyImage from '../assets/physiotheorpy.jpeg';
import Bodymassage from '../assets/Body massage.jpeg';
import bloodtest from '../assets/bloodtest.jpeg';
import CriticalPatients from '../assets/criticalpatient.jpeg';
import babycare from '../assets/babycare.jpeg';
import heartbpcheck from '../assets/heartbpcheck.jpeg';
import equipmentonrent from '../assets/equipmentonrent.jpeg';
import dressing from '../assets/dressing.jpeg';
import handicaped from '../assets/handicaped.jpeg';
import mentallychallanged from '../assets/mentallychallenged.jpeg';
import itemonrent from '../assets/itemonrent.jpeg';

const Services = () => (
    <section id="services" className="py-10 md:py-20 mt-[-40px] md:mt-[-80px]">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center mb-8">Our Services</h2>
            <div className="services-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard
                    key="babycare"
                    title="Baby Care"
                    description="Compassionate support and nurturing care for infants to ensure their health and well-being."
                    image={babycare}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="postSurgicalCare"
                    title="Post-Surgical Care"
                    description="Comprehensive post-surgical care for faster recovery."
                    image={postSurgicalCareImage}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="Physiotherapy"
                    title="Physiotherapy"
                    description="Specialized care to improve mobility and reduce pain through therapeutic exercises."
                    image={physiotherapyImage}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="Bloodtest"
                    title="Bloodtest"
                    description="Convenient and accurate blood sample collection and analysis for various medical diagnostics."
                    image={bloodtest}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="nursingCare"
                    title="Nursing Care"
                    description="Skilled nursing care for patients at home."
                    image={nursingCareImage}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="Bodymassage"
                    title="Bodymassage"
                    description="Relaxing and therapeutic massage to relieve stress, improve circulation, and promote well-being."
                    image={Bodymassage}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="critical patient care"
                    title="Critical patient care"
                    description="Intensive monitoring and specialized treatment for patients with life-threatening conditions."
                    image={CriticalPatients}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="dressing"
                    title="Dressing"
                    description="Expert wound care and management to promote healing and prevent infection"
                    image={dressing}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="handicaped"
                    title="Handicaped Care"
                    description="Personalized support and assistance to enhance daily living and quality of life for individuals with disabilities."
                    image={handicaped}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="heartbpcheck"
                    title="BP Check"
                    description="Routine monitoring of blood pressure to assess cardiovascular health and detect potential issues."
                    image={heartbpcheck}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="EquipmentOnrent"
                    title="Equipment On Rent"
                    description="Affordable rental services for essential medical devices and equipment to support patient care."
                    image={equipmentonrent}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="medical equipment on rent "
                    title="Medical Equipment On Rent "
                    description="Rental of essential medical devices for convenient care."
                    image={itemonrent}
                    contactLink="https://wa.me/7709750465"
                />
            </div>
        </div>
    </section>
);

export default Services;
