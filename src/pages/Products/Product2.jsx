import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png"; // Import the logo image
import ComingSoonIcon from "../../assets/logo.png"; // Import the coming soon icon
import AppPreview from "../../assets/logo.png"; // Import the app preview image

export default function Products2() {
  const navigate = useNavigate();

  const handleLatestReleasesClick = () => {
    navigate("/product1"); // Navigate to Product1 page
  };

  const handleWhatWeWorkingOnClick = () => {
    navigate("/product2"); // Navigate to Product2 page
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 pb-10 sm:pb-20 md:pb-40 gap-8 sm:gap-10 md:gap-[68px] w-full relative">
      {/* Header Section */}
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
    {/* Latest Releases — now using previous hover style of "What We’re Working On" */}
    <button
      onClick={handleLatestReleasesClick}
      className="flex justify-center items-center px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 border border-[#EBEFF6] rounded-full shadow-sm text-[#868DA6] hover:bg-[#f2f4f8] hover:text-[#2F2F2F] transition duration-200 w-full sm:w-auto"
    >
      <span className="text-sm sm:text-base md:text-[16px] font-medium">
        🌐 Latest Releases
      </span>
    </button>

    {/* What We’re Working On — now using previous hover style of "Latest Releases" */}
    <button
      onClick={handleWhatWeWorkingOnClick}
      className="flex justify-center items-center px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 border border-[#2388FF] rounded-full shadow-sm text-[#2388FF] hover:bg-[#1f7ae0] hover:text-white transition duration-200 w-full sm:w-auto"
    >
      <span className="text-sm sm:text-base md:text-[16px] font-medium">
        🔒 What We’re Working On
      </span>
    </button>
  </div>
</div>

      {/* Product Card */}
<div className="bg-[#F4F2FF] border border-[#B4CDF6] shadow-lg rounded-[20px] sm:rounded-[28px] w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between px-5 sm:px-6 md:px-[48px] py-6 sm:py-8 md:pt-[70px] md:pb-[48px] min-h-[440px] sm:min-h-[530px] md:min-h-[690px] gap-6 md:gap-0">
  {/* Left Text Block */}
  <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full md:w-[600px]">
    <h2 className="text-[#2388FF] text-xl sm:text-2xl md:text-[36px] font-bold leading-7 sm:leading-8 md:leading-[42px]">
      ATHLIXIR
    </h2>
    <p className="text-[#3B4A68] text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6 md:leading-[26px] w-full">
      Athlixir is currently in development — a groundbreaking platform built to empower 50+ athlete communities across Tier-2 and Tier-3 regions in India and beyond. We're engineering a powerful ecosystem capable of analyzing 300,000+ performance data points, using advanced AI to enable smarter training decisions, real-time injury tracking, personalized growth plans, and verified recognition for emerging talent.<br/><br/>Whether you're an aspiring athlete, coach, or organization, Athlixir is your intelligent companion for measurable improvement, safety, and career visibility — all in one place.
    </p>

    {/* Highlights */}
    <div className="flex flex-col gap-6 sm:gap-7 mt-6 sm:mt-7">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-[60px]">
        <div className="flex flex-col gap-1 w-full sm:w-[200px]">
          <p className="text-[#19213D] font-bold text-base sm:text-lg md:text-[20px] leading-6 md:leading-[30px]">
            50+
          </p>
          <p className="text-[#29BEFE] text-sm sm:text-base md:text-[16px] leading-5 md:leading-[18px]">
            Target athlete communities
          </p>
        </div>
        <div className="flex flex-col gap-1 w-full sm:w-[320px]">
          <p className="text-[#19213D] font-bold text-base sm:text-lg md:text-[20px] leading-6 md:leading-[30px]">
            300,000+
          </p>
          <p className="text-[#29BEFE] text-sm sm:text-base md:text-[16px] leading-5 md:leading-[18px]">
            Projected performance insights powered by AI
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="flex flex-col gap-1 w-full sm:w-[240px]">
          <p className="text-[#19213D] font-bold text-base sm:text-lg md:text-[20px] leading-6 md:leading-[30px]">
            100%
          </p>
          <p className="text-[#29BEFE] text-sm sm:text-base md:text-[16px] leading-5 md:leading-[18px]">
            Focused on Unlocking Grassroots Sports Potential
          </p>
        </div>
        <div className="flex flex-col gap-1 w-full sm:w-[320px]">
          <p className="text-[#19213D] font-bold text-base sm:text-lg md:text-[20px] leading-6 md:leading-[30px]">
            1
          </p>
          <p className="text-[#29BEFE] text-sm sm:text-base md:text-[16px] leading-5 md:leading-[18px]">
            Unified Platform for Growth, Recognition & Performance
          </p>
        </div>
      </div>
    </div>

    {/* Coming Soon */}
    <div className="flex items-center gap-2 mt-6 sm:mt-7 md:mt-[28px]">
      <p className="text-[#2388FF] text-base sm:text-lg md:text-[20px] font-bold uppercase tracking-[0.06em]">
        COMING SOON
      </p>
      <img
        src={ComingSoonIcon}
        alt="coming soon icon"
        className="w-[16px] sm:w-[18px] md:w-[20px] h-[16px] sm:h-[18px] md:h-[20px]"
      />
    </div>
  </div>

  {/* Right Image */}
  <img
    src={AppPreview}
    alt="App preview"
    className="w-full md:w-[360px] lg:w-[500px] h-[250px] sm:h-[330px] md:h-[460px] object-cover rounded-[20px] sm:rounded-[28px]"
  />
</div>
    </div>
    
  );
}