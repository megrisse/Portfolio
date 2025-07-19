import React from "react";

function About() {
  return (
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
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>Currently i'm fresh</p>
            </div>
            <div className="details-container">
              <img
                src="./assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                1337-UM6P
                <br />
                Bachelor Software Engineering
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I'm Merouane Grissen, a Full-Stack Developer with expertise in
              JavaScript, TypeScript, React, Next.js, Node.js, Nest.js, and
              Docker. As a student at 1337-UM6P, I have experience in
              problem-solving with C and C++. I am passionate about creating
              responsive, user-friendly web applications and continually
              expanding my skill set.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;