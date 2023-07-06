import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './scrollbar.css'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
