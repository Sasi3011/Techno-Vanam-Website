import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cardImage1 from "../assets/ui ux.png";
import cardImage2 from "../assets/poster.png";
import cardImage3 from "../assets/n.png";
import designImage from '../assets/Home Page/Project Design Phase.png';
import devImage from '../assets/Home Page/Project Development Phase.png';
import ideaImage from '../assets/Home Page/Project Idea Phase.png';
import launchImage from '../assets/Home Page/Project Launch Phase.png';
import researchImage from '../assets/Home Page/Project Research Phase.png';
import supportImage from '../assets/Home Page/Support Phase.png';
import ideaicon from '../assets/Home Page/Idea Phase Icon.png';
import researchicon from '../assets/Home Page/Research Phase Icon.png';
import designicon from '../assets/Home Page/Design Phase Icon.png';
import devicon from '../assets/Home Page/Development Phase Icon.png';
import launchicon from '../assets/Home Page/Launch Phase Icon.png';
import supporticon from '../assets/Home Page/Support Phase Icon.png';
import athlixirImage from '../assets/Home Page/Athlixir.png';
import socialmediaImage from '../assets/Home Page/Social Media Image.png';
import pastprojectsImage from '../assets/Home Page/Past Projects.png';

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
      "Our developers bring your project to life with fast, responsive, and SEO-optimized websites built using the latest technologies and best practices.",
    bgColor: "bg-[#A79BF4]",
    img: launchImage,
    icon: launchicon,
  },
  {
    id: 6,
    title: "6. Support",
    description:
      "Our developers bring your project to life with fast, responsive, and SEO-optimized websites built using the latest technologies and best practices.",
    bgColor: "bg-[#E9FDE4]",
    img: supportImage,
    icon: supporticon,
  },
];

const projects = [
  { title: "Paradox Project", image: "/images/paradox.jpg" },
  { title: "GetUpside Project", image: "/images/getupside.jpg" },
  { title: "DeFi Project", image: "/images/defi.jpg" },
  { title: "Pixelit Project", image: "/images/pixelit.jpg" },
  { title: "Startuper Project", image: "/images/startuper.jpg" },
  { title: "Techstar Project", image: "/images/techstar.jpg" },
  { title: "Darkbit Project", image: "/images/darkbit.jpg" },
  { title: "StarUp Project", image: "/images/starup.jpg" },
  { title: "Pizzaplanet Project", image: "/images/pizzaplanet.jpg" },
  { title: "UpLead Project", image: "/images/uplead.jpg" },
];

