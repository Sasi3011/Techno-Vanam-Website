import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder images (replace with actual paths)
import cardImage1 from "../assets/ui ux.png";
import cardImage2 from "../assets/poster.png";
import cardImage3 from "../assets/n.png";
import designImage from "../assets/Home Page/Project Design Phase.png";
import devImage from "../assets/Home Page/Project Development Phase.png";
import ideaImage from "../assets/Home Page/Project Idea Phase.png";
import launchImage from "../assets/Home Page/Project Launch Phase.png";
import researchImage from "../assets/Home Page/Project Research Phase.png";
import supportImage from "../assets/Home Page/Support Phase.png";
import ideaicon from "../assets/Home Page/Idea Phase Icon.png";
import researchicon from "../assets/Home Page/Research Phase Icon.png";
import designicon from "../assets/Home Page/Design Phase Icon.png";
import devicon from "../assets/Home Page/Development Phase Icon.png";
import launchicon from "../assets/Home Page/Launch Phase Icon.png";
import supporticon from "../assets/Home Page/Support Phase Icon.png";
import athlixirImage from "../assets/Home Page/Athlixir.png";
import socialmediaImage from "../assets/Contact Us.mp4";
import heroIllustration from "../assets/original-0c7449463779438e161d845f94825e57.mp4";

// Placeholder images for services (replace with actual paths)
import webDesignImage from "../assets/logo.png";
import BrandingImage from "../assets/Home Page/Branding.png";
import webDevelopmentImage from "../assets/Home Page/Web Development.png";
import UIUXDesignImage from "../assets/Home Page/UIUX.png";
import logoDesignImage from "../assets/logo.png";

