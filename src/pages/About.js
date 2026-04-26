import React from 'react';
import Profile from '../assets/About-img.jpg';
import '../index.css';
import data from '../Data.json';

const About = () => {
  return (
    <div className="border-t border-gray-300 dark:border-gray-700 pt-10 pb-16">
      {/* ✅ Removed min-h-screen, added proper padding */}
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        About Me
      </h1>

      <div
        id="about"
        className="flex gap-10 flex-col md:flex-row items-start justify-start px-8 md:px-16"
      >
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-center w-full md:w-1/2">
          <div className="flex flex-col items-center md:items-center text-center md:text-left w-full">
            <img
              src={Profile}
              className="rounded-full w-40 h-40 md:w-72 md:h-72 object-cover"
              alt="About Me"
            />

            <p className="text-left p-2 text-lg font-bold text-gray-600 dark:text-gray-400 mt-4">
              <span className="text-gray-900 dark:text-white">{data.about.boldRole}</span>{' '}
              {data.about.description}
            </p>

            <p className="mt-4 text-start p-2 font-bold text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {data.about.additionalInfo}
            </p>
          </div>
        </div>

        {/* Divider - only visible on desktop */}
        <hr className="hidden md:block bg-gray-300 dark:bg-gray-700 md:h-auto md:min-h-[40rem] md:w-[1px] border-none" />

        {/* Right Section */}
        <div className="w-full md:w-1/2 font-bold">
          {/* Education */}
          <h2 className="text-3xl font-semibold mb-6 start md:text-left text-gray-900 dark:text-white">
            🎓 Education
          </h2>

          <ul className="space-y-4">
            {data.education.map((edu, index) => (
              <li key={index} className="md:text-[18px] font-medium text-gray-600 dark:text-gray-400">
                <span className="text-gray-900 dark:text-white">{edu.degree}</span>
                <br />
                <span className="text-gray-500 dark:text-gray-600">{edu.institution}, {edu.duration}</span>
              </li>
            ))}
          </ul>

          {/* Experience */}
          <h2 className="text-3xl font-semibold mt-10 mb-6 text-start md:text-left text-gray-900 dark:text-white">
            💼 Experience
          </h2>

          <div className="space-y-6 text-gray-600 dark:text-gray-400">
            {data.experience.map((job, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {job.company}, {job.type} | {job.duration}
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;