import React from "react";
import { RiGithubFill, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-purple-600">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold">Contact</p>
          <p className="my-0 text-black text-lg font-bold">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bd5a3a32-6cfb-46b0-897a-0bacda453299"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 placeholder-black border-black rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 placeholder-black border-black rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 placeholder-black border-black rounded-md text-black focus:outline-none"
            ></textarea>

            <div className="flex items-center">
              <button className="text-purple-500 bg-black px-6 py-3 my-8 mr-2 flex items-center rounded-md hover:scale-110 duration-300">
                Let's talk
              </button>
              <a href="https://instagram.com/_prasad.draft?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer"><RiInstagramLine className="text-5xl" /></a>
              <a href="https://www.linkedin.com/in/prasad-bhor-25b199253" target="_blank" rel="noreferrer"><RiLinkedinBoxFill className="text-5xl" /></a>
              <a href="https://github.com/Prasad0770" target="_blank" rel="noreferrer"><RiGithubFill className="text-5xl" /></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;