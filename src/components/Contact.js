import React from "react";

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:mgrissen9@gmail.com">mgrissen9@gmail.com</a>
          </p>
          <br></br>
        </div>
        <div className="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a
              href="https://www.linkedin.com/in/merouane-grissen-7971b21b3/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="./assets/Call1.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a
              href="https://cal.com/megrisse/30min"
              target="_blank"
              rel="noreferrer"
            >
              Book a call
            </a>
          </p>
          <br></br>
        </div>
      </div>
    </section>
  );
}

export default Contact;