import React from 'react';

const ProjectCard = ({ title, description, tags, demoLink, githubLink, image }) => (
  <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm transform transition-transform duration-300 hover:scale-105">
    <div className="h-auto w-full mb-4 shadow-md">
      <img src={image} alt={title} className="w-full h-full object-contain"/>
    </div>

    <div>
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 text-xs text-gray-800 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="text-sm text-gray-500 flex justify-between">
      <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 hover:text-black  items-center">
          <img src="/assets/link.png" alt="demo" className="w-5 h-5" />
          Demo
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 hover:text-black items-center">
          <img src="/assets/github.png" alt="github" className="w-5 h-5" />
          GitHub
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Umault Clone',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      tags: ['React', 'Tailwind CSS'],
      demoLink: 'https://umault-clone-taupe.vercel.app/',
      githubLink: 'https://github.com/ayeshaMalik86/umault_clone',
      image: '/assets/umault.png', 
    },
    {
      title: 'Sports Page',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      tags: ['React', 'Tailwind CSS'],
      demoLink: 'https://sports-page-alpha.vercel.app/',
      githubLink: 'https://github.com/ayeshaMalik86/sportsPage',
      image: '/assets/sports.png', 
    },
    {
      title: 'Ticket Project',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      tags: ['React', 'Tailwind CSS'],
      demoLink: 'https://ticket-project-pi.vercel.app/',
      githubLink: 'https://github.com/ayeshaMalik86/TicketProject',
      image: '/assets/ticketproject.png', 
    },
    {
      title: 'Furniture',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      tags: ['React', 'Tailwind CSS'],
      demoLink: 'https://furniture-website-y1r6.vercel.app/',
      githubLink: 'https://github.com/ayeshaMalik86/furnitureWebsite',
      image: '/assets/furniture.png', 
    },
    {
      title: 'Education Webpage',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      tags: ['React', 'Tailwind CSS'],
      demoLink: 'https://web-page-nu-amber.vercel.app/',
      githubLink: 'https://github.com/ayeshaMalik86/webPage',
      image: '/assets/education.png', 
    },
    {
      title: 'Attendance Management System',
      description: 'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
      tags: ['Typescript', 'Sass', 'Svelte'],
      demoLink: 'https://attendance-management-system-silk.vercel.app/',
      githubLink: 'https://github.com/ayeshaMalik86/Attendance-Management-System',
      image: '/assets/attendance.png', 
    },
  ];

  return (
    <div className="min-h-screen p-8 flex flex-col items-center font-mona">
      <h1 className="text-6xl font-extrabold mb-[40px]">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
