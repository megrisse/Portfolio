import React, { useState } from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMaterialdesign,
  SiPostgresql,
  SiMongodb,
  SiNestjs,
  SiExpress,
  SiCplusplus,
  SiJira,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

// Custom C language SVG icon component
const CLanguageIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 109.19 122.88"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    style={{
      fontSize: "inherit",
      width: "1.8rem",
      height: "1.8rem",
    }}
  >
    <g>
      <path
        className="st0"
        d="M107.81,92.16c0.86-1.48,1.39-3.16,1.39-4.66V35.38c0-1.5-0.53-3.17-1.39-4.66L54.6,61.44L107.81,92.16
		L107.81,92.16L107.81,92.16z"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "#3949AB",
        }}
      />
      <path
        className="st1"
        d="M59.33,121.75l45.14-26.06c1.3-0.75,2.48-2.05,3.34-3.53L54.6,61.44L1.39,92.16c0.86,1.48,2.04,2.78,3.34,3.53
		l45.14,26.06C52.47,123.25,56.72,123.25,59.33,121.75L59.33,121.75L59.33,121.75z"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "#283593",
        }}
      />
      <path
        className="st2"
        d="M107.81,30.72c-0.86-1.48-2.04-2.78-3.34-3.53L59.33,1.13c-2.6-1.5-6.86-1.5-9.46,0L4.73,27.19
		C2.13,28.69,0,32.38,0,35.38V87.5c0,1.5,0.53,3.17,1.39,4.66L54.6,61.44L107.81,30.72L107.81,30.72L107.81,30.72z"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "#5C6BC0",
        }}
      />
      <path
        className="st3"
        d="M54.6,97.84c-20.07,0-36.4-16.33-36.4-36.4s16.33-36.4,36.4-36.4c12.95,0,25.03,6.97,31.52,18.19l-15.75,9.12
		c-3.25-5.62-9.29-9.1-15.77-9.1c-10.04,0-18.2,8.16-18.2,18.2c0,10.03,8.16,18.2,18.2,18.2c6.48,0,12.52-3.49,15.77-9.1l15.75,9.12
		C79.63,90.87,67.55,97.84,54.6,97.84L54.6,97.84L54.6,97.84z"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "#FFFFFF",
        }}
      />
    </g>
  </svg>
);

function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Define all skills with their categories and icons
  const skillsData = [
    // Frontend skills
    {
      name: "HTML",
      category: "frontend",
      icon: <FaHtml5 className="skill-icon" color="#E34F26" />,
    },
    {
      name: "CSS",
      category: "frontend",
      icon: <FaCss3Alt className="skill-icon" color="#1572B6" />,
    },
    {
      name: "React.js",
      category: "frontend",
      icon: <FaReact className="skill-icon" color="#61DAFB" />,
    },
    {
      name: "Next.js",
      category: "frontend",
      icon: <SiNextdotjs className="skill-icon" color="#000000" />,
    },
    {
      name: "Material UI",
      category: "frontend",
      icon: <SiMaterialdesign className="skill-icon" color="#0081CB" />,
    },
    {
      name: "Figma",
      category: "frontend",
      icon: <FaFigma className="skill-icon" color="#F24E1E" />,
    },

    // Backend skills
    {
      name: "PostgreSQL",
      category: "backend",
      icon: <SiPostgresql className="skill-icon" color="#336791" />,
    },
    {
      name: "MongoDB",
      category: "backend",
      icon: <SiMongodb className="skill-icon" color="#47A248" />,
    },
    {
      name: "Node JS",
      category: "backend",
      icon: <FaNodeJs className="skill-icon" color="#339933" />,
    },
    {
      name: "Nest JS",
      category: "backend",
      icon: <SiNestjs className="skill-icon" color="#E0234E" />,
    },
    {
      name: "Express JS",
      category: "backend",
      icon: <SiExpress className="skill-icon" color="#000000" />,
    },

    // Programming Languages category
    {
      name: "C",
      category: "languages",
      icon: <CLanguageIcon className="skill-icon" />,
    },
    {
      name: "C++",
      category: "languages",
      icon: <SiCplusplus className="skill-icon" color="#00599C" />,
    },
    {
      name: "JavaScript",
      category: "languages",
      icon: <FaJs className="skill-icon" color="#F7DF1E" />,
    },
    {
      name: "TypeScript",
      category: "languages",
      icon: <BiLogoTypescript className="skill-icon" color="#3178C6" />,
    },

    // Tools category
    {
      name: "Git",
      category: "tools",
      icon: <FaGitAlt className="skill-icon" color="#F05032" />,
    },
    {
      name: "Docker",
      category: "tools",
      icon: <FaDocker className="skill-icon" color="#2496ED" />,
    },
    {
      name: "Jira",
      category: "tools",
      icon: <SiJira className="skill-icon" color="#0052CC" />,
    },
  ];

  // Filter skills based on active filter
  const filteredSkills =
    activeFilter === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);

  return (
    <section id="Skills">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>

      {/* Filter buttons */}
      <div className="skills-filter-container">
        <button
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          All Skills
        </button>
        <button
          className={`filter-btn ${
            activeFilter === "languages" ? "active" : ""
          }`}
          onClick={() => setActiveFilter("languages")}
        >
          Languages
        </button>
        <button
          className={`filter-btn ${
            activeFilter === "frontend" ? "active" : ""
          }`}
          onClick={() => setActiveFilter("frontend")}
        >
          Frontend
        </button>
        <button
          className={`filter-btn ${activeFilter === "backend" ? "active" : ""}`}
          onClick={() => setActiveFilter("backend")}
        >
          Backend
        </button>
        <button
          className={`filter-btn ${activeFilter === "tools" ? "active" : ""}`}
          onClick={() => setActiveFilter("tools")}
        >
          Tools
        </button>
      </div>

      {/* Skills cards grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div key={index} className={`skill-card ${skill.category}`}>
            <div className="skill-icon-container">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
