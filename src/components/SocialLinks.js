import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./SocialLinks.css"; // We'll create this file
import { IoLogoLinkedin } from "react-icons/io";

function SocialLinks() {
  return (
    <div id="socials-container">
      <a
        href="https://www.linkedin.com/in/merouane-grissen-7971b21b3/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-link"
        aria-label="LinkedIn"
      >
        <IoLogoLinkedin className="social-icon" />
      </a>
      <a
        href="https://github.com/megrisse"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-link"
        aria-label="GitHub"
      >
        <FaGithub className="social-icon" />
      </a>
    </div>
  );
}

export default SocialLinks;