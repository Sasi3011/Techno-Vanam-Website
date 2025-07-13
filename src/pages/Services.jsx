import React from "react";

const servicesList = [
  {
    name: "Web Design",
    color: "text-red-500",
    bgColor: "bg-red-100",
    subheading: "We build impactful digital experiences",
    description:
      "We design stunning, responsive websites that elevate your online presence and create seamless experiences across all devices.",
  },
  {
    name: "App Design",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    subheading: "We design mobile apps users love",
    description:
      "From wireframes to final UI, we design intuitive, attractive apps that enhance usability and connect deeply with your users.",
  },
  {
    name: "Web Development",
    color: "text-green-500",
    bgColor: "bg-green-100",
    subheading: "We develop fast & scalable digital platforms",
    description:
      "We build robust, SEO-friendly websites using modern frameworks — optimized for performance, flexibility, and long-term growth.",
  },
  {
    name: "Poster Design",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    subheading: "We create bold, high-impact poster designs",
    description:
      "Whether for digital or print, our posters grab attention, convey your message clearly, and strengthen brand communication.",
  },
  {
    name: "Logo Design",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    subheading: "We design unique logos that define your brand",
    description:
      "We craft timeless, versatile logos that reflect your identity, resonate with your audience, and stand out in any context.",
  },
];

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section className="w-full flex flex-col items-center py-10 px-4">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="w-full flex flex-col items-start gap-6">
            <div className="w-full">
              <p className="text-blue-600 text-base font-semibold uppercase tracking-wider">
                Services
              </p>
              <h2 className="text-gray-900 text-5xl font-bold leading-tight mt-3">
                What we do
              </h2>
              <p className="text-gray-500 mt-4 text-base">
                At Technovanam, our end-to-end design and development services are crafted to empower your business,
                <br />
                enhance your digital presence, and drive growth. We blend smart strategy, modern technology,
                <br />
                and user-focused design to elevate your brand and help you thrive in
                <br />
                today’s competitive landscape.
              </p>
            </div>

            {servicesList.map((service, index) => (
              <div
                key={index}
                className={`w-5xl flex flex-row items-center justify-center gap-6 ${service.bgColor} rounded-2xl min-h-[500px] mt-6 ml-30 shadow-lg`}
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

                <div className="w-1/2 h-130 bg-gray-200 rounded-2xl overflow-hidden">
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
      <section className="w-full flex flex-col items-center py-10 px-6">
        <div className="w-full max-w-7xl flex flex-col items-center gap-6">
          <div className="text-center max-w-2xl">
            <h2 className="text-blue-500 text-sm font-bold uppercase tracking-wider">
              ~ Industries ~
            </h2>
            <h1 className="text-gray-900 text-4xl font-bold mt-4">
              We’re focused on
            </h1>
            <p className="text-gray-500 text-base mt-4">
              Our team has worked with all kinds of companies, but we're especially
              good at helping the following industries.
            </p>
          </div>

          <div className="w-full flex flex-row flex-wrap justify-center items-start gap-4">
            {[
              {
                labelColor: "text-blue-500",
                label: "Web design for",
                title: "SaaS Companies",
                image: "https://via.placeholder.com/66",
              },
              {
                labelColor: "text-blue-500",
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
      <section className="w-full flex flex-col items-center py-10 px-6 bg-blue-600">
        <div className="w-full max-w-7xl flex flex-row items-center justify-between gap-8">
          <div className="w-1/2 text-white text-left">
            <h2 className="text-4xl font-bold leading-tight">
              Ready to launch <br />
              something amazing <br />
              with Techno Vanam?
            </h2>
            <p className="text-base mt-4">
              Our creative experts are here to design, develop, and deliver high-performing
              digital experiences tailored to your brand. Let’s build something great together.
            </p>
            <div className="pt-6 flex justify-start">
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold text-base rounded-full border shadow-md">
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
          <div className="w-1/2 h-80">
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
