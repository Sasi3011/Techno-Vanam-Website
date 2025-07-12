import React from "react";
import { useNavigate } from "react-router-dom";

export default function Products2() {
  const navigate = useNavigate();

  const handleLatestReleasesClick = () => {
    navigate("/product1"); // Navigate to Product1 page
  };

  const handleWhatWeWorkingOnClick = () => {
    navigate("/product2"); // Navigate to Product2 page
  };

  return (
    <div className="flex flex-col items-center px-0 pt-4 sm:pt-8 md:pt-16 pb-10 sm:pb-20 md:pb-40 gap-4 sm:gap-6 md:gap-[68px] w-full relative">
      {/* Header Section */}
      <div className="flex flex-col items-center px-2 sm:px-4 md:px-6 gap-4 sm:gap-6 md:gap-10 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1320px] min-h-[200px] sm:min-h-[250px] md:min-h-[328px]">
        <div className="flex flex-col items-center gap-1 sm:gap-2 relative h-12 sm:h-14 md:h-18">
          <p className="text-[#2388FF] font-bold uppercase text-xs sm:text-sm md:text-[16px] leading-[18px] tracking-[0.06em]">
            Products
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-start gap-x-1 sm:gap-x-2 md:gap-x-[14px] relative w-full min-h-[50px] sm:min-h-[60px] md:min-h-[78px]">
          <h1 className="text-3xl sm:text-4xl md:text-[58px] font-bold text-[#19213D] leading-tight md:leading-[68px] text-center">
            Products by
          </h1>
          <div className="relative w-[200px] sm:w-[250px] md:w-[350.46px] h-[50px] sm:h-[60px] md:h-[77.92px]">
            <img src="/placeholder.svg" alt="logo" className="absolute left-0 w-[50px] sm:w-[60px] md:w-[77.92px] h-[50px] sm:h-[60px] md:h-[77.92px]" />
            <h2 className="absolute left-[55px] sm:left-[65px] md:left-[77.92px] top-0 sm:top-[5px] md:top-[14px] text-2xl sm:text-3xl md:text-[40px] font-black text-[#2F2F2F]">
              Techno Vanam
            </h2>
          </div>
        </div>
        <p className="text-center text-[#667097] text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[30px] w-full max-w-[95%] sm:max-w-[910px]">
          At Techno Vanam, we don’t just create for clients—we build for ourselves too.
          Our digital products are crafted to enhance workflows, spark creativity, and
          solve real-world problems for designers, developers, and businesses alike.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row justify-end items-center gap-2 sm:gap-4 p-2 sm:p-3 md:p-[21px] bg-white border border-[#EBEFF6] shadow-md rounded-full w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1272px] min-h-[80px] sm:min-h-[100px] md:min-h-[115.5px]">
        <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold mt-1 sm:mt-2 md:mt-5 px-2 sm:px-4 md:px-6">What We’re Working On</p>
        <button
          onClick={handleLatestReleasesClick}
          className="flex items-center justify-center px-4 sm:px-6 md:px-10 py-2 sm:py-4 md:py-6 border-2 border-[#EBEFF6] bg-white shadow-md rounded-full text-[#868DA6] text-sm sm:text-base md:text-[18px] font-medium hover:bg-[#EBEFF6] hover:text-[#19213D] transition duration-300"
        >
          <span>Latest Releases</span>
        </button>
        <button
          onClick={handleWhatWeWorkingOnClick}
          className="flex items-center justify-center px-4 sm:px-6 md:px-10 py-2 sm:py-4 md:py-6 border-2 border-[#2388FF] bg-white shadow-lg rounded-full text-[#2388FF] text-sm sm:text-base md:text-[18px] font-medium hover:bg-[#2388FF] hover:text-white transition duration-300"
        >
          <span>What We’re Working On</span>
        </button>
      </div>

      {/* Product Card */}
      <div className="bg-[#F4F2FF] border border-[#B4CDF6] shadow-lg rounded-lg sm:rounded-xl md:rounded-[32px] w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1272px] min-h-[500px] sm:min-h-[600px] md:min-h-[770px] flex items-center justify-between px-4 sm:px-6 md:px-[64px]">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 pt-10 sm:pt-20 md:pt-[85.5px]">
          <h2 className="text-[#2388FF] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold leading-tight md:leading-[18px]">ATHLIXIR</h2>
          <p className="text-[#3B4A68] text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[30px] w-full md:w-[647px]">
            Athlixir is currently in development — a groundbreaking platform built to empower
            23+ athlete communities across Tier-2 and Tier-3 regions in India and beyond. We're
            engineering a powerful ecosystem capable of analyzing 300,000+ performance data points,
            using advanced AI to enable smarter training decisions, real-time injury tracking,
            personalized growth plans, and verified recognition for emerging talent.
            Whether you're an aspiring athlete, coach, or organization, Athlixir is your intelligent
            companion for measurable improvement, safety, and career visibility — all in one place.
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[79px]">
              <div className="flex flex-col gap-1 w-full sm:w-[214px]">
                <p className="text-[#19213D] font-bold text-lg sm:text-xl md:text-[23.625px] leading-[36px]">50+</p>
                <p className="text-[#29BEFE] text-sm sm:text-base md:text-[18px]">Target athlete communities</p>
              </div>
              <div className="flex flex-col gap-1 w-full sm:w-[362px]">
                <p className="text-[#19213D] font-bold text-lg sm:text-xl md:text-[23.625px] leading-[36px]">300,000+</p>
                <p className="text-[#29BEFE] text-sm sm:text-base md:text-[18px]">Projected performance insights powered by AI</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
              <div className="flex flex-col gap-1 w-full sm:w-[261px]">
                <p className="text-[#19213D] font-bold text-lg sm:text-xl md:text-[23.625px] leading-[36px]">100%</p>
                <p className="text-[#29BEFE] text-sm sm:text-base md:text-[18px] leading-[20px]">
                  Focused on Unlocking Grassroots
                  Sports Potential
                </p>
              </div>
              <div className="flex flex-col gap-1 w-full sm:w-[362px]">
                <p className="text-[#19213D] font-bold text-lg sm:text-xl md:text-[23.625px] leading-[36px]">1</p>
                <p className="text-[#29BEFE] text-sm sm:text-base md:text-[18px] leading-[20px]">
                  Unified Platform for Growth, Recognition & Performance
                </p>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="flex items-center gap-1 sm:gap-2 mt-4 sm:mt-6 md:mt-[32px]">
            <p className="text-[#2388FF] text-lg sm:text-xl md:text-[24px] font-bold uppercase tracking-[0.06em]">COMING SOON</p>
            <img src="/placeholder.svg" alt="coming soon icon" className="w-[16px] sm:w-[18px] md:w-[22px] h-[16px] sm:h-[18px] md:h-[22px]" />
          </div>
        </div>

        {/* Image placeholder */}
        <img
          src="/placeholder.svg"
          alt="App preview"
          className="w-[300px] sm:w-[400px] md:w-[551px] h-[300px] sm:h-[400px] md:h-[551px]"
        />
      </div>
    </div>
  );
}