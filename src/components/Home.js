import React from "react";
import { Link } from "react-scroll";
import pdf from './myresume.pdf'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-lg sm:text-2xl font-bold text-white">Hey, I am</p>
          <h2 className="text-6xl sm:text-8xl font-bold text-white">Prasad Bhor</h2>
          <div className="flex mt-4">
            <a
              href={pdf}
              download="Prasad_Bhor_CV.pdf"
              className="mr-4 bg-purple-700 hover:bg-white text-black hover:scale-110 duration-300 font-bold py-2 px-4"
            >
              Download CV
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              className="bg-purple-700 hover:bg-white text-black hover:scale-110 duration-300 font-bold py-2 px-4"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


