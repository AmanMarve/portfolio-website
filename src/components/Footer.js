import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-300 dark:border-gray-800 py-6 flex flex-col items-center">
      <p className="mb-2 mt-4 text-center text-black dark:text-gray-400">
        Designed and Developed by Aman Marve. © {currentYear}
      </p>
      <p className="text-black dark:text-gray-300">Built With</p>
      <div className="flex items-center space-x-2 mt-2">
        <FaReact
          id="react-logo"
          className="text-[#61DBFB] text-2xl hover:scale-110 transition-transform"
          aria-label="React"
        />
        <span className="text-black dark:text-white transition-colors">React</span>
        <span>&</span>
        <SiTailwindcss
          className="text-teal-400 text-2xl hover:scale-110 transition-transform"
          aria-label="Tailwind CSS"
        />
        <span className="text-black dark:text-white hover:text-teal-400 transition-colors">
          Tailwind CSS
        </span>
      </div>
    </footer>
  );
};

export default Footer;
