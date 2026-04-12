import Navbar from './composants/navbar';
import './App.css';
import Footer from './composants/footer';
import "./composants/styles/section.css"
import Hero from './composants/Hero';
import About from './composants/About';
import Projects from './composants/Projects';
import Contact from './composants/Contact';
export default function App() {

  return (
    <>
      <Navbar />  
      <section className="section" id="section1"><Hero /></section>
      <section className="section" id="section2">
        <About />
      </section>
      <section className="section" id="section3">
        <Projects />
      </section>
      <section className="section" id="section4">
        <Contact/> 
        <Footer/>
      </section>
      
      
    </>
  );
}