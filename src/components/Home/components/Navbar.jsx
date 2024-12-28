import React, { useState } from 'react';

function Navbar({ homeRef, aboutRef, skillsRef, projectsRef, contactsRef, educationRef }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex justify-between items-center p-8 top-0 sticky bg-white/30 backdrop-blur-md">
      <div>
        <h1 className="font-bold text-3xl text-primary-dark">Anurag.JS</h1>
      </div>

      <div className="hidden md:flex gap-6 text-primary-dark">
        <a
          className="hover:text-primary-light cursor-pointer"
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </a>
        <a
          className="hover:text-primary-light cursor-pointer"
          onClick={() => scrollToSection(skillsRef)}
        >
          Skills
        </a>
        <a
          className="hover:text-primary-light cursor-pointer"
          onClick={() => scrollToSection(educationRef)}
        >
          Education
        </a>
        <a
          className="hover:text-primary-light cursor-pointer"
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </a>
        <a
          className="hover:text-primary-light cursor-pointer"
          onClick={() => scrollToSection(contactsRef)}
        >
          Contacts
        </a>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-primary-dark">
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/30 backdrop-blur-md text-primary-dark shadow-md flex flex-col items-start p-4 md:hidden">
          <a
            className="hover:text-primary-light mb-2 cursor-pointer"
            onClick={() => {
              scrollToSection(homeRef);
              toggleMenu();
            }}
          >
            Home
          </a>
          <a
            className="hover:text-primary-light mb-2 cursor-pointer"
            onClick={() => {
              scrollToSection(aboutRef);
              toggleMenu();
            }}
          >
            About
          </a>
          <a
            className="hover:text-primary-light mb-2 cursor-pointer"
            onClick={() => {
              scrollToSection(skillsRef);
              toggleMenu();
            }}
          >
            Skills
          </a>
          <a
            className="hover:text-primary-light mb-2 cursor-pointer"
            onClick={() => {
              scrollToSection(projectsRef);
              toggleMenu();
            }}
          >
            Projects
          </a>
          <a
            className="hover:text-primary-light mb-2 cursor-pointer"
            onClick={() => {
              scrollToSection(contactsRef);
              toggleMenu();
            }}
          >
            Contacts
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
