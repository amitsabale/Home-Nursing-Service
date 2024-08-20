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
                    description="Comprehensive post-surgical care for faster recovery."
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
                    description="Comprehensive post-surgical care for faster recovery."
                    image={physiotherapyImage}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="Bloodtest"
                    title="Bloodtest"
                    description="Comprehensive post-surgical care for faster recovery."
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
                    description="Comprehensive post-surgical care for faster recovery."
                    image={Bodymassage}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="critical patient care"
                    title="Critical patient care"
                    description="Comprehensive post-surgical care for faster recovery."
                    image={CriticalPatients}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="dressing"
                    title="Dressing"
                    description="Comprehensive post-surgical care for faster recovery."
                    image={dressing}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="handicaped"
                    title="Handicaped Care"
                    description="Comprehensive post-surgical care for faster recovery."
                    image={handicaped}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="heartbpcheck"
                    title="BP Check"
                    description="Comprehensive post-surgical care for faster recovery."
                    image={heartbpcheck}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="EquipmentOnrent"
                    title="Equipment On Rent"
                    description="Comprehensive post-surgical care for faster recovery."
                    image={equipmentonrent}
                    contactLink="https://wa.me/7709750465"
                />
                <ServiceCard
                    key="medical equipment on rent "
                    title="Medical Equipment On Rent "
                    description="Personalized physiotherapy sessions at your home."
                    image={itemonrent}
                    contactLink="https://wa.me/7709750465"
                />
            </div>
        </div>
    </section>
);

export default Services;
