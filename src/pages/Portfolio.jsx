const projects = [
  {
    logo: "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/640faec78b52078a69f42d1e_paradox-brix-agency-client.svg",
    title: "Paradox.ai",
    description:
      "Paradox.ai is an AI-driven assistant that simplifies recruitment with applicant reviewing, interview booking, and automatic HR query responses.",
    link: "/portfolio/paradox",
    image:
      "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/671bf8e829a6d0ce58de5551_paradox-portfolio-featured-image.png",
    linkColor: "text-[#23A094]",
  },
  {
    logo: "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/6712b26c9a8c00e3f394be61_teachable-logo.svg",
    title: "Teachable",
    description:
      "Teachable is the leading online platform for creating and selling online courses.",
    link: "/portfolio/teachable",
    image:
      "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/671bf7111ed052ea780d8796_teachable-portfolio-featured-image.png",
    linkColor: "text-[#3AB1C8]",
  },
  {
    logo: "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/6712b26cd6a28d0aafc553f9_upside-logo.svg",
    title: "Upside",
    description:
      "Upside is the perfect way to earn cash back on over 50,000 locations.",
    link: "/portfolio/upside",
    image:
      "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/6712b19b0959927114991084_upside-portfolio-featured-image.png",
    linkColor: "text-[#2869FF]",
  },
];

const ProjectCard = ({ project, reverse }) => (
  <a
    href={project.link}
    className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} rounded-3xl overflow-hidden shadow-sm bg-white hover:shadow-lg transition duration-300 w-full max-w-[1200px] mx-auto`}
  >
    {/* Text Section */}
    <div className="p-4 sm:p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-center">
      <img
        src={project.logo}
        alt={`${project.title} logo`}
        className="w-[100px] sm:w-[120px] md:w-[140px] mb-4 sm:mb-6"
      />
      <p className="text-[#667097] text-base sm:text-lg leading-6 sm:leading-7 mb-4 sm:mb-6">
        {project.description}
      </p>
      <span
        className={`font-semibold text-sm uppercase flex items-center gap-2 ${project.linkColor}`}
      >
        See project
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 transform rotate-90"
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
    <div className="w-full md:w-1/2 h-[200px] sm:h-[300px] md:h-[400px]">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="w-full h-full object-cover"
      />
    </div>
  </a>
);

const Portfolio = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#19213D]">
            Portfolio
          </h2>
          <p className="text-[#667097] text-base sm:text-lg mt-3 sm:mt-4 max-w-[640px] mx-auto">
            Our amazing team of designers and developers have produced some remarkable pieces of work.
          </p>
        </div>

        <div className="w-full max-w-7xl space-y-8 sm:space-y-10 md:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} reverse={index % 2 !== 0} />
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col items-center py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1320px] flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
          {/* Header */}
          <div className="w-full max-w-[580px] text-center">
            <h2 className="text-2xl sm:text-3xl md:text-[42px] leading-8 sm:leading-10 md:leading-[52px] font-bold text-[#19213D]">
              Let’s bring your vision to life
            </h2>
          </div>

          {/* Subheading */}
          <div className="w-full max-w-[520px] text-center">
            <p className="text-base sm:text-lg leading-6 sm:leading-[30px] text-[#667097]">
              Explore how Technovanam builds custom solutions — or reach out and let’s create something exceptional.
            </p>
          </div>

          {/* Cards Container */}
          <div className="w-full flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-7">
            {/* Card 1 */}
            <div className="w-full sm:w-[calc(50%-12px)] max-w-[622px] bg-white border border-[#EBEFF6] rounded-[24px] sm:rounded-[32px] shadow-[0px_6px_20px_rgba(20,20,43,0.06)] p-6 sm:p-8 md:p-[55px_41px] flex flex-col min-h-[400px] sm:min-h-[462px]">
              {/* Logo */}
              <div className="mb-4 sm:mb-6">
                <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] flex justify-center items-center mb-4 sm:mb-6">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Logo 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="mb-2 sm:mb-3 w-full max-w-[540px]">
                <h3 className="text-xl sm:text-2xl md:text-[32px] leading-7 sm:leading-8 md:leading-[42px] font-bold text-[#19213D]">
                  Ideas deserve more than just code
                </h3>
              </div>

              {/* Description */}
  <div className="mb-6 sm:mb-8 w-full max-w-[540px]">
    <p className="text-base sm:text-lg leading-6 sm:leading-[30px] text-[#667097]">
      We help startups and businesses bring big visions to life through thoughtful design and smart development. Whether you're starting fresh or scaling fast — we’re built for it.
    </p>
  </div>

  {/* Button */}
  <button className="flex items-center justify-center gap-1 px-6 py-3 sm:px-8 sm:py-4 md:px-[39px] md:py-[27px] bg-[#4A3AFF] text-white font-bold text-base sm:text-lg md:text-[18px] rounded-full shadow-[0px_2px_6px_rgba(74,58,255,0.2)] border border-[#4A3AFF] w-full sm:w-[259.81px] h-[56px] sm:h-[64px] md:h-[72px]">
    Let’s Build Together
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 transform -scale-y-100"
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
<div className="w-full sm:w-[calc(50%-12px)] max-w-[622px] bg-white border border-[#EBEFF6] rounded-[24px] sm:rounded-[32px] shadow-[0px_6px_20px_rgba(20,20,43,0.06)] p-6 sm:p-8 md:p-[55px_41px] flex flex-col min-h-[400px] sm:min-h-[462px]">
  {/* Logo */}
  <div className="mb-4 sm:mb-6">
    <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] flex justify-center items-center mb-4 sm:mb-6">
      <img
        src="https://via.placeholder.com/80"
        alt="Logo 2"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Title */}
  <div className="mb-2 sm:mb-3 w-full max-w-[540px]">
    <h3 className="text-xl sm:text-2xl md:text-[32px] leading-7 sm:leading-8 md:leading-[42px] font-bold text-[#19213D]">
      You won’t find templates here
    </h3>
  </div>

  {/* Description */}
  <div className="mb-6 sm:mb-8 w-full max-w-[540px]">
    <p className="text-base sm:text-lg leading-6 sm:leading-[30px] text-[#667097]">
      We don’t showcase random past work — we focus on your future. Everything we create is tailored, strategic, and built from the ground up to serve a real purpose.
    </p>
  </div>

  {/* Button */}
  <button className="flex items-center justify-center gap-1 px-6 py-3 sm:px-8 sm:py-4 md:px-[39px] md:py-[27px] bg-[#2388FF] text-white font-bold text-base sm:text-lg md:text-[18px] rounded-full shadow-[0px_2px_6px_rgba(255,45,70,0.15)] border border-[#2388FF] w-full sm:w-[240px] h-[56px] sm:h-[64px] md:h-[72px]">
    Start Your Journey
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 transform -scale-y-100"
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

export default Portfolio;