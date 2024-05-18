import React, { useState } from 'react';
import './App.css';
import './mediaqueries.css';

function App() {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };


  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode p-dark' : ''}`}>
      <nav id="desktop-nav">
        <div className="logo">MG</div>
        <button className="btn btn-color-2" onClick={toggleDarkMode}>
                {isDarkMode ? "Light" : "Dark"} Mode
            </button>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">MG</div>
        <button className="btn btn-color-2" onClick={toggleDarkMode}>
                {isDarkMode ? "Light" : "Dark"} Mode
        </button>
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
      <section id="profile">
        <div className="section__pic-container">
          <img src="./assets/IMG9.png" alt="megrisse profile" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Merouane Grissen</h1>
          <p className="section__text__p2">Full-Stack developer</p>
          <div className="text-container">
              <p>
              I'm a fresh and enthusiastic full-stack developer passionate about building efficient and scalable web applications.
              </p>
            </div>
            <br></br>
          <div className="btn-container">
            <a href='./assets/Resume.pdf' target="_blank" rel="noopener noreferrer">
            <button className="btn btn-color-2">
              Download CV
            </button>
            </a>
            <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img src="./assets/linkedin.png" alt="My LinkedIn profile" className="icon" onClick={() => window.open('https://www.linkedin.com/in/merouane-grissen-7971b21b3/')} />
            <img src="./assets/github.png" alt="My Github profile" className="icon" onClick={() => window.open('https://github.com/megrisse')} />
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src="./assets/IMG5.png" alt="Profile" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src="./assets/experience.png" alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>Currently i'm fresh</p>
              </div>
              <div className="details-container">
                <img src="./assets/education.png" alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>1337-UM6P<br />Bachelor Software Engineering</p>
              </div>
            </div>
            <div className="text-container">
              <p>
              I'm Merouane Grissen, a Full-Stack Developer with expertise in JavaScript, TypeScript, React, Next.js, Node.js, Nest.js, and Docker. As a student at 1337-UM6P, 
              I have experience in problem-solving with C and C++. I am passionate about creating responsive, user-friendly web applications and continually expanding my skill set.
            </p>
            </div>
          </div>
        </div>
      </section>
      <section id="Skills">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>HTML</h3>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>CSS</h3>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>JavaScript</h3>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>TypeScript</h3>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>React.js</h3>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Next.js</h3>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Material UI</h3>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Figma</h3>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>PostgreSQL</h3>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>MongoDB</h3>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Node JS</h3>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Nest JS</h3>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Express JS</h3>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Git</h3>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Docker</h3>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src="./assets/Inception.png" alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">INCEPTION</h2>
              <p>
              This project demonstrates a lightweight WordPress system built on the LEMP stack 
              (Nginx, MariaDB, PHP) using Docker and Docker Compose.
              </p>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/megrisse/42_Inception', '_blank')}>
                  Github
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src="./assets/Web-Server.png" alt="Project 2" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Web Server</h2>
              <p>
                A C++98 compatible HTTP web server from scratch. The web server can handle HTTP GET, HEAD, POST, and DELETE Requests, 
                and can serve static files from a specified root directory or dynamic content using CGI.
              </p>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/megrisse/webserv')}>
                  Github
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src="./assets/Pong.png" alt="Project 3" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Online Pong</h2>
              <p>
                a real-time online Pong tournament website, 
                allowing users to compete and connect with each other.
                <br></br>
                Technologies Backend: Nest.js Frontend: React, Next.js Database: PostgreSQL Deployment: Docker
              </p>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open("https://github.com/megrisse/ft_transcendence")}>
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src="./assets/email.png" alt="Email icon" className="icon contact-icon email-icon" />
            <p><a href="mailto:mgrissen9@gmail.com">mgrissen9@gmail.com</a></p>
            <br></br>
          </div>
          <div className="contact-info-container">
            <img src="./assets/linkedin.png" alt="LinkedIn icon" className="icon contact-icon" />
            <p><a href="https://www.linkedin.com/in/merouane-grissen-7971b21b3/" target="_blank" rel='noreferrer'>LinkedIn</a></p>
          </div>
          <div className="contact-info-container">
            <img src="./assets/Call1.png" alt="LinkedIn icon" className="icon contact-icon" />
            <p><a href="https://cal.com/megrisse/30min" target="_blank" rel='noreferrer'>Book a call</a></p>
            <br></br>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#Skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Created With ❤️ by Merouane Grissen.</p>
      </footer>
    </div>
  );
}

export default App;