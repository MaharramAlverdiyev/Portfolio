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

 const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const yOffset = -80; // header hündürlüyü qədər (70-80px ətrafı)
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMenuOpen(false);
  }
};

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

  const NavLinks = () => (
    <ul>
      <li className={isHomeActive ? "active" : ""} onClick={() => scrollToSection("home")}>Home</li>
      <li className={isAboutActive ? "active" : ""} onClick={() => scrollToSection("about")}>About</li>
      <li className={isSkillsActive ? "active" : ""} onClick={() => scrollToSection("skills")}>Skills</li>
      <li className={isProjectsActive ? "active" : ""} onClick={() => scrollToSection("project")}>Projects</li>
      <li className={isContactActive ? "active" : ""} onClick={() => scrollToSection("contact")}>Contact</li>
    </ul>
  );

  return (
    <>
      {/* Normal header */}
      <div className={`header ${showBlackHeader ? "hide-header" : "show-header"}`}>
        <div className="header-column">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>☰</button>
          <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <NavLinks />
          </nav>
        </div>
      </div>

      {/* Scroll sonrası qara header */}
      {showBlackHeader && (
        <div className="black-header">
          <div className="black-header-content">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>☰</button>
            <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              <NavLinks />
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
