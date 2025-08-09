import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import HighClassPopup from '../components/HighClassPopup';

// Section: Process Steps Images
import designImage from "../assets/Home Page/Project Design Phase.png"; // Image: Design Phase
import devImage from "../assets/Home Page/Project Development Phase.png"; // Image: Development Phase
import ideaImage from "../assets/Home Page/Project Idea Phase.png"; // Image: Idea Phase
import launchImage from "../assets/Home Page/Project Launch Phase.png"; // Image: Launch Phase
import researchImage from "../assets/Home Page/Project Research Phase.png"; // Image: Research Phase
import supportImage from "../assets/Home Page/Support Phase.png"; // Image: Support Phase
import ideaicon from "../assets/Home Page/Idea Phase Icon.png"; // Icon: Idea Phase
import researchicon from "../assets/Home Page/Research Phase Icon.png"; // Icon: Research Phase
import designicon from "../assets/Home Page/Design Phase Icon.png"; // Icon: Design Phase
import devicon from "../assets/Home Page/Development Phase Icon.png"; // Icon: Development Phase
import launchicon from "../assets/Home Page/Launch Phase Icon.png"; // Icon: Launch Phase
import supporticon from "../assets/Home Page/Support Phase Icon.png"; // Icon: Support Phase
import athlixirImage from "../assets/Home Page/Athlixir.png"; // Image: Athlixir Product
import SocialMediaImage from "../assets/Contact Us.mp4"; // Video: Social Media
import heroIllustration from "../assets/Home Video.mp4"; // Video: Hero Section
// Section: Services Images
import BrandingImage from "../assets/Home Page/Branding.png"; // Image: Branding Service
import webDevelopmentImage from "../assets/Home Page/Web Development.png"; // Image: Web Development Service
import UIUXDesignImage from "../assets/Home Page/UIUX.png"; // Image: UI/UX Service
// Section: Project Images
import Project1 from "../assets/Home Page/Project1.jpg"; // Image: Project 1
import Project2 from "../assets/Home Page/Project2.jpg"; // Image: Project 2
import Project3 from "../assets/Home Page/Project3.jpg"; // Image: Project 3
import Project4 from "../assets/Home Page/Project4.jpg"; // Image: Project 4
import Project5 from "../assets/Home Page/Project5.jpg"; // Image: Project 5
import Project6 from "../assets/Home Page/Project6.jpg"; // Image: Project 6
import Project7 from "../assets/Home Page/Project7.jpg"; // Image: Project 7
import Project8 from "../assets/Home Page/Project8.jpg"; // Image: Project 8
import Project9 from "../assets/Home Page/Project9.jpg"; // Image: Project 9
import Project10 from "../assets/Home Page/Project10.jpg"; // Image: Project 10
import Project11 from "../assets/Home Page/Project11.webp"; // Image: Project 11
import Project12 from "../assets/Home Page/Project12.jpg"; // Image: Project 12
import Project13 from "../assets/Home Page/Project13.webp"; // Image: Project 13
import Project14 from "../assets/Home Page/Project14.webp"; // Image: Project 14
import Project15 from "../assets/Home Page/Project15.jpg"; // Image: Project 15
import Project16 from "../assets/Home Page/Project16.webp"; // Image: Project 16
import Project17 from "../assets/Home Page/Project17.webp"; // Image: Project 17
import Project18 from "../assets/Home Page/Project18.webp"; // Image: Project 18
import Project19 from "../assets/Home Page/Project19.jpg"; // Image: Project 19
import Project20 from "../assets/Home Page/Project20.webp"; // Image: Project 20

