import React from "react";
import WebDesignImage from "../assets/Service/Web Design.png";
import AppDesignImage from "../assets/Service/App Design.png";
import WebDevelopmentImage from "../assets/Service/Web Development.png";
import PosterDesignImage from "../assets/Service/Poster Design.png";
import LogoDesignImage from "../assets/Service/Logo Design.png";
import SaaSIcon from "../assets/logo.png";
import StartupIcon from "../assets/Service/Startup Icon.png";
import IndustriesIcon from "../assets/logo.png";
import SocialMediaImage from "../assets/Contact Us.mp4";

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
  return (
    <>
      {/* Services Section */}
      <section className="w-full flex flex-col items-center py-16 px-8">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="w-full flex flex-col items-start gap-6">
            <div className="w-full text-left">
              <p className="text-lg text-blue-600 font-semibold uppercase">
                Services
              </p>
              <h2 className="text-gray-900 text-5xl font-bold leading-tight mt-3">
                What we do
              </h2>
              <p className="text-gray-500 mt-4 text-lg">
                At Technovanam, our end-to-end design and development services are crafted to empower your business,<br/> enhance your digital presence, and drive growth. We blend smart strategy, modern technology, and <br/>user-focused design to elevate your brand and help you thrive in today’s competitive landscape.
              </p>
            </div>

            {servicesList.map((service, index) => (
              <div
                key={index}
                className={`w-5xl flex flex-row items-center h-130 justify-between ${service.bgColor} rounded-[20px] overflow-hidden shadow-lg mt-8 ml-28 transition-all duration-300`}
              >
                {/* Left Text Block */}
                <div className="w-1/2 p-12 flex flex-col gap-4">
                  <h3 className={`${service.color} text-lg uppercase font-bold tracking-wide`}>
                    {service.name}
                  </h3>
                  <h4 className="text-gray-900 text-4xl font-bold leading-tight">
                    {service.subheading}
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="/contact"
                    className="flex items-center gap-2 text-md text-neutral-800 font-bold uppercase tracking-wide hover:text-blue-600 transition-colors duration-200"
                  >
                    Get in touch
                    <span className="text-lg">➔</span>
                  </a>
                </div>

                {/* Right Image Block */}
                <div className="w-1/2 h-[520px] bg-[#E5E9F0] flex items-center justify-center rounded-2xl">
                  <img
                    src={service.image}
                    alt={`${service.name} Illustration`}
                    className="object-contain w-full h-full"
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
            <h2 className="text-blue-500 text-lg font-bold uppercase tracking-wider">
              ~ Industries ~
            </h2>
            <h1 className="text-gray-900 text-5xl font-bold mt-4">
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
    className="flex flex-row justify-between items-center p-3 gap-3 bg-white border-2 border-gray-200 rounded-2xl shadow-sm w-[300px] min-h-[80px] transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-md hover:border-blue-500"
  >
    <div className="flex flex-row items-center gap-3">
      <img
        src={item.image} 
        alt={`${item.title} Icon`}
        className="w-14 h-14 object-cover"
      />
      <div className="flex flex-col items-start">
        <span className={`text-sm font-bold uppercase tracking-wider ${item.labelColor}`}>
          {item.label}
        </span>
        <span className="text-gray-900 text-xl font-semibold">
          {item.title}
        </span>
      </div>
    </div>
  </div>
))}

            </div>
          </div>
      </section>

      {/* CTA Section */}
<section className="w-full flex flex-col items-center h-[620px] bg-blue-600">
  <div className="w-full max-w-7xl flex flex-row items-center justify-between gap-8">
    
    {/* Image First */}
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


    {/* Content Second (on the right now) */}
    <div className="w-1/2 text-white text-left px-8 pt-20 pb-20">
      <h2 className="text-5xl font-bold leading-tight">
        Ready to launch something amazing with Techno Vanam?
      </h2>
      <p className="text-lg mt-4">
        Our creative experts are here to design, develop, and deliver high-performing digital experiences tailored to your brand. Let’s build something great together.
      </p>
      <div className="pt-6 flex justify-start">
        <a href="/contact">
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
        </a>
      </div>
    </div>

  </div>
</section>

    </>
  );
};

export default Services;