const Home = () => {
  const serviceScrollRef = useRef(null);
  const cardRefs = useRef([]);

  const scrollHorizontally = (ref, direction, step = 300) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -step : step,
        behavior: "smooth",
      });
    }
  };

  // IntersectionObserver to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideIn");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
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
    <div className="font-poppins w-full max-w-[100vw] overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-10 w-full">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-blue-500 text-xs sm:text-sm font-semibold uppercase">DESIGN & DEVELOPMENT STUDIO</h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-3 sm:mt-4">
              We craft stunning digital experiences for startups, brands & growing businesses
            </h1>
            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
              We specialize in UI/UX design, web development, and creative graphics & posters. Our team combines creativity and code to build sleek websites and bold visuals that make your brand stand out
            </p>
            <Link
              to="/contact"
              className="mt-4 sm:mt-6 inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-sm sm:text-base"
            >
              Get in Touch
            </Link>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/illustration-hero.png"
              alt="Hero"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="min-h-screen flex items-center justify-center bg-blue-500 py-10 sm:py-16 px-4 sm:px-6 lg:px-10 text-white">
        <style>
          {`
            .animate-slideIn {
              animation: slideIn 0.5s ease-out forwards;
            }
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            .horizontal-card:nth-child(1) { animation-delay: 0.1s; }
            .horizontal-card:nth-child(2) { animation-delay: 0.2s; }
            .horizontal-card:nth-child(3) { animation-delay: 0.3s; }
          `}
        </style>
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
            <div>
              <p className="uppercase text-xs sm:text-sm font-semibold">Our Services</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-snug">
                High-impact design &<br /> development services
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-4 sm:mt-0 bg-white text-blue-600 font-medium px-4 sm:px-6 py-2 rounded-full shadow hover:bg-gray-100 transition whitespace-nowrap text-sm sm:text-base"
            >
              View More →
            </Link>
          </div>

          {/* Scrollable Cards */}
          <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div className="flex gap-4 sm:gap-6 w-max">
              <div
                ref={(el) => (cardRefs.current[0] = el)}
                className="horizontal-card flex flex-col sm:flex-row justify-between items-center bg-white rounded-3xl w-[90vw] sm:w-[800px] md:w-[900px] h-[300px] sm:h-[350px] md:h-[400px] min-w-[90vw] sm:min-w-[800px] overflow-hidden shadow-md opacity-0"
              >
                <div className="flex flex-col justify-center items-start p-6 sm:p-8 md:p-12 w-full sm:w-[50%] min-w-[50%] h-full space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold leading-tight text-[#19213D] font-['Product Sans']">
                    UI/UX Design
                  </h3>
                  <p className="text-sm sm:text-base text-[#667097] font-['Poppins']">
                    We craft seamless, intuitive, and visually engaging digital experiences that elevate your brand and delight your users — powered by thoughtful design and user-centered strategy.
                  </p>
                  <div className="flex flex-row items-center gap-1 mt-2">
                    <span className="text-[#2388FF] font-bold uppercase text-xs sm:text-sm tracking-[0.06em] font-['Product Sans']">
                      View More
                    </span>
                    <svg
                      className="w-4 h-4 transform rotate-180"
                      fill="#2388FF"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 17l5-5-5-5v10z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center p-2 sm:p-4 w-full sm:w-[50%] min-w-[50%] h-full bg-[#B1B0FE] rounded-3xl">
                  <img
                    src={cardImage1}
                    alt="UI/UX Graphic"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div
                ref={(el) => (cardRefs.current[1] = el)}
                className="horizontal-card flex flex-col sm:flex-row w-[90vw] sm:w-[800px] md:w-[900px] h-[300px] sm:h-[350px] md:h-[400px] min-w-[90vw] sm:min-w-[800px] rounded-3xl overflow-hidden shadow-md bg-white opacity-0"
              >
                <div className="flex flex-col justify-center items-start p-6 sm:p-8 md:p-12 w-full sm:w-[50%] min-w-[50%] h-full">
                  <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#19213D] mb-1 sm:mb-2 font-['Product Sans']">
                    Poster & Graphic Design
                  </h3>
                  <p className="text-sm sm:text-base text-[#667097] mb-4 sm:mb-6 font-['Product Sans']">
                    We help your brand stand out and communicate clearly through bold, creative visuals — from posters to promotional graphics, all designed to captivate and convert.
                  </p>
                  <div className="flex flex-row items-center gap-1 text-[#2388FF] uppercase font-bold tracking-[0.06em] text-xs sm:text-sm font-['Product Sans']">
                    View More
                    <svg className="w-4 h-4 transform rotate-180" fill="#2388FF" viewBox="0 0 24 24">
                      <path d="M10 17l5-5-5-5v10z" />
                    </svg>
                  </div>
                </div>
                <div className="relative w-full sm:w-[50%] min-w-[50%] h-full bg-[#E3C7FA] rounded-3xl overflow-hidden">
                  <img
                    src={cardImage2}
                    alt="Poster Graphic"
                    className="absolute top-0 left-0 w-full h-full object-contain"
                  />
                </div>
              </div>

              <div
                ref={(el) => (cardRefs.current[2] = el)}
                className="horizontal-card flex flex-col sm:flex-row w-[90vw] sm:w-[800px] md:w-[900px] h-[300px] sm:h-[350px] md:h-[400px] min-w-[90vw] sm:min-w-[800px] rounded-3xl overflow-hidden bg-white opacity-0"
              >
                <div className="flex flex-col justify-center items-start p-6 sm:p-8 md:p-12 w-full sm:w-[50%] min-w-[50%] h-full">
                  <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#19213D] mb-1 sm:mb-2 font-['Product Sans']">
                    Web Development
                  </h3>
                  <p className="text-sm sm:text-base text-[#667097] mb-4 sm:mb-6 font-['Product Sans']">
                    We help your business establish a powerful online presence with fast, responsive, and scalable websites — built using modern technologies and best development practices.
                  </p>
                  <div className="flex flex-row items-center gap-1 text-[#2388FF] uppercase font-bold tracking-[0.06em] text-xs sm:text-sm font-['Product Sans']">
                    View More
                    <svg className="w-4 h-4 transform rotate-180" fill="#2388FF" viewBox="0 0 24 24">
                      <path d="M10 17l5-5-5-5v10z" />
                    </svg>
                  </div>
                </div>
                <div className="relative w-full sm:w-[50%] min-w-[50%] h-full bg-[#F7E9FF] rounded-3xl overflow-hidden">
                  <img
                    src={cardImage3}
                    alt="Development Services"
                    className="absolute top-0 left-0 w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="min-h-screen flex items-center justify-center py-16 sm:py-24 md:py-40 bg-white">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-10">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="uppercase text-[#2388FF] text-xs sm:text-sm font-bold tracking-widest">
              Why work with us
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#19213D] leading-tight max-w-2xl">
              We guide you through every step — from concept to creation
            </h3>
            <p className="text-[#667097] text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
              With dozens of successful design and development projects, we've built a straightforward and effective process that ensures your brand looks great, functions flawlessly, and connects with your audience.
            </p>
          </div>
          <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 mt-10 sm:mt-20">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center justify-between bg-white shadow-md border border-[#EBEFF6] rounded-3xl p-4 sm:p-6 md:p-12"
              >
                <div className="flex flex-col items-start w-full md:w-1/2">
                  <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mb-4 sm:mb-6">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#19213D] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#667097] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div
                  className={`relative w-full md:w-[350px] lg:w-[350px] h-[180px] sm:h-[200px] md:h-[220px] ${step.bgColor} rounded-3xl overflow-hidden flex items-start justify-start`}
                >
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain ml-4 mt-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="min-h-screen flex items-center justify-center bg-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center w-full">
          <h3 className="text-xs sm:text-sm uppercase font-bold tracking-wider text-blue-600 mb-2">
            Past Projects
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#19213D] mb-4">
            Let our work speak for itself
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10">
            Want to discover what we can do? Take a look at some of the amazing websites that have been created by our team of talented designers and developers.
          </p>
          <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div className="flex gap-4 sm:gap-6 w-max px-2">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] h-[200px] sm:h-[250px] md:h-[298px] rounded-3xl border border-[#EBEFF6] shadow-md overflow-hidden bg-white"
                >
                  <img
                    src={pastprojectsImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 sm:mt-12 flex justify-center">
            <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-semibold text-sm sm:text-lg rounded-full shadow-md hover:bg-blue-700 transition">
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
            </button>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="min-h-screen flex items-center justify-center bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center w-full">
          <p className="text-xs sm:text-sm text-blue-600 font-semibold mb-2 uppercase">
            Our Products
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Products by <span className="text-blue-600">Techno Vanam</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            At Techno Vanam, we don't just build for clients — we design, develop, and launch our own digital products that are used and loved by thousands across the globe.
          </p>
          <div className="mt-8 sm:mt-12 bg-blue-50 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10">
            <div className="max-w-xl">
              <h3 className="text-blue-700 text-lg sm:text-xl font-bold mb-4">ATHLIXIR</h3>
              <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
                Athlixir is currently in development — designed to empower over 50+ athlete communities across Tier-2 and Tier-3 regions. Our platform is being engineered to process 300,000+ performance data points, using AI to deliver smarter training, injury tracking, and verified recognition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-left text-blue-900 font-semibold mb-4 sm:mb-6">
                <div>
                  <p className="text-xl sm:text-2xl">50+</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-600">
                    Target athlete communities
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl">300,000+</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-600">
                    Projected performance insights powered by AI
                  </p>
                </div>
              </div>
              <p className="text-blue-600 font-medium text-xs sm:text-sm">
                COMING SOON — BE PART OF THE JOURNEY →
              </p>
            </div>
            <div className="w-full max-w-[300px] sm:max-w-[400px]">
              <div className="aspect-[4/3] rounded-xl shadow-md overflow-hidden">
                <img
                  src={athlixirImage}
                  alt="Athlixir Product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="min-h-screen flex items-center justify-center relative isolate overflow-hidden pt-16 sm:pt-24 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-10 bg-gradient-to-br from-[#0047FF] via-[#0B74F8] to-[#0047FF] rounded-t-[80px] sm:rounded-t-[160px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 w-full">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
            <img
                src={socialmediaImage}
                alt="Social Media"
                className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[320px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[320px] object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 text-white space-y-4 sm:space-y-6 max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to launch something amazing with Techno Vanam?
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-7 text-white/90">
              Our creative experts are here to design, develop, and deliver high-performing digital experiences tailored to your brand. Let's build something great together.
            </p>
            <button className="mt-4 inline-flex items-center gap-2 bg-white text-[#2388FF] font-bold px-4 sm:px-6 py-2 sm:py-4 rounded-full shadow-md hover:bg-gray-100 transition text-sm sm:text-base">
              Contact Us →
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-10 bg-[#1278FF] z-0 rounded-t-[80px] sm:rounded-t-[160px]" />
      </section>
    </div>
  );
};

export default Home;