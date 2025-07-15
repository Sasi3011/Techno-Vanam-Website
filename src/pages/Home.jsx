import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
import socialmediaImage from "../assets/Home Page/Social Media Image.png";
import pastprojectsImage from "../assets/Home Page/Past Projects.png";
import HeroIllustration from "../assets/logo.png";
import ParadoxImage from "../assets/logo.png";
import GetUpsideImage from "../assets/logo.png";
import DeFiImage from "../assets/logo.png";
import PixelitImage from "../assets/logo.png";
import StartuperImage from "../assets/logo.png";
import TechstarImage from "../assets/logo.png";
import DarkbitImage from "../assets/logo.png";
import StarUpImage from "../assets/logo.png";
import PizzaplanetImage from "../assets/logo.png";
import UpLeadImage from "../assets/logo.png";

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
  { title: "Paradox Project", image: ParadoxImage },
  { title: "GetUpside Project", image: GetUpsideImage },
  { title: "DeFi Project", image: DeFiImage },
  { title: "Pixelit Project", image: PixelitImage },
  { title: "Startuper Project", image: StartuperImage },
  { title: "Techstar Project", image: TechstarImage },
  { title: "Darkbit Project", image: DarkbitImage },
  { title: "StarUp Project", image: StarUpImage },
  { title: "Pizzaplanet Project", image: PizzaplanetImage },
  { title: "UpLead Project", image: UpLeadImage },
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideIn");
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
      {/* Hero Section */}
      <section className="px-8 py-16 bg-white min-h-[50vh]">
        <div className="max-w-7xl mx-auto flex flex-row items-center gap-10">
          <div className="flex-1 text-left">
            <h2 className="text-blue-500 text-4xl font-semibold uppercase">DESIGN & DEVELOPMENT STUDIO</h2>
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
          <img
            src={HeroIllustration}
            alt="Hero illustration"
            className="w-full max-w-[500px]"
          />
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-blue-500 py-16 px-10 text-white">
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
            .vertical-card:nth-child(1) { animation-delay: 0.1s; }
            .vertical-card:nth-child(2) { animation-delay: 0.2s; }
            .vertical-card:nth-child(3) { animation-delay: 0.3s; }
          `}
        </style>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-row justify-between items-center mb-8">
            <div className="text-left">
              <p className="uppercase text-sm font-semibold">Our Services</p>
              <h2 className="text-4xl font-bold mt-2 leading-snug">
                High-impact design & development services
              </h2>
            </div>
            <Link
              to="/services"
              className="bg-white text-blue-600 font-medium px-6 py-2 rounded-full shadow hover:bg-gray-100 transition text-base"
            >
              View More →
            </Link>
          </div>

          {/* Vertical Cards */}
          <div className="flex flex-col gap-6">
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              className="vertical-card flex flex-col justify-between items-center bg-white rounded-3xl overflow-hidden shadow-md opacity-0"
            >
              <div className="flex items-center justify-center w-full h-[300px] bg-[#B1B0FE] rounded-t-3xl">
                <img
                  src={cardImage1}
                  alt="UI/UX Design Graphic"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="flex flex-col justify-center items-start p-8 w-full space-y-6">
                <h3 className="text-[28px] font-bold leading-tight text-[#19213D] font-['Product Sans']">
                  UI/UX Design
                </h3>
                <p className="text-base text-[#667097] font-['Poppins']">
                  We craft seamless, intuitive, and visually engaging digital experiences that elevate your brand and delight your users — powered by thoughtful design and user-centered strategy.
                </p>
                <div className="flex flex-row items-center gap-1 mt-2">
                  <span className="text-[#2388FF] font-bold uppercase text-sm tracking-[0.06em] font-['Product Sans']">
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
            </div>

            <div
              ref={(el) => (cardRefs.current[1] = el)}
              className="vertical-card flex flex-col justify-between items-center bg-white rounded-3xl overflow-hidden shadow-md opacity-0"
            >
              <div className="flex items-center justify-center w-full h-[300px] bg-[#E3C7FA] rounded-t-3xl">
                <img
                  src={cardImage2}
                  alt="Poster Graphic"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="flex flex-col justify-center items-start p-8 w-full space-y-6">
                <h3 className="text-[28px] font-bold text-[#19213D] font-['Product Sans']">
                  Poster & Graphic Design
                </h3>
                <p className="text-base text-[#667097] font-['Poppins']">
                  We help your brand stand out and communicate clearly through bold, creative visuals — from posters to promotional graphics, all designed to captivate and convert.
                </p>
                <div className="flex flex-row items-center gap-1 mt-2">
                  <span className="text-[#2388FF] font-bold uppercase text-sm tracking-[0.06em] font-['Product Sans']">
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
            </div>

            <div
              ref={(el) => (cardRefs.current[2] = el)}
              className="vertical-card flex flex-col justify-between items-center bg-white rounded-3xl overflow-hidden shadow-md opacity-0"
            >
              <div className="flex items-center justify-center w-full h-[300px] bg-[#F7E9FF] rounded-t-3xl">
                <img
                  src={cardImage3}
                  alt="Web Development Services"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="flex flex-col justify-center items-start p-8 w-full space-y-6">
                <h3 className="text-[28px] font-bold text-[#19213D] font-['Product Sans']">
                  Web Development
                </h3>
                <p className="text-base text-[#667097] font-['Poppins']">
                  We help your business establish a powerful online presence with fast, responsive, and scalable websites — built using modern technologies and best development practices.
                </p>
                <div className="flex flex-row items-center gap-1 mt-2">
                  <span className="text-[#2388FF] font-bold uppercase text-sm tracking-[0.06em] font-['Product Sans']">
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
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-40 flex flex-col items-center bg-white">
        <div className="max-w-7xl w-full px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-left">
            <h2 className="uppercase text-[#2388FF] text-sm font-bold tracking-widest">
              Why work with us
            </h2>
            <h3 className="text-4xl font-bold text-[#19213D] leading-tight max-w-2xl">
              We guide you through every step — from concept to creation
            </h3>
            <p className="text-[#667097] text-lg leading-relaxed max-w-3xl">
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
          <h3 className="text-sm uppercase font-bold tracking-wider text-blue-600 mb-2">
            Past Projects
          </h3>
          <h2 className="text-4xl font-bold text-[#19213D] mb-4">
            Let our work speak for itself
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Want to discover what we can do? Take a look at some of the amazing websites that have been created by our team of talented designers and developers.
          </p>
          <div className="relative">
            <div ref={serviceScrollRef} className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
              <div className="flex gap-6 w-max px-2">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="min-w-[350px] h-[298px] rounded-3xl border border-[#EBEFF6] shadow-md overflow-hidden bg-white"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => scrollHorizontally(serviceScrollRef, "left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollHorizontally(serviceScrollRef, "right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-md hover:bg-blue-700 transition">
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
      <section className="bg-white py-16 px-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-blue-600 font-semibold mb-2 uppercase">
            Our Products
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Products by <span className="text-blue-600">Techno Vanam</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            At Techno Vanam, we don’t just build for clients — we design, develop, and launch our own digital products that are used and loved by thousands across the globe.
          </p>
        </div>
        <div className="mt-12 bg-blue-50 rounded-3xl p-8 flex flex-row items-center justify-between gap-10">
          <div className="w-[50%] max-w-xl">
            <h3 className="text-blue-700 text-2xl font-bold mb-4">ATHLIXIR</h3>
            <p className="text-gray-700 text-lg mb-6">
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
            <p className="text-blue-600 font-medium text-sm">
              COMING SOON — BE PART OF THE JOURNEY →
            </p>
          </div>
          <div className="w-[50%] max-w-[400px]">
            <div className="aspect-[4/3] rounded-2xl shadow-md overflow-hidden">
              <img
                src={athlixirImage}
                alt="Athlixir platform preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative isolate overflow-hidden pt-24 pb-28 px-10 bg-gradient-to-br from-[#0047FF] via-[#0B74F8] to-[#0047FF] rounded-t-[160px]">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-10">
          <div className="w-1/2 flex justify-center">
            <img
              src={socialmediaImage}
              alt="Social Media illustration"
              className="w-full max-w-[320px] h-[320px] object-contain"
            />
          </div>
          <div className="w-1/2 text-white space-y-6 max-w-xl">
            <h2 className="text-4xl font-bold leading-tight">
              Ready to launch something amazing with Techno Vanam?
            </h2>
            <p className="text-lg leading-7 text-white/90">
              Our creative experts are here to design, develop, and deliver high-performing digital experiences tailored to your brand. Let’s build something great together.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-[#2388FF] font-bold px-6 py-4 rounded-full shadow-md hover:bg-gray-100 transition text-base">
              Contact Us →
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#1278FF] z-0 rounded-t-[160px]" />
      </section>
    </div>
  );
};

export default Home;