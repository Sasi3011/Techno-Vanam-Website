import React from "react";

const teamMembers = [
  {
    name: "Sasikiran TT",
    role: "CEO & Founder",
    img: "/placeholder1.jpg", // replace with real or placeholder path
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
];

export default function About() {
  return (
    <>
      {/* ===== Outer section – keeps the whole hero centered ===== */}
      <section className="relative flex flex-col items-center pt-16 sm:pt-20 md:pt-[94px] pb-0">
        {/* inner container – matches 1320px canvas */}
        <div className="flex flex-col items-start px-2 sm:px-4 md:px-6 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1320px] min-h-[400px] sm:min-h-[450px] md:min-h-[534.84px]">
          {/* flex row: text column + art column */}
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-[55px] w-full">
            {/* ---------- LEFT: copy block ---------- */}
            <div className="w-full md:w-[515px] min-h-[250px] sm:min-h-[300px] md:min-h-[320px] relative">
              {/* “We are …” headline */}
              <div className="w-full md:w-[460px] h-[60px] sm:h-[70px] md:h-[80px]">
                {/* “We are” */}
                <h1 className="text-3xl sm:text-4xl md:text-[58px] leading-tight md:leading-[68px] font-bold text-[#19213D]">
                  We are
                </h1>

                {/* logo + “Techno Vanam” */}
                <div className="absolute left-[150px] sm:left-[170px] md:left-[190px] top-0 sm:top-[-0.5px] md:top-[-0.42px] w-[200px] sm:w-[250px] md:w-[314px] h-[60px] sm:h-[70px] md:h-[80px]">
                  <img
                    src="/placeholder-logo.svg"
                    alt="logo"
                    className="absolute w-[50px] sm:w-[60px] md:w-[80px] h-[50px] sm:h-[60px] md:h-[80px]"
                  />
                  <span className="absolute left-[55px] sm:left-[65px] md:left-[75px] top-[10px] sm:top-[14px] md:top-[18.58px] text-2xl sm:text-3xl md:text-[35px] leading-[30px] sm:leading-[36px] md:leading-[42px] font-black text-[#2F2F2F]">
                    Techno Vanam
                  </span>
                </div>
              </div>

              {/* paragraph */}
              <p className="absolute top-[60px] sm:top-[70px] md:top-[80px] left-0 w-full md:w-[460px] text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[30px] text-[#667097]">
                We’re not just an agency — we’re a creative tech studio passionate
                about crafting impactful digital products. From empowering
                startups to building our own innovations, we design, develop, and
                launch experiences that move people and businesses forward.
              </p>

              {/* “Scroll down” cue */}
              <div className="absolute top-[200px] sm:top-[240px] md:top-[258px] left-0 flex flex-col pt-4 sm:pt-5 md:pt-[33px] pb-1 sm:pb-2 md:pb-[5px]">
                <div className="flex items-center gap-1 sm:gap-2">
                  {/* mouse icon */}
                  <span className="flex justify-center items-end w-[12px] sm:w-[15px] md:w-[18px] h-[18px] sm:h-[21px] md:h-[24px] min-w-[12px] sm:min-w-[15px] md:min-w-[18px] border-2 border-[#2388FF] rounded-full">
                    <span className="w-[3px] sm:w-[3.5px] md:w-[4px] h-[3px] sm:h-[3.5px] md:h-[4px] bg-[#2388FF] rounded-full mb-[4px] sm:mb-[5px] md:mb-[6px]" />
                  </span>
                  {/* label */}
                  <span className="font-bold uppercase tracking-[0.06em] text-xs sm:text-sm md:text-[16px] leading-[14px] sm:leading-[16px] md:leading-[18px] text-[#2388FF]">
                    Scroll down
                  </span>
                </div>
              </div>
            </div>

            {/* ---------- RIGHT: hero artwork ---------- */}
            <div className="w-full md:w-[839px] min-h-[400px] sm:min-h-[450px] md:min-h-[534.84px] relative isolate">
              {/* white cylinders BG */}
              <img
                src="/placeholder-cylinders.jpg"
                alt="3-D cylinders"
                className="absolute inset-0 w-full md:w-[964.63px] h-full object-cover z-0"
              />
              {/* floating circular logo */}
              <img
                src="/placeholder-circle-logo.svg"
                alt="logo circle"
                className="absolute left-[150px] sm:left-[200px] md:left-[238px] top-1 sm:top-2 md:top-[12px] w-[300px] sm:w-[350px] md:w-[435px] h-[200px] sm:h-[250px] md:h-[297px] object-contain z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center bg-[#2388FF] pt-16 sm:pt-20 md:pt-[64px] pb-20 sm:pb-24 md:pb-[128px] rounded-b-lg sm:rounded-b-xl md:rounded-b-[64px]">
        {/* whisper words in 40% opacity */}
        <h2 className="font-bold text-3xl sm:text-4xl md:text-[94px] leading-tight sm:leading-[80px] md:leading-[96px] text-white/40">
          design
        </h2>
        {/* main headline */}
        <h1 className="font-bold text-3xl sm:text-4xl md:text-[94px] leading-tight sm:leading-[80px] md:leading-[96px] text-white text-center">
          We transform digital presence
        </h1>
        <h2 className="font-bold text-3xl sm:text-4xl md:text-[94px] leading-tight sm:leading-[80px] md:leading-[96px] text-white/40">
          develop
        </h2>
      </section>

      {/* ===== Light-grey background for the content grid ===== */}
      <section className="flex flex-col items-center bg-[#F6F8FC] px-0 pt-10 sm:pt-12 md:pt-[55px] pb-10 sm:pb-12 md:pb-[94px]">
        <div className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1320px]">
          {/* ---- Centered “What drives us” header ---- */}
          <div className="flex flex-col items-center gap-1 sm:gap-2 mx-auto mb-10 sm:mb-20 md:mb-[162px] max-w-[95%] sm:max-w-[600px] md:max-w-[723px]">
            <h2 className="text-2xl sm:text-3xl md:text-[42px] leading-tight sm:leading-[40px] md:leading-[52px] font-bold text-[#19213D] text-center">
              What Drives Us
            </h2>
            <p className="text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[25px] md:leading-[30px] text-[#667097] text-center">
              In 2025, we began building our own digital products—driven by the
              same vision and purpose that fuel everything we do: turning ideas
              into impactful, user-centered experiences.
            </p>
          </div>

          {/* ================= FIRST ROW (Mission + Illustration) ================= */}
          <div className="flex gap-2 sm:gap-4 md:gap-[28px] px-2 sm:px-4 md:px-6 lg:px-0 justify-center mb-10 sm:mb-12 md:mb-[75px] flex-col md:flex-row flex-wrap">
            {/* --- Mission card --- */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 p-4 sm:p-6 md:p-[37px] w-full md:w-[765px] bg-white border border-[#EBEFF6] shadow-[0_6px_20px_rgba(20,20,43,0.06)] rounded-lg sm:rounded-xl md:rounded-[32px]">
              <h3 className="text-xl sm:text-2xl md:text-[32px] leading-tight sm:leading-[36px] md:leading-[42px] font-bold text-[#19213D]">
                Our Mission: <br /> Turning Vision into Reality
              </h3>

              <p className="text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[25px] md:leading-[30px] text-[#667097] max-w-[95%] sm:max-w-[600px] md:max-w-[686px]">
                We believe great design is the foundation of every successful
                brand. At Techno Vanam, we craft intuitive user experiences,
                build high-performance websites, and design graphics that leave
                a lasting impression. Innovation and functionality guide
                everything we create.
              </p>

              {/* bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6 pt-2 sm:pt-4 md:pt-6">
                {/* bullet 1 */}
                <div className="flex gap-2 sm:gap-4 md:gap-6">
                  <div className="relative">
                    <div className="w-[50px] sm:w-[60px] md:w-[68px] h-[50px] sm:h-[60px] md:h-[68px] rounded-[15px] sm:rounded-[18px] md:rounded-[20px] bg-[#F6F6F6]" />
                    <img
                      src="/placeholder-idea.svg"
                      alt=""
                      className="absolute top-1/2 left-1/2 w-[20px] sm:w-[25px] md:w-[32px] h-[20px] sm:h-[25px] md:h-[32px] -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg sm:text-xl md:text-[20px] leading-[18px] sm:leading-[20px] md:leading-[22px] text-[#2F2F2F]">
                      Design-led Development
                    </p>
                    <p className="text-sm sm:text-base md:text-[14px] leading-[18px] sm:leading-[20px] md:leading-[21px] text-[#667097]">
                      We blend aesthetics and technology to create products
                      users love.
                    </p>
                  </div>
                </div>

                {/* bullet 2 */}
                <div className="flex gap-2 sm:gap-4 md:gap-6">
                  <div className="relative">
                    <div className="w-[50px] sm:w-[60px] md:w-[68px] h-[50px] sm:h-[60px] md:h-[68px] rounded-[15px] sm:rounded-[18px] md:rounded-[20px] bg-[#F6F6F6]" />
                    <img
                      src="/placeholder-star.svg"
                      alt=""
                      className="absolute top-1/2 left-1/2 w-[20px] sm:w-[25px] md:w-[30px] h-[20px] sm:h-[25px] md:h-[30px] -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg sm:text-xl md:text-[20px] leading-[18px] sm:leading-[20px] md:leading-[22px] text-[#2F2F2F]">
                      Scalable & Creative
                    </p>
                    <p className="text-sm sm:text-base md:text-[14px] leading-[18px] sm:leading-[20px] md:leading-[21px] text-[#667097]">
                      From startups to enterprises, we deliver flexible and
                      impactful digital solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Illustration card --- */}
            <div className="flex items-center justify-center w-full md:w-[478px] min-h-[300px] sm:min-h-[350px] md:min-h-[430px] bg-white border border-[#EBEFF6] shadow-[0_6px_20px_rgba(20,20,43,0.06)] rounded-lg sm:rounded-xl md:rounded-[32px]">
              <img
                src="/placeholder-wireframe.png"
                alt="Wireframe illustration"
                className="max-w-[95%] sm:max-w-[300px] md:max-w-[352px]"
              />
            </div>
          </div>

          {/* ================= SECOND ROW (Trophy + Vision) ================= */}
          <div className="flex gap-2 sm:gap-4 md:gap-[28px] px-2 sm:px-4 md:px-6 lg:px-0 justify-center mb-10 sm:mb-12 md:mb-[75px] flex-col md:flex-row flex-wrap">
            {/* trophies illustration */}
            <div className="relative w-full md:w-[373px] min-h-[300px] sm:min-h-[350px] md:min-h-[430px] bg-white border border-[#EBEFF6] shadow-[0_6px_20px_rgba(20,20,43,0.06)] rounded-lg sm:rounded-xl md:rounded-[32px] flex items-center justify-center">
              <img
                src="/placeholder-trophy.png"
                alt="Trophy illustration"
                className="max-w-[95%] sm:max-w-[300px] md:max-w-[369px]"
              />
              {/* Figma badge */}
              <img
                src="/placeholder-figma.png"
                alt="Figma logo"
                className="absolute left-2 sm:left-3 md:left-[17px] top-10 sm:top-12 md:top-[50px] w-[50px] sm:w-[60px] md:w-[76px]"
              />
              {/* Explore tag */}
              <div className="absolute bottom-2 sm:bottom-4 md:bottom-[34px] inset-x-0 flex flex-col items-center">
                <button className="flex items-center gap-1 text-[#2388FF] text-xs sm:text-sm md:text-[16px] leading-[14px] sm:leading-[16px] md:leading-[18px] font-bold uppercase tracking-[0.06em]">
                  OUR SERVICES
                  <svg
                    width="12"
                    sm:width="14"
                    md:width="16"
                    height="10"
                    sm:height="12"
                    md:height="14"
                    viewBox="0 0 16 14"
                    className="-scale-y-100 fill-[#2388FF]"
                  >
                    <path d="M1 7h14M9 1l6 6-6 6" stroke="#2388FF" />
                  </svg>
                </button>
              </div>
              {/* title */}
              <p className="absolute top-[200px] sm:top-[220px] md:top-[257px] left-1/2 -translate-x-1/2 w-[200px] sm:w-[220px] md:w-[255px] text-center font-bold text-xl sm:text-2xl md:text-[32px] leading-[30px] sm:leading-[36px] md:leading-[42px] text-[#19213D]">
                Explore What <br /> We Do
              </p>
            </div>

            {/* Vision long card */}
            <div className="relative flex flex-col gap-2 sm:gap-3 md:gap-5 p-4 sm:p-6 md:p-[62px_33px] w-full md:w-[765px] min-h-[300px] sm:min-h-[350px] md:min-h-[430px] bg-white border border-[#EBEFF6] shadow-[0_6px_20px_rgba(20,20,43,0.06)] rounded-lg sm:rounded-xl md:rounded-[32px]">
              <h3 className="text-xl sm:text-2xl md:text-[32px] leading-tight sm:leading-[36px] md:leading-[42px] font-bold text-[#19213D]">
                Our Vision:
              </h3>
              <p className="text-sm sm:text-base md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[27px] text-[#667097]">
                To build a digital ecosystem where design, technology, and
                human-centric thinking shape better experiences for all. We
                envision a future where businesses—big or small—can access
                high-quality digital tools that drive growth, creativity, and
                connection.
              </p>
              <ul className="space-y-1 sm:space-y-2 md:space-y-3 mt-2 sm:mt-3 md:mt-4">
                {[
                  "Empowering creators through smart, intuitive platforms",
                  "Driving meaningful change with every project",
                  "Making digital innovation accessible to everyone",
                ].map((txt, i) => (
                  <li key={i} className="relative pl-6 sm:pl-7 md:pl-9 text-sm sm:text-base md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[27px] text-[#667097]">
                    {/* green tick */}
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[16px] sm:w-[18px] md:w-[22px] h-[16px] sm:h-[18px] md:h-[22px] rounded-full border-2 border-[#31C65B] flex items-center justify-center">
                      <span className="w-[8px] sm:w-[9px] md:w-[10px] h-[8px] sm:h-[9px] md:h-[10px] rotate-45 border-b-2 border-r-2 border-[#31C65B]" />
                    </span>
                    {txt}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= THIRD ROW (Hubspot Card + CTA) ================= */}
          <div className="flex gap-2 sm:gap-4 md:gap-[28px] px-2 sm:px-4 md:px-6 lg:px-0 justify-center flex-col md:flex-row flex-wrap">
            {/* passion card */}
            <div className="relative w-full md:w-[374px] min-h-[300px] sm:min-h-[350px] md:min-h-[430px] bg-white border border-[#EBEFF6] shadow-[0_6px_20px_rgba(20,20,43,0.06)] rounded-lg sm:rounded-xl md:rounded-[32px] flex items-center justify-center">
              <img
                src="/placeholder-hubspot.png"
                alt="HubSpot award"
                className="max-w-[95%] sm:max-w-[300px] md:max-w-[378px]"
              />
              {/* see all tag */}
              <div className="absolute bottom-2 sm:bottom-4 md:bottom-[34px] inset-x-0 flex flex-col items-center">
                <button className="flex items-center gap-1 text-[#FF6C4C] text-xs sm:text-sm md:text-[16px] leading-[14px] sm:leading-[16px] md:leading-[18px] font-bold uppercase tracking-[0.06em]">
                  SEE ALL
                  <svg
                    width="12"
                    sm:width="14"
                    md:width="16"
                    height="10"
                    sm:height="12"
                    md:height="14"
                    viewBox="0 0 16 14"
                    className="-scale-y-100 stroke-[#FF6C4C]"
                  >
                    <path d="M1 7h14M9 1l6 6-6 6" strokeWidth="2" />
                  </svg>
                </button>
              </div>
              {/* title */}
              <p className="absolute top-[200px] sm:top-[220px] md:top-[255px] w-full text-center font-bold text-xl sm:text-2xl md:text-[32px] leading-[30px] sm:leading-[36px] md:leading-[42px] text-[#19213D]">
                Crafted with Passion <br /> Built to Inspire
              </p>
            </div>

            {/* blue CTA card */}
            <div className="flex flex-col bg-[#2388FF] shadow-[0_6px_20px_rgba(35,136,255,0.3)] rounded-lg sm:rounded-xl md:rounded-[32px] p-4 sm:p-6 md:p-9 gap-2 sm:gap-4 md:gap-6 w-full md:w-[468px] min-h-[300px] sm:min-h-[350px] md:min-h-[443px]">
              <h3 className="text-white font-bold text-xl sm:text-2xl md:text-[32px] leading-tight sm:leading-[36px] md:leading-[42px]">
                Join with our Network
              </h3>
              <p className="text-white text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[25px] md:leading-[30px]">
                Collaborate with us on bold new ventures, from brand identity to
                full-stack innovation. Let’s grow together.
              </p>

              {/* email form */}
              <form className="flex flex-col gap-2 sm:gap-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-[50px] sm:h-[60px] md:h-[72px] pl-10 sm:pl-12 md:pl-[51px] pr-4 sm:pr-5 md:pr-6 text-sm sm:text-base md:text-[18px] leading-[18px] sm:leading-[20px] md:leading-[22px] text-white/90 placeholder:text-white/90 bg-transparent border border-white/90 rounded-full focus:outline-none"
                  />
                  {/* envelope icon */}
                  <svg
                    viewBox="0 0 18 14"
                    className="absolute left-3 sm:left-4 md:left-4 top-1/2 -translate-y-1/2 w-[14px] sm:w-[16px] md:w-[18px] h-[10px] sm:h-[12px] md:h-[14px] fill-white/90 -scale-y-100"
                  >
                    <path d="M1 1h16v12H1z" fill="none" stroke="currentColor" />
                    <path d="M1 1l8 6 8-6" fill="none" stroke="currentColor" />
                  </svg>
                </div>
                <button
                  type="submit"
                  className="w-full h-[50px] sm:h-[60px] md:h-[72px] flex items-center justify-center font-bold text-sm sm:text-base md:text-[18px] leading-[18px] sm:leading-[20px] md:leading-[20px] text-[#2388FF] bg-white hover:bg-slate-50 border border-white rounded-full shadow-[0_2px_6px_rgba(20,20,43,0.04)]"
                >
                  Let’s Connect
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-4 sm:py-6 md:py-12 px-2 sm:px-4 md:px-0">
        <div className="text-center">
          <p className="text-[#0368FF] text-lg sm:text-xl md:text-[24px] font-bold mb-1 sm:mb-2">~ Team Member ~</p>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[48px] font-bold leading-tight text-black max-w-3xl mx-auto">
            Our team member is ready to help our clients!
          </h2>
          <p className="text-[#667097] text-sm sm:text-base md:text-[18px] lg:text-[24px] mt-2 sm:mt-4 max-w-xl mx-auto">
            We love what we do and we do it with passion. We value the experimentation of the message and smart incentives.
          </p>
        </div>

        <div className="mt-4 sm:mt-6 md:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Member Image */}
              <div className="w-[250px] sm:w-[280px] md:w-[320px] h-[360px] sm:h-[400px] md:h-[460px] bg-gray-200 rounded-[6px] sm:rounded-[7px] md:rounded-[8px] overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Info */}
              <div className="w-[250px] sm:w-[280px] md:w-[320px] -mt-6 sm:-mt-7 md:-mt-8 bg-white rounded-[12px] sm:rounded-[14px] md:rounded-[16px_16px_8px_8px] shadow-md flex flex-col items-center pt-2 sm:pt-2 md:pt-3 pb-3 sm:pb-3 md:pb-4">
                {/* Top blue line */}
                <div className="h-[10px] sm:h-[11px] md:h-[12px] w-full bg-[#0368FF] rounded-t-[12px] sm:rounded-t-[14px] md:rounded-t-[16px]"></div>

                {/* Name and role */}
                <div className="text-center mt-2 sm:mt-3 md:mt-4">
                  <h3 className="text-lg sm:text-xl md:text-[20px] font-bold text-black">{member.name}</h3>
                  <p className="text-base sm:text-lg md:text-[16px] text-gray-600">{member.role}</p>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4 sm:gap-5 md:gap-6 mt-2 sm:mt-3 md:mt-4">
                  {/* Instagram */}
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg"
                      alt="Instagram"
                      className="w-[28px] sm:w-[30px] md:w-[34px] h-[28px] sm:h-[30px] md:h-[34px]"
                    />
                  </a>

                  {/* LinkedIn */}
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <div className="w-[28px] sm:w-[30px] md:w-[34px] h-[28px] sm:h-[30px] md:h-[34px] bg-white shadow-md rounded-full flex items-center justify-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        alt="LinkedIn"
                        className="w-[16px] sm:w-[18px] md:w-[20px] h-[16px] sm:h-[18px] md:h-[20px]"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-10 sm:py-12 md:py-[56px] px-2 sm:px-4 bg-white flex flex-col items-center">
        <div className="max-w-[95%] sm:max-w-[500px] md:max-w-[600px] text-center mb-4 sm:mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-[42px] leading-tight sm:leading-[40px] md:leading-[52px] font-bold text-[#19213D]">
            The values that drive everything we do
          </h2>
          <p className="text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[25px] md:leading-[30px] text-[#667097] mt-2 sm:mt-3 md:mt-4">
            If you are so great at something, while only doing it for others?
            That is why in 2020 we started building our own products.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1320px]">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="w-full min-h-[300px] sm:min-h-[350px] md:min-h-[457px] flex-shrink-0 bg-white border border-[#EBEFF6] rounded-lg sm:rounded-xl md:rounded-[32px] shadow-[0_6px_20px_rgba(20,20,43,0.06)] p-4 sm:p-6 md:p-[55px] flex flex-col"
            >
              {/* Icon */}
              <div className="relative w-[80px] sm:w-[90px] md:w-[100px] h-[80px] sm:h-[90px] md:h-[100px] mb-2 sm:mb-4 md:mb-6">
                {/* Gradient Layer */}
                <div
                  className={`absolute w-[70px] sm:w-[75px] md:w-[86.49px] h-[70px] sm:h-[75px] md:h-[86.49px] rounded-[12px] sm:rounded-[14px] md:rounded-[15px] transform -scale-y-100 bg-gradient-to-b ${value.gradient}`}
                />
                {/* Glass Layer */}
                <div className="absolute w-[70px] sm:w-[75px] md:w-[86.49px] h-[70px] sm:h-[75px] md:h-[86.49px] left-[10px] sm:left-[12px] md:left-[15.83px] top-[10px] sm:top-[12px] md:top-[13.51px] rounded-[12px] sm:rounded-[14px] md:rounded-[15px] border border-white backdrop-blur-md bg-[rgba(238,238,238,0.61)] transform -scale-y-100" />
                {/* Placeholder icon */}
                <img
                  src={value.icon}
                  alt={value.title}
                  className="absolute left-[25px] sm:left-[28px] md:left-[31px] top-[25px] sm:top-[28px] md:top-[30px] w-[20px] sm:w-[25px] md:w-[30px] h-[20px] sm:h-[25px] md:h-[30px]"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-[24px] leading-[24px] sm:leading-[30px] md:leading-[36px] font-bold text-[#19213D] mb-2 sm:mb-3 md:mb-4">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[25px] md:leading-[30px] text-[#667097]">
                {value.description}
              </p>
            </div>
          ))
          }
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex flex-col items-center py-4 sm:py-6 md:py-10 px-2 sm:px-4 bg-blue-600">
        <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
          <div className="w-full md:w-1/2 text-white text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Ready to launch <br /> something amazing <br /> with Techno Vanam?
            </h2>
            <p className="text-sm sm:text-base md:text-base mt-2 sm:mt-3 md:mt-4">
              Our creative experts are here to design, develop, and deliver high-performing
              digital experiences tailored to your brand. Let’s build something great together.
            </p>
            <div className="pt-2 sm:pt-4 md:pt-6">
              <button className="flex items-center gap-1 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-white text-blue-600 font-bold text-sm sm:text-base md:text-base rounded-full border shadow-md">
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#2388FF"
                  className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 transform -scale-y-100"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[150px] sm:h-[200px] md:h-80">
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
