import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Verso",
      location: "Remote",
      type: "Contract-based",
      date: "October 2024 - Present",
      description: "I design and develop responsive websites and web applications, ensuring seamless functionality and user experience across platforms using various programming languages and frameworks.",
      skills: ["JS", "TS"],
    },
    {
      title: "Full Stack Intern",
      company: "SVEA",
      location: "Home",
      type: "Internship",
      date: "September 2024 - December 2024",
      description: "As a full-stack intern, I assist in developing both front-end and back-end components of web applications, focusing on seamless integration and functionality.",
      skills: ["JS", "TS", "CSS", "HTML", "React", "Tailwind"],
    },
  ];

  return (
    <div className="p-8 flex flex-col items-center font-mona">
  <h1 className="text-6xl text-center font-bold mb-16">Experience</h1>
  <div className="grid gap-14 grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start">
    {/* First Card */}
    <div className="border border-gray-300 rounded-lg p-6 shadow-sm col-start-1 row-start-1 transform transition-transform duration-300 hover:scale-105">
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

    {/* Vertical Line */}
    <div className="hidden md:block w-[1px] h-full bg-gray-300 col-start-2 row-span-2"></div>

    {/* Second Card */}
    <div className="border border-gray-300 rounded-lg p-6 shadow-sm col-start-1 md:col-start-3 row-start-2 transform transition-transform duration-300 hover:scale-105">
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
