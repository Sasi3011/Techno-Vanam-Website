import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import ComingSoonIcon from "../../assets/logo.png";
import AppPreview from "../../assets/logo.png";
import SocialMediaImage from "../../assets/Contact Us.mp4";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";
import Athlixir from "../../assets/Home Page/Athlixir.png";

export default function Products2() {
  const navigate = useNavigate();
  const [displayedAthlixir, setDisplayedAthlixir] = useState("");
  const [displayedComingSoon, setDisplayedComingSoon] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);

  const athlixirText = "ATHLIXIR";
  const comingSoonText = "COMING SOON";

  useEffect(() => {
    let timeoutId;
    let currentIndex = 0;

    const typeAthlixir = () => {
      if (currentIndex < athlixirText.length) {
        setDisplayedAthlixir(athlixirText.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeAthlixir, 150);
      } else {
        setShowCursor1(false);
        // Start typing "COMING SOON" after ATHLIXIR is complete
        setTimeout(() => {
          setShowCursor2(true);
          let comingSoonIndex = 0;
          const typeComingSoon = () => {
            if (comingSoonIndex < comingSoonText.length) {
              setDisplayedComingSoon(comingSoonText.slice(0, comingSoonIndex + 1));
              comingSoonIndex++;
              setTimeout(typeComingSoon, 150);
            } else {
              setShowCursor2(false);
            }
          };
          typeComingSoon();
        }, 500);
      }
    };

    typeAthlixir();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleLatestReleasesClick = () => {
    navigate("/product1");
  };

  const handleWhatWeWorkingOnClick = () => {
    navigate("/product2");
  };

  return (
    <div className="flex flex-col items-center pt-8 sm:pt-12 md:pt-16 gap-8 sm:gap-12 md:gap-16 lg:gap-[68px] w-full px-4 sm:px-6 lg:px-8">
      {/* Section 1: Header */}
      <div className="w-full max-w-[1320px] flex flex-col items-center gap-4 sm:gap-5 md:gap-[20px]">
        {/* Label */}
        <div className="text-sm sm:text-base md:text-lg text-blue-600 font-semibold uppercase text-center">
          ~ Products ~
        </div>

        {/* Heading + Logo */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center text-gray-900 font-bold gap-2 sm:gap-3">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Products by
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={Logo}
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[63px] lg:h-[63px] object-contain"
              loading="lazy"
            />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
              Techno Vanam
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-[#667097] text-sm sm:text-base md:text-lg leading-relaxed max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl px-2 sm:px-4 md:px-0">
          At Techno Vanam, we don't just create for clients—we build for ourselves too. Our digital products are crafted to enhance workflows, spark creativity, and solve real-world problems for designers, developers, and businesses alike.
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-[1200px] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-[16px] bg-white border border-[#EBEFF6] shadow-md rounded-2xl sm:rounded-full px-4 sm:px-[21px] py-3">
        <p className="text-black text-base sm:text-lg md:text-xl font-semibold px-2 sm:px-6 text-center sm:text-left w-full sm:w-auto">
          What We're Working On
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-[16px] justify-center sm:justify-end w-full sm:w-auto">
          <button
            onClick={handleLatestReleasesClick}
            className="flex justify-center items-center px-4 sm:px-5 py-2 sm:py-3 border border-[#EBEFF6] rounded-full shadow-sm text-[#868DA6] hover:bg-[#f2f4f8] hover:text-[#2F2F2F] transition duration-200 w-full sm:w-auto"
          >
            <span className="text-sm sm:text-base font-medium">
              🌐 Latest Releases
            </span>
          </button>
          <button
            onClick={handleWhatWeWorkingOnClick}
            className="flex justify-center items-center px-4 sm:px-5 py-2 sm:py-3 border border-[#2388FF] rounded-full shadow-sm text-[#2388FF] hover:bg-[#1f7ae0] hover:text-white transition duration-200 w-full sm:w-auto"
          >
            <span className="text-sm sm:text-base font-medium">
              🔒 What We're Working On
            </span>
          </button>
        </div>
      </div>

      {/* Product Card */}
      <div className="bg-[#F4F2FF] border border-[#B4CDF6] shadow-lg rounded-2xl sm:rounded-3xl lg:rounded-[28px] w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[48px] pt-8 sm:pt-12 md:pt-16 lg:pt-[70px] pb-6 sm:pb-8 md:pb-12 lg:pb-[48px] min-h-auto lg:min-h-[690px] gap-6 lg:gap-0">
        
        {/* Left Text Block */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full lg:w-[600px] order-2 lg:order-1">
          <h2 className="text-[#2388FF] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-left">
            {displayedAthlixir}
            {showCursor1 && <span className="animate-pulse">|</span>}
          </h2>
          <p className="text-[#3B4A68] text-sm sm:text-base md:text-lg leading-relaxed w-full text-justify md:text-justify lg:text-left">
            Athlixir is currently in development — a groundbreaking platform built to empower 50+ athlete communities across Tier-2 and Tier-3 regions in India and beyond. We're engineering a powerful ecosystem capable of analyzing 300,000+ performance data points, using advanced AI to enable smarter training decisions, real-time injury tracking, personalized growth plans, and verified recognition for emerging talent.
            <br className="hidden sm:block" /><br className="hidden sm:block" />
            Whether you're an aspiring athlete, coach, or organization, Athlixir is your intelligent companion for measurable improvement, safety, and career visibility — all in one place.
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-7 mt-4 sm:mt-5 md:mt-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-[60px]">
              <div className="flex flex-col gap-1 text-left">
                <p className="text-[#19213D] font-bold text-base sm:text-lg leading-tight">
                  50+
                </p>
                <p className="text-blue-600 text-sm sm:text-base leading-tight">
                  Target athlete communities
                </p>
              </div>
              <div className="flex flex-col gap-1 text-left">
                <p className="text-[#19213D] font-bold text-base sm:text-lg leading-tight">
                  300,000+
                </p>
                <p className="text-blue-600 text-sm sm:text-base leading-tight">
                  Projected performance insights powered by AI
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col gap-1 text-left">
                <p className="text-[#19213D] font-bold text-base sm:text-lg leading-tight">
                  100%
                </p>
                <p className="text-blue-600 text-sm sm:text-base leading-tight">
                  Focused on Unlocking Grassroots Sports Potential
                </p>
              </div>
              <div className="flex flex-col gap-1 text-left">
                <p className="text-[#19213D] font-bold text-base sm:text-lg leading-tight">
                  1
                </p>
                <p className="text-blue-600 text-sm sm:text-base leading-tight">
                  Unified Platform for Growth, Recognition & Performance
                </p>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="flex items-center justify-start gap-2 mt-6 sm:mt-7 md:mt-[28px]">
            <p className="text-blue-600 text-base sm:text-lg md:text-xl font-bold uppercase tracking-[0.06em]">
              {displayedComingSoon}
              {showCursor2 && <span className="animate-pulse">|</span>}
            </p>
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-[#2388FF]" />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-auto flex justify-center order-1 lg:order-2">
          <img
            src={Athlixir}
            alt="App preview"
            className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:w-[500px] h-auto aspect-square object-cover rounded-2xl lg:rounded-[28px]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Extra spacing for mobile */}
      <div className="pb-4 sm:pb-8 lg:pb-0" />
    </div>
  );
}