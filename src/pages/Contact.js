import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import { IoMail } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import data from '../Data.json';

const Contact = () => {
  const [validationError, setValidationError] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const accessKey = '7b7c4032-d8d6-47db-8b7b-eff870ab3998';

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Aman's Portfolio",
      subject: "New Inquiry",
    },
    onSuccess: (msg) => {
      toast.success("Message sent successfully!");
      reset();
    },
    onError: (msg) => {
      toast.error("Message failed to send.");
    }
  });

  const handleFormSubmit = (data) => {
    if (data.contact.length !== 10) {
      setValidationError("Contact number must be exactly 10 digits.");
      return;
    }
    setValidationError("");
    onSubmit(data);
  };

  const handleResume = () => {
    const pdfUrl = data.personal.resume;
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

  return (
    <div id="contact" className="flex flex-col mb-20 border-t border-gray-300 dark:border-gray-800 items-center justify-start min-h-screen p-4">
      <Toaster />
      <h1 className="text-4xl font-bold mt-8 mb-4 text-center text-gray-900 dark:text-white">Contact Me</h1>
      <div className="flex flex-col lg:gap-[25rem] lg:flex-row lg:space-x-40 lg:items-start lg:justify-between">
        <div className="w-full mb-8 lg:mb-0">
          <h2 className="md:text-2xl text-xl font-bold md:mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
          <div className="border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-[rgba(255,255,255,0.1)] lg:w-[300%] w-[120%]md:mx-0 -mx-6 border p-6 rounded-lg shadow-md">
            {validationError && (
              <div className="mb-4 text-red-500">{validationError}</div>
            )}
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  {...register('name', { required: true })}
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-md shadow-sm"
                />
                {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register('email', { required: true })}
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-md shadow-sm"
                />
                {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="contact" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Contact Number
                </label>
                <input
                  type="number"
                  name="contact"
                  id="contact"
                  {...register('contact', { required: true })}
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-md shadow-sm"
                />
                {errors.contact && <p className="text-red-500 text-sm">Contact number is required</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  {...register('message', { required: true })}
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-md shadow-sm"
                />
                {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-purple-600 backdrop-blur-lg border border-transparent rounded-md hover:bg-blue-700 dark:hover:bg-purple-700"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 ml-2 text-sm font-medium text-gray-700 bg-white dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                  onClick={() => reset()}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Contact Details */}
        <div className="w-full lg:mt-4 lg:w-[150%]">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Get Connected with Me</h2>
          <div className="flex space-x-6 mb-4">
            <a href={data.social.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 dark:text-blue-300 text-3xl hover:text-blue-600 dark:hover:text-blue-400" />
            </a>
            <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 dark:text-blue-500 text-3xl hover:text-blue-900 dark:hover:text-blue-700" />
            </a>
            <a href={data.social.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-500 dark:text-gray-400 text-3xl hover:text-gray-600 dark:hover:text-gray-500" />
            </a>
          </div>
          <a
            href="#resume"
            onClick={handleResume}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 dark:bg-green-700 border border-transparent rounded-md hover:bg-green-700 dark:hover:bg-green-800 cursor-pointer"
          >
            <FaFilePdf className="mr-2" /> Download Resume
          </a>
          <div className="mt-4 flex items-center">
            <a href={`mailto:${data.email}`}>
              <IoMail className="text-gray-500 dark:text-gray-400 text-3xl mr-2" />
            </a>
            <p className="text-lg text-gray-900 dark:text-white">aman1.marve@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
