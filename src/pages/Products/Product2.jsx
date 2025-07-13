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
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 pb-10 sm:pb-20 md:pb-40 gap-8 sm:gap-10 md:gap-[68px] w-full relative">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 w-full max-w-[1320px] min-h-[200px] sm:min-h-[328px]">
        <div className="flex flex-col items-center gap-2 relative">
          <p className="text-[#2388FF] font-bold uppercase text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6 md:leading-[18px] tracking-[0.06em]">
            Products
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-3 sm:gap-x-[14px] gap-y-4 sm:gap-y-0 text-center sm:text-left relative w-full min-h-[60px] sm:min-h-[78px]">
          <h1 className="text-3xl sm:text-4xl md:text-[58px] font-bold text-[#19213D] leading-8 sm:leading-10 md:leading-[68px]">
            Products by
          </h1>
          <div className="relative w-[200px] sm:w-[280px] md:w-[350.46px] h-[50px] sm:h-[60px] md:h-[77.92px]">
            <img
              src="/placeholder.svg"
              alt="logo"
              className="absolute left-0 w-[50px] sm:w-[60px] md:w-[77.92px] h-[50px] sm:h-[60px] md:h-[77.92px]"
            />
            <h2 className="absolute left-[52px] sm:left-[64px] md:left-[77.92px] top-2 sm:top-3 md:top-[14px] text-xl sm:text-2xl md:text-[40px] font-black text-[#2F2F2F]">
              Techno Vanam
            </h2>
          </div>
        </div>
        <p className="text-center text-[#667097] text-base sm:text-lg md:text-[18px] leading-6 sm:leading-7 md:leading-[30px] w-full max-w-[910px] px-4 sm:px-0">
          At Techno Vanam, we don’t just create for clients—we build for ourselves too.
          Our digital products are crafted to enhance workflows, spark creativity, and
          solve real-world problems for designers, developers, and businesses alike.
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-[1272px] flex flex-col sm:flex-row justify-center sm:justify-end gap-3 sm:gap-4 md:gap-[16px] bg-white sm:border sm:border-[#EBEFF6] sm:shadow-md sm:rounded-full px-4 sm:px-5 md:px-[21px] py-4 sm:py-5 md:py-[21px] min-h-[80px] sm:min-h-[115.5px]">
        <p className="hidden sm:block text-black text-lg sm:text-xl md:text-4xl font-semibold mt-2 sm:mt-3 md:mt-5 px-4 sm:px-6 text-center sm:text-left">
          What We’re Working On
        </p>
        <button
          onClick={handleLatestReleasesClick}
          className="flex items-center justify-center px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6 border-2 border-[#EBEFF6] bg-white shadow-md rounded-full text-[#868DA6] text-base sm:text-lg md:text-[18px] font-medium hover:bg-[#EBEFF6] hover:text-[#19213D] transition duration-300 w-full sm:w-auto"
        >
          <span>Latest Releases</span>
        </button>
        <button
          onClick={handleWhatWeWorkingOnClick}
          className="flex items-center justify-center px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6 border-2 border-[#2388FF] bg-white shadow-lg rounded-full text-[#2388FF] text-base sm:text-lg md:text-[18px] font-medium hover:bg-[#2388FF] hover:text-white transition duration-300 w-full sm:w-auto"
        >
          <span>What We’re Working On</span>
        </button>
      </div>

      {/* Product Card */}
      <div className="bg-[#F4F2FF] border border-[#B4CDF6] shadow-lg rounded-[24px] sm:rounded-[32px] w-full max-w-[1272px] flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 md:px-[64px] py-8 sm:py-10 md:pt-[85.5px] md:pb-[64px] min-h-[500px] sm:min-h-[600px] md:min-h-[770px] gap-6 md:gap-0">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-6 w-full md:w-[647px]">
          <h2 className="text-[#2388FF] text-2xl sm:text-3xl md:text-[50px] font-bold leading-7 sm:leading-8 md:leading-[48px]">
            ATHLIXIR
          </h2>
          <p className="text-[#3B4A68] text-base sm:text-lg md:text-[18px] leading-6 sm:leading-7 md:leading-[30px] w-full">
            Athlixir is currently in development — a groundbreaking platform built to empower
            23+ athlete communities across Tier-2 and Tier-3 regions in India and beyond. We're
            engineering a powerful ecosystem capable of analyzing 300,000+ performance data points,
            using advanced AI to enable smarter training decisions, real-time injury tracking,
            personalized growth plans, and verified recognition for emerging talent.
            Whether you're an aspiring athlete, coach, or organization, Athlixir is your intelligent
            companion for measurable improvement, safety, and career visibility — all in one place.
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-[79px]">
              <div className="flex flex-col gap-1 w-full sm:w-[214px]">
                <p className="text-[#19213D] font-bold text-lg sm:text-xl md:text-[23.625px] leading-6 sm:leading-7 md:leading-[36px]">
                  50+
                </p>
                <p className="text-[#29BEFE] text-base sm:text-lg md:text-[18px] leading-5 sm:leading-6 md:leading-[20px]">
                  Target athlete communities
                </p>
              </div>
              <div className="flex flex-col gap-1 w-full sm:w-[362px]">
                <p className="text-[#19213D] font-bold text-lg sm:text-xl md:text-[23.625px] leading-6 sm:leading-7 md:leading-[36px]">
                  300,000+
                </p>
                <p className="text-[#29BEFE] text-base sm:text-lg md:text-[18px] leading-5 sm:leading-6 md:leading-[20px]">
                  Projected performance insights powered by AI
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="flex flex-col gap-1 w-full sm:w-[261px]">
                <p className="text-[#19213D] font-bold text-lg sm:text-xl md:text-[23.625px] leading-6 sm:leading-7 md:leading-[36px]">
                  100%
                </p>
                <p className="text-[#29BEFE] text-base sm:text-lg md:text-[18px] leading-5 sm:leading-6 md:leading-[20px]">
                  Focused on Unlocking Grassroots Sports Potential
                </p>
              </div>
              <div className="flex flex-col gap-1 w-full sm:w-[362px]">
                <p className="text-[#19213D] font-bold text-lg sm:text-xl md:text-[23.625px] leading-6 sm:leading-7 md:leading-[36px]">
                  1
                </p>
                <p className="text-[#29BEFE] text-base sm:text-lg md:text-[18px] leading-5 sm:leading-6 md:leading-[20px]">
                  Unified Platform for Growth, Recognition & Performance
                </p>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="flex items-center gap-2 mt-6 sm:mt-8 md:mt-[32px]">
            <p className="text-[#2388FF] text-lg sm:text-xl md:text-[24px] font-bold uppercase tracking-[0.06em]">
              COMING SOON
            </p>
            <img
              src="/placeholder.svg"
              alt="coming soon icon"
              className="w-[18px] sm:w-[20px] md:w-[22px] h-[18px] sm:h-[20px] md:h-[22px]"
            />
          </div>
        </div>

        {/* Image placeholder */}
        <img
          src="/placeholder.svg"
          alt="App preview"
          className="w-full md:w-[400px] lg:w-[551px] h-[300px] sm:h-[400px] md:h-[551px] object-cover"
        />
      </div>
    </div>
  );
}