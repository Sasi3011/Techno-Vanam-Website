import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

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
      {/* Inline styles (move to a separate CSS file in production) */}
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
        `}
      </style>

      {/* Hero Section */}
      <section className="px-8 py-14 bg-white min-h-[90vh] pt-20">
        <div className="max-w-7xl mx-auto flex flex-row items-center gap-10">
          <div className="flex-1 text-left">
            <h2 className="text-blue-600 text-lg font-semibold uppercase">DESIGN & DEVELOPMENT STUDIO</h2>
            <h1 className="text-5xl font-bold leading-tight mt-4">
              We craft stunning digital experiences for startups, brands & growing businesses
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              We specialize in UI/UX design, web development, and creative graphics & posters. Our team combines creativity and code to build sleek websites and bold visuals that make your brand stand out
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block px-6 py-3 bg-blue-600 font-medium text-white rounded-full hover:bg-blue-700 text-base"
            >
              Get in Touch
            </Link>
          </div>
          <video
            src={heroIllustration}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[550px] rounded-4xl shadow-lg object-cover bg-transparent m"
            style={{
              backgroundColor: 'transparent',
              WebkitMaskImage: '-webkit-radial-gradient(white, black)', // Smooth edges for some browsers
            }}
          />
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-blue-500 py-16 px-10 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-row justify-between items-center mb-8">
            <div className="text-left">
              <p className="text-lg font-semibold uppercase">Our Services</p>
              <h2 className="text-4xl font-bold mt-2 leading-snug">
                High-impact design & development services
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 text-base font-medium"
            >
              View More 
            </Link>
          </div>

          {/* Grid Cards */}
          <div className="flex flex-row gap-6 h-[575px] w-7xl overflow-hidden justify-center">
            {/* LEFT: Paradox Card */}
            <div className="w-[500px] bg-purple-100 rounded-2xl shadow-lg flex flex-col justify-between ">
              <div className="pl-6 pr-6 pt-6 ">
                <h3 className="text-purple-600  text-xl uppercase font-semibold tracking-wide">UI/UX Design</h3>
                <p className="text-gray-600 text-lg leading-relaxed mt-4">
                  We craft seamless, intuitive, and visually engaging digital experiences that elevate your brand and delight your users — powered by thoughtful design and user-centered strategy. 
                </p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-purple-600 font-semibold uppercase tracking-wide hover:text-purple-800 transition-colors duration-200"
                >
                  See services <span className="text-base">➔</span>
                </Link>
              </div>
              <div className="mt-6 h-[350px] bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src={UIUXDesignImage}
                  alt="Para dox Preview"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Teachable and Upside stacked with gap */}
            <div className="w-1/2 flex flex-col gap-6">
              <div className="h-[275px] bg-orange-100 rounded-2xl shadow-lg flex flex-row pl-6">
                <div className="w-1/2 pr-4 flex flex-col justify-center">
                  <h3 className="text-orange-500 text-xl uppercase font-semibold tracking-wide">Poster & Graphic Design</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mt-2">
                    We help your brand stand out and communicate clearly through bold, creative visuals
                  </p>
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-orange-600 font-semibold uppercase tracking-wide hover:text-orange-700 transition-colors duration-200"
                  >
                    See services <span className="text-base">➔</span>
                  </Link>
                </div>
                <div className="w-1/2 h-full bg-gray-100 flex items-center rounded-2xl justify-center">
                  <img
                    src={BrandingImage}
                    alt="Teachable"
                    className="object-cover w-full h-full rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="h-[275px] bg-sky-100 rounded-2xl shadow-lg flex flex-row pl-6">
                <div className="w-1/2 pr-4 flex flex-col justify-center">
                  <h3 className="text-sky-600 text-xl uppercase font-semibold tracking-wide">Web Development</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mt-2">
                    We help your business establish a powerful online presence with fast, responsive, and scalable websites
                  </p>
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-sky-600 font-semibold uppercase tracking-wide hover:text-sky-700 transition-colors duration-200"
                  >
                    See services <span className="text-base">➔</span>
                  </Link>
                </div>
                <div className="w-1/2 h-full bg-gray-100 rounded-2xl flex items-center justify-center">
                  <img
                    src={webDevelopmentImage}
                    alt="Upside"
                    className="object-cover w-full h-full rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-15 flex flex-col items-center bg-white">
        <div className="max-w-7xl w-full px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-left">
            <h2 className="text-blue-600 text-lg font-semibold uppercase">
              Why work with us
            </h2>
            <h3 className="text-4xl font-bold text-balck leading-tight max-w-2xl">
              We guide you through every step — from concept to creation
            </h3>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-3xl">
              With dozens of successful design and development projects, we've built a straightforward and effective process that ensures your brand looks great, functions flawlessly, and connects with your audience.
            </p>
          </div>
          <div className="flex flex-col gap-16 mt-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={cardVariants}
                style={{ willChange: 'transform, opacity' }}
                className="flex flex-row gap-8 items-center justify-between bg-white shadow-md border border-[#EBEFF6] rounded-3xl p-12"
              >
                <div className="flex flex-col items-start w-1/2">
                  <div className="w-24 h-24 mb-6">
                    <img
                      src={step.icon}
                      alt={`${step.title} icon`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-4xl font-bold text-[#19213D] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-lg text-[#667097] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div
                  className={`relative w-[480px] h-[340px] ${step.bgColor} rounded-3xl overflow-hidden flex items-center justify-center`}
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

      <div className="font-poppins py-16 px-8 bg-white">
        {/* Inline CSS for marquee animation */}
        <style>
          {`
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
              height: 298px;
              margin-right: 16px;
            }
            .project-item img {
              width: auto;
              height: 100%;
              object-fit: contain;
              object-position: center;
            }
          `}
        </style>

        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-blue-600 text-lg font-semibold uppercase text-center">
              ~ Past Projects ~
            </h3>
            <h2 className="text-4xl font-bold text-black leading-tight text-center mb-4">
              Let our work speak for itself
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto text-center">
              Want to discover what we can do? Take a look at some of the amazing websites that have been created by our team of talented designers and developers.
            </p>
          </div>

          {/* First Marquee Row */}
          <div className="marquee-container mb-6">
            <div ref={firstRowRef} className="marquee">
              {[...firstRowProjects, ...firstRowProjects].map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="project-item block"
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="rounded-3xl border border-gray-200 shadow-md"
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
                    className="rounded-3xl border border-gray-200 shadow-md"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Products */}
      <section className="bg-white py-16 px-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-600 text-lg font-semibold uppercase">
            ~Our Products~
          </p>
          <h2 className="text-4xl font-bold text-balck leading-tight mb-4">
            Products by <span className="text-blue-600">Techno Vanam</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-4xl mx-auto">
            At Techno Vanam, we don’t just build for clients — we design, develop, and launch our own digital products that are used and loved by thousands across the globe.
          </p>
        </div>
        <motion.div
          className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 flex flex-row items-center justify-between gap-12 max-w-6xl mx-auto shadow-xl"
          variants={athlixirCardVariants}
          initial="rest"
          whileHover="hover"
        >
          <div className="w-[55%] max-w-2xl">
            <h3 className="text-gray-900 text-4xl font-extrabold mb-6 tracking-tight">ATHLIXIR</h3>
            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
              Athlixir is in development, crafted to empower over 50+ athlete communities in Tier-2 and Tier-3 regions. Our cutting-edge platform harnesses AI to analyze 300,000+ performance data points, delivering personalized training, precise injury tracking, and verified recognition.
            </p>
            <div className="flex flex-row gap-10 text-left mb-8">
              <div>
                <p className="text-3xl font-bold text-blue-700">50+</p>
                <p className="text-sm font-medium text-gray-600 tracking-wide">
                  Target Athlete Communities
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-700">300,000+</p>
                <p className="text-sm font-medium text-gray-600 tracking-wide">
                  AI-Powered Performance Insights
                </p>
              </div>
            </div>
            <Link
              to="/product1"
              className="inline-flex items-center text-blue-700 text-base font-semibold hover:text-blue-800 transition-colors duration-300"
            >
              COMING SOON — JOIN THE JOURNEY
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="w-[45%] aspect-[4/3] rounded-2xl overflow-hidden relative">
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

      {/* CTA Section */}
      <section className="w-full flex justify-center items-center min-h-[700px] bg-[#e9ebef] px-6">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 py-12">
          
          {/* Left - Glass Video Card */}
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

          {/* Right - Text and CTA */}
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
              Our creative experts are here to design, develop, and deliver high-performing digital experiences tailored to your brand. Let’s build something great together.
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
      </section>

    </div>
  );
};

export default Home;