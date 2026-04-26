import React from 'react';
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaExternalLinkAlt } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import GaneshServices from '../assets/GaneshService.png';
import RaybanUI from '../assets/RayBan BG.png';
import WeatherApp from '../assets/Wheater App.png';
import Quotation from '../assets/Quotation.png';
import '../index.css';
import data from '../Data.json';

const imageMap = {
  "GaneshService.png": GaneshServices,
  "RayBan BG.png": RaybanUI,
  "Wheater App.png": WeatherApp,
  "Quotation.png": Quotation,
};

const techIconMap = {
  "React.js": <FaReact className="text-blue-500 text-2xl" />,
  "Next.js": <RiNextjsFill className="text-2xl" />,
  "Tailwind CSS": <RiTailwindCssFill className="text-blue-500 text-2xl" />,
  "Express.js": <SiExpress className="text-yellow-700 text-2xl" />,
  "Node.js": <FaNodeJs className="text-green-700 text-2xl" />,
  "MongoDB": <SiMongodb className="text-green-700 text-2xl" />,
  "JavaScript": <FaJs className="text-yellow-500 text-2xl" />,
  "HTML5": <FaHtml5 className="text-orange-600 text-2xl" />,
  "CSS3": <FaCss3Alt className="text-blue-600 text-2xl" />,
};

const projects = data.projects.map(project => ({
  ...project,
  image: imageMap[project.image],
  techs: project.techs.map(tech => techIconMap[tech]).filter(Boolean), // ✅ filter out undefined icons
}));

const ProjectCard = ({ project }) => (
  <div className="border border-gray-700 shadow-lg rounded-lg w-full sm:w-[45%] md:w-[30%] bg-transparent transition-transform duration-500 hover:scale-105 hover:shadow-xl flex flex-col dark:border-gray-600 dark:bg-[rgba(255,255,255,0.1)]">
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <div className="flex flex-col justify-between p-4 flex-grow">
      <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">{project.title}</h2>

      <span
        className={`p-2 w-24 rounded-lg text-sm text-black font-semibold dark:text-white
          ${project.status === 'Upcoming' ? 'bg-red-500 bg-opacity-30' : 'bg-green-500 bg-opacity-30 backdrop-blur-lg'}`}
      >
        {project.status}
      </span>

      <p className="text-start mt-4 mb-4 text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
        {project.description}
      </p>

      <a
        href={project.link}
        className="border border-gray-800 text-black dark:text-white px-4 py-2 rounded-lg mb-4 flex items-center justify-center hover:bg-gray-700 hover:text-white transition-colors duration-300 dark:border-gray-600 dark:hover:bg-gray-700 text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaExternalLinkAlt className="mr-2" /> View Project
      </a>

      <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Technologies Used</h3>
      <div className="flex flex-wrap gap-5 mb-2">
        {project.techs.map((icon, i) => (
          <span key={i}>{icon}</span> // ✅ key prop on each icon
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-start py-16 px-4 border-t border-gray-800 dark:border-gray-600">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">My Projects</h1>
      <p className="text-lg italic mb-12 text-gray-900 dark:text-gray-400 text-center">
        Here are some of my recent works.
      </p>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <p className='text-xl font-semibold text-gray-900 mt-12 dark:text-gray-400 text-center px-4'>
        I have more projects created during my <span className='text-[#BB3CCF]'>current role</span>.<br />
        I would love to talk more about that!
      </p>
    </div>
  );
};

export default Projects;