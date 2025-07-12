import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product1 = () => {
  const navigate = useNavigate();

  const handleLatestReleasesClick = () => {
    navigate('/product1');  // Navigate to the Product1 page
  };

  const handleWhatWeWorkingOnClick = () => {
    navigate('/product2');  // Navigate to Product2 page
  };

  return (
    <div className="flex flex-col items-center pt-16 sm:pt-20 md:pt-[64px] pb-4 sm:pb-6 md:pb-[30px] gap-4 sm:gap-6 md:gap-[68px]">
      
      {/* Section 1: Header */}
      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1320px] flex flex-col items-center px-2 sm:px-4 md:px-6 gap-2 sm:gap-4 md:gap-[40px]">
        
        {/* Label */}
        <div className="text-[#2388FF] uppercase text-xs sm:text-sm md:text-[16px] font-bold tracking-[0.06em]">
          Products
        </div>

        {/* Heading + Logo */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 md:gap-x-[14px]">
          <div className="text-3xl sm:text-4xl md:text-[58px] leading-tight md:leading-[68px] font-bold text-[#19213D]">
            Products by
          </div>

          {/* Logo + Text */}
          <div className="relative w-[200px] sm:w-[250px] md:w-[350.46px] h-[50px] sm:h-[60px] md:h-[77.92px]">
            <img
              src="https://via.placeholder.com/78"
              alt="Logo"
              className="absolute w-[50px] sm:w-[60px] md:w-[77.92px] h-[50px] sm:h-[60px] md:h-[77.92px] left-0 top-0"
            />
            <div className="absolute left-[55px] sm:left-[65px] md:left-[78px] top-0 sm:top-[5px] md:top-[14px] text-2xl sm:text-3xl md:text-[40px] font-black text-[#2F2F2F]">
              Techno Vanam
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-2 sm:px-4 md:px-6 w-full max-w-[95%] sm:max-w-[910px]">
          <p className="text-center text-[#667097] text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[30px]">
            At Techno Vanam, we don’t just create for clients—we build for ourselves too.
            Our digital products are crafted to enhance workflows, spark creativity, and solve real-world
            problems for designers, developers, and businesses alike.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1000px] h-auto flex justify-end px-1 sm:px-2 md:px-[21px] py-1 sm:py-2 md:py-[21px] gap-1 sm:gap-2 md:gap-[16px] bg-white border border-[#EBEFF6] shadow-md rounded-full">
        <p className="text-black text-4xl sm:text-base md:text-2xl  font-semibold mt-5 px-6">What We’re Working On</p>
        {/* Latest Releases */}
        <button
          onClick={handleLatestReleasesClick}
          className="flex justify-center items-center px-3 sm:px-4 md:px-[40px] py-2 sm:py-3 md:py-[26px] border-2 border-[#2388FF] rounded-full shadow-md hover:bg-[#2388FF] hover:text-white transition duration-300"
        >
          <span className="text-[#2388FF] text-sm sm:text-base md:text-[18px] font-medium">🌐 Latest Releases</span>
        </button>

        {/* What We’re Working On */}
        <button
          onClick={handleWhatWeWorkingOnClick}
          className="flex justify-center items-center px-3 sm:px-4 md:px-[40px] py-2 sm:py-3 md:py-[26px] border-2 border-[#EBEFF6] rounded-full shadow-md hover:bg-[#EBEFF6] hover:text-[#19213D] transition duration-300"
        >
          <span className="text-[#868DA6] text-sm sm:text-base md:text-[18px] font-medium">🔒 What We’re Working On</span>
        </button>
      </div>

      {/* In Progress Section */}
      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1272px] flex flex-col md:flex-row items-center justify-between bg-[#F4F2FF] border border-[#B4CDF6] shadow-lg rounded-lg sm:rounded-xl md:rounded-[32px] p-2 sm:p-4 md:p-[60px] relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[416px]">
        
        {/* Left Text Block */}
        <div className="flex flex-col gap-2 sm:gap-4 md:gap-[33px] w-full md:w-1/2">
          
          {/* Title */}
          <h2 className="text-[#2388FF] text-xl sm:text-2xl md:text-3xl lg:text-[50px] font-bold leading-tight md:leading-[18px]">
            In Progress
          </h2>

          {/* Description */}
          <p className="text-[#3B4A68] text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[30px]">
            We’re currently building powerful solutions behind the scenes.
            While we haven’t launched any products yet, exciting things are on the way —
            starting with Athlixir, our AI-powered platform for athlete performance and development.
          </p>

          {/* CTA */}
          <div className="text-[#2388FF] text-sm sm:text-base md:text-lg lg:text-[24px] font-bold uppercase tracking-widest">
            Stay tuned — the journey has just begun.
          </div>
        </div>

        {/* Right Image Block */}
        <div className="w-full md:w-1/2 mt-2 sm:mt-4 md:mt-0">
          <img
            src="https://via.placeholder.com/666x416"
            alt="Startup Illustration"
            className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[416px] object-cover rounded-lg sm:rounded-xl md:rounded-[32px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Product1;