// Unique project images (replace with actual paths)
import paradoxImage from "../assets/logo.png";
import getUpsideImage from "../assets/logo.png";
import deFiImage from "../assets/logo.png";
import pixelitImage from "../assets/logo.png";
import startuperImage from "../assets/logo.png";
import techstarImage from "../assets/logo.png";
import darkbitImage from "../assets/logo.png";
import starUpImage from "../assets/logo.png";
import pizzaplanetImage from "../assets/logo.png";
import upLeadImage from "../assets/logo.png";



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
  { title: "Paradox Project", image: paradoxImage },
  { title: "GetUpside Project", image: getUpsideImage },
  { title: "DeFi Project", image: deFiImage },
  { title: "Pixelit Project", image: pixelitImage },
  { title: "Startuper Project", image: startuperImage },
  { title: "Techstar Project", image: techstarImage },
  { title: "Darkbit Project", image: darkbitImage },
  { title: "StarUp Project", image: starUpImage },
  { title: "Pizzaplanet Project", image: pizzaplanetImage },
  { title: "UpLead Project", image: upLeadImage },
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

  return (
    <div className="font-poppins min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      {/* Inline styles (move to a separate CSS file in production) */}
      <style>
        {`
          .animate-slideIn {
            animation: slideIn 0.5s ease-out forwards;
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
      <section className="px-8 py-28 bg-white min-h-[90vh]">
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
              className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-base"
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
            className="w-full max-w-[500px] rounded-4xl shadow-lg object-cover"
          >
            Your browser does not support the video tag.
          </video>
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
              View More →
            </Link>
          </div>

          {/* Grid Cards */}
          <div className="flex flex-row gap-6 h-[575px] w-7xl overflow-hidden justify-center">
  {/* LEFT: Paradox Card */}
  <div className="w-[500px] bg-white rounded-2xl shadow-lg flex flex-col justify-between ">
    {/* Paradox Text */}
    <div className="pl-6 pr-6 pt-6 ">
      <h3 className="text-blue-500  text-lg uppercase font-semibold tracking-wide">UI/UX Design</h3>
      <p className="text-gray-600 text-base leading-relaxed mt-4">
        We craft seamless, intuitive, and visually engaging digital experiences that elevate your brand and delight your users — powered by thoughtful design and user-centered strategy. 
      </p>
      <Link
        to="/services"
        className="mt-6 inline-flex items-center gap-2 text-sm text-blue-600 font-semibold uppercase tracking-wide hover:text-blue-800 transition-colors duration-200"
      >
        See services <span className="text-lg">➔</span>
      </Link>
    </div>

    {/* Paradox Image */}
    <div className="mt-6 h-[350px] bg-gray-100 rounded-xl overflow-hidden">
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
    {/* Teachable Card */}
    <div className="h-[275px] bg-white rounded-2xl shadow-lg flex flex-row pl-6">
      {/* Text */}
      <div className="w-1/2 pr-4 flex flex-col justify-center">
        <h3 className="text-purple-500 text-lg uppercase font-semibold tracking-wide">Poster & Graphic Design</h3>
        <p className="text-gray-600 text-base leading-relaxed mt-2">
          We help your brand stand out and communicate clearly through bold, creative visuals
        </p>
        <Link
          to="/services"
          className="mt-4 inline-flex items-center gap-2 text-sm text-purple-600 font-semibold uppercase tracking-wide hover:text-purple-800 transition-colors duration-200"
        >
          See services <span className="text-lg">➔</span>
        </Link>
      </div>
      {/* Image */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <img
          src={BrandingImage}
          alt="Teachable"
          className="object-cover w-full h-full rounded-xl"
          loading="lazy"
        />
      </div>
    </div>

    {/* Upside Card */}
    <div className="h-[275px] bg-white rounded-2xl shadow-lg flex flex-row pl-6">
      {/* Text */}
      <div className="w-1/2 pr-4 flex flex-col justify-center">
        <h3 className="text-green-500 text-lg uppercase font-semibold tracking-wide">Web Development</h3>
        <p className="text-gray-600 text-base leading-relaxed mt-2">
          We help your business establish a powerful online presence with fast, responsive, and scalable websites
        </p>
        <Link
          to="/services"
          className="mt-4 inline-flex items-center gap-2 text-sm text-green-600 font-semibold uppercase tracking-wide hover:text-green-800 transition-colors duration-200"
        >
          See services <span className="text-lg">➔</span>
        </Link>
      </div>
      {/* Image */}
      <div className="w-1/2 h-full flex items-center justify-center">
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
      <section className="py-40 flex flex-col items-center bg-white">
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
            {steps.map((step) => (
              <div
                key={step.id}
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
                  <h4 className="text-2xl font-bold text-[#19213D] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-base text-[#667097] leading-relaxed">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-blue-600 text-lg font-semibold uppercase">
            Past Projects
          </h3>
          <h2 className="text-4xl font-bold text-balck leading-tight mb-4">
            Let our work speak for itself
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-4xl mx-auto mb-10">
            Want to discover what we can do? Take a look at some of the amazing websites that have been created by our team of talented designers and developers.
          </p>
          <div className="relative">
            <div ref={serviceScrollRef} className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
              <div className="flex gap-6 w-max px-2">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="min-w-[350px] h-[298px] rounded-3xl border border-[#EBEFF6] shadow-md overflow-hidden bg-white snap-start"
                  >
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => scrollHorizontally(serviceScrollRef, "left")}
              aria-label="Scroll projects left"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollHorizontally(serviceScrollRef, "right")}
              aria-label="Scroll projects right"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              to="/Product1"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow-md hover:bg-blue-700 transition text-base"
            >
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transform -rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="bg-white py-16 px-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-600 text-lg font-semibold uppercase">
            Our Products
          </p>
          <h2 className="text-4xl font-bold text-balck leading-tight mb-4">
            Products by <span className="text-blue-600">Techno Vanam</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-4xl mx-auto">
            At Techno Vanam, we don’t just build for clients — we design, develop, and launch our own digital products that are used and loved by thousands across the globe.
          </p>
        </div>
        <div className="mt-12 bg-blue-50 rounded-3xl p-8 flex flex-row items-center justify-between gap-10">
          <div className="w-[50%] max-w-xl">
            <h3 className="text-blue-600 text-3xl font-bold mb-4">ATHLIXIR</h3>
            <p className="text-gray-700 text-md mb-8">
              Athlixir is currently in development — designed to empower over 50+ athlete communities across Tier-2 and Tier-3 regions. Our platform is being engineered to process 300,000+ performance data points, using AI to deliver smarter training, injury tracking, and verified recognition.
            </p>
            <div className="flex flex-row gap-6 text-left text-blue-900 font-semibold mb-6">
              <div>
                <p className="text-2xl">50+</p>
                <p className="text-sm font-medium text-gray-600">
                  Target athlete communities
                </p>
              </div>
              <div>
                <p className="text-2xl">300,000+</p>
                <p className="text-sm font-medium text-gray-600">
                  Projected performance insights powered by AI
                </p>
              </div>
            </div>
            <Link
              to="/product1"
              className="text-blue-600 font-medium text-sm"
            >
              COMING SOON — BE PART OF THE JOURNEY →
            </Link>
          </div>
          <div className="w-[50%] max-w-[400px]">
            <div className="aspect-[4/3] rounded-2xl shadow-md overflow-hidden">
              <img
                src={athlixirImage}
                alt="Preview of Athlixir platform"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative isolate overflow-hidden pt-24 pb-28 px-10 bg-gradient-to-br from-[#0047FF] via-[#0B74F8] to-[#0047FF] rounded-t-[160px]">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-10">
          <div className="w-1/2 flex justify-center">
            <video
              src={socialmediaImage}
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-w-[320px] h-[320px] object-contain rounded-xl"
              loading="lazy"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-1/2 text-white space-y-6 max-w-xl">
            <h2 className="text-4xl font-bold leading-tight">
              Ready to launch something amazing with Techno Vanam?
            </h2>
            <p className="text-lg leading-7 text-white/90">
              Our creative experts are here to design, develop, and deliver high-performing digital experiences tailored to your brand. Let’s build something great together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#2388FF] font-bold px-6 py-4 rounded-full shadow-md hover:bg-gray-100 transition text-base"
            >
              Contact Us →
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#1278FF] z-0 rounded-t-[160px]" />
      </section>
    </div>
  );
};

export default Home;