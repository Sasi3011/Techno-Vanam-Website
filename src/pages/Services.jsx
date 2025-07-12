import React from "react";

const servicesList = [
  {
    name: "Web Design",
    color: "text-[#FF2D46]",
    subheading: "We build impactful digital experiences",
    description:
      "We design stunning, responsive websites that elevate your online presence and create seamless experiences across all devices.",
  },
  {
    name: "UI/UX Design",
    color: "text-[#FF2D46]",
    subheading: "Crafting intuitive user interfaces",
    description:
      "We create user-centered designs that enhance usability and engagement, ensuring delightful experiences for your audience.",
  },
  {
    name: "Development",
    color: "text-[#FF2D46]",
    subheading: "Robust and scalable solutions",
    description:
      "We develop high-performance applications tailored to your business needs, using modern technologies for optimal results.",
  },
  {
    name: "Branding",
    color: "text-[#FF2D46]",
    subheading: "Building your unique identity",
    description:
      "We craft compelling brand identities that resonate with your audience and strengthen your market presence.",
  },
];

const Services = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center py-4 sm:py-6 md:py-8 px-4 sm:px-6">
        <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-4xl lg:max-w-5xl xl:max-w-[1320px] flex flex-col items-center">
          <div className="w-full max-w-[95%] md:max-w-[1068px] flex flex-col items-start gap-6 md:gap-8">
            {/* Header */}
            <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between">
              <div className="w-full md:w-[480px]">
                {/* SERVICES */}
                <p className="text-[#2388FF] text-xs sm:text-sm md:text-base font-bold leading-tight tracking-[0.06em] uppercase">
                  Services
                </p>
                {/* WHAT WE DO */}
                <h2 className="text-[#19213D] text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold leading-tight mt-2 sm:mt-4">
                  What we do
                </h2>
                {/* Description */}
                <p className="text-[#667097] text-sm sm:text-base md:text-lg font-normal leading-relaxed mt-3 sm:mt-4 md:mt-6 max-w-[941px]">
                  At Technovanam, our end-to-end design and development services are crafted to empower your business, enhance your digital
                  presence, and drive growth. We blend smart strategy, modern
                  technology, and user-focused design to elevate your brand and
                  help you thrive in today’s competitive landscape.
                </p>
              </div>
            </div>

            {/* Cards */}
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="w-full flex flex-col md:flex-row items-center gap-4 sm:gap-5 md:gap-[21.37px] bg-[#FFD6DC] rounded-2xl sm:rounded-3xl md:rounded-[32px] min-h-[320px] sm:min-h-[400px] md:min-h-[480px] mt-6 md:mt-8"
              >
                {/* Left Text Block */}
                <div className="w-full md:w-[512.64px] flex flex-col items-start p-6 sm:p-8 md:p-[48px] gap-2 md:gap-4">
                  {/* Service Heading */}
                  <div className="pb-3 md:pb-[18px]">
                    <h3 className={`${service.color} text-lg sm:text-xl md:text-[22px] font-bold leading-tight`}>
                      {service.name}
                    </h3>
                  </div>

                  {/* Main Subheading */}
                  <div className="pb-2">
                    <h4 className="text-[#19213D] text-2xl sm:text-3xl md:text-[36px] font-bold leading-tight md:leading-[46px] max-w-[397.49px]">
                      {service.subheading}
                    </h4>
                  </div>

                  {/* Description */}
                  <div className="pb-2">
                    <p className="text-[#667097] text-sm sm:text-base md:text-lg font-normal leading-relaxed md:leading-[30px] max-w-[386.77px]">
                      {service.description}
                    </p>
                  </div>

                  {/* Get in Touch */}
                  <div className="flex items-center gap-1">
                    <span className="text-[#19213D] text-xs sm:text-sm md:text-base font-bold leading-tight tracking-[0.06em] uppercase">
                      Get in touch
                    </span>
                    <svg
                      className="w-3 sm:w-4 md:w-[15.76px] h-3 sm:h-4 md:h-[13.99px] transform -scale-y-100"
                      viewBox="0 0 16 16"
                      fill="#19213D"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3l5 5-5 5" stroke="#19213D" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>

                {/* Right Image Block */}
                <div className="w-full md:w-[533.99px] h-[200px] sm:h-[300px] md:h-[596.22px] bg-[#E5E9F0] rounded-2xl sm:rounded-3xl md:rounded-[32px] overflow-hidden">
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

      <section className="w-full flex flex-col items-center py-4 sm:py-6 md:py-8 px-4 sm:px-6">
        <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-4xl lg:max-w-5xl xl:max-w-[1320px] flex flex-col items-center gap-6 md:gap-8">
          <div className="w-full max-w-[95%] md:max-w-[620px] flex flex-col items-center">
            <h2 className="text-[#2388FF] text-xs sm:text-sm md:text-base font-bold leading-tight uppercase tracking-[0.06em] text-center">
              Industries
            </h2>
            <h1 className="text-[#19213D] text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold leading-tight mt-4 sm:mt-6 md:mt-8 max-w-[458px] text-center">
              We’re focused on
            </h1>
            <p className="text-[#667097] text-sm sm:text-base md:text-lg leading-relaxed md:leading-[30px] mt-4 sm:mt-6 md:mt-8 max-w-[543px] text-center">
              Our team has worked with all kinds of companies, but we're especially good at helping the following industries.
            </p>
          </div>

          <div className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-center items-start gap-3 sm:gap-4 md:gap-[18px] max-w-[1110px]">
            {[
              {
                labelColor: "text-[#5A96FF]",
                label: "Web design for",
                title: "SaaS Companies",
                image: "https://via.placeholder.com/66",
              },
              {
                labelColor: "text-[#868DA6]",
                label: "Web design for",
                title: "Startups",
                image: "https://via.placeholder.com/66",
              },
              {
                labelColor: "text-[#6369FF]",
                label: "Web design for",
                title: "Industries",
                image: "https://via.placeholder.com/66",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center p-4 sm:p-5 md:p-[21px] gap-4 sm:gap-6 md:gap-[32px] bg-white border border-[#E9EAEF] rounded-lg sm:rounded-xl md:rounded-[18px] shadow-md w-full sm:w-[calc(50%-0.5rem)] md:w-[358px] min-h-[80px] sm:min-h-[100px] md:h-[108.33px]"
              >
                <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-[12px]">
                  <img
                    src={item.image}
                    alt={`${item.title} Icon`}
                    className="w-10 sm:w-12 md:w-[66px] h-10 sm:h-12 md:h-[66.33px] object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <span className={`text-xs sm:text-sm md:text-base font-bold uppercase leading-tight tracking-[0.06em] ${item.labelColor}`}>
                      {item.label}
                    </span>
                    <span className="text-[#19213D] text-base sm:text-lg md:text-[24px] font-bold leading-tight md:leading-[34px]">
                      {item.title}
                    </span>
                  </div>
                </div>
                <svg
                  className="w-3 sm:w-4 md:w-[16.02px] h-3 sm:h-4 md:h-[16px] transform -scale-y-100"
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

      <section className="w-full flex flex-col items-center py-4 sm:py-6 md:py-8 px-4 sm:px-6 bg-[#0B85FF]">
        <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-4xl lg:max-w-5xl xl:max-w-[1320px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Text Content */}
          <div className="w-full md:w-[499px] flex flex-col items-start gap-4 md:gap-[18px]">
            {/* Heading */}
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight md:leading-[58px]">
              Ready to launch <br />
              something amazing <br />
              with Techno Vanam?
            </h2>
            {/* Paragraph */}
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed md:leading-[30px]">
              Our creative experts are here to design, develop, and deliver high-performing
              digital experiences tailored to your brand. Let’s build something great together.
            </p>
            {/* Button */}
            <div className="pt-4 sm:pt-6 md:pt-[30px] pb-2 md:pb-[11px]">
              <button className="flex flex-row items-center gap-1 px-6 sm:px-8 md:px-[39px] py-3 sm:py-4 md:py-[27px] bg-white text-[#2388FF] font-bold text-sm sm:text-base md:text-[18px] leading-tight md:leading-[20px] rounded-full border border-white shadow-md">
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#2388FF"
                  className="w-3 sm:w-4 md:w-[14.82px] h-3 sm:h-4 md:h-[14.01px] transform -scale-y-100"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[500px] h-[200px] sm:h-[300px] md:h-[500px]">
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
