
import { Link } from "react-scroll";


import pdf from './myresume.pdf';

const Home = () => {
  
  const openPDFInNewTab = () => {
    window.open(pdf, '_blank');
  };

  return (
    <div name="home" className="h-screen w-full flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center items-center text-center">
          {/* Add classes for the name and title elements */}
          <p className="text-lg sm:text-2xl font-bold text-white home-name">Hey, I am</p>
          <h2 className="text-6xl sm:text-8xl font-bold text-white home-title">Prasad Bhor</h2>
          <div className="flex mt-4">
            <button
              onClick={openPDFInNewTab}
              className="mr-4 bg-blue-300 hover:bg-white text-black hover:scale-110 duration-300 font-bold py-2 px-4 buttons"
            >
              View my Resume
            </button>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              className="bg-blue-300 hover:bg-white text-black hover:scale-110 duration-300 font-bold py-2 px-4 buttons"
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


