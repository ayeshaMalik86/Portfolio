import React from "react";

const Education = () => {
  const education = [
    {
      title: "Bachelor in Software Engineering",
      institute: "Bahria University Islamabad",
      location: "Islamabad, Pakistan",
      date: "October 2021 - Present",
      description: "I am pursuing a Bachelor's degree in Software Engineering, focusing on developing technical skills in programming, software design, and system analysis to create innovative solutions.",
      skills: ["JS", "TS"],
    },
    {
      title: "Intermediate in Computer Science",
      institute: "Bahria College",
      location: "Islamabad, Pakistan",
      date: "March 2019 - August 2021",
      description: "Got it! You’ve completed your intermediate in Computer Science, which has laid a strong foundation for your further studies in software engineering.",
      skills: ["JS", "TS", "CSS", "HTML", "React", "Tailwind"],
    },
  ];

  return (
    <div className="p-8 flex flex-col items-center font-mona">
  <h1 className="text-6xl text-center font-bold mb-16">Education</h1>
  <div className="grid gap-14 grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start">
    {/* First Card */}
    <div className="border border-gray-300 rounded-lg p-6 shadow-sm col-start-1 row-start-1 transform transition-transform duration-300 hover:scale-105">
      <h2 className="text-xl font-semibold">{education[0].title}</h2>
      <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 mt-2">
        <span>{education[0].institute}</span>
        <span>&bull;</span>
        <span>{education[0].location}</span>
      </div>
      <div className="text-sm text-gray-500 mt-2">
        <p>{education[0].date}</p>
        <p>{education[0].duration}</p>
      </div>
      <p className="mt-4">{education[0].description}</p>
      <div className="flex flex-wrap gap-2 space-x-2 mt-4">
        {education[0].skills.map((skill, i) => (
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
      <h2 className="text-xl font-semibold">{education[1].title}</h2>
      <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 mt-2">
        <span>{education[1].institute}</span>
        <span>&bull;</span>
        <span>{education[1].location}</span>
      </div>
      <div className="text-sm text-gray-500 mt-2">
        <p>{education[1].date}</p>
        <p>{education[1].duration}</p>
      </div>
      <p className="mt-4">{education[1].description}</p>
      <div className="flex flex-wrap gap-2 space-x-2 mt-4 ">
        {education[1].skills.map((skill, i) => (
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

export default Education;
