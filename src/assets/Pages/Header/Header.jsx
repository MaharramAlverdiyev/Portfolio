import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../Images/logo.png";

export const Header = () => {
  const [showBlackHeader, setShowBlackHeader] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isSkillsActive, setIsSkillsActive] = useState(false);
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isProjectsActive, setIsProjectsActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowBlackHeader(true);
      } else {
        setShowBlackHeader(false);
      }

      const scrollPosition = window.scrollY + 100;

      const checkSection = (id, setActive) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          setActive(scrollPosition >= top && scrollPosition < top + height);
        }
      };

      checkSection("home", setIsHomeActive);
      checkSection("about", setIsAboutActive);
      checkSection("skills", setIsSkillsActive);
      checkSection("project", setIsProjectsActive);
      checkSection("contact", setIsContactActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* İlk header */}
      <div className={`header ${showBlackHeader ? "hide-header" : "show-header"}`}>
        <div className="header-column">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>☰</button>

          <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li className={isHomeActive ? "active" : ""}>Home</li>
              <li className={isAboutActive ? "active" : ""}>About</li>
              <li className={isSkillsActive ? "active" : ""}>Skills</li>
              <li className={isProjectsActive ? "active" : ""}>Projects</li>
              <li className={isContactActive ? "active" : ""}>Contact</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Scroll sonrası siyah header */}
      {showBlackHeader && (
        <div className="black-header">
          <div className="black-header-content">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>

            <button className="menu-toggle" onClick={toggleMenu}>☰</button>

            <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              <ul>
                <li className={isHomeActive ? "active" : ""}>Home</li>
                <li className={isAboutActive ? "active" : ""}>About</li>
                <li className={isSkillsActive ? "active" : ""}>Skills</li>
                <li className={isProjectsActive ? "active" : ""}>Projects</li>
                <li className={isContactActive ? "active" : ""}>Contact</li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
