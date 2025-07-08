import { Link } from "react-router-dom";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cardImage1 from "../assets/ui ux.png";
import cardImage2 from "../assets/poster.png";
import cardImage3 from "../assets/n.png";

const steps = [
  {
    id: 1,
    title: "1. Idea",
    description:
      "We start by understanding your goals, vision, and challenges. Then, we create a clear action plan tailored to your project's needs.",
    bgColor: "bg-[#FFEFA8]",
    icon: "/icons/idea.png",
  },
  {
    id: 2,
    title: "2. Research",
    description:
      "Through a detailed questionnaire and business analysis, we learn what makes your brand unique — so we can design solutions that truly fit.",
    bgColor: "bg-[#D9E8FF]",
    icon: "/icons/research.png",
  },
  {
    id: 3,
    title: "3. Design",
    description:
      "Whether it's a website, app, or creative poster, our designers craft intuitive interfaces and eye-catching visuals that reflect your brand identity.",
    bgColor: "bg-[#FFDADE]",
    icon: "/icons/design.png",
  },
  {
    id: 4,
    title: "4. Development",
    description:
      "Our developers bring your project to life with fast, responsive, and SEO-optimized websites built using the latest technologies and best practices.",
    bgColor: "bg-[#E2FFE3]",
    icon: "/icons/development.png",
  },
  {
    id: 4,
    title: "4. Development",
    description:
      "Our developers bring your project to life with fast, responsive, and SEO-optimized websites built using the latest technologies and best practices.",
    bgColor: "bg-[#E2FFE3]",
    icon: "/icons/development.png",
  },
  {
    id: 4,
    title: "4. Development",
    description:
      "Our developers bring your project to life with fast, responsive, and SEO-optimized websites built using the latest technologies and best practices.",
    bgColor: "bg-[#E2FFE3]",
    icon: "/icons/development.png",
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
  const whyUsScrollRef = useRef(null);
  const projectsScrollRef = useRef(null);

  const scrollHorizontally = (ref, direction, step = 300) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -step : step,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="px-6 py-16 text-center md:text-left bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-blue-500 text-sm font-semibold">DESIGN & DEVELOPMENT STUDIO</h2>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-4">
              We craft stunning digital experiences for startups, brands & growing businesses
            </h1>
            <p className="mt-4 text-gray-600">
              We specialize in UI/UX design, web development, and creative graphics & posters. Our team combines creativity and code to build sleek websites and bold visuals that make your brand stand out
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Get in Touch
            </Link>
          </div>
          <img src="/illustration-hero.png" alt="Hero" className="w-full max-w-md" />
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-blue-500 py-16 px-4 md:px-10 text-white">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="uppercase text-sm font-semibold">Our Services</p>
                <h2 className="text-3xl font-bold mt-2 leading-snug">
                  High-impact design &<br /> development services
                </h2>
              </div>
              <Link
                to="/services"
                className="bg-white text-blue-600 font-medium px-6 py-2 rounded-full shadow hover:bg-gray-100 transition whitespace-nowrap"
              >
                View More →   
              </Link>
            </div>

            {/* Scrollable Cards */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 w-max pr-4">
                <div className="flex flex-row justify-between items-center bg-white rounded-[32px] w-[900px] h-[400px] min-h-[380px] overflow-hidden shadow-md">
                  <div className="flex flex-col justify-center items-start p-[60px_54px] w-[451.82px] min-w-[451.82px] h-full space-y-6">
                    <h3 className="text-[28px] font-bold leading-[42px] text-[#19213D] font-['Product Sans']">
                      UI/UX Design
                    </h3>
                    <p className="text-[16px] leading-[30px] text-[#667097] font-['Poppins']">
                      We craft seamless, intuitive, and visually engaging digital experiences that elevate your brand and delight your users — powered by thoughtful design and user-centered strategy.
                    </p>
                    <div className="flex flex-row items-center gap-1 mt-2">
                      <span className="text-[#2388FF] font-bold uppercase text-[16px] tracking-[0.06em] font-['Product Sans']">
                        View More
                      </span>
                      <svg
                        className="w-[16px] h-[16px] transform rotate-180"
                        fill="#2388FF"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 17l5-5-5-5v10z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-start justify-center p-[14px_0px] w-[489.46px] min-w-[489.46px] h-full bg-[#B1B0FE] rounded-[32px]">
                    <img
                      src={cardImage1}
                      alt="UI/UX Graphic"
                      className="w-full h-[350px] object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-row w-[941.26px] h-[450px] rounded-[32px] overflow-hidden shadow-md relative bg-white">
                  <div className="flex flex-col justify-center items-start p-[60px_54px] w-[451.82px] min-w-[451.82px] h-full z-10">
                    <h3 className="text-[28px] leading-[42px] font-bold text-[#19213D] mb-[6px] font-['Product Sans']">
                      Poster & Graphic Design
                    </h3>
                    <p className="text-[16px] leading-[30px] text-[#667097] mb-[32px] font-['Product Sans']">
                      We help your brand stand out and communicate clearly through bold, creative visuals —
                      from posters to promotional graphics, all designed to captivate and convert.
                    </p>
                    <div className="flex flex-row items-center gap-[4px] text-[#2388FF] uppercase font-bold tracking-[0.06em] text-[16px] font-['Product Sans']">
                      View More
                      <svg className="w-[15.76px] h-[15.99px] transform rotate-180" fill="#2388FF" viewBox="0 0 24 24">
                        <path d="M10 17l5-5-5-5v10z" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative w-[489.46px] min-w-[489.46px] h-full bg-[#E3C7FA] rounded-[32px] overflow-hidden">
                    <img
                      src={cardImage2}
                      alt="Poster Graphic"
                      className="absolute top-[-3px] left-[18.93px] w-[453px] h-[453px] object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-row w-[941.27px] h-[450px] rounded-[32px] overflow-hidden bg-white relative">
                  <div className="flex flex-col justify-center items-start p-[60px_54px] w-[451.82px] min-w-[451.82px] h-full z-10">
                    <h3 className="text-[28px] leading-[42px] font-bold text-[#19213D] mb-[6px] font-['Product Sans']">
                      Web Development
                    </h3>
                    <p className="text-[16px] leading-[30px] text-[#667097] mb-[32px] font-['Product Sans']">
                      We help your business establish a powerful online presence with fast, responsive, and scalable websites —
                      built using modern technologies and best development practices.
                    </p>
                    <div className="flex flex-row items-center gap-[4px] text-[#2388FF] uppercase font-bold tracking-[0.06em] text-[16px] font-['Product Sans']">
                      View More
                      <svg className="w-[15.76px] h-[15.99px] transform rotate-180" fill="#2388FF" viewBox="0 0 24 24">
                        <path d="M10 17l5-5-5-5v10z" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative w-[489.46px] min-w-[489.46px] h-full bg-[#F7E9FF] rounded-[32px] overflow-hidden">
                    <img
                      src={cardImage3}
                      alt="Development Services"
                      className="absolute top-[62px] left-[1.66px] w-[489px] h-[326px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
<section className="py-40 flex flex-col items-center bg-white relative">
  <div className="max-w-[1320px] w-full px-6 flex flex-col gap-10">
    {/* Heading */}
    <div className="flex flex-col gap-4">
      <h2 className="uppercase text-[#2388FF] text-sm font-bold tracking-widest">
        Why work with us
      </h2>
      <h3 className="text-4xl font-bold text-[#19213D] leading-tight max-w-2xl">
        We guide you through every step — from concept to creation
      </h3>
      <p className="text-[#667097] text-lg leading-relaxed max-w-3xl">
        With dozens of successful design and development projects, we've
        built a straightforward and effective process that ensures your
        brand looks great, functions flawlessly, and connects with your
        audience.
      </p>
    </div>

    {/* Steps */}
    <div className="flex flex-col gap-24 mt-20">
      {steps.map((step) => (
        <div
          key={step.id}
          className="flex flex-col md:flex-row gap-8 items-center justify-between bg-white shadow-md border border-[#EBEFF6] rounded-[32px] p-6 md:p-12"
        >
          {/* Icon + Label */}
          <div className="flex flex-col items-start w-full md:w-1/2 relative">
            <div className="w-24 h-24 mb-6">
              <img
                src={step.icon}
                alt={step.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-2xl font-bold text-[#19213D] mb-2">
              {step.title}
            </h4>
            <p className="text-sm text-[#667097] leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Background box with image */}
          <div
            className={`relative w-full md:w-[480px] h-[340px] ${step.bgColor} rounded-[32px] overflow-hidden flex items-center justify-center`}
          >
            <img
              src={step.icon}
              alt={step.title}
              className="w-3/4 h-3/4 object-contain opacity-90"
            />
            {/* Optional decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Past Projects */}
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-sm uppercase font-bold tracking-wider text-blue-600 mb-2">
          Past Projects
        </h3>
        <h2 className="text-4xl font-bold text-[#19213D] mb-4">
          Let our work speak for itself
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Want to discover what we can do? Take a look at some of the amazing websites
          that have been created by our team of talented designers and developers.
        </p>

        <div className="overflow-x-auto scrollbar-hide">
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
      <section className="bg-white py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <p className="text-sm text-blue-600 font-semibold mb-2 uppercase">
          Our Products
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Products by <span className="text-blue-600">Techno Vanam</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Techno Vanam, we don’t just build for clients — we design, develop,
          and launch our own digital products that are used and loved by
          thousands across the globe.
        </p>
      </div>

      {/* Highlighted Box */}
      <div className="mt-12 bg-blue-50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Block */}
        <div className="max-w-xl">
          <h3 className="text-blue-700 text-xl font-bold mb-4">ATHLIXIR</h3>
          <p className="text-gray-700 mb-6">
            Athlixir is currently in development — designed to empower over 50+
            athlete communities across Tier-2 and Tier-3 regions. Our platform
            is being engineered to process 300,000+ performance data points,
            using AI to deliver smarter training, injury tracking, and verified
            recognition.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 text-left text-blue-900 font-semibold mb-6">
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

        {/* Image Placeholder */}
        <div className="w-full max-w-md">
          <div className="aspect-[4/3] bg-gray-300 rounded-xl shadow-md flex items-center justify-center text-gray-500 text-sm">
            Image Placeholder
          </div>
        </div>
      </div>
    </section>

      {/* Call to Action */}
      <section className="relative isolate overflow-hidden pt-24 pb-28 px-6 sm:px-10 bg-gradient-to-br from-[#0047FF] via-[#0B74F8] to-[#0047FF] rounded-t-[160px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Image Placeholder (Left Side) */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 flex justify-center">
          <div className="w-80 h-80 bg-white/10 rounded-xl flex items-center justify-center text-white text-sm">
            {/* Replace this div with <img src="..." alt="" /> */}
            Social Media Image Placeholder
          </div>
        </div>

        {/* Text Content (Right Side) */}
        <div className="w-full lg:w-1/2 text-white space-y-6 max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Ready to launch something amazing with Techno Vanam?
          </h2>
          <p className="text-lg leading-7 text-white/90">
            Our creative experts are here to design, develop, and deliver
            high-performing digital experiences tailored to your brand. Let’s
            build something great together.
          </p>

          {/* CTA Button */}
          <button className="mt-4 inline-flex items-center gap-2 bg-white text-[#2388FF] font-bold px-6 py-4 rounded-full shadow-md hover:bg-gray-100 transition">
            Contact Us →
          </button>
        </div>
      </div>

      {/* Bottom Gradient Band */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#1278FF] z-0 rounded-t-[160px]" />
    </section>
    </div>
  );
};

export default Home;