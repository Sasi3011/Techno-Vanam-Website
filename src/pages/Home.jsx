import { Link } from "react-router-dom";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cardImage1 from "../assets/ui ux.png"; // Replace with your image
import cardImage2 from "../assets/poster.png";
import cardImage3 from "../assets/n.png";
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
              From website UI/UX design, app development, content and marketing, to products
              that generate revenue and traction, we build scalable and aesthetic solutions with a performance mindset.
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
            <div className="flex flex-row justify-between items-center bg-white rounded-[32px] w-[941px] h-[450px] min-h-[420px] overflow-hidden shadow-md">
  {/* Left: Text Section */}
  <div className="flex flex-col justify-center items-start p-[60px_54px] w-[451.82px] min-w-[451.82px] h-full space-y-6">
    <h3 className="text-[28px] font-bold leading-[42px] text-[#19213D] font-['Product Sans']">
      UI/UX Design
    </h3>
    <p className="text-[18px] leading-[30px] text-[#667097] font-['Poppins']">
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

  {/* Right: Image Section with Purple BG */}
  <div
    className="flex items-start justify-center p-[14px_0px] w-[489.46px] min-w-[489.46px] h-full bg-[#B1B0FE] rounded-[32px]"
  >
    <img
      src="src/assets/ui ux.png"
      alt="UI/UX Graphic"
      className="w-full h-[422px] object-contain"
    />
  </div>
</div>

            <div className="flex flex-row w-[941.26px] h-[450px] rounded-[32px] overflow-hidden shadow-md relative bg-white">
  {/* Left: Text Content */}
  <div className="flex flex-col justify-center items-start p-[60px_54px] w-[451.82px] min-w-[451.82px] h-full z-10">
    <h3 className="text-[28px] leading-[42px] font-bold text-[#19213D] mb-[6px] font-['Product Sans']">
      Poster & Graphic Design
    </h3>
    <p className="text-[18px] leading-[30px] text-[#667097] mb-[32px] font-['Product Sans']">
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

  {/* Right: Image Section */}
  <div className="relative w-[489.46px] min-w-[489.46px] h-full bg-[#E3C7FA] rounded-[32px] overflow-hidden">
    <img
      src="src/assets/poster.png"
      alt="Poster Graphic"
      className="absolute top-[-3px] left-[18.93px] w-[453px] h-[453px] object-contain"
    />
  </div>
</div>


            <div className="flex flex-row w-[941.27px] h-[450px] rounded-[32px] overflow-hidden bg-white relative">
  {/* Left: Text Content */}
  <div className="flex flex-col justify-center items-start p-[60px_54px] w-[451.82px] min-w-[451.82px] h-full z-10">
    <h3 className="text-[28px] leading-[42px] font-bold text-[#19213D] mb-[6px] font-['Product Sans']">
      Web Development
    </h3>
    <p className="text-[18px] leading-[30px] text-[#667097] mb-[32px] font-['Product Sans']">
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

  {/* Right: Image Background */}
  <div className="relative w-[489.46px] min-w-[489.46px] h-full bg-[#F7E9FF] rounded-[32px] overflow-hidden">
    <img
      src="src/assets/n.png"
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

      {/* Why Work With Us - Scroll One by One */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold">We guide you through every step — from concept to creation</h2>
        </div>
        <div
          ref={whyUsScrollRef}
          className="flex flex-col gap-12 snap-y snap-mandatory overflow-y-scroll max-h-[600px]"
        >
          {["Idea", "Research", "Design", "Development", "Launch", "Support"].map((stage, idx) => (
            <div key={idx} className="snap-center bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">{idx + 1}. {stage}</h3>
              <p className="text-gray-600">Short description for {stage} process and why it matters.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past Projects */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Let our work speak for itself</h2>
            <Link to="/portfolio" className="text-blue-600 hover:underline">
              View More →
            </Link>
          </div>
          <div
            ref={projectsScrollRef}
            className="flex gap-6 overflow-x-auto animate-scroll-slow scrollbar-hide"
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="min-w-[200px] h-[150px] bg-gray-200 rounded-lg shadow-md"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Products by <span className="text-blue-600">Techno Vanam</span></h2>
          <div className="bg-white p-6 rounded-lg shadow-md inline-block">
            <h3 className="text-lg font-semibold mb-2">ATHLIXIR</h3>
            <p className="text-sm text-gray-600 mb-4">
              An AI-driven sports-tech ecosystem for performance insights, training, and results.
            </p>
            <Link
              to="/products"
              className="inline-block mt-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900"
            >
              Coming Soon →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to launch something amazing with Techno Vanam?
          </h2>
          <p className="mb-6">
            Our clients experience new branding, strategies, and results through performing digital experiences.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

