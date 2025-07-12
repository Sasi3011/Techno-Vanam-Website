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
    <div className="flex flex-col items-center px-0 pt-16 pb-40 gap-[68px] w-full relative">
      {/* Header Section */}
      <div className="flex flex-col items-center px-6 gap-10 w-[1320px] max-w-[1320px] h-[328px]">
        <div className="flex flex-col items-center gap-2 relative h-18">
          <p className="text-[#2388FF] font-bold uppercase text-[16px] leading-[18px] tracking-[0.06em]">
            Products
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-start gap-x-[14px] relative w-full h-[78px]">
          <h1 className="text-[58px] font-bold text-[#19213D] leading-[68px] text-center">
            Products by
          </h1>
          <div className="relative w-[350.46px] h-[77.92px]">
            <img src="/placeholder.svg" alt="logo" className="absolute left-0 w-[77.92px] h-[77.92px]" />
            <h2 className="absolute left-[77.92px] top-[14px] text-[40px] font-black text-[#2F2F2F]">
              Techno Vanam
            </h2>
          </div>
        </div>
        <p className="text-center text-[#667097] text-[18px] leading-[30px] w-[910px]">
          At Techno Vanam, we don’t just create for clients—we build for ourselves too.
          Our digital products are crafted to enhance workflows, spark creativity, and
          solve real-world problems for designers, developers, and businesses alike.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-end items-center gap-4 p-[21px] bg-white border border-[#EBEFF6] shadow-md rounded-full w-[1272px] h-[115.5px]">
        <button
          onClick={handleLatestReleasesClick}
          className="flex items-center justify-center px-10 py-6 border-2 border-[#EBEFF6] bg-white shadow-md rounded-full text-[#868DA6] text-[18px] font-medium hover:bg-[#EBEFF6] hover:text-[#19213D] transition duration-300"
        >
          <span>Latest Releases</span>
        </button>
        <button
          onClick={handleWhatWeWorkingOnClick}
          className="flex items-center justify-center px-10 py-6 border-2 border-[#2388FF] bg-white shadow-lg rounded-full text-[#2388FF] text-[18px] font-medium hover:bg-[#2388FF] hover:text-white transition duration-300"
        >
          <span>What We’re Working On</span>
        </button>
      </div>

      {/* Product Card */}
      <div className="bg-[#F4F2FF] border border-[#B4CDF6] shadow-lg rounded-[32px] w-[1272px] h-[770px] flex items-center justify-between px-[64px]">
        <div className="flex flex-col gap-6 pt-[85.5px]">
          <h2 className="text-[#2388FF] text-[50px] font-bold leading-[18px]">ATHLIXIR</h2>
          <p className="text-[#3B4A68] text-[18px] leading-[30px] w-[647px]">
            Athlixir is currently in development — a groundbreaking platform built to empower
            50+ athlete communities across Tier-2 and Tier-3 regions in India and beyond. We're
            engineering a powerful ecosystem capable of analyzing 300,000+ performance data points,
            using advanced AI to enable smarter training decisions, real-time injury tracking,
            personalized growth plans, and verified recognition for emerging talent.
            Whether you're an aspiring athlete, coach, or organization, Athlixir is your intelligent
            companion for measurable improvement, safety, and career visibility — all in one place.
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-8 mt-8">
            <div className="flex gap-[79px]">
              <div className="flex flex-col gap-1 w-[214px]">
                <p className="text-[#19213D] font-bold text-[23.625px] leading-[36px]">50+</p>
                <p className="text-[#29BEFE] text-[18px]">Target athlete communities</p>
              </div>
              <div className="flex flex-col gap-1 w-[362px]">
                <p className="text-[#19213D] font-bold text-[23.625px] leading-[36px]">300,000+</p>
                <p className="text-[#29BEFE] text-[18px]">Projected performance insights powered by AI</p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col gap-1 w-[261px]">
                <p className="text-[#19213D] font-bold text-[23.625px] leading-[36px]">100%</p>
                <p className="text-[#29BEFE] text-[18px] leading-[20px]">
                  Focused on Unlocking Grassroots
                  Sports Potential
                </p>
              </div>
              <div className="flex flex-col gap-1 w-[362px]">
                <p className="text-[#19213D] font-bold text-[23.625px] leading-[36px]">1</p>
                <p className="text-[#29BEFE] text-[18px] leading-[20px]">
                  Unified Platform for Growth, Recognition & Performance
                </p>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="flex items-center gap-2 mt-[32px]">
            <p className="text-[#2388FF] text-[24px] font-bold uppercase tracking-[0.06em]">COMING SOON</p>
            <img src="/placeholder.svg" alt="coming soon icon" className="w-[22px] h-[22px]" />
          </div>
        </div>

        {/* Image placeholder */}
        <img
          src="/placeholder.svg"
          alt="App preview"
          className="w-[551px] h-[551px]"
        />
      </div>
    </div>
  );
}