import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Verso",
      location: "USA - Remote",
      type: "Full-time",
      date: "October 2024 - June 2025",
      description: "I developed interactive and responsive web applications using React.js and JavaScript, transforming Figma wireframes into fully functional, pixel-perfect websites. I implemented smooth and engaging animations with Framer Motion, GSAP, and Three.js to enhance user experience, while ensuring cross-browser compatibility and optimizing performance for seamless functionality. Additionally, I collaborated with a team through Git for version control and project management, contributing to efficient workflows and successful project delivery.",
      skills: ["JS", "TS", "ThreeJS", "Framer Motion", "React", "Tailwind", "GSAP", "Vercel"],
    },
    {
      title: "Full Stack Intern",
      company: "SVEA Tech Solutions",
      location: "Sweden - Remote",
      type: "Internship",
      date: "September 2024 - December 2024",
      description: "I worked on an established B2B portal, maintaining and improving its functionality while developing and optimizing responsive designs to ensure a seamless user experience across devices. I added new services and features to enhance the website’s capabilities, leveraging Next.js and TypeScript to achieve scalability and maintainability. I also collaborated with the team on code reviews, debugging, and deployments, ensuring high-quality and efficient project delivery.",
      skills: ["JS", "TS", "CSS", "HTML", "React", "Tailwind"],
    },
    {
      title: "Full Stack Developer",
      company: "SMB DigitalZone",
      location: "Dubai - Remote",
      type: "Full-time",
      date: "May 2025 - Present",
      description: "I work on MERN Stack and Next.js development, building scalable web applications from Figma designs to deployment. I maintain and update existing projects while learning new technologies such as deployment workflows and VPS management. In addition, I lead the team through task assignments and guidance, and I support hiring and onboarding to strengthen collaboration and project delivery.",
      skills: ["JS", "React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <div className="p-8 flex flex-col items-center font-mona">
  <h1 className="text-6xl text-center font-bold mb-16">Experience</h1>
  <div className="grid gap-6 grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start">

    <div className="border border-gray-300 rounded-lg p-6 shadow-sm col-start-1 md:col-start-3 row-start-1 transform transition-transform duration-300 hover:scale-105">
      <h2 className="text-xl font-semibold">{experiences[2].title}</h2>
      <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 mt-2">
        <span>{experiences[2].company}</span>
        <span>&bull;</span>
        <span>{experiences[2].location}</span>
        <span>&bull;</span>
        <span>{experiences[2].type}</span>
      </div>
      <div className="text-sm text-gray-500 mt-2">
        <p>{experiences[2].date}</p>
        <p>{experiences[2].duration}</p>
      </div>
      <p className="mt-4">{experiences[2].description}</p>
      <div className="flex flex-wrap gap-2 space-x-2 mt-4">
        {experiences[2].skills.map((skill, i) => (
          <span
            key={i}
            className="px-2 py-1 border border-gray-300 rounded-full text-sm hover:bg-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    <div className="hidden md:block col-start-2 row-span-3 relative min-h-[800px]">

      <div className="w-[1px] h-[1200px] bg-gray-300 absolute left-1/2 transform -translate-x-1/2"></div>
 
      <div className="w-3 h-3 bg-gray-300 rounded-full absolute left-1/2 transform -translate-x-1/2 top-6"></div>

      <div className="w-3 h-3 bg-gray-300 rounded-full absolute left-1/2 transform -translate-x-1/2 top-1/2 transform -translate-y-1/2"></div>

      <div className="w-3 h-3 bg-gray-300 rounded-full absolute left-1/2 transform -translate-x-1/2 bottom-6"></div>
    </div>

    <div className="border border-gray-300 rounded-lg p-6 shadow-sm col-start-1 row-start-2 transform transition-transform duration-300 hover:scale-105">
      <h2 className="text-xl font-semibold">{experiences[0].title}</h2>
      <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 mt-2">
        <span>{experiences[0].company}</span>
        <span>&bull;</span>
        <span>{experiences[0].location}</span>
        <span>&bull;</span>
        <span>{experiences[0].type}</span>
      </div>
      <div className="text-sm text-gray-500 mt-2">
        <p>{experiences[0].date}</p>
        <p>{experiences[0].duration}</p>
      </div>
      <p className="mt-4">{experiences[0].description}</p>
      <div className="flex flex-wrap gap-2 space-x-2 mt-4">
        {experiences[0].skills.map((skill, i) => (
          <span
            key={i}
            className="px-2 py-1 border border-gray-300 rounded-full text-sm hover:bg-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    <div className="border border-gray-300 rounded-lg p-6 shadow-sm col-start-1 md:col-start-3 row-start-3 transform transition-transform duration-300 hover:scale-105">
      <h2 className="text-xl font-semibold">{experiences[1].title}</h2>
      <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 mt-2">
        <span>{experiences[1].company}</span>
        <span>&bull;</span>
        <span>{experiences[1].location}</span>
        <span>&bull;</span>
        <span>{experiences[1].type}</span>
      </div>
      <div className="text-sm text-gray-500 mt-2">
        <p>{experiences[1].date}</p>
        <p>{experiences[1].duration}</p>
      </div>
      <p className="mt-4">{experiences[1].description}</p>
      <div className="flex flex-wrap gap-2 space-x-2 mt-4 ">
        {experiences[1].skills.map((skill, i) => (
          <span
            key={i}
            className="px-2 py-1 border border-gray-300 rounded-full text-sm hover:bg-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>



  );
};

export default Experience;
