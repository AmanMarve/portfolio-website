import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast from 'react-hot-toast';
import { LuSun, LuMoonStar } from "react-icons/lu";
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleResume = () => {
    const pdfUrl = "Aman_marve_frontend.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Aman_marve_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast('Resume Downloaded', {
      icon: '📑',
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className='p-4'>
      <nav id='navbar' className="navbar border-b border-gray-300 dark:border-gray-700 backdrop-blur-md p-2 w-full">
        <div className="container mx-auto flex justify-between items-center" data-aos="fade-down">
          <a
            href='/'
            id='logo'
            className="text-4xl lg:text-5xl text-[rgba(255,255,255,0.7)] font-semibold dark:text-white text-black"
          >
            Aman
          </a>

          <div className="hidden font-semibold items-center md:flex space-x-9" data-aos="fade-right">
            <a href="#home" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Home</a>
            <a href="#about" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">About</a>
            <a href="#projects" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Projects</a>
            <a href="#contact" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Contact</a>
            <h4
              onClick={handleResume}>
              <a
                href="#resume"
                className="text-black dark:text-white  transition-colors"
              >
                Resume
              </a>
            </h4>
          </div>

          <button
            onClick={toggleTheme}
            className="fixed left-16 p-1 md:top-1 md:left-24 md:p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition-colors z-50 dark:shadow-lg dark:shadow-gray-700 shadow-gray-300"
          >
            {theme === 'light' ? (
              <LuSun className="text-2xl p-1" />
            ) : (
              <LuMoonStar className="text-2xl p-1" />
            )}
          </button>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none p-2 rounded text-black dark:bg-transparent dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 p-4 transition-2s-all">
            <a onClick={toggleMenu} href="#home" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Home</a>
            <a onClick={toggleMenu} href="#about" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">About</a>
            <a onClick={toggleMenu} href="#projects" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Projects</a>
            <a onClick={toggleMenu} href="#contact" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Contact</a>
            <a
              className="text-red-500 dark:text-red-500 hover:text-red-400 dark:hover:text-red-400 transition-colors"
              onClick={() => { toggleMenu(); handleResume(); }}
              href="#resume"
            >
              Resume
            </a>
          </div>
        )}

      </nav>

    </div>
  );
};

export default Navbar;
