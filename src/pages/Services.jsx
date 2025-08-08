import React from "react";
import WebDesignImage from "../assets/Service/Web Design.png";
import AppDesignImage from "../assets/Service/App Design.png";
import WebDevelopmentImage from "../assets/Service/Web Development.png";
import PosterDesignImage from "../assets/Service/Poster Design.png";
import LogoDesignImage from "../assets/Service/Logo Design.png";
import SaaSIcon from "../assets/Service/Saas.png";
import StartupIcon from "../assets/Service/Startup Icon.png";
import IndustriesIcon from "../assets/Service/Company.png";
import SocialMediaImage from "../assets/Contact Us.mp4";
import { Link } from "react-router-dom";
import HighClassPopup from '../components/HighClassPopup';
import { useState } from 'react';

const servicesList = [
  {
    name: "Web Design",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    subheading: "We build impactful digital experiences",
    description:
      "We design stunning, responsive websites that elevate your online presence and create seamless experiences across all devices.",
    image: WebDesignImage,
  },
  {
    name: "App Design",
    color: "text-orange-500",
    bgColor: "bg-[#fff4e5]",
    subheading: "We design mobile apps users love",
    description:
      "From wireframes to final UI, we design intuitive, attractive apps that enhance usability and connect deeply with your users.",
    image: AppDesignImage,
  },
  {
    name: "Web Development",
    color: "text-red-600",
    bgColor: "bg-red-100",
    subheading: "We develop fast & scalable digital platforms",
    description:
      "We build robust, SEO-friendly websites using modern frameworks — optimized for performance, flexibility, and long-term growth.",
    image: WebDevelopmentImage,
  },
  {
    name: "Poster Design",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    subheading: "We create bold, high-impact poster designs",
    description:
      "Whether for digital or print, our posters grab attention, convey your message clearly, and strengthen brand communication.",
    image: PosterDesignImage,
  },
  {
    name: "Logo Design",
    color: "text-green-600",
    bgColor: "bg-green-100",
    subheading: "We design unique logos that define your brand",
    description:
      "We craft timeless, versatile logos that reflect your identity, resonate with your audience, and stand out in any context.",
    image: LogoDesignImage,
  },
];

const industriesList = [
  {
    labelColor: "text-blue-500",
    label: "Web design for",
    title: "SaaS Companies",
    image: SaaSIcon,
  },
  {
    labelColor: "text-blue-500",
    label: "Web design for",
    title: "Startups",
    image: StartupIcon,
  },
  {
    labelColor: "text-indigo-500",
    label: "Web design for",
    title: "Industries",
    image: IndustriesIcon,
  },
];

