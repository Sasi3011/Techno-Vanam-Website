import Logo from "../assets/logo.png"; // Import the logo image
import Hero from "../assets/logo.png";
import Blog from "../assets/Blog.png";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SocialMediaImage from "../assets/Contact Us.mp4";
import Mission from "../assets/About Page/Mission.png";
import Commitment from "../assets/About Page/Commitment.png";
import TeamWork from "../assets/About Page/Team Work.png";
import Positivity from "../assets/About Page/Postivity.png";
import Growth from "../assets/About Page/Growth.png";
import Innovation from "../assets/About Page/Innovatioon.png";
import Ownership from "../assets/About Page/Ownership.png";
import Vission from "../assets/About Page/Vission.png";
import Design from "../assets/Design.png";
import Scale from "../assets/Icon.png";
import Sasi from "../assets/About Page/Sasi.png";
import Sanju from "../assets/About Page/Sanju.png";
import Surya from "../assets/About Page/Surya.png";

const teamMembers = [
  {
    name: "Sasikiran TT",
    role: "Founder & CEO",
    img: Sasi,
    instagram: "https://www.instagram.com/sasi_._06/",
    linkedin: "https://www.linkedin.com/in/sasikiran-3031s/",
  },
  {
    name: "Sanjana B",
    role: "Co-founder & CTO",
    img: Sanju,
    instagram: "http://instagram.com/sanjudarla07/",
    linkedin: "https://www.linkedin.com/in/sanjana-0831s/",
  },
  {
    name: "Surya P",
    role: "CPO",
    img: Surya,
    instagram: "https://www.instagram.com/__suryap07__/",
    linkedin: "https://www.linkedin.com/in/surya-p08/",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We constantly challenge norms by turning creative ideas into practical, high-impact digital solutions. Our innovative mindset helps clients stay ahead in a fast-evolving tech landscape through thoughtful design, experimentation, and problem-solving.",
    gradient: "from-[#8B5CF6] to-[#DDD6FE]", // Purple
    bgColor: "bg-[#F3E8FF]",
    hoverShadow: "hover:shadow-[#8B5CF6]/40",
    img: Innovation,
  },
  {
    title: "Growth",
    description:
      "We believe growth is continuous—for our team, our clients, and the communities we support. Through curiosity, reflection, and learning, we constantly refine our skills and strategies to create lasting value at every stage.",
    gradient: "from-[#10B981] to-[#D1FAE5]", // Green
    bgColor: "bg-[#ECFDF5]",
    hoverShadow: "hover:shadow-[#10B981]/40",
    img: Growth,
  },
  {
    title: "Ownership",
    description:
      "Every project we take on is our responsibility. From the first brief to final delivery, we lead with accountability, craftsmanship, and integrity—ensuring the work we do truly reflects our promise of excellence.",
    gradient: "from-[#1E3A8A] to-[#DBEAFE]", // Dark Blue
    bgColor: "bg-[#E0F2FE]",
    hoverShadow: "hover:shadow-[#1E3A8A]/40",
    img: Ownership,
  },
  {
    title: "Team Work",
    description:
      "Collaboration is at the heart of our process. We thrive on sharing ideas, offering support, and celebrating collective wins—because we know great results come from unity, trust, and a shared sense of purpose.",
    gradient: "from-[#F97316] to-[#FFEDD5]", // Orange
    bgColor: "bg-[#FFF7ED]",
    hoverShadow: "hover:shadow-[#F97316]/40",
    img: TeamWork,
  },
  {
    title: "Commitment",
    description:
      "We commit deeply to our clients' visions and to our craft. Through consistency, passion, and attention to detail, we turn complex challenges into meaningful outcomes—delivering with care, every single time.",
    gradient: "from-[#EF4444] to-[#FEE2E2]", // Red
    bgColor: "bg-[#FEF2F2]",
    hoverShadow: "hover:shadow-[#EF4444]/40",
    img: Commitment,
  },
  {
    title: "Positivity",
    description:
      "A positive attitude shapes everything we do—from communication to creativity. We face every challenge with optimism, resilience, and a problem-solving mindset that fuels momentum and builds stronger, happier partnerships.",
    gradient: "from-[#FACC15] to-[#FEF9C3]", // Yellow
    bgColor: "bg-[#FEFCE8]",
    hoverShadow: "hover:shadow-[#FACC15]/40",
    img: Positivity,
  },
];


