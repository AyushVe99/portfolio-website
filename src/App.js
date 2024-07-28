import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
//import Resume from './components/Resume';
import Contact from './components/Contact';
import Experience from './components/Experience'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <Navbar />
      <Element name="home" className="element">
        <div className="box-container">
          <Home />
        </div>
      </Element>
      <Element name="about" className="element">
        <div className="box-container">
          <About />
        </div>
      </Element>
      <Element name="experience" className="element">
        <div className="box-container">
          <Experience />
        </div>
      </Element>
      <Element name="projects" className="element">
        <div className="box-container">
          <Projects />
        </div>
      </Element>
      <Element name="contact" className="element">
        <div className="box-container">
          <Contact />
        </div>
      </Element>
    </div>
  );
}

export default App;
