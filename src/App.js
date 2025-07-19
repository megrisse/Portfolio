import React, { useState } from "react";
import "./App.css";
import "./mediaqueries.css";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode p-dark" : ""}`}>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
