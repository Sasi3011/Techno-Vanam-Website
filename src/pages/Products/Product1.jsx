import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import StartupIllustration from "../../assets/Home Page/Athlixir.png";// Import the startup illustration image

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
        <div className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-600 font-semibold uppercase">
          ~ Products ~
        </div>

        {/* Heading + Logo */}
<div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2 sm:gap-3 text-gray-900 font-bold">
  {/* Products by: top in mobile, inline in sm+ */}
  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
    Products by
  </span>

  {/* Logo + Techno Vanam */}
  <div className="flex items-center gap-2">
    <img
      src={Logo}
      alt="Logo"
      className="w-[35px] sm:w-[45px] md:w-[63px] h-[35px] sm:h-[45px] md:h-[63px] object-contain"
    />
    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl whitespace-nowrap">
      Techno Vanam
    </span>
  </div>
</div>





        {/* Description */}
        <p className="text-center text-[#667097] text-base sm:text-lg md:text-[18px] leading-[1.6] line-clamp-2">
  At Techno Vanam, we don’t just create for clients—we build for ourselves too. Our digital products are crafted to enhance workflows, spark creativity, and solve real-world problems for designers, developers, and businesses alike.
</p>

      </div>

      {/* Tabs */}
<div className="w-full max-w-[1250px] h-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-[16px] bg-white sm:border sm:border-[#EBEFF6] sm:shadow-md sm:rounded-full px-4 sm:px-5 md:px-[21px] py-2 sm:py-3 md:py-3">
  <p className="hidden sm:block text-black text-base sm:text-lg md:text-xl font-semibold px-4 sm:px-6 text-left w-full sm:w-auto">
    What We’re Working On
  </p>

  <div className="flex gap-3 sm:gap-4 md:gap-[16px] w-full sm:w-auto justify-end">
    {/* Latest Releases */}
    <button
      onClick={handleLatestReleasesClick}
      className="flex justify-center items-center px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 border border-[#2388FF] rounded-full shadow-sm text-[#2388FF] hover:bg-[#1f7ae0] hover:text-white transition duration-200 w-full sm:w-auto"
    >
      <span className="text-sm sm:text-base md:text-[16px] font-medium">
        🌐 Latest Releases
      </span>
    </button>

    {/* What We’re Working On */}
    <button
      onClick={handleWhatWeWorkingOnClick}
      className="flex justify-center items-center px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 border border-[#EBEFF6] rounded-full shadow-sm text-[#868DA6] hover:bg-[#f2f4f8] hover:text-[#2F2F2F] transition duration-200 w-full sm:w-auto"
    >
      <span className="text-sm sm:text-base md:text-[16px] font-medium">
        🔒 What We’re Working On
      </span>
    </button>
  </div>
</div>


  

      {/* In Progress Section */}
      <div className="w-full max-w-[1266px] flex flex-col md:flex-row items-center justify-between bg-[#F4F2FF] border border-[#B4CDF6] shadow-lg rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-[60px] min-h-[294px] sm:min-h-[344px] md:min-h-[410px]">
  {/* Left Text Block */}
  <div className="flex flex-col gap-4 sm:gap-6 md:gap-[33px] w-full md:w-1/2 mb-6 md:mb-0">
    {/* Title */}
    <h2 className="text-[#2388FF] text-xl sm:text-2xl md:text-[40px] font-bold leading-7 sm:leading-8 md:leading-[48px]">
      In Progress
    </h2>

    {/* Description */}
    <p className="text-[#3B4A68] text-base sm:text-lg md:text-[16px] leading-6 sm:leading-7 md:leading-[30px]">
      We’re currently building powerful solutions behind the scenes.
      While we haven’t launched any products yet, exciting things are on the way — 
      starting with Athlixir, our AI-powered platform for athlete performance and development.
    </p>

    {/* CTA */}
    <div className="text-[#2388FF] text-md sm:text-lg md:text-[20px] font-bold uppercase ">
      Stay tuned — the journey has just begun.
    </div>
  </div>

  {/* Right Image Block */}
  <div className="w-full md:w-1/2">
    <img
      src={StartupIllustration}
      alt="Startup Illustration"
      className="w-full h-[194px] sm:h-[294px] md:h-[410px] object-cover rounded-[24px] sm:rounded-[32px]"
    />
  </div>
</div>

    </div>
  );
};

export default Product1;