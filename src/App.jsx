import React, { useRef } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactUs from './components/ContactUs/ContactUs';
// import Education from './components/About/Education/Education';
import Navbar from './components/Home/components/Navbar';
import Education_Experience from './components/Skills/components/Education_Experience';
import Education from './components/About/Education/Education';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);
  const educationRef = useRef(null)

  return (
    <div>
      <Navbar
        homeRef={homeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactsRef={contactsRef}
        educationRef = {educationRef}
      />

      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={educationRef}>
        <Education />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactsRef}>
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
