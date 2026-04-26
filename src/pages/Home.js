import React, { useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../index.css';
import Sticker from '../assets/sticker.svg';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostgresql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import data from '../Data.json';

const Home = () => {
  const [text] = useTypewriter({
    words: data.personal.roles,
    loop: {},
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className='min-h-screen'>
      <div
        id="home"
        className="home-container mt-6 md:mt-[3rem] flex -mb-10 flex-col md:flex-row items-start justify-start relative px-[6%]"
        data-aos="fade-up"
      >
        <img
          src={Sticker}
          alt='sticker'
          className='absolute z-0 w-[25%] mx-5 md:mx-3 md:-my-5 h-auto max-w-[200px] md:w-[12%] md:h-auto md:max-w-none filter invert-[0.1] opacity-10 dark:opacity-100 dark:block hidden'
          data-aos="fade-right"
        />

        <div className='relative z-10 home-text flex items-start flex-col md:items-start md:w-3/2 mx-8 md:mx-20 mt-5'>
          <p
            className='text-xl font-semibold -mx-3 md:text-3xl text-[#bb3ccf] text-center md:text-left dark:text-[#bb3ccf]'
            data-aos="fade-left"
          >
            Hi there!👋 I'm
          </p>
          <h1
            className='text-[3.5rem] w-[150%] -mx-5 -mt-5 md:-mt-10 lg:text-[6rem] font-bold text-left md:text-left text-gray-900 dark:text-white'
            data-aos="fade-down"
          >
            {data.personal.name}
          </h1>
          <p
            className='text-[1rem] w-[110%] md:-mt-6 md:text-2xl font-thin -mt-3 -mx-4 text-start md:text-left text-gray-800 dark:text-gray-300'
            data-aos="fade-up" 
          >
            A passionate <span className='text-green-700 font-bold'>
              {text}
            </span>
            <Cursor />
          </p>
          <br />
        </div>
      </div>
      <div
        id='last-div'
        className='flex mt-[8rem] md:mt-[6.6rem] md:gap-[25rem] flex-col md:flex-row justify-center items-center md:items-start'
        data-aos="fade-up"
      >
        <div className='mb-6 -mx-4 md:mb-0'>
          <ul className='md:text-[17px] font-semibold items-start p-2 w-[150%] text-[14px] text-gray-900 dark:text-gray-300'>
            <li>{data.personal.currentFocus}</li>
            <li>⚡{data.personal.currentJob}<span className='text-[#BB3CCF] font-semibold'>{data.personal.currentCompany}</span>.</li>
          </ul>
        </div>
        <div className='mt-10 md:mt-0'>
          <p
            className='font-bold md:text-[xl] text-[15px] text-gray-400 mb-8 md:mb-6 text-center md:text-right dark:text-gray-300'
            data-aos="fade-right" 
          >
            My skills
          </p>
          <div
            className="flex -mt-5 flex-wrap justify-center md:justify-between space-x-10 md:space-x-3"
            data-aos="fade-left"
          >
            <FaReact className="text-4xl mb-2 text-blue-500 dark:text-blue-400" />
            <RiNextjsFill className="text-4xl mb-2" />
            <FaHtml5 className="text-4xl mb-2 text-orange-600 dark:text-orange-400" />
            <FaCss3Alt className='text-4xl mb-2 text-blue-700 dark:text-blue-500' />
            <FaJs className="text-4xl mb-2 text-yellow-400 dark:text-yellow-300" />
            <RiTailwindCssFill className='text-4xl mb-2 text-[#2DCDBA] dark:text-[#2DCDBA]' />
            <FaNodeJs className="text-4xl mb-2 text-green-500 dark:text-green-400" />
            <SiExpress className="text-4xl mb-2 dark:text-gray-300" />
            <SiMongodb className="text-4xl mb-2 text-green-500 dark:text-green-400" />
            <SiPostgresql className="text-4xl mb-2 text-blue-800 dark:text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
