import React from "react";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-center">
          <p className="text-lg sm:text-2xl font-bold text-white">
            Hey, I am
          </p>
          <h2 className="text-6xl sm:text-8xl font-bold text-white">
            Prasad Bhor
          </h2>
          <a
            href="/path/to/your/cv.pdf"
            download="Prasad_Bhor_CV.pdf"
            className="mt-4 bg-purple-700 hover:bg-white text-black hover:scale-110 duration-300 font-bold py-2 px-4"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;


