import React, { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";
import { FaLaptopCode, FaServer, FaDatabase, FaCloudversify } from "react-icons/fa";
import "./Profile.css";

function Profile() {
  const [currentTitle, setCurrentTitle] = useState("");
  const [bioCursor, setBioCursor] = useState(true);
  const [titleCursor, setTitleCursor] = useState(true);
  const [index, setIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(true);
  const [bioText, setBioText] = useState("");
  const [bioComplete, setBioComplete] = useState(false);
  
  const titles = ["Full-Stack Developer", "Problem Solver", "Tech Enthusiast", "Software Engineer"];
  const fullBioText = "Passionate about crafting efficient, scalable solutions that solve real-world problems. I blend creative thinking with technical expertise to build applications that deliver exceptional user experiences.";
  
  // Cycle through titles with slide animation
  useEffect(() => {
    const titleInterval = setInterval(() => {
      // Hide the current title first
      setShowTitle(false);
      
      // After hiding, change the title and show again
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setCurrentTitle(titles[(index + 1) % titles.length]);
        setShowTitle(true);
      }, 500); // Half a second for the exit animation
      
    }, 3000); // Change every 3 seconds
    
    return () => clearInterval(titleInterval);
  }, [index, titles.length]);
  
  // Set initial title
  useEffect(() => {
    setCurrentTitle(titles[0]);
  }, []);
  
  // Bio typing animation effect
  useEffect(() => {
    if (bioText.length < fullBioText.length) {
      const typingTimeout = setTimeout(() => {
        setBioText(fullBioText.substring(0, bioText.length + 1));
      }, 30); // Speed of typing - adjust as needed
      
      return () => clearTimeout(typingTimeout);
    } else if (!bioComplete) {
      setBioComplete(true);
    }
  }, [bioText, fullBioText, bioComplete]);
  
  // Blinking cursor effect for title text
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setTitleCursor(prevState => !prevState);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Blinking cursor effect for bio text
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setBioCursor(prevState => !prevState);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="profile" className="section">
      <div className="profile-container w-full">
        <div className="section__pic-container">
          <img src="./assets/IMG5.png" alt="Merouane Grissen profile" className="profile-image" />
          <div className="image-backdrop"></div>
        </div>
        
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title slide-in">Merouane Grissen</h1>
          <div className="title-container">
            <p className={`section__text__p2 ${showTitle ? "slide-in" : "slide-out"}`}>
              {currentTitle}
            </p>
          </div>
          
          <div className="text-container">
            <p className="bio-text">
              {bioText}
              <span className={bioCursor ? "bio-cursor visible" : "bio-cursor hidden"}>|</span>
            </p>
          </div>
          
          <div className="skill-highlights">
            <div className="skill-item">
              <FaLaptopCode className="skill-icon" />
              <span>Frontend</span>
            </div>
            <div className="skill-item">
              <FaServer className="skill-icon" />
              <span>Backend</span>
            </div>
            <div className="skill-item">
              <FaDatabase className="skill-icon" />
              <span>Databases</span>
            </div>
            <div className="skill-item">
              <FaCloudversify className="skill-icon" />
              <span>Cloud</span>
            </div>
          </div>
          
          <div className="btn-container">
            <a
              href="./assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              <button className="btn btn-secondary">
                Download CV
              </button>
            </a>
            <button
              className="btn btn-primary"
              onClick={() => (window.location.href = "./#contact")}
            >
              Let's Connect
            </button>
          </div>
          
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

export default Profile;