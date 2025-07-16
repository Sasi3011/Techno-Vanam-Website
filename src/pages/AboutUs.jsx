import React from "react";
import Logo from "../assets/logo.png"; // Import the logo image
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const teamMembers = [
  {
    name: "Sasikiran TT",
    role: "CEO & Founder",
    img: "/placeholder1.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Sanjana B",
    role: "CTO & Co-founder",
    img: "/placeholder2.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Surya P",
    role: "Marketing Lead",
    img: "/placeholder3.jpg",
    instagram: "#",
    linkedin: "#",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We constantly challenge norms by turning creative ideas into practical, high-impact digital solutions. Our innovative mindset helps clients stay ahead in a fast-evolving tech landscape through thoughtful design, experimentation, and problem-solving.",
    gradient: "from-[#807DFF] to-[rgba(186,185,255,0.34)]",
    border: "border-[#5956E9]",
    icon: "/placeholder-icon1.svg",
  },
  {
    title: "Growth",
    description:
      "We believe growth is continuous—for our team, our clients, and the communities we support. Through curiosity, reflection, and learning, we constantly refine our skills and strategies to create lasting value at every stage.",
    gradient: "from-[#38D4FF] to-[#D9F7FF]",
    border: "border-[#33B6DA]",
    icon: "/placeholder-icon2.svg",
  },
  {
    title: "Ownership",
    description:
      "Every project we take on is our responsibility. From the first brief to final delivery, we lead with accountability, craftsmanship, and integrity—ensuring the work we do truly reflects our promise of excellence.",
    gradient: "from-[#E541ED] to-[#FEEBFF]",
    border: "border-[#E749EE]",
    icon: "/placeholder-icon3.svg",
  },
  {
    title: "Team Work",
    description:
      "Collaboration is at the heart of our process. We thrive on sharing ideas, offering support, and celebrating collective wins—because we know great results come from unity, trust, and a shared sense of purpose.",
    gradient: "from-[#E541ED] to-[#FEEBFF]",
    border: "border-[#E749EE]",
    icon: "/placeholder-icon3.svg",
  },
  {
    title: "Commitment",
    description:
      "We commit deeply to our clients' visions and to our craft. Through consistency, passion, and attention to detail, we turn complex challenges into meaningful outcomes—delivering with care, every single time.",
    gradient: "from-[#E541ED] to-[#FEEBFF]",
    border: "border-[#E749EE]",
    icon: "/placeholder-icon3.svg",
  },
  {
    title: "Positivity",
    description:
      "A positive attitude shapes everything we do—from communication to creativity. We face every challenge with optimism, resilience, and a problem-solving mindset that fuels momentum and builds stronger, happier partnerships.",
    gradient: "from-[#E541ED] to-[#FEEBFF]",
    border: "border-[#E749EE]",
    icon: "/placeholder-icon3.svg",
  },
];

export default function About() {
  const [ref1, inView1] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5 });
  const [ref3, inView3] = useInView({ threshold: 0.5 });

  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="flex flex-col items-center pt-[94px] pb-60 px-8">
        <div className="flex flex-row items-center gap-10 w-full max-w-7xl">
          {/* Left: Copy Block */}
          <div>
            <div className="flex items-center  text-gray-900 font-bold">
          <span className="text-4xl">
            We are
          </span>
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Logo"
              className="w-[63px] h-[63px] object-contain"
            />
            <span className="text-4xl whitespace-nowrap">
              Techno Vanam
            </span>
          </div>
        </div>
            <p className="mt-6 text-lg leading-relaxed text-[#667097]">
              We’re not just an agency — we’re a creative tech studio <br/>passionate
              about crafting impactful digital products.<br/> From empowering
              startups to building our own <br/>innovations, we design, develop, and
              launch experiences<br/> that move people and businesses forward.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <span className="flex justify-center items-end w-5 h-5 border-2 border-[#2388FF] rounded-full">
                <span className="w-1 h-1 bg-[#2388FF] rounded-full mb-1" />
              </span>
              <span className="font-bold uppercase text-sm text-[#2388FF]">
                Scroll down
              </span>
            </div>
          </div>
          {/* Right: Hero Artwork */}
          <div className="w-1/2 relative">
            <img
              src="/placeholder-cylinders.jpg"
              alt="3-D cylinders"
              className="w-full h-auto max-h-[534px] object-cover"
            />
            <img
              src="/placeholder-circle-logo.svg"
              alt="logo circle"
              className="absolute inset-x-0 mx-auto top-6 w-1/2 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ===== Transform Section ===== */}
       <section className="flex flex-col items-center bg-[#2388FF] pt-16 pb-32 rounded-b-2xl px-8 space-y-6 overflow-hidden">
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
    className="font-bold text-[94px] leading-tight text-white text-center"
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
    className="font-bold text-[94px] leading-tight text-white text-center"
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
    className="font-bold text-[94px] leading-tight text-white text-center"
  >
    develop
  </motion.h2>
