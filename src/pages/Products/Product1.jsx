import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product1 = () => {
  const navigate = useNavigate();

  const handleLatestReleasesClick = () => {
    navigate('/product1'); // Navigate to the Product1 page
  };

  const handleWhatWeWorkingOnClick = () => {
    navigate('/product2'); // Navigate to Product2 page
  };

  return (
    <div className="flex flex-col items-center pt-8 sm:pt-12 md:pt-[64px] pb-6 sm:pb-8 md:pb-[30px] gap-8 sm:gap-10 md:gap-[68px] px-4 sm:px-6 lg:px-8">
      {/* Section 1: Header */}
      <div className="w-full max-w-[1320px] flex flex-col items-center gap-6 sm:gap-8 md:gap-[40px]">
        {/* Label */}
        <div className="text-[#2388FF] uppercase text-sm sm:text-base md:text-[16px] font-bold tracking-[0.06em]">
          Products
        </div>

        {/* Heading + Logo */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-x-3 sm:gap-x-[14px] gap-y-4 sm:gap-y-0 text-center sm:text-left">
          <div className="text-3xl sm:text-4xl md:text-[58px] leading-8 sm:leading-10 md:leading-[68px] font-bold text-[#19213D]">
            Products by
          </div>

          {/* Logo + Text */}
          <div className="relative w-[200px] sm:w-[280px] md:w-[350.46px] h-[50px] sm:h-[60px] md:h-[77.92px]">
            <img
              src="https://via.placeholder.com/78"
              alt="Logo"
              className="absolute w-[50px] sm:w-[60px] md:w-[77.92px] h-[50px] sm:h-[60px] md:h-[77.92px] left-0 top-0"
            />
            <div className="absolute left-[52px] sm:left-[64px] md:left-[78px] top-2 sm:top-3 md:top-[14px] text-xl sm:text-2xl md:text-[40px] font-black text-[#2F2F2F]">
              Techno Vanam
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-4 sm:px-6 w-full max-w-[910px]">
          <p className="text-center text-[#667097] text-base sm:text-lg md:text-[18px] leading-6 sm:leading-7 md:leading-[30px]">
            At Techno Vanam, we don’t just create for clients—we build for ourselves too.
            Our digital products are crafted to enhance workflows, spark creativity, and solve real-world
            problems for designers, developers, and businesses alike.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-[1000px] h-auto flex flex-col sm:flex-row justify-center sm:justify-end gap-3 sm:gap-4 md:gap-[16px] bg-white sm:border sm:border-[#EBEFF6] sm:shadow-md sm:rounded-full px-4 sm:px-5 md:px-[21px] py-4 sm:py-5 md:py-[21px]">
        <p className="hidden sm:block text-black text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-5 px-4 sm:px-6 text-center sm:text-left">
          What We’re Working On
        </p>
        {/* Latest Releases */}
        <button
          onClick={handleLatestReleasesClick}
          className="flex justify-center items-center px-4 sm:px-6 md:px-[40px] py-3 sm:py-4 md:py-[26px] border-2 border-[#2388FF] rounded-full shadow-md hover:bg-[#2388FF] hover:text-white transition duration-300 w-full sm:w-auto"
        >
          <span className="text-[#2388FF] text-base sm:text-lg md:text-[18px] font-medium hover:text-white">
            🌐 Latest Releases
          </span>
        </button>

        {/* What We’re Working On */}
        <button
          onClick={handleWhatWeWorkingOnClick}
          className="flex justify-center items-center px-4 sm:px-6 md:px-[40px] py-3 sm:py-4 md:py-[26px] border-2 border-[#EBEFF6] rounded-full shadow-md hover:bg-[#EBEFF6] hover:text-[#19213D] transition duration-300 w-full sm:w-auto"
        >
          <span className="text-[#868DA6] text-base sm:text-lg md:text-[18px] font-medium hover:text-[#2F2F2F]">
            🔒 What We’re Working On
          </span>
        </button>
      </div>

      {/* In Progress Section */}
      <div className="w-full max-w-[1272px] flex flex-col md:flex-row items-center justify-between bg-[#F4F2FF] border border-[#B4CDF6] shadow-lg rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-[60px] min-h-[300px] sm:min-h-[350px] md:min-h-[416px]">
        {/* Left Text Block */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-[33px] w-full md:w-1/2 mb-6 md:mb-0">
          {/* Title */}
          <h2 className="text-[#2388FF] text-2xl sm:text-3xl md:text-[50px] font-bold leading-7 sm:leading-8 md:leading-[48px]">
            In Progress
          </h2>

          {/* Description */}
          <p className="text-[#3B4A68] text-base sm:text-lg md:text-[18px] leading-6 sm:leading-7 md:leading-[30px]">
            We’re currently building powerful solutions behind the scenes.
            While we haven’t launched any products yet, exciting things are on the way —
            starting with Athlixir, our AI-powered platform for athlete performance and development.
          </p>

          {/* CTA */}
          <div className="text-[#2388FF] text-lg sm:text-xl md:text-[24px] font-bold uppercase tracking-widest">
            Stay tuned — the journey has just begun.
          </div>
        </div>

        {/* Right Image Block */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/666x416"
            alt="Startup Illustration"
            className="w-full h-[200px] sm:h-[300px] md:h-[416px] object-cover rounded-[24px] sm:rounded-[32px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Product1;