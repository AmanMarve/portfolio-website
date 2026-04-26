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
    onSuccess: () => {
      toast.success("Message sent successfully!");
      reset();
    },
    onError: () => {
      toast.error("Message failed to send.");
    }
  });

  const handleFormSubmit = (formData) => {
    // ✅ renamed param to formData to avoid shadowing the data import
    if (String(formData.contact).length !== 10) {
      setValidationError("Contact number must be exactly 10 digits.");
      return;
    }
    setValidationError("");
    onSubmit(formData);
  };

  const handleResume = () => {
    const link = document.createElement("a");
    link.href = data.personal.resume;
    link.download = "Aman_marve_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast('Resume Downloaded', { icon: '📑' });
  };

  const inputClass = "mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition";
  // ✅ Extracted common input class + added focus ring for better UX

  return (
    <div
      id="contact"
      className="flex flex-col border-t border-gray-300 dark:border-gray-800 items-center justify-start py-16 px-6"
      // ✅ Removed min-h-screen, mb-20, p-4 → proper py-16 px-6
    >
      <Toaster />
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Contact Me
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-5xl">

        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <div className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-[rgba(255,255,255,0.1)] p-6 rounded-lg shadow-md w-full">
            {/* ✅ Removed lg:w-[300%] w-[120%] -mx-6 — was causing overflow */}

            {validationError && (
              <div className="mb-4 text-red-500 text-sm">{validationError}</div>
            )}

            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
              {/* ✅ space-y-4 on form removes repeated mb-4 on each field */}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: true })}
                  className={inputClass}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: true })}
                  className={inputClass}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Contact Number
                </label>
                <input
                  type="number"
                  id="contact"
                  {...register('contact', { required: true })}
                  className={inputClass}
                />
                {errors.contact && <p className="text-red-500 text-sm mt-1">Contact number is required</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: true })}
                  className={inputClass}
                  // ✅ added rows={4} so textarea has a proper default height
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="px-5 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-purple-600 rounded-md hover:bg-blue-700 dark:hover:bg-purple-700 transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="px-5 py-2 text-sm font-medium text-gray-700 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  onClick={() => { reset(); setValidationError(''); }}
                  // ✅ Reset also clears the validation error
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Contact Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start gap-6 lg:pt-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Get Connected with Me
            </h2>
            <div className="flex space-x-6">
              <a href={data.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-blue-400 text-3xl hover:text-blue-600 transition-colors" />
              </a>
              <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-blue-700 dark:text-blue-500 text-3xl hover:text-blue-900 transition-colors" />
              </a>
              <a href={data.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="text-gray-500 dark:text-gray-400 text-3xl hover:text-gray-700 transition-colors" />
              </a>
            </div>
          </div>

          <button
            onClick={handleResume}
            className="inline-flex items-center w-fit px-4 py-2 text-sm font-medium text-white bg-green-600 dark:bg-green-700 rounded-md hover:bg-green-700 dark:hover:bg-green-800 transition cursor-pointer"
          >
            <FaFilePdf className="mr-2" /> Download Resume
          </button>

          <a
            href={`mailto:${data.personal.email}`}
            className="flex items-center gap-3 group"
          >
            <IoMail className="text-gray-500 dark:text-gray-400 text-3xl group-hover:text-purple-500 transition-colors" />
            <span className="text-lg text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors">
              {data.personal.email}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;