</section>


      {/* ===== Content Grid Section ===== */}
      <section className="flex flex-col items-center bg-[#F6F8FC] px-8 pt-16 pb-6">
        <div className="w-full max-w-7xl">
          {/* What Drives Us */}
          <div className="flex flex-col items-center gap-4 mb-20 text-center">
            <h2 className="text-[42px] font-bold text-[#19213D]">
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
                    <p className="font-bold text-lg text-[#2F2F2F]">
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
      <section className="flex flex-col items-center bg-[#F6F8FC] px-8 pb-20 pt-0">

        <div className="w-full max-w-7xl grid grid-cols-3 gap-8">
          
          {/* Explore What We Do Card */}
          <div className="relative bg-white  border border-[#EBEFF6] shadow-md rounded-xl flex items-center justify-center p-8">
            <img
              src="/placeholder-figma.png"
              alt="Figma logo"
              className="absolute left-4 top-8 w-16"
            />
            <img
              src="/placeholder-trophy.png"
              alt="Trophy illustration"
              className="w-full max-w-[90%] h-auto"
            />
            <p className="absolute top-2/3 inset-x-0 text-center font-bold text-2xl text-[#19213D]">
              Explore What <br /> We Do
            </p>
            <div className="absolute bottom-6 inset-x-0 flex flex-col items-center">
              <button className="flex items-center gap-2 text-[#2388FF] text-sm font-bold uppercase">
                <a href="/Services">OUR SERVICES</a>
                <svg width="12" height="10" viewBox="0 0 16 14" className="fill-[#2388FF]">
                  <path d="M1 7h14M9 1l6 6-6 6" stroke="#2388FF" />
                </svg>
              </button>
            </div>
          </div>

          {/* Crafted with Passion Card */}
          <div className="relative bg-white border border-[#EBEFF6] shadow-md rounded-xl flex items-center justify-center p-8">
            <img
              src="/placeholder-hubspot.png"
              alt="HubSpot badge"
              className="w-full max-w-[90%] h-auto"
            />
            <p className="absolute top-2/3 inset-x-0 text-center font-bold text-2xl text-[#19213D]">
              Crafted with Passion <br /> Built to Inspire
            </p>
            <div className="absolute bottom-6 inset-x-0 flex flex-col items-center">
              <button className="flex items-center gap-2 text-[#FF6C4C] text-sm font-bold uppercase">
                SEE ALL
                <svg width="12" height="10" viewBox="0 0 16 14" className="stroke-[#FF6C4C]">
                  <path d="M1 7h14M9 1l6 6-6 6" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* CTA Newsletter Signup Card */}
          <div className="bg-[#2388FF] shadow-md rounded-xl p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-2xl mb-4">Join with our Network</h3>
              <p className="text-lg leading-relaxed mb-6">
                Collaborate with us on bold new ventures, from brand identity to full-stack innovation.
                Let’s grow together.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 pl-10 pr-4 text-base text-white/90 placeholder:text-white/90 bg-transparent border border-white/90 rounded-full focus:outline-none"
                />
                <svg
                  viewBox="0 0 18 14"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 fill-white/90"
                >
                  <path d="M1 1h16v12H1z" fill="none" stroke="currentColor" />
                  <path d="M1 1l8 6 8-6" fill="none" stroke="currentColor" />
                </svg>
              </div>
              <button className="w-full h-14 flex items-center justify-center font-bold text-base text-[#2388FF] bg-white hover:bg-slate-50 rounded-full">
                Let’s Connect
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* ===== Team Section ===== */}
      <section className="w-full bg-white py-16 px-8">
        <div className="text-center mb-12">
          <p className="text-[#0368FF] text-xl font-bold">
            ~ Team Member ~
          </p>
          <h2 className="text-4xl font-bold text-black max-w-3xl mx-auto">
            Our team member is ready to help our clients!
          </h2>
          <p className="text-lg text-[#667097] mt-2 max-w-xl mx-auto">
            We love what we do and we do it with passion. We value the experimentation of the message and smart incentives.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center w-80">
              <div className="w-full h-[460px] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full -mt-8 bg-white rounded-lg shadow-md flex flex-col items-center pt-4 pb-4">
                <div className="h-2 w-full bg-[#0368FF] rounded-t-lg"></div>
                <div className="text-center mt-3">
                  <h3 className="text-xl font-bold text-black">{member.name}</h3>
                  <p className="text-base text-gray-600">{member.role}</p>
                </div>
                <div className="flex items-center gap-6 mt-3">
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg"
                      alt="Instagram"
                      className="w-8 h-8"
                    />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <div className="w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        alt="LinkedIn"
                        className="w-5 h-5"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Values Section ===== */}
      <section className="w-full py-16 px-8 bg-white flex flex-col items-center">
        <div className="max-w-3xl text-center mb-12">
          <h2 className="text-[42px] font-bold text-[#19213D]">
            The values that drive everything we do
          </h2>
          <p className="text-lg leading-relaxed text-[#667097] mt-2">
            If you are so great at something, while only doing it for others?
            That is why in 2020 we started building our own products.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="w-full min-w-[280px] max-w-[400px] h-auto bg-white border border-[#EBEFF6] rounded-xl shadow-md p-8"
            >
              <div className="relative w-20 h-20 mb-4">
                <div
                  className={`absolute w-16 h-16 rounded-lg bg-gradient-to-b ${value.gradient}`}
                />
                <div className="absolute w-16 h-16 left-2 top-2 rounded-lg border border-white backdrop-blur-md bg-[rgba(238,238,238,0.61)]" />
                <img
                  src={value.icon}
                  alt={value.title}
                  className="absolute left-5 top-5 w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold text-[#19213D] mb-2">
                {value.title}
              </h3>
              <p className="text-base leading-relaxed text-[#667097]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="w-full flex flex-col items-center py-16 px-8 bg-blue-600">
        <div className="w-full max-w-7xl flex flex-row items-center justify-between gap-8">
          <div className="w-1/2 text-white text-left">
            <h2 className="text-4xl font-bold leading-tight">
              Ready to launch <br />
              something amazing <br />
              with Techno Vanam?
            </h2>
            <p className="text-lg mt-4">
              Our creative experts are here to design, develop, and deliver high-performing
              digital experiences tailored to your brand. Let’s build something great together.
            </p>
            <div className="pt-6">
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold text-base rounded-full border shadow-md">
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#2388FF"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-1/2 h-64">
            <img
              src="https://via.placeholder.com/500x500.png?text=Social+Media+Image"
              alt="Social Media"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
      </>
    );
  }