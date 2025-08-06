import Logo from "../assets/logo.png"; // Import the logo image
import Hero from "../assets/Margin.png";
import Blog from "../assets/Blog.png";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SocialMediaImage from "../assets/Contact Us.mp4";
const teamMembers = [
  {
    name: "Sasikiran TT",
    role: "Founder & CEO",
    img: "/placeholder1.jpg",
    instagram: "https://www.instagram.com/sasi_._06/",
    linkedin: "https://www.linkedin.com/in/sasikiran-3031s/",
  },
  {
    name: "Sanjana B",
    role: "Co-founder & CTO",
    img: "/placeholder2.jpg",
    instagram: "http://instagram.com/sanjudarla07/",
    linkedin: "https://www.linkedin.com/in/sanjana-0831s/",
  },
  {
    name: "Surya P",
    role: "CPO",
    img: "/placeholder3.jpg",
    instagram: "https://www.instagram.com/__suryap07__/",
    linkedin: "https://www.linkedin.com/in/surya-p08/",
  },
];

const values = [
  {
    title: "Innovation",
    description:
        "We constantly challenge norms by turning creative ideas into practical, high-impact digital solutions. Our innovative mindset helps clients stay ahead in a fast-evolving tech landscape through thoughtful design, experimentation, and problem-solving.",
    gradient: "from-[#807DFF] to-[rgba(186,185,255,0.34)]",
    bgColor: "bg-[#F3F3FF]",
    hoverShadow: "hover:shadow-[#807DFF]/40",
    icon: "/icons/innovation.svg",
  },
  {
    title: "Growth",
    description:
     "We believe growth is continuous—for our team, our clients, and the communities we support. Through curiosity, reflection, and learning, we constantly refine our skills and strategies to create lasting value at every stage.",
    gradient: "from-[#38D4FF] to-[#D9F7FF]",
    bgColor: "bg-[#E6FAFF]",
    hoverShadow: "hover:shadow-[#38D4FF]/40",
    icon: "/icons/growth.svg",
  },
  {
    title: "Ownership",
    description:
         "Every project we take on is our responsibility. From the first brief to final delivery, we lead with accountability, craftsmanship, and integrity—ensuring the work we do truly reflects our promise of excellence.",
    gradient: "from-[#E541ED] to-[#FEEBFF]",
    bgColor: "bg-[#FCECFA]",
    hoverShadow: "hover:shadow-[#E541ED]/40",
    icon: "/icons/ownership.svg",
  },
  {
    title: "Team Work",
    description:
     "Collaboration is at the heart of our process. We thrive on sharing ideas, offering support, and celebrating collective wins—because we know great results come from unity, trust, and a shared sense of purpose.",
    gradient: "from-[#FF6B81] to-[#FFE6EA]",
    bgColor: "bg-[#FFF0F3]",
    hoverShadow: "hover:shadow-[#FF6B81]/40",
    icon: "/icons/teamwork.svg",
  },
  {
    title: "Commitment",
    description:
 "We commit deeply to our clients' visions and to our craft. Through consistency, passion, and attention to detail, we turn complex challenges into meaningful outcomes—delivering with care, every single time.",
     gradient: "from-[#FFD600] to-[#FFF9DB]",
    bgColor: "bg-[#FFFAE6]",
    hoverShadow: "hover:shadow-[#FFD600]/40",
    icon: "/icons/commitment.svg",
  },
  {
    title: "Positivity",
    description:
            "A positive attitude shapes everything we do—from communication to creativity. We face every challenge with optimism, resilience, and a problem-solving mindset that fuels momentum and builds stronger, happier partnerships.",
    gradient: "from-[#34D399] to-[#D1FAE5]",
    bgColor: "bg-[#E6FFF6]",
    hoverShadow: "hover:shadow-[#34D399]/40",
    icon: "/icons/positivity.svg",
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
      <section className="flex flex-col items-center pt-[65px] pb-32 mt-23  pr-16  pl-16">
        <div className="flex flex-row items-center gap-1 w-full max-w-7xl">
          {/* Left: Copy Block */}
          <div>
            <div className="flex items-center  gap-3 text-black font-bold">
          <span className="text-5xl">
            We are
          </span>
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Logo"
              className="w-[60px] h-[60px] object-contain"
            />
            <span className="text-5xl whitespace-nowrap">
              Techno Vanam
            </span>
          </div>
        </div>
            <p className="mt-6 text-lg leading-relaxed text-[#667097]">
              We’re not just an agency — we’re a creative tech studio passionate<br/>
              about crafting impactful digital products. From empowering
              startups<br/> to building our own innovations, we design, develop, and
              launch <br/>experiences that move people and businesses forward.
            </p>
<div className="mt-8 flex items-center gap-2">
  {/* Icon */}
  <div
    onClick={() =>
      document.getElementById("what-drives-us")?.scrollIntoView({ behavior: "smooth" })
    }
    className="flex items-center gap-2 cursor-pointer group transition-transform duration-200 hover:scale-105"
  >
    {/* Scroll icon with bounce and hover effect */}
    <span className="flex justify-center items-end w-4 h-6 border-2 border-[#2388FF] rounded-full relative overflow-hidden group-hover:border-blue-400 transition-colors duration-200">
      <span className="w-1.5 h-1.5 bg-[#2388FF] rounded-full mb-1 animate-bounce-dot group-hover:bg-blue-400 transition-colors duration-200" />
    </span>

    {/* Scroll text with hover effect */}
    <span className="font-bold uppercase text-base text-[#2388FF] group-hover:text-blue-400 transition-colors duration-200">
      Scroll down
    </span>
  </div>
</div>



          </div>
          {/* Right: Hero Artwork */}
          <div className="w-1/2 relative">
            
            <img
              src={Hero}
              alt="logo circle"
              className="absolute inset-x-10 mx-auto  w-[800px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ===== Transform Section ===== */}
       
       <section className="flex flex-col items-center bg-[#2388FF] pt-8 pb-8 rounded-b-[120px] px-8 space-y-6 overflow-hidden">
  {/* "design" */}
  <motion.h2
    ref={ref1}
    initial={{ opacity: 0, y: 60, scale: 0.9 }}
    animate={{
      opacity: inView1 && !inView2 ? 1 : 0.3,
      y: inView1 ? 0 : 30,
      scale: inView1 ? 1 : 0.95,
    }}
    transition={{ duration: 1, type: "spring", stiffness: 80 }}
    className="font-bold text-[80px] leading-tight text-white text-center"
  >
    design
  </motion.h2>

  {/* Center: Transform Message */}
  <motion.h1
    ref={ref2}
    initial={{ opacity: 0, y: 80, scale: 0.8 }}
    animate={{
      opacity: inView2 ? 1 : 0.3,
      y: inView2 ? 0 : 40,
      scale: inView2 ? 1 : 0.95,
    }}
    transition={{ duration: 1.1, delay: 0.2, type: "spring", stiffness: 60 }}
    className="font-bold text-[80px] leading-tight text-white text-center"
  >
    We transform digital presence
  </motion.h1>

  {/* "develop" */}
  <motion.h2
    ref={ref3}
    initial={{ opacity: 0, y: 60, scale: 0.9 }}
    animate={{
      opacity: inView3 && !inView2 ? 1 : 0.3,
      y: inView3 ? 0 : 30,
      scale: inView3 ? 1 : 0.95,
    }}
    transition={{ duration: 1, type: "spring", stiffness: 80 }}
    className="font-bold text-[80px] leading-tight text-white text-center"
  >
    develop
  </motion.h2>
</section>


      {/* ===== Content Grid Section ===== */}
      <section id="what-drives-us" className="flex flex-col items-center bg-[#F6F8FC] px-8 pt-20 pb-6"    >
        <div className="w-full max-w-7xl">
          {/* What Drives Us */}
          <div className="flex flex-col items-center gap-4 mb-20 text-center">
            <h2 className="text-5xl font-bold text-[#19213D]">
              What Drives Us
            </h2>
            <p className="text-lg leading-relaxed text-[#667097] max-w-4xl">
              In 2025, we began building our own digital products—driven by the
              same vision and purpose that fuel everything we do: turning ideas
              into impactful, user‑centered experiences.
            </p>
          </div>

          {/* First Row: Mission + Illustration */}
          <div className="flex flex-row gap-10 mb-10">

            {/* Mission Card */}
            <div className="w-2/3 bg-white border border-[#EBEFF6] shadow-md rounded-3xl p-8 pb-15">
              <h3 className="text-3xl font-bold text-[#19213D] mb-6">
                Our Mission: <br />
                Turning Vision into Reality
              </h3>
              <p className="text-lg leading-relaxed text-[#667097] mb-12">
                We believe great design is the foundation of every successful
                brand. At Techno Vanam, we craft intuitive user experiences,
                build high-performance websites, and design graphics that leave
                a lasting impression. Innovation and functionality guide
                everything we create.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-lg bg-[#F6F6F6]" />
                    <img
                      src="/placeholder-idea.svg"
                      alt=""
                      className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[#2F2F2F]">
                      Design-led Development
                    </p>
                    <p className="text-sm text-[#667097]">
                      We blend aesthetics and technology to create products
                      users love.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-lg bg-[#F6F6F6]" />
                    <img
                      src="/placeholder-star.svg"
                      alt=""
                      className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <p className="font-bold tex xt-lg text-[#2F2F2F]">
                      Scalable & Creative
                    </p>
                    <p className="text-sm text-[#667097]">
                      From startups to enterprises, we deliver flexible and
                      impactful digital solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Illustration Card */}
            <div className="w-1/3 flex items-center justify-center bg-white border border-[#EBEFF6] shadow-md rounded-xl p-8">
              <img
                src="/placeholder-wireframe.png"
                alt="Wireframe illustration"
                className="w-full max-w-[90%] h-auto"
              />
            </div>
          </div>

          {/* Second Row: Trophy + Vision */}
          <div className="flex flex-row gap-10 mb-6">

            {/* Trophy Card */}
            <div className="w-1/3 relative bg-white border border-[#EBEFF6] shadow-md rounded-xl flex items-center justify-center p-10">
              <img
                src="/your-centered-image.png"
                alt="Centered illustration"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Vision Card */}
            <div className="w-2/3 bg-white border border-[#EBEFF6] shadow-md rounded-xl p-8">
              <h3 className="text-3xl font-bold text-[#19213D] mb-6">
                Our Vision:
              </h3>
              <p className="text-lg leading-relaxed text-[#667097] mb-12">
                To build a digital ecosystem where design, technology, and
                human-centric thinking shape better experiences for all. We
                envision a future where businesses—big or small—can access
                high-quality digital tools that drive growth, creativity, and
                connection.
              </p>
              <ul className="space-y-3">
                {[
                  "Empowering creators through smart, intuitive platforms",
                  "Driving meaningful change with every project",
                  "Making digital innovation accessible to everyone",
                ].map((txt, i) => (
                  <li key={i} className="relative pl-8 text-lg leading-relaxed text-[#667097]">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-[#31C65B] flex items-center justify-center">
                      <span className="w-2 h-2 rotate-45 border-b-2 border-r-2 border-[#31C65B]" />
                    </span>
                    {txt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

{/* === CTA Section in Card Style === */}
      {/* === CTA Section in Card Style === */}
<section className="flex flex-col items-center bg-[#F6F8FC] px-8 pb-20 pt-0">
  <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* === Card 1: Explore What We Do === */}
    <div className="relative bg-white border border-[#EBEFF6] shadow-md rounded-xl flex flex-col justify-between items-center p-8 h-[400px]">
      {/* Optional Logo */}
      <img
        src="/placeholder-figma.png"
        alt="Figma logo"
        className="absolute left-4 top-4 w-16"
      />
      
      <img
        src={Blog}
        alt="Trophy illustration"
        className="w-full max-w-[50%] mt-12"
      />

      <p className="text-center font-bold text-2xl text-[#19213D] mt-38">
        Explore What <br /> We Do
      </p>

      <div className="flex flex-col items-center mt-4">
        <Link to="/Services" className="group flex items-center gap-2 text-base font-bold uppercase text-[#2388FF] hover:text-blue-400 transition-colors duration-200">
          OUR SERVICES
          <svg
            width="12"
            height="10"
            viewBox="0 0 16 14"
            className="fill-current stroke-current text-[#2388FF] group-hover:text-blue-400"
          >
            <path d="M1 7h14M9 1l6 6-6 6" strokeWidth="2" />
          </svg>
        </Link>
      </div>
    </div>

    {/* === Card 2: Crafted with Passion === */}
    <div className="bg-white border border-[#EBEFF6] shadow-md rounded-xl flex flex-col justify-between items-center p-8 h-[400px]">
      <img
        src="/placeholder-hubspot.png"
        alt="HubSpot badge"
        className="w-full max-w-[90%] h-auto mt-4"
      />

      <p className="text-center font-bold text-2xl text-[#19213D] mt-42">
        Crafted with Passion <br /> Built to Inspire
      </p>

      <div className="flex flex-col items-center mt-4">
        <button className="flex items-center gap-2 text-[#FF6C4C] text-base font-bold uppercase">
          SEE ALL
          <svg
            width="12"
            height="10"
            viewBox="0 0 16 14"
            className="stroke-[#FF6C4C]"
          >
            <path d="M1 7h14M9 1l6 6-6 6" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>

    {/* === Card 3: Newsletter Signup === */}
     <div className="bg-[#2388FF] shadow-md rounded-xl p-8 text-white flex flex-col justify-between h-[400px]">
      <div>
        <h3 className="font-bold text-3xl mb-4">Join with our Network</h3>
        <p className="text-lg leading-relaxed mb-6">
          Collaborate with us on bold new ventures, from brand identity to<br/> full-stack innovation.
          Let’s grow together.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            className="w-full h-14 pl-14 pr-4 text-base text-white/90 placeholder:text-white/90 bg-transparent border border-white/90 rounded-full focus:outline-none"
          />
          <svg
            viewBox="0 0 18 14"
            className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 fill-white/90"
          >
            <path d="M1 1h16v12H1z" fill="none" stroke="currentColor" />
            <path d="M1 1l8 6 8-6" fill="none" stroke="currentColor" />
          </svg>
          {error && <p className="text-red-300 text-sm mt-1">{error}</p>}
        </div>
        <button
          onClick={handleConnect}
          className="w-full h-14 flex items-center justify-center font-bold text-base text-[#2388FF] bg-white hover:bg-slate-100 rounded-full"
        >
          Let’s Connect
        </button>
      </div>
    </div>

  </div>
</section>


      {/* ===== Team Section ===== */}
      <section className="w-full bg-white py-16 px-8">
        <div className="text-center mb-12">
          <p className="text-[#0368FF] text-lg font-bold">
            ~ Team Member ~
          </p>
          <h2 className="text-4xl font-bold text-black max-w-3xl mx-auto">
            Our team member is ready to <br/>help our clients!
          </h2>
          <p className="text-lg text-[#667097] mt-2 max-w-4xl mx-auto">
            We love what we do and we do it with passion. We value the experimentation of the message and smart incentives.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-10 pb-8">

  {teamMembers.map((member, index) => (
    <div key={index} className="flex flex-col items-center w-80 relative">
      
      {/* Image Section */}
      <div className="w-full h-[400px] bg-gray-200 rounded-lg relative">

        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover"
        />

        {/* Card Positioned at Bottom */}
            <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[280px] bg-white rounded-lg shadow-md flex flex-col items-center pb-4 z-50">
              <div className="h-2 w-full bg-[#0368FF] rounded-t-lg"></div>
              <div className="text-center mt-3">
                <h3 className="text-xl font-bold text-black">{member.name}</h3>
                <p className="text-base text-gray-600">{member.role}</p>
              </div>
              <div className="flex items-center gap-6 mt-3">
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-[#E4405F] w-8 h-8" />
      </a>
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-[#0077B5] w-8 h-8" />
      </a>
              </div>
            </div>

      </div>
    </div>
  ))}
</div>

      </section>

<section className="w-full py-16 px-8 bg-white flex flex-col items-center">
  <div className="max-w-3xl text-center mb-12">
    <h2 className="text-4xl font-bold text-black">
      The values that drive us
    </h2>
    <p className="text-lg leading-relaxed text-[#667097] mt-2">
      In 2025, Technovanam was born from a simple idea—why just design for others when we can design for impact? We build with purpose, create with clarity, and craft experiences that matter.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
    {values.map((value, idx) => (
      <div
        key={idx}
        className={`w-full min-w-[280px] max-w-[400px] h-auto border border-gray-100 rounded-xl p-8 transform transition duration-300
          shadow-md hover:scale-105 
          ${value.bgColor} 
          ${value.hoverShadow}
        `}
      >
        <div className="relative w-20 h-20 mb-4">
          <div className={`absolute w-16 h-16 rounded-lg bg-gradient-to-b ${value.gradient}`} />
          <div className="absolute w-16 h-16 left-2 top-2 rounded-lg border border-white backdrop-blur-md bg-[rgba(238,238,238,0.61)]" />
          <img
            src={value.icon}
            alt={value.title}
            className="absolute left-5 top-5 w-8 h-8"
          />
        </div>
        <h3 className="text-2xl font-bold text-[#19213D] mb-2">
          {value.title}
        </h3>
        <p className="text-md leading-relaxed text-[#667097]">
          {value.description}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* ===== CTA Section ===== */}
 {/* CTA Section */}
<section className="w-full flex flex-col items-center h-[600px] bg-blue-600">
  <div className="w-full max-w-7xl flex flex-row items-center justify-between gap-8">
    
    {/* Image First */}
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


    {/* Content Second (on the right now) */}
    <div className="w-1/2 text-white text-left px-8 pt-20 pb-20">
      <h2 className="text-5xl font-bold leading-tight">
        Ready to launch something amazing with Techno Vanam?
      </h2>
      <p className="text-lg mt-4">
        Our creative experts are here to design, develop, and deliver high-performing digital experiences tailored to your brand. Let’s build something great together.
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
</section>
      </>
    );
  }