const steps = [
  {
    id: 1,
    title: "1. Idea",
    description:
      "We start by understanding your goals, vision, and challenges. Then, we create a clear action plan tailored to your project's needs.",
    bgColor: "bg-[#FFEFA8]",
    img: ideaImage,
    icon: ideaicon,
  },
  {
    id: 2,
    title: "2. Research",
    description:
      "Through a detailed questionnaire and business analysis, we learn what makes your brand unique — so we can design solutions that truly fit.",
    bgColor: "bg-[#D9E8FF]",
    img: researchImage,
    icon: researchicon,
  },
  {
    id: 3,
    title: "3. Design",
    description:
      "Whether it's a website, app, or creative poster, our designers craft intuitive interfaces and eye-catching visuals that reflect your brand identity.",
    bgColor: "bg-[#FFDADE]",
    img: designImage,
    icon: designicon,
  },
  {
    id: 4,
    title: "4. Development",
    description:
      "Our developers bring your project to life with fast, responsive, and SEO-optimized websites built using the latest technologies and best practices.",
    bgColor: "bg-[#D9E8FF]",
    img: devImage,
    icon: devicon,
  },
  {
    id: 5,
    title: "5. Launch",
    description:
      "We ensure a smooth launch with thorough testing and optimization, delivering a product that's ready to make an impact from day one.",
    bgColor: "bg-[#A79BF4]",
    img: launchImage,
    icon: launchicon,
  },
  {
    id: 6,
    title: "6. Support",
    description:
      "Post-launch, we provide ongoing support to keep your project running smoothly, with updates, maintenance, and enhancements as needed.",
    bgColor: "bg-[#E9FDE4]",
    img: supportImage,
    icon: supporticon,
  },
];

const projects = [
  {
    title: "Project 1",
    image: Project1,
    alt: "Project 1 - Techno Vanam Portfolio",
  },
  {
    title: "Project 2",
    image: Project2,
    alt: "Project 2 - Techno Vanam Portfolio",
  },
  {
    title: "Project 3",
    image: Project3,
    alt: "Project 3 - Techno Vanam Portfolio",
  },
  {
    title: "Project 4",
    image: Project4,
    alt: "Project 4 - Techno Vanam Portfolio",
  },
  {
    title: "Project 5",
    image: Project5,
    alt: "Project 5 - Techno Vanam Portfolio",
  },
  {
    title: "Project 6",
    image: Project6,
    alt: "Project 6 - Techno Vanam Portfolio",
  },
  {
    title: "Project 7",
    image: Project7,
    alt: "Project 7 - Techno Vanam Portfolio",
  },
  {
    title: "Project 8",
    image: Project8,
    alt: "Project 8 - Techno Vanam Portfolio",
  },
  {
    title: "Project 9",
    image: Project9,
    alt: "Project 9 - Techno Vanam Portfolio",
  },
  {
    title: "Project 10",
    image: Project10,
    alt: "Project 10 - Techno Vanam Portfolio",
  },
  {
    title: "Project 11",
    image: Project11,
    alt: "Project 11 - Techno Vanam Portfolio",
  },
  {
    title: "Project 12",
    image: Project12,
    alt: "Project 12 - Techno Vanam Portfolio",
  },
  {
    title: "Project 13",
    image: Project13,
    alt: "Project 13 - Techno Vanam Portfolio",
  },
  {
    title: "Project 14",
    image: Project14,
    alt: "Project 14 - Techno Vanam Portfolio",
  },
  {
    title: "Project 15",
    image: Project15,
    alt: "Project 15 - Techno Vanam Portfolio",
  },
  {
    title: "Project 16",
    image: Project16,
    alt: "Project 16 - Techno Vanam Portfolio",
  },
  {
    title: "Project 17",
    image: Project17,
    alt: "Project 17 - Techno Vanam Portfolio",
  },
  {
    title: "Project 18",
    image: Project18,
    alt: "Project 18 - Techno Vanam Portfolio",
  },
  {
    title: "Project 19",
    image: Project19,
    alt: "Project 19 - Techno Vanam Portfolio",
  },
  {
    title: "Project 20",
    image: Project20,
    alt: "Project 20 - Techno Vanam Portfolio",
  },
];

