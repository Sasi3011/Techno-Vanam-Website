import ParadoxLogo from "../assets/logo.png";
import ParadoxImage from "../assets/logo.png";
import TeachableLogo from "../assets/logo.png";
import TeachableImage from "../assets/logo.png";
import UpsideLogo from "../assets/logo.png";
import UpsideImage from "../assets/logo.png";
import CardLogo1 from "../assets/logo.png";
import CardLogo2 from "../assets/logo.png";

const projects = [
  {
    logo: ParadoxLogo,
    title: "Paradox.ai",
    description:
      "Paradox.ai is an AI-driven assistant that simplifies recruitment with applicant reviewing, interview booking, and automatic HR query responses.",
    link: "/portfolio/paradox",
    image: ParadoxImage,
    linkColor: "text-[#23A094]",
  },
  {
    logo: TeachableLogo,
    title: "Teachable",
    description:
      "Teachable is the leading online platform for creating and selling online courses.",
    link: "/portfolio/teachable",
    image: TeachableImage,
    linkColor: "text-[#3AB1C8]",
  },
  {
    logo: UpsideLogo,
    title: "Upside",
    description:
      "Upside is the perfect way to earn cash back on over 50,000 locations.",
    link: "/portfolio/upside",
    image: UpsideImage,
    linkColor: "text-[#2869FF]",
  },
];

const ProjectCard = ({ project, reverse }) => (
  <a
    href={project.link}
    className={`flex flex-row ${reverse ? "flex-row-reverse" : ""} rounded-3xl overflow-hidden shadow-sm bg-white hover:shadow-lg transition duration-300 w-full max-w-[1200px] mx-auto`}
  >
    {/* Text Section */}
    <div className="p-8 w-1/2 flex flex-col justify-center">
      <img
        src={project.logo}
        alt={`${project.title} logo`}
        className="w-[140px] mb-6"
        loading="lazy"
      />
      <p className="text-[#667097] text-lg leading-7 mb-6">
        {project.description}
      </p>
      <span
        className={`font-semibold text-sm uppercase flex items-center gap-2 ${project.linkColor}`}
      >
        See project
        <svg
          className="w-5 h-5 transform rotate-90"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 3l5 5-5 5" strokeWidth="2" />
        </svg>
      </span>
    </div>

    {/* Image Section */}
    <div className="w-1/2 h-[400px]">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  </a>
);

export default function Portfolio() {
  return (
    <>
      <section className="w-full flex flex-col items-center py-20 px-8">
        <div className="w-full max-w-7xl text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-gray-500 text-lg max-w-[640px] mx-auto">
            Our amazing team of designers and developers have produced some remarkable pieces of work.
          </p>
        </div>

        <div className="w-full max-w-7xl space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} reverse={index % 2 !== 0} />
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col items-center py-20 px-8">
        <div className="w-full max-w-[1320px] flex flex-col items-center gap-10">
          {/* Header */}
          <div className="w-full max-w-[580px] text-center">
            <h2 className="text-[42px] leading-[52px] font-bold text-[#19213D]">
              Let’s bring your vision to life
            </h2>
          </div>

          {/* Subheading */}
          <div className="w-full max-w-[520px] text-center">
            <p className="text-lg leading-[30px] text-[#667097]">
              Explore how Technovanam builds custom solutions — or reach out and let’s create something exceptional.
            </p>
          </div>

          {/* Cards Container */}
          <div className="w-full flex flex-row justify-center gap-7">
            {/* Card 1 */}
            <div className="w-[calc(50%-14px)] max-w-[622px] bg-white border border-[#EBEFF6] rounded-[32px] shadow-[0px_6px_20px_rgba(20,20,43,0.06)] p-[55px_41px] flex flex-col min-h-[462px]">
              {/* Logo */}
              <div className="mb-6">
                <div className="w-[80px] h-[80px] flex justify-center items-center mb-6">
                  <img
                    src={CardLogo1}
                    alt="Logo 1"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="mb-3 w-full max-w-[540px]">
                <h3 className="text-[32px] leading-[42px] font-bold text-[#19213D]">
                  Ideas deserve more than just code
                </h3>
              </div>

              {/* Description */}
              <div className="mb-8 w-full max-w-[540px]">
                <p className="text-lg leading-[30px] text-[#667097]">
                  We help startups and businesses bring big visions to life through thoughtful design and smart development. Whether you're starting fresh or scaling fast — we’re built for it.
                </p>
              </div>

              {/* Button */}
              <button className="flex items-center justify-center gap-1 px-[39px] py-[27px] bg-[#4A3AFF] text-white font-bold text-[18px] rounded-full shadow-[0px_2px_6px_rgba(74,58,255,0.2)] border border-[#4A3AFF] w-[259.81px] h-[72px]">
                Let’s Build Together
                <svg
                  className="w-5 h-5 transform -scale-y-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Card 2 */}
            <div className="w-[calc(50%-14px)] max-w-[622px] bg-white border border-[#EBEFF6] rounded-[32px] shadow-[0px_6px_20px_rgba(20,20,43,0.06)] p-[55px_41px] flex flex-col min-h-[462px]">
              {/* Logo */}
              <div className="mb-6">
                <div className="w-[80px] h-[80px] flex justify-center items-center mb-6">
                  <img
                    src={CardLogo2}
                    alt="Logo 2"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="mb-3 w-full max-w-[540px]">
                <h3 className="text-[32px] leading-[42px] font-bold text-[#19213D]">
                  You won’t find templates here
                </h3>
              </div>

              {/* Description */}
              <div className="mb-8 w-full max-w-[540px]">
                <p className="text-lg leading-[30px] text-[#667097]">
                  We don’t showcase random past work — we focus on your future. Everything we create is tailored, strategic, and built from the ground up to serve a real purpose.
                </p>
              </div>

              {/* Button */}
              <button className="flex items-center justify-center gap-1 px-[39px] py-[27px] bg-[#2388FF] text-white font-bold text-[18px] rounded-full shadow-[0px_2px_6px_rgba(255,45,70,0.15)] border border-[#2388FF] w-[240px] h-[72px]">
                Start Your Journey
                <svg
                  className="w-5 h-5 transform -scale-y-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};