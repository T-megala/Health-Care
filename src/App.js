import React, { useState } from "react";
import "./App.css";
// import Temp from "./temp";
import About from "./components/About/About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-container">
          <h2 className="logo">SPC Care Foundation</h2>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            {/* <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a> */}
            <a href="#downloads" onClick={() => setMenuOpen(false)}>Documents</a>
            <a href="#footer" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-inner">

          <div className="hero-left">
            <span className="tagline">Trusted • Ethical • Caring</span>
            <h1 className="hero-title">
              Your Partner in <span className="highlight">Primary Healthcare</span>
            </h1>
            <p className="hero-text">
              We deliver ethical, accessible and complete healthcare services — through clinics, home care, digital telemedicine and outreach programs, ensuring every individual receives dependable primary care without financial or geographical barriers
            </p>

            <div className="hero-cta">
              <button className="btn btn-primary">Book Appointment</button>
              <button className="btn btn-outline">Our Services</button>
            </div>

            <div className="hero-stats">
              <div className="stat"><h3>1500+</h3><p>Patients Served</p></div>
              <div className="stat"><h3>40+</h3><p>Health Camps</p></div>
              <div className="stat"><h3>25+</h3><p>Volunteers</p></div>
            </div>
          </div>

          <div className="hero-right">
            <img src="/doctor.jpg" className="hero-img" alt="doctor" />
            <div className="circle-shape"></div>
            <div className="small-glow"></div>
          </div>

        </div>
      </section>

      <About />

    </div>
    //  <Temp></Temp>
  );
}

export default App;
