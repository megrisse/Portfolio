import React, { useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import "./Navigation.css"; // We'll create this for specific navigation styles

function Navigation({ isDarkMode, toggleDarkMode }) {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };

  useEffect(() => {
    // Add padding to the body to prevent content from being hidden behind fixed navbar
    const navHeight = document.getElementById("desktop-nav").offsetHeight;
    document.body.style.paddingTop = `${navHeight}px`;
    
    // Handle resize events to adjust padding
    const handleResize = () => {
      const currentNavHeight = document.getElementById("desktop-nav").offsetHeight;
      document.body.style.paddingTop = `${currentNavHeight}px`;
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav id="desktop-nav" className="fixed-nav">
        <div className="logo">MG</div>
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav" className="fixed-nav">
        <div className="logo">MG</div>
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#Skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;