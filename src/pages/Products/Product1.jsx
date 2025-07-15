import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import StartupIllustration from "../../assets/poster.png";

const Product1 = () => {
  const navigate = useNavigate();

  const handleLatestReleasesClick = () => {
    navigate('/product1');
  };

  const handleWhatWeWorkingOnClick = () => {
    navigate('/product2');
  };

  return (
    <div className="flex flex-col items-center pt-[64px] pb-[30px] gap-[68px] px-8 min-h-screen">
      {/* Section 1: Header */}
      <div className="w-full max-w-[1320px] flex flex-col items-center gap-[40px]">
        {/* Label */}
        <div className="text-base text-blue-600 font-semibold uppercase">
          ~ Products ~
        </div>

        {/* Heading + Logo */}
        <div className="flex items-center justify-center text-center text-gray-900 font-bold">
          <span className="text-4xl">
            Products by
          </span>
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Logo"
              className="w-[63px] h-[63px] object-contain"
            />
            <span className="text-4xl whitespace-nowrap">
              Techno Vanam
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-[#667097] text-[18px] leading-[1.6] max-w-3xl">
          At Techno Vanam, we don’t just create for clients—we build for ourselves too. Our digital products are crafted to enhance workflows, spark creativity, and solve real-world problems for designers, developers, and businesses alike.
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-[1100px] flex justify-between items-center gap-[16px] bg-white border border-[#EBEFF6] shadow-md rounded-full px-[21px] py-3">
        <p className="text-black text-xl font-semibold px-6 text-left w-auto">
          Latest Releases
        </p>
        <div className="flex gap-[16px] justify-end">
          <button
            onClick={handleLatestReleasesClick}
            className="flex justify-center items-center px-5 py-3 border border-[#2388FF] rounded-full shadow-sm text-[#2388FF] hover:bg-[#1f7ae0] hover:text-white transition duration-200 min-w-[160px]"
          >
            <span className="text-[16px] font-medium">
              🌐 Latest Releases
            </span>
          </button>
          <button
            onClick={handleWhatWeWorkingOnClick}
            className="flex justify-center items-center px-5 py-3 border border-[#EBEFF6] rounded-full shadow-sm text-[#868DA6] hover:bg-[#f2f4f8] hover:text-[#2F2F2F] transition duration-200 min-w-[160px]"
          >
            <span className="text-[16px] font-medium">
              🔒 What We’re Working On
            </span>
          </button>
        </div>
      </div>

      {/* In Progress Section */}
      <div className="w-full max-w-[1000px] flex flex-row items-center justify-between bg-[#F4F2FF] border border-[#B4CDF6] shadow-lg rounded-[32px] p-10 min-h-[350px]">
        {/* Left Text Block */}
        <div className="flex flex-col gap-[33px] w-1/2">
          <h2 className="text-[#2388FF] text-4xl font-bold leading-[48px]">
            In Progress
          </h2>
          <p className="text-[#3B4A68] text-[18px] leading-[30px] max-w-md">
            We’re currently building powerful solutions behind the scenes.
            While we haven’t launched any products yet, exciting things are on the way — 
            starting with Athlixir, our AI-powered platform for athlete performance and development.
          </p>
          <div className="text-[#2388FF] text-xl font-bold uppercase leading-[24px]">
            Stay tuned — the journey has just begun.
          </div>
        </div>

        {/* Right Image Block */}
        <div className="w-1/2 flex items-center">
          <img
            src={StartupIllustration}
            alt="Startup Illustration"
            className="w-full h-auto object-contain rounded-[32px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Product1;