import React, { useState } from "react";

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const DividerWithText = ({ text }) => {
    return (
        <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-xl">{text}</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
        );
  };

  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Javascript", image: "/assets/js.png" },
        { name: "Typescript", image: "/assets/ts.png" }
      ]
    },
    {
      category: "Markup and Style",
      skills: [
        { name: "CSS", image: "/assets/css.svg" },
        { name: "HTML", image: "/assets/html.svg" },
        { name: "Tailwind", image: "/assets/tailwind.png" }
      ]
    },
    {
      category: "Frontend & Styling",
      skills: [
        { name: "React", image: "/assets/react.svg" },
        { name: "Next.js", image: "/assets/nextjs.png" },
        { name: "Vue JS", image: "/assets/vuejs.png" },
        { name: "Redux", image: "/assets/redux.png" },
        { name: "Framer Motion", image: "/assets/framer-motion.png" }
      ]
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "Node.js", image: "/assets/nodejs.png" },
        { name: "REST APIs", image: "/assets/rest.png" },
        { name: "MongoDB", image: "/assets/mongodb.png" },
        { name: "MySQL", image: "/assets/mysql.png" },
        { name: "Firebase", image: "/assets/firebase.png" }
      ]
    },
    {
      category: "Hosting and Deployment",
      skills: [
        { name: "AWS", image: "/assets/aws.png" },
        { name: "Hostinger", image: "/assets/hostinger.png" },
        { name: "Vercel", image: "/assets/vercel.png" }
      ]
    },
    {
      category: "Other Useful Tech",
      skills: [
        { name: "Git", image: "/assets/git.png" },
        { name: "GitHub", image: "/assets/github.png" },
        { name: "Three.js", image: "/assets/threejs.png" },
        { name: "Solidity", image: "/assets/solidity.png" },
        { name: "Web3.js", image: "/assets/web3js.png" },
      ]
    },
  ];

  const filteredSkillsData = skillsData.map(category => ({
    ...category,
    skills: category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.skills.length > 0);

  const SkillCard = ({ skill }) => (
    <div
      className="flex items-center w-64 h-16 rounded-lg shadow-md px-4"
      style={{
        background: `
          linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
          url('${skill.image}')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <span className="font-medium text-gray-800">{skill.name}</span>
    </div>
  );
  return (
    <div className="font-mona text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto p-6">

        <h1 className="text-7xl font-bold mb-8 text-center">Skills</h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {filteredSkillsData.length > 0 ? (
          filteredSkillsData.map((category, index) => (
            <div key={category.category} className={index < filteredSkillsData.length - 1 ? "mb-[50px]" : ""}>
              <DividerWithText text={category.category} />
              <div className="flex gap-10 flex-wrap">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No skills found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