const Services = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Services Section */}
      <section className="w-full flex flex-col items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="w-full flex flex-col items-start gap-4 sm:gap-6">
            <div className="w-full text-left">
              <p className="text-sm sm:text-base md:text-lg text-blue-600 font-semibold uppercase">
                Services
              </p>
              <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-2 md:mt-3">
                What we do
              </h2>
              <p className="text-gray-500 mt-3 md:mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                At Technovanam, our end-to-end design and development services are crafted to empower your business, enhance your digital presence, and drive growth. We blend smart strategy, modern technology, and user-focused design to elevate your brand and help you thrive in today's competitive landscape.
              </p>
            </div>

            {servicesList.map((service, index) => (
              <div
                key={index}
                className={`w-full ${service.bgColor} rounded-xl lg:rounded-[20px] overflow-hidden shadow-lg mt-6 sm:mt-8 transition-all duration-300`}
              >
                {/* Mobile Layout */}
                <div className="lg:hidden">
                  {/* Text Block - Mobile */}
                  <div className="w-full p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 text-center">
                    <h3 className={`${service.color} text-sm sm:text-base md:text-lg uppercase font-bold tracking-wide`}>
                      {service.name}
                    </h3>
                    <h4 className="text-gray-900 text-xl sm:text-2xl font-bold leading-tight">
                      {service.subheading}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
                      {service.description}
                    </p>
                    {service.name === 'Web Development' ? (
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 text-sm sm:text-base text-blue-600 font-bold uppercase tracking-wide hover:text-gray-800 transition-colors duration-200 mt-2"
                      >
                        See more
                        <span className="text-base sm:text-lg">➔</span>
                      </button>
                    ) : (
                      <Link
                        to="/contact"
                        className="flex items-center justify-center gap-2 text-sm sm:text-base text-blue-600 font-bold uppercase tracking-wide hover:text-gray-800 transition-colors duration-200 mt-2"
                      >
                        Get in touch
                        <span className="text-base sm:text-lg">➔</span>
                      </Link>
                    )}
                  </div>

                  {/* Image Block - Mobile - Positioned lower and extends to bottom */}
                  <div className="w-full h-64 sm:h-80 md:h-96 bg-[#E5E9F0] flex items-center justify-center rounded-xl mx-4 mb-4 -mt-2">
                    <img
                      src={service.image}
                      alt={`${service.name} Illustration`}
                      className="object-contain w-full h-full p-4 sm:p-6"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center justify-between">
                  {/* Text Block - Desktop */}
                  <div className="w-1/2 p-12 flex flex-col gap-4 text-left">
                    <h3 className={`${service.color} text-lg uppercase font-bold tracking-wide`}>
                      {service.name}
                    </h3>
                    <h4 className="text-gray-900 text-4xl font-bold leading-tight">
                      {service.subheading}
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    {service.name === 'Web Development' ? (
                      <button
                        type="button"
                        className="flex items-center justify-start gap-2 text-base text-blue-600 font-bold uppercase tracking-wide hover:text-gray-800 transition-colors duration-200 mt-2"
                      >
                        See more
                        <span className="text-lg">➔</span>
                      </button>
                    ) : (
                      <Link
                        to="/contact"
                        className="flex items-center justify-start gap-2 text-base text-blue-600 font-bold uppercase tracking-wide hover:text-gray-800 transition-colors duration-200 mt-2"
                      >
                        Get in touch
                        <span className="text-lg">➔</span>
                      </Link>
                    )}
                  </div>

                  {/* Image Block - Desktop */}
                  <div className="w-1/2 h-[520px] bg-[#E5E9F0] flex items-center justify-center rounded-2xl">
                    <img
                      src={service.image}
                      alt={`${service.name} Illustration`}
                      className="object-contain w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>  
      </section>

      {/* Industries Section */}
      <section className="w-full flex flex-col items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-7xl flex flex-col items-center gap-4 sm:gap-6">
          <div className="text-center max-w-2xl px-4">
            <h2 className="text-blue-500 text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider">
              ~ Industries ~
            </h2>
            <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4">
              Our Focus Areas 
            </h1>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed text-justify md:text-center">
              We've collaborated across various sectors — with deep expertise in delivering tailored solutions for these key industries.  
            </p>
          </div>

          {/* Industries Cards - Responsive Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center mt-4 sm:mt-6">
            {industriesList.map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center p-3 sm:p-4 gap-3 bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl shadow-sm w-full max-w-[300px] min-h-[80px] sm:min-h-[90px] transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-md hover:border-blue-500"
              >
                <div className="flex flex-row items-center gap-3 w-full">
                  <img
                    src={item.image} 
                    alt={`${item.title} Icon`}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex flex-col items-start flex-grow min-w-0">
                    <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${item.labelColor}`}>
                      {item.label}
                    </span>
                    <span className="text-gray-900 text-lg sm:text-xl font-semibold leading-tight">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Commented out as in original */}
      {/* <section className="w-full flex flex-col items-center h-[600px] bg-blue-600">
        <div className="w-full max-w-7xl flex flex-row items-center justify-between gap-8">
          
          <div className="w-1/2 h-[600px]">
            <video
              src={SocialMediaImage}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-1/2 text-white text-left px-8 pt-20 pb-20">
            <h2 className="text-5xl font-bold leading-tight">
              Ready to launch something amazing with Techno Vanam?
            </h2>
            <p className="text-lg mt-4">
              Our creative experts are here to design, develop, and deliver high-performing digital experiences tailored to your brand. Let's build something great together.
            </p>
            <div className="pt-6 flex justify-start">
              <Link to="/contact">
                <button className="flex items-center gap-2 px-7 py-4 bg-white text-blue-600 font-bold text-base rounded-full border-2 shadow-md hover:bg-gray-100 hover:bg-transparent hover:text-white transition">
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 transform -scale-y-100"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section> */}

      <HighClassPopup 
        open={showPopup} 
        onClose={() => setShowPopup(false)} 
        title="Service is currently unavailable" 
        description="This service is currently unavailable. Please check back later." 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12 text-red-500">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <rect x="11" y="7" width="2" height="6" rx="1" fill="#fff" />
            <rect x="11" y="15" width="2" height="2" rx="1" fill="#fff" />
          </svg>
        }
      />
    </>
  );
};

export default Services;