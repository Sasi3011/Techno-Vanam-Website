import React from "react";

const servicesList = [
  {
    name: "Web Design",
    color: "text-red-500",
    subheading: "We build impactful digital experiences",
    description:
      "We design stunning, responsive websites that elevate your online presence and create seamless experiences across all devices.",
  },
  {
    name: "UI/UX Design",
    color: "text-red-500",
    subheading: "Crafting intuitive user interfaces",
    description:
      "We create user-centered designs that enhance usability and engagement, ensuring delightful experiences for your audience.",
  },
  {
    name: "Development",
    color: "text-red-500",
    subheading: "Robust and scalable solutions",
    description:
      "We develop high-performance applications tailored to your business needs, using modern technologies for optimal results.",
  },
  {
    name: "Branding",
    color: "text-red-500",
    subheading: "Building your unique identity",
    description:
      "We craft compelling brand identities that resonate with your audience and strengthen your market presence.",
  },
];

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section className="w-full flex flex-col items-center py-4 sm:py-6 md:py-10 px-2 sm:px-4 md:px-6">
        <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-7xl flex flex-col items-center">
          <div className="w-full flex flex-col items-start gap-4 sm:gap-6">
            <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between">
              <div className="w-full md:w-1/2">
                <p className="text-blue-600 text-xs sm:text-sm md:text-lg font-semibold uppercase tracking-wider">
                  Services
                </p>
                <h2 className="text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mt-2 sm:mt-3 md:mt-4">
                  What we do
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-3 md:mt-4">
                  At Technovanam, our end-to-end design and development services are crafted to empower your business, enhance your digital presence, and drive growth. We blend smart strategy, modern
                  technology, and user-focused design to elevate your brand and help you thrive in today’s competitive landscape.
                </p>
              </div>
            </div>

            {servicesList.map((service, index) => (
              <div
                key={index}
                className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-7xl flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 bg-pink-200 rounded-lg sm:rounded-xl md:rounded-2xl min-h-[300px] sm:min-h-[340px] md:min-h-[380px] mt-4 sm:mt-6 md:mt-6 px-2 sm:px-4 md:px-8 shadow-lg"
              >
                <div className="w-full md:w-1/2 flex flex-col items-start p-4 sm:p-6 md:p-8 gap-2 sm:gap-4">
                  <h3 className={`${service.color} text-lg sm:text-xl md:text-xl font-bold`}>
                    {service.name}
                  </h3>
                  <h4 className="text-gray-900 text-2xl sm:text-3xl md:text-3xl font-bold">
                    {service.subheading}
                  </h4>
                  <p className="text-gray-500 text-sm sm:text-base md:text-base">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-900 text-xs sm:text-sm md:text-sm font-bold uppercase tracking-wider">
                      Get in touch
                    </span>
                    <svg
                      className="w-3 sm:w-4 md:w-4 h-3 sm:h-4 md:h-4 transform -scale-y-100"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3l5 5-5 5" stroke="#19213D" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>

                <div className="w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-80 bg-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                  <img
                    src="https://via.placeholder.com/534x596.png?text=Service+Image"
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
      <section className="w-full flex flex-col items-center py-4 sm:py-6 md:py-10 px-2 sm:px-4 md:px-6">
        <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-7xl flex flex-col items-center gap-4 sm:gap-6">
          <div className="text-center max-w-[90%] sm:max-w-xl md:max-w-2xl">
            <h2 className="text-blue-500 text-xs sm:text-sm md:text-sm font-bold uppercase tracking-wider">
              Industries
            </h2>
            <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 md:mt-4">
              We’re focused on
            </h1>
            <p className="text-gray-500 text-sm sm:text-base md:text-base mt-2 sm:mt-3 md:mt-4">
              Our team has worked with all kinds of companies, but we're especially good at helping the following industries.
            </p>
          </div>

          <div className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-center items-start gap-2 sm:gap-3 md:gap-4">
            {[
              {
                labelColor: "text-blue-500",
                label: "Web design for",
                title: "SaaS Companies",
                image: "https://via.placeholder.com/66",
              },
              {
                labelColor: "text-gray-400",
                label: "Web design for",
                title: "Startups",
                image: "https://via.placeholder.com/66",
              },
              {
                labelColor: "text-indigo-500",
                label: "Web design for",
                title: "Industries",
                image: "https://via.placeholder.com/66",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center p-3 sm:p-4 md:p-5 gap-2 sm:gap-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl md:rounded-xl shadow-md w-full sm:w-[calc(50%-0.5rem)] md:w-[358px] min-h-[80px] sm:min-h-[90px] md:min-h-[100px]"
              >
                <div className="flex flex-row items-center gap-2 sm:gap-3">
                  <img
                    src={item.image}
                    alt={`${item.title} Icon`}
                    className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <span className={`text-xs sm:text-sm md:text-sm font-bold uppercase tracking-wider ${item.labelColor}`}>
                      {item.label}
                    </span>
                    <span className="text-gray-900 text-lg sm:text-xl md:text-xl font-bold">
                      {item.title}
                    </span>
                  </div>
                </div>
                <svg
                  className="w-3 sm:w-4 md:w-4 h-3 sm:h-4 md:h-4 transform -scale-y-100"
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
      <section className="w-full flex flex-col items-center py-4 sm:py-6 md:py-10 px-2 sm:px-4 md:px-6 bg-blue-600">
        <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
          <div className="w-full md:w-1/2 text-white text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Ready to launch <br />
              something amazing <br />
              with Techno Vanam?
            </h2>
            <p className="text-sm sm:text-base md:text-base mt-2 sm:mt-3 md:mt-4">
              Our creative experts are here to design, develop, and deliver high-performing
              digital experiences tailored to your brand. Let’s build something great together.
            </p>
            <div className="pt-4 sm:pt-5 md:pt-6 flex justify-center md:justify-start">
              <button className="flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-3 bg-white text-blue-600 font-bold text-sm sm:text-base md:text-base rounded-full border shadow-md">
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#2388FF"
                  className="w-3 sm:w-4 md:w-4 h-3 sm:h-4 md:h-4 transform -scale-y-100"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-80">
            <img
              src="https://via.placeholder.com/500x500.png?text=Social+Media+Image"
              alt="Social Media"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