export default function About() {
  const [ref1, inView1] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5 });
  const [ref3, inView3] = useInView({ threshold: 0.5 });
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleConnect = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    navigate(`/Contact?email=${encodeURIComponent(email)}`);
  };

  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="flex flex-col items-center pt-16 sm:pt-20 lg:pt-[65px] pb-16 sm:pb-24 lg:pb-32 mt-6 sm:mt-12 lg:mt-23 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-1 w-full max-w-7xl">
          {/* Left: Copy Block */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-black font-bold">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">We are</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px] object-contain"
                />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">Techno Vanam</span>
              </div>
            </div>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-[#667097] text-center lg:text-left">
              We're not just an agency — we're a creative tech studio passionate
              <span className="hidden sm:inline"><br/></span>
              <span className="sm:hidden"> </span>
              about crafting impactful digital products. From empowering startups
              <span className="hidden sm:inline"><br/></span>
              <span className="sm:hidden"> </span>
              to building our own innovations, we design, develop, and launch
              <span className="hidden sm:inline"><br/></span>
              <span className="sm:hidden"> </span>
              experiences that move people and businesses forward.
            </p>
            <div className="mt-6 sm:mt-8 flex items-center justify-center lg:justify-start gap-2">
              <div
                onClick={() =>
                  document.getElementById("what-drives-us")?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 cursor-pointer group transition-transform duration-200 hover:scale-105"
              >
                <span className="flex justify-center items-end w-3 h-5 sm:w-4 sm:h-6 border-2 border-[#2388FF] rounded-full relative overflow-hidden group-hover:border-blue-400 transition-colors duration-200">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#2388FF] rounded-full mb-1 animate-bounce-dot group-hover:bg-blue-400 transition-colors duration-200" />
                </span>
                <span className="font-bold uppercase text-sm sm:text-base text-[#2388FF] group-hover:text-blue-400 transition-colors duration-200">
                  Scroll down
                </span>
              </div>
            </div>
          </div>
          {/* Right: Hero Artwork */}
          <div className="w-full lg:w-1/2 relative">
            {/* <img
              src={Hero}
              alt="logo circle"
              className="absolute inset-x-10 mx-auto w-[800px] h-auto object-contain"
            /> */}
          </div>
        </div>
      </section>

      {/* ===== Transform Section ===== */}
      <section className="flex flex-col items-center bg-[#2388FF] pt-6 sm:pt-8 pb-6 sm:pb-8 rounded-b-[60px] sm:rounded-b-[80px] lg:rounded-b-[120px] px-4 sm:px-8 space-y-4 sm:space-y-6 overflow-hidden">
        {/* "design" */}
        <h2
          ref={ref1}
          className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight text-white/70 text-center"
        >
          design
        </h2>

        {/* Center: Transform Message */}
        <h1
          ref={ref2}
          className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight text-white text-center px-2"
        >
          We transform digital presence
        </h1>

        {/* "develop" */}
        <h2
          ref={ref3}
          className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight text-white/70 text-center"
        >
          develop
        </h2>
      </section>

      {/* ===== Content Grid Section ===== */}
      <section id="what-drives-us" className="flex flex-col items-center bg-white px-4 sm:px-8 pt-12 sm:pt-16 lg:pt-20 pb-6">
        <div className="w-full max-w-7xl">
          {/* What Drives Us */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#19213D]">
              What Drives Us
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#667097] max-w-4xl px-2">
              In 2025, we began building our own digital products—driven by the
              same vision and purpose that fuel everything we do: turning ideas
              into impactful, user‑centered experiences.
            </p>
          </div>

          {/* First Row: Mission + Illustration */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8 lg:mb-10">
            {/* Mission Card */}
            <div className="w-full lg:w-2/3 bg-white border border-[#EBEFF6] shadow-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 pb-8 sm:pb-12 lg:pb-15">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#19213D] mb-3 sm:mb-4 lg:mb-6">
                Our Mission: <br />
                Turning Vision into Reality
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#667097] mb-6 sm:mb-8 lg:mb-12">
                We believe great design is the foundation of every successful
                brand. At Techno Vanam, we craft intuitive user experiences,
                build high-performance websites, and design graphics that leave
                a lasting impression. Innovation and functionality guide
                everything we create.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex gap-3 sm:gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-[#F6F6F6]" />
                    <img
                      src={Design}
                      alt="design"
                      className="absolute top-1/2 left-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm sm:text-base lg:text-lg text-[#2F2F2F]">
                      Design-led Development
                    </p>
                    <p className="text-xs sm:text-sm text-[#667097]">
                      We blend aesthetics and technology to create products
                      users love.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-[#F6F6F6]" />
                    <img
                      src={Scale}
                      alt=""
                      className="absolute top-1/2 left-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm sm:text-base lg:text-lg text-[#2F2F2F]">
                      Scalable & Creative
                    </p>
                    <p className="text-xs sm:text-sm text-[#667097]">
                      From startups to enterprises, we deliver flexible and
                      impactful digital solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Illustration Card */}
            <div className="w-full lg:w-1/3 flex items-center justify-center bg-white border border-[#EBEFF6] shadow-md rounded-xl p-4 sm:p-6 lg:p-8 min-h-[200px] sm:min-h-[250px]">
              <img
                src={Mission}
                alt="Mission"
                className="w-full max-w-[100%] h-auto"
              />
            </div>
          </div>

          {/* Second Row: Trophy + Vision */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 mb-6">
            {/* Trophy Card */}
            <div className="w-full lg:w-1/3 relative bg-white border border-[#EBEFF6] shadow-md rounded-xl flex items-center justify-center p-6 sm:p-8 lg:p-10 min-h-[200px] sm:min-h-[250px]">
              <img
                src={Vission}
                alt="Vission"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Vision Card */}
            <div className="w-full lg:w-2/3 bg-white border border-[#EBEFF6] shadow-md rounded-xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#19213D] mb-3 sm:mb-4 lg:mb-6">
                Our Vision:
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#667097] mb-6 sm:mb-8 lg:mb-12">
                To build a digital ecosystem where design, technology, and
                human-centric thinking shape better experiences for all. We
                envision a future where businesses—big or small—can access
                high-quality digital tools that drive growth, creativity, and
                connection.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Empowering creators through smart, intuitive platforms",
                  "Driving meaningful change with every project",
                  "Making digital innovation accessible to everyone",
                ].map((txt, i) => (
                  <li key={i} className="relative pl-6 sm:pl-8 text-sm sm:text-base lg:text-lg leading-relaxed text-[#667097]">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-[#31C65B] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 border-b-2 border-r-2 border-[#31C65B]" />
                    </span>
                    {txt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Team Section ===== */}
      <section className="w-full bg-[#F6F8FC] py-12 sm:py-16 px-4 sm:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[#0368FF] text-base sm:text-lg font-bold">
            ~ Team Member ~
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black max-w-3xl mx-auto">
            Our team member is ready to <br className="hidden sm:block"/>help our clients!
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#667097] mt-2 max-w-4xl mx-auto px-2">
            We love what we do and we do it with passion. We value the experimentation of the message and smart incentives.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center gap-6 sm:gap-8 lg:gap-10 pb-4 sm:pb-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center w-full sm:w-80 lg:w-80 relative mx-auto">
              <div className="w-full max-w-[280px] sm:max-w-full h-[300px] sm:h-[350px] lg:h-[400px] bg-gray-200 rounded-lg relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-[-50px] sm:bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[280px] sm:w-[300px] lg:w-[320px] bg-white rounded-lg shadow-md flex flex-col items-center pb-3 sm:pb-4 z-50">
                  <div className="h-2 w-full bg-[#0368FF] rounded-t-lg"></div>
                  <div className="text-center mt-2 sm:mt-3 px-2">
                    <h3 className="text-lg sm:text-xl font-bold text-black">{member.name}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{member.role}</p>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6 mt-2 sm:mt-3">
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="text-[#E4405F] w-6 h-6 sm:w-8 sm:h-8" />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-[#0077B5] w-6 h-6 sm:w-8 sm:h-8" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Spacer for overlapping card */}
              <div className="h-12 sm:h-16"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Values Section ===== */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-8 bg-white flex flex-col items-center">
        <div className="max-w-3xl text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
            The values that drive us
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#667097] mt-2 px-2">
            In 2025, Technovanam was born from a simple idea—why just design for others when we can design for impact? We build with purpose, create with clarity, and craft experiences that matter.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl">
          {values.map((value, idx) => (
            <div
              key={idx}
              className={`w-full min-w-0 h-auto border border-gray-100 rounded-xl p-4 sm:p-6 lg:p-8 transform transition duration-300 shadow-md hover:scale-105 ${value.bgColor} ${value.hoverShadow}`}
            >
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mb-3 sm:mb-4">
                <div className={`absolute w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-gradient-to-b ${value.gradient}`} />
                <div className="absolute w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 left-1 top-1 sm:left-2 sm:top-2 rounded-lg border border-white backdrop-blur-md bg-[rgba(238,238,238,0.61)]" />
                <img
                  src={value.img}
                  alt={value.title}
                  className="absolute left-2 top-2 sm:left-3 sm:top-3 lg:left-4 lg:top-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#19213D] mb-2">
                {value.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-md leading-relaxed text-[#667097]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      {/* <section className="w-full flex flex-col items-center h-[600px] bg-blue-600">
        <div className="w-full max-w-7xl flex flex-row items-center justify-between gap-8">
          <div className="w-1/2 h-[600px]">
            <video
              src={SocialMediaImage}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-1/2 text-white text-left px-8 pt-20 pb-20">
            <h2 className="text-5xl font-bold leading-tight">
              Ready to launch something amazing with Techno Vanam?
            </h2>
            <p className="text-lg mt-4">
              Our creative experts are here to design, develop, and deliver high-performing digital experiences tailored to your brand. Let's build something great together.
            </p>
            <div className="pt-6 flex justify-start">
              <Link to="/contact">
                <button className="flex items-center gap-2 px-7 py-4 bg-white text-blue-600 font-bold text-base rounded-full border-2 shadow-md hover:bg-gray-100 hover:bg-transparent hover:text-white transition">
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 transform -scale-y-100"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}