const Home = () => {
  const serviceScrollRef = useRef(null);
  const cardRefs = useRef([]);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const scrollHorizontally = (ref, direction) => {
    if (ref.current) {
      const step = ref.current.querySelector(".snap-start")?.offsetWidth || 350;
      ref.current.scrollBy({
        left: direction === "left" ? -step : step,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideIn");
            entry.target.style.animationDelay = `${index * 0.1}s`;
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  // Split projects into two groups for the two marquee rows
  const firstRowProjects = projects.slice(0, 10); // First 10 projects
  const secondRowProjects = projects.slice(10); // Last 10 projects

  // Reset animation on window resize to prevent glitches
  useEffect(() => {
    const handleResize = () => {
      if (firstRowRef.current) {
        firstRowRef.current.style.animation = "none";
        void firstRowRef.current.offsetWidth; // Trigger reflow
        firstRowRef.current.style.animation = "marquee 100s linear infinite";
      }
      if (secondRowRef.current) {
        secondRowRef.current.style.animation = "none";
        void secondRowRef.current.offsetWidth; // Trigger reflow
        secondRowRef.current.style.animation = "marqueeReverse 100s linear infinite";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation variants for pop-up effect
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.15,
      },
    }),
  };

  // Animation variants for Athlixir card hover effect
  const athlixirCardVariants = {
    rest: { scale: 1, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" },
    hover: {
      scale: 1.03,
      boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="font-poppins min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      {/* Inline styles with responsive adjustments */}
      <style>
        {`
          .animate-slideIn {
            animation: slideIn 0.5s ease-out forwards;
            will-change: transform, opacity;
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee-container {
            display: flex;
            overflow: hidden;
            width: 100%;
            user-select: none;
          }
          .marquee {
            display: flex;
            flex-shrink: 0;
            animation: marquee 30s linear infinite;
          }
          .marquee-reverse {
            display: flex;
            flex-shrink: 0;
            animation: marqueeReverse 30s linear infinite;
          }
          .marquee:hover, .marquee-reverse:hover {
            animation-play-state: paused;
          }
          .project-item {
            position: relative;
            flex: 0 0 auto;
            margin-right: 16px;
          }
          .project-item img {
            width: auto;
            object-fit: contain;
            object-position: center;
          }
          /* Mobile specific project item sizing */
          @media (max-width: 640px) {
            .project-item {
              height: 180px;
            }
            .project-item img {
              height: 100%;
            }
          }
          /* Tablet specific project item sizing */
          @media (min-width: 641px) and (max-width: 1024px) {
            .project-item {
              height: 240px;
            }
            .project-item img {
              height: 100%;
            }
          }
          /* Desktop specific project item sizing */
          @media (min-width: 1025px) {
            .project-item {
              height: 298px;
            }
            .project-item img {
              height: 100%;
            }
          }
        `}
      </style>

      {/* Hero Section - Fully Responsive */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-18 bg-white min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh] lg:min-h-[50px] pt-12 sm:pt-16 md:pt-18 lg:pt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-10">
          <div className="flex-1 text-left w-full lg:w-auto">
            <h2 className="text-blue-600 text-sm sm:text-base md:text-lg lg:text-lg font-semibold uppercase">
              DESIGN & DEVELOPMENT STUDIO
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight mt-2 sm:mt-3 md:mt-4 lg:mt-4">
            We make brands <br/> that demand attention            </h1>
            <p className="mt-3 sm:mt-4 md:mt-4 lg:mt-4 text-gray-600 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed">
              We specialize in UI/UX design, web development, and creative branding & graphics. Our team combines creativity and code to build sleek websites and bold visuals that make your brand stand out
            </p>
            <Link
              to="/contact"
              className="mt-4 sm:mt-5 md:mt-6 lg:mt-6 inline-block px-4 sm:px-5 md:px-6 lg:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3 bg-blue-600 font-medium text-white rounded-full hover:bg-blue-700 text-sm sm:text-sm md:text-base lg:text-base transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
          <div className="w-full lg:flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[550 px] xl:max-w-[550px] mt-6 lg:mt-0">
            <video
              src={heroIllustration}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-4xl shadow-lg object-cover bg-transparent"
              style={{
                backgroundColor: 'transparent',
                WebkitMaskImage: '-webkit-radial-gradient(white, black)',
              }}
            />
          </div>
        </div>
      </section>

      {/* Our Services - Fully Responsive */}
<section className="bg-blue-500 py-8 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10 text-white">
  <div className="max-w-7xl mx-auto">
    {/* Heading & Button */}
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 sm:mb-7 md:mb-8 lg:mb-8 gap-4">
      <div className="text-left w-full lg:w-auto">
        <p className="text-sm sm:text-base md:text-lg font-semibold uppercase">
          Our Services
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2 leading-snug">
          Creating Interfaces That Inspire, Code That Performs
        </h2>
      </div>
      <Link
        to="/services"
        className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 text-sm md:text-base font-medium transition-colors duration-200"
      >
        View More
      </Link>
    </div>

    {/* Services Layout */}
    <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 w-full">
      {/* Left Large Card */}
      <div className="w-full lg:w-[48%] xl:w-[500px] bg-purple-100 rounded-2xl shadow-lg flex flex-col min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
        <div className="p-4 sm:p-5 md:p-6 flex-shrink-0">
          <h3 className="text-purple-600 text-base sm:text-lg md:text-xl uppercase font-semibold tracking-wide">
            UI/UX Design
          </h3>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
            We design seamless, intuitive, and user-friendly digital experiences that not only engage and retain users but also enhance your brand's value and identity.
          </p>
          <Link
            to="/services"
            className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-xs sm:text-sm text-purple-600 font-semibold uppercase tracking-wide hover:text-purple-800"
          >
            See services <span>➔</span>
          </Link>
        </div>
        <div className="flex-1 mx-4 sm:mx-5 mb-4 sm:mb-5 min-h-[200px] sm:min-h-[220px] md:min-h-[300px] bg-gray-100 rounded-2xl overflow-hidden">
          <img
            src={UIUXDesignImage}
            alt="UI/UX Design Preview"
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-[52%] flex flex-col gap-4 sm:gap-5 md:gap-6">
        
        {/* Branding Card */}
        <div className="bg-orange-100 rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden min-h-[220px]">
          <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center">
            <h3 className="text-orange-500 text-base sm:text-lg md:text-xl uppercase font-semibold tracking-wide">
              Branding & Graphics Design
            </h3>
            <p className="text-gray-600 text-sm md:text-lg leading-relaxed mt-2">
              We craft bold, creative visuals that help your brand stand out and communicate with impact.
            </p>
            <Link
              to="/services"
              className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm text-orange-600 font-semibold uppercase hover:text-orange-700"
            >
              See services <span>➔</span>
            </Link>
          </div>
          <div className="hidden md:flex w-full md:w-1/2 bg-gray-100 items-center justify-center overflow-hidden">
            <img
              src={BrandingImage}
              alt="Branding Design"
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </div>
          {/* Mobile image */}
          <div className="md:hidden flex mx-4 mb-4 bg-gray-100 rounded-xl overflow-hidden h-[150px]">
            <img
              src={BrandingImage}
              alt="Branding Design Preview"
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Web Development Card */}
        <div className="bg-sky-100 rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden min-h-[220px]">
          <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center">
            <h3 className="text-sky-600 text-base sm:text-lg md:text-xl uppercase font-semibold tracking-wide">
              Web Development
            </h3>
            <p className="text-gray-600 text-sm md:text-lg leading-relaxed mt-2">
              We develop fast, responsive, and scalable websites that strengthen your online presence.
            </p>
            <Link
              to="#"
              onClick={e => { e.preventDefault(); setShowPopup(true); }}
              className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm text-sky-600 font-semibold uppercase hover:text-sky-700"
            >
              See services <span>➔</span>
            </Link>
          </div>
          <div className="hidden md:flex w-full md:w-1/2 bg-gray-100 items-center justify-center overflow-hidden">
            <img
              src={webDevelopmentImage}
              alt="Web Development"
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </div>
          {/* Mobile image */}
          <div className="md:hidden flex mx-4 mb-4 bg-gray-100 rounded-xl overflow-hidden h-[150px]">
            <img
              src={webDevelopmentImage}
              alt="Web Development Preview"
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Why Work With Us - Fully Responsive */}
<section className="py-8 sm:py-12 md:py-14 lg:py-15 flex flex-col items-center bg-white">
  <div className="max-w-7xl w-full px-4 sm:px-6 md:px-8 lg:px-8 flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-8">
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-4 text-left">
      <h2 className="text-blue-600 text-sm sm:text-base md:text-lg lg:text-lg font-semibold uppercase">
        Why work with us
      </h2>
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black leading-tight max-w-full lg:max-w-2xl">
        We guide you through every step — from concept to creation
      </h3>
      <p className="mt-2 sm:mt-3 md:mt-4 lg:mt-4 text-gray-600 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed max-w-full lg:max-w-3xl">
        With dozens of successful design and development projects, we've built a straightforward and effective process that ensures your brand looks great, functions flawlessly, and connects with your audience.
      </p>
    </div>

    <div className="flex flex-col gap-8 sm:gap-12 md:gap-14 lg:gap-16 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={cardVariants}
          style={{ willChange: 'transform, opacity' }}
          className="flex flex-col lg:flex-row gap-6 sm:gap-7 md:gap-8 lg:gap-8 items-center justify-between bg-white shadow-md border border-[#EBEFF6] rounded-2xl sm:rounded-3xl lg:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12"
        >
          {/* Text + Icon Section */}
          <div className="flex flex-col items-start w-full lg:w-1/2 text-left">
            {/* Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 mb-4 lg:mb-6">
              <img
                src={step.icon}
                alt={`${step.title} icon`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            {/* Heading + Description */}
            <h4 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#19213D] mb-2">
              {step.title}
            </h4>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-[#667097] leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Image Section */}
          <div
            className={`relative w-full sm:w-[400px] md:w-[450px] lg:w-[480px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] ${step.bgColor} rounded-2xl sm:rounded-3xl lg:rounded-3xl overflow-hidden flex items-center justify-center mt-6 lg:mt-0`}
          >
            <img
              src={step.img}
              alt={`${step.title} illustration`}
              className="w-full h-full object-contain opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10"></div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Projects Marquee Section - Fully Responsive */}
      <div className="font-poppins py-8 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 md:mb-14 lg:mb-16">
            <h3 className="text-blue-600 text-sm sm:text-base md:text-lg lg:text-lg font-semibold uppercase text-center">
              ~ Crafted Solutions ~
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black leading-tight text-center mb-3 sm:mb-4 md:mb-4 lg:mb-4">
              Just a glimpse of what we do.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-lg max-w-4xl mx-auto text-center leading-relaxed px-4 sm:px-0">
              Take a glimpse into the digital experiences we've created — combining design, technology, and strategy to bring ideas to life.
            </p>
          </div>

          {/* First Marquee Row */}
          <div className="marquee-container mb-4 sm:mb-5 md:mb-6 lg:mb-6">
            <div ref={firstRowRef} className="marquee">
              {[...firstRowProjects, ...firstRowProjects].map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="project-item block"
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="rounded-2xl sm:rounded-3xl lg:rounded-3xl border border-gray-200 shadow-md"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Marquee Row */}
          <div className="marquee-container">
            <div ref={secondRowRef} className="marquee-reverse">
              {[...secondRowProjects, ...secondRowProjects].map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="project-item block"
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="rounded-2xl sm:rounded-3xl lg:rounded-3xl border border-gray-200 shadow-md"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Products - Fully Responsive */}
<section className="bg-white py-8 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
  {/* Top section remains center aligned */}
  <div className="max-w-6xl mx-auto text-center">
    <p className="text-blue-600 text-sm sm:text-base md:text-lg lg:text-lg font-semibold uppercase">
      ~Our Products~
    </p>
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black leading-tight mb-3 sm:mb-4 md:mb-4 lg:mb-4">
      Products by <span className="text-blue-600">Techno Vanam</span>
    </h2>
    <p className="mt-2 sm:mt-3 md:mt-4 lg:mt-4 text-gray-600 text-sm sm:text-base md:text-lg lg:text-lg max-w-4xl mx-auto leading-relaxed">
      At Techno Vanam, we go beyond client work — we create, launch, and scale our own digital products, trusted by thousands around the world.
    </p>
  </div>

  {/* Motion section now left aligned */}
  <motion.div
    className="mt-8 sm:mt-12 md:mt-14 lg:mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl lg:rounded-3xl p-6 sm:p-8 md:p-9 lg:p-10 flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto shadow-xl text-left"
    variants={athlixirCardVariants}
    initial="rest"
    whileHover="hover"
  >
    <div className="w-full lg:w-[55%] max-w-2xl">
      <h3 className="text-blue-600 text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 lg:mb-6 tracking-tight">
        ATHLIXIR
      </h3>
      <p className="text-gray-700 text-sm sm:text-sm md:text-md lg:text-md mb-6 sm:mb-8 md:mb-9 lg:mb-10 leading-relaxed">
        Athlixir is in development, crafted to empower over 50+ athlete communities in Tier-2 and Tier-3 regions. Our cutting-edge platform harnesses AI to analyze 300,000+ performance data points, delivering personalized training, precise injury tracking, and verified recognition.
      </p>
      <div className="flex flex-col sm:flex-row lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-10 mb-6 sm:mb-7 md:mb-8 lg:mb-8">
        <div>
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-blue-600">50+</p>
          <p className="text-xs sm:text-sm md:text-sm lg:text-sm font-medium text-gray-600 tracking-wide">
            Target Athlete Communities
          </p>
        </div>
        <div>
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-blue-600">300,000+</p>
          <p className="text-xs sm:text-sm md:text-sm lg:text-sm font-medium text-gray-600 tracking-wide">
            AI-Powered Performance Insights
          </p>
        </div>
      </div>
      <Link
        to="/product1"
        className="inline-flex items-center text-blue-600 text-sm sm:text-base md:text-base lg:text-base font-semibold hover:text-blue-700 transition-colors duration-300"
      >
        COMING SOON — JOIN THE JOURNEY
        <svg
          className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
    <div className="w-full lg:w-[45%] aspect-[4/3] rounded-xl sm:rounded-2xl lg:rounded-2xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 to-transparent z-10"></div>
      <img
        src={athlixirImage}
        alt="Preview of Athlixir platform"
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
  </motion.div>
</section>


      {/* CTA Section - Commented Out (keeping as requested) */}
      {/* <section className="w-full flex justify-center items-center min-h-[700px] bg-[#e9ebef] px-6">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 py-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 60 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="w-full md:w-1/2 h-[500px] overflow-hidden"
          >
            <video
              src={SocialMediaImage}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-3xl shadow-lg bg-transparent"
              style={{
                backgroundColor: 'transparent',
                WebkitMaskImage: '-webkit-radial-gradient(white, black)',
              }}
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 60 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="w-full md:w-1/2 text-blue-600 px-4"
          >
            <h2 className="text-5xl font-extrabold leading-snug mb-6 text-blue-600">
              Ready to launch<br />
              something amazing<br />
              with Techno Vanam?
            </h2>
            <p className="text-lg text-blue-500 leading-relaxed mb-8">
              Our creative experts are here to design, develop, and deliver high-performing digital experiences tailored to your brand. Let's build something great together.
            </p>
            <Link to="/contact">
              <button className="group relative inline-flex items-center px-8 py-4 text-blue-600 border-2 border-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out shadow-md hover:shadow-xl transform hover:scale-105">
                Contact Us
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
                <span className="absolute top-0 left-0 w-full h-full bg-blue-600 opacity-10 rounded-full blur-md animate-ping"></span>
              </button>
            </Link>
          </motion.div>

        </div>
      </section> */}

      {/* Popup Component - Keeping as requested */}
      {/* <HighClassPopup 
        open={showPopup} 
        onClose={() => setShowPopup(false)} 
        title="Service is currently unavailable" 
        description="This service is currently unavailable. Please check back later." 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12 text-red-500">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <rect x="11" y="7" width="2" height="6" rx="1" fill="#fff" />
            <rect x="11" y="15" width="2" height="2" rx="1" fill="#fff" />
          </svg>
        }
      /> */}

    </div>
  );
};

export default Home;