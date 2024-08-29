import React from "react";
import bannerImage from "../assets/banner2.png";
import whatsappIcon from "../assets/wtsapp.jpeg";

const Banner = () => (
  <section className="banner bg-gray-100 md:py-20 py-0 md:mt-50 mt-[0px]">
    <div className="container mx-auto flex items-center justify-center flex-col relative">
    <img
        src={bannerImage}
        alt="Healthcare banner"
        className="md:max-h-full rounded-lg shadow-md relative md:opacity-55 h-[75vh] opacity-0"
      />
      <div className="banner-content md:ml-8 ml-4 md:mr-0 mr-4 flex flex-col absolute">
        <div className="homecontent text-left flex flex-col">
          <p className="text-lg font-bold">
            At Home Nursing Service, we provide compassionate and professional
            home healthcare solutions tailored to meet your needs. Our dedicated
            team of experienced nurses and caregivers delivers personalized care
            with empathy and respect. Whether you require skilled nursing,
            post-surgical care, physiotherapy, or specialized infant care, we
            are here to support you and your loved ones every step of the way.
          </p>
          <p>
            Contact us today to learn more about how we can assist you with
            quality healthcare at home.
          </p>
        </div>
        <div className="contact-info bg-white bg-opacity-80 rounded-lg shadow-md p-4 mt-4">
          <p className="mb-2">
            <strong>Contact Information:</strong>
          </p>
          <p>Email: amitshomenursing.com</p>
          <p>Phone: +91 1234554321</p>
          <img
            src={whatsappIcon}
            alt="WhatsApp Icon"
            className="w-8 inline-block"
          />
          <a className="inline-block ml-2" href="https://wa.me/7709750465">
            7709750465
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
