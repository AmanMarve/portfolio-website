import React from 'react';
import Profile from '../assets/About-img.jpg';
import '../index.css';
import data from '../Data.json';

const About = () => {
  return (
    <div className=" border-t border-gray-300 dark:border-gray-700">
      <h1 className="text-4xl font-bold mt-8 mb-8 text-center text-gray-900 dark:text-white">
        About Me
      </h1>

      <div
        id="about"
        className="flex md:-mt-20 gap-10 flex-col md:flex-row items-center justify-start min-h-screen p-8 md:p-16"
      >
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={Profile}
              className="rounded-full w-40 h-40 md:ml-28 md:w-72 md:h-72 object-cover"
              alt="About Me"
            />

            <p className="md:text-left p-2 text-xl font-bold text-gray-600 dark:text-gray-400 mt-4">
              <span className="text-gray-900 dark:text-white">{data.about.boldRole}</span> {data.about.description}
            </p>

            {/* New Paragraph */}
            <p className="mt-4 p-2 font-bold text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {data.about.additionalInfo}
            </p>
          </div>
        </div>

        <hr className="bg-gray-900 dark:bg-gray-700 md:h-[20rem] md:w-[.5px]" />

        {/* Right Section */}
        <div className=" -mt-5 md:-mt-20 md:ml-8">
          {/* Education */}
          <h2 className="text-3xl font-semibold mb-6 text-center md:text-left text-gray-900 dark:text-white">
            🎓 Education
          </h2>

          <ul className="space-y-4">
            <li className="md:text-[20px] font-medium text-gray-600 dark:text-gray-400">
              <span className="text-gray-900 dark:text-white">{data.education[0].degree}</span>
              <br />
              <span className="text-gray-500 dark:text-gray-600">{data.education[0].institution}, {data.education[0].duration}</span>
            </li>

            <li className="md:text-[20px] font-medium text-gray-600 dark:text-gray-400">
              <span className="text-gray-900 dark:text-white">{data.education[1].degree}</span>
              <br />
              <span className="text-gray-500 dark:text-gray-600">{data.education[1].institution}, {data.education[1].duration}</span>
            </li>

            <li className="md:text-[20px] font-medium text-gray-600 dark:text-gray-400">
              <span className="text-gray-900 dark:text-white">{data.education[2].degree}</span>
              <br />
              <span className="text-gray-500 dark:text-gray-600">{data.education[2].institution}, {data.education[2].duration}</span>
            </li>
          </ul>

          {/* Experience Section */}
          <h2 className="text-3xl font-semibold mt-10 mb-6 text-center md:text-left text-gray-900 dark:text-white">
            💼 Experience
          </h2>

          <div className="space-y-6 text-gray-600 dark:text-gray-400">

            {/* Job 1 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {data.experience[0].title}
              </h3>
              <p className="text-sm text-gray-500">{data.experience[0].company}, {data.experience[0].type} | {data.experience[0].duration}</p>

              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>{data.experience[0].responsibilities[0]}</li>
                <li>{data.experience[0].responsibilities[1]}</li>
                <li>{data.experience[0].responsibilities[2]}</li>
                <li>{data.experience[0].responsibilities[3]}</li>
              </ul>
            </div>

            {/* Job 2 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {data.experience[1].title}
              </h3>
              <p className="text-sm text-gray-500">{data.experience[1].company}, {data.experience[1].type} | {data.experience[1].duration}</p>

              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>{data.experience[1].responsibilities[0]}</li>
                <li>{data.experience[1].responsibilities[1]}</li>
                <li>{data.experience[1].responsibilities[2]}</li>
                <li>{data.experience[1].responsibilities[3]}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
