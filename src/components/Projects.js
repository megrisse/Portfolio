import React from "react";
import "./Projects.css"; // We'll create this file for the new styles

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container project-card">
            <div className="article-container">
              <img
                src="./assets/Inception.png"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">INCEPTION</h2>
            <p className="project-description">
              This project demonstrates a lightweight WordPress system built
              on the LEMP stack (Nginx, MariaDB, PHP) using Docker and Docker
              Compose.
            </p>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/megrisse/42_Inception",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
          </div>

          <div className="details-container color-container project-card">
            <div className="article-container">
              <img
                src="./assets/Web-Server.png"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Web Server</h2>
            <p className="project-description">
              A C++98 compatible HTTP web server from scratch. The web server
              can handle HTTP GET, HEAD, POST, and DELETE Requests, and can
              serve static files from a specified root directory or dynamic
              content using CGI.
            </p>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open("https://github.com/megrisse/webserv")
                }
              >
                Github
              </button>
            </div>
          </div>

          <div className="details-container color-container project-card">
            <div className="article-container">
              <img
                src="./assets/Pong.png"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Online Pong
            </h2>
            <p className="project-description">
              A real-time online Pong tournament website, allowing users to
              compete and connect with each other.
              <br></br>
              Technologies Backend: Nest.js Frontend: React, Next.js Database:
              PostgreSQL Deployment: Docker
            </p>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open("https://github.com/megrisse/ft_transcendence")
                }
              >
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;