import React from "react";
import WebDesignImage from "../assets/logo.png";
import AppDesignImage from "../assets/logo.png";
import WebDevelopmentImage from "../assets/logo.png";
import PosterDesignImage from "../assets/logo.png";
import LogoDesignImage from "../assets/logo.png";
import SaaSIcon from "../assets/logo.png";
import StartupIcon from "../assets/logo.png";
import IndustriesIcon from "../assets/logo.png";
import SocialMediaImage from "../assets/logo.png";

const servicesList = [
  {
    name: "Web Design",
    color: "text-red-500",
    bgColor: "bg-red-100",
    subheading: "We build impactful digital experiences",
    description:
      "We design stunning, responsive websites that elevate your online presence and create seamless experiences across all devices.",
    image: WebDesignImage,
  },
  {
    name: "App Design",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    subheading: "We design mobile apps users love",
    description:
      "From wireframes to final UI, we design intuitive, attractive apps that enhance usability and connect deeply with your users.",
    image: AppDesignImage,
  },
  {
    name: "Web Development",
    color: "text-green-500",
    bgColor: "bg-green-100",
    subheading: "We develop fast & scalable digital platforms",
    description:
      "We build robust, SEO-friendly websites using modern frameworks — optimized for performance, flexibility, and long-term growth.",
    image: WebDevelopmentImage,
  },
  {
    name: "Poster Design",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    subheading: "We create bold, high-impact poster designs",
    description:
      "Whether for digital or print, our posters grab attention, convey your message clearly, and strengthen brand communication.",
    image: PosterDesignImage,
  },
  {
    name: "Logo Design",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
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
  return (
    <>
      {/* Services Section */}
      <section className="w-full flex flex-col items-center py-16 px-8">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="w-full flex flex-col items-start gap-6">
            <div className="w-full text-left">
              <p className="text-base text-blue-600 font-semibold uppercase">
                Services
              </p>
              <h2 className="text-gray-900 text-4xl font-bold leading-tight mt-3">
                What we do
              </h2>
              <p className="text-gray-500 mt-4 text-lg">
                At Technovanam, our end-to-end design and development services are crafted to empower your business, enhance your digital presence, and drive growth. We blend smart strategy, modern technology, and user-focused design to elevate your brand and help you thrive in today’s competitive landscape.
              </p>
            </div>

            {servicesList.map((service, index) => (
              <div
                key={index}
                className={`w-full flex flex-row items-center justify-center gap-6 ${service.bgColor} rounded-2xl min-h-[450px] mt-6 shadow-lg`}
              >
                <div className="w-1/2 flex flex-col items-start p-8 gap-4">
                  <h3 className={`${service.color} text-xl font-bold`}>
                    {service.name}
                  </h3>
                  <h4 className="text-gray-900 text-3xl font-bold">
                    {service.subheading}
                  </h4>
                  <p className="text-gray-500 text-base">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-900 text-sm font-bold uppercase tracking-wider">
                      Get in touch
                    </span>
                    <svg
                      className="w-4 h-4 transform -scale-y-100"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3l5 5-5 5" stroke="#19213D" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                <div className="w-1/2 h-[300px] bg-gray-200 rounded-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.name} Illustration`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full flex flex-col items-center py-16 px-8">
        <div className="w-full max-w-7xl flex flex-col items-center gap-6">
          <div className="text-center max-w-2xl">
            <h2 className="text-blue-500 text-sm font-bold uppercase tracking-wider">
              ~ Industries ~
            </h2>
            <h1 className="text-gray-900 text-4xl font-bold mt-4">
              We’re focused on
            </h1>
            <p className="text-gray-500 text-lg mt-4">
              Our team has worked with all kinds of companies, but we're especially good at helping the following industries.
            </p>
          </div>

          <div className="w-full flex flex-row justify-center items-start gap-4">
            {industriesList.map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center p-5 gap-3 bg-white border border-gray-200 rounded-xl shadow-md w-[358px] min-h-[100px]"
              >
                <div className="flex flex-row items-center gap-3">
                  <img
                    src={item.image}
                    alt={`${item.title} Icon`}
                    className="w-12 h-12 object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <span className={`text-sm font-bold uppercase tracking-wider ${item.labelColor}`}>
                      {item.label}
                    </span>
                    <span className="text-gray-900 text-xl font-bold">
                      {item.title}
                    </span>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 transform -scale-y-100"
                  viewBox="0 0 16 16"
                  fill="#19213D"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3l5 5-5 5" stroke="#19213D" strokeWidth="2" fill="none" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex flex-col items-center py-16 px-8 bg-blue-600">
        <div className="w-full max-w-7xl flex flex-row items-center justify-between gap-8">
          <div className="w-1/2 text-white text-left">
            <h2 className="text-4xl font-bold leading-tight">
              Ready to launch something amazing with Techno Vanam?
            </h2>
            <p className="text-lg mt-4">
              Our creative experts are here to design, develop, and deliver high-performing digital experiences tailored to your brand. Let’s build something great together.
            </p>
            <div className="pt-6 flex justify-start">
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold text-base rounded-full border shadow-md hover:bg-gray-100 transition">
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#2388FF"
                  className="w-4 h-4 transform -scale-y-100"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-1/2 h-[300px]">
            <img
              src={SocialMediaImage}
              alt="Social Media illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;