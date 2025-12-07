import React from "react";
import "./temp.css";

function Temp() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">SPC Care Foundation</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#downloads">Documents</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="overlay"></div>

        <div className="hero-left">
          <h1 className="hero-title">Partner in Health & Wellness</h1>
          <p className="hero-subtitle">
            Delivering ethical, accessible and impactful healthcare for every community.
            Together, we build a healthier India.
          </p>
          <a href="#about">
            <button className="btn-primary">Explore More</button>
          </a>
        </div>

        <div className="hero-right">
          <img src="/doctor3.jpg" alt="Doctor" className="floating-img" />
        </div>

        <div className="blob"></div>
      </section>

      {/* ABOUT SECTION (80–100vh expanded) */}
      <section id="about" className="about-section">
        <h2 className="section-title">About SPC Care Foundation</h2>

        <div className="about-content">
          <div className="about-left">
            <img src="/doctor2.jpg" alt="Healthcare"
              className="about-img" />
          </div>

          <div className="about-right">

            <h3>Who We Are</h3>
            <p>
              SPC Care Foundation is a Section-8 registered non-profit organization focused
              on delivering inclusive and ethical primary healthcare. We aim to remove
              barriers in healthcare delivery by integrating physical clinics, digital
              technology, mobile medical units, and community outreach programs. Our
              foundation stands as a bridge between underserved populations and quality
              healthcare.
            </p>

            <h3>Our Mission</h3>
            <p>
              To provide accessible, affordable, and comprehensive primary care services
              for families across India, especially underserved and vulnerable communities.
              We focus on promotive, preventive, diagnostic, curative, rehabilitative and
              palliative healthcare solutions.
            </p>

            <h3>Our Vision</h3>
            <p>
              To build a healthier nation where every individual — regardless of
              location, income or background — receives timely and ethical healthcare.
            </p>

            <h3>Our Core Values</h3>
            <ul>
              <li>Compassion & Respect</li>
              <li>Accessibility for All</li>
              <li>Ethical Healthcare</li>
              <li>Community Empowerment</li>
              <li>Innovation through Technology</li>
            </ul>

          </div>
        </div>
      </section>

      {/* DASHBOARD STYLE PROGRAMS SECTION */}
      <section id="programs" className="programs-section">
        <h2 className="section-title">Our Impact Areas</h2>
        <p className="section-sub">
          Multi-dimensional healthcare programs designed to uplift communities across India.
        </p>

        <div className="program-grid">

          <div className="program-card">
            <h3>Digital Health Ecosystem</h3>
            <p>
              EHR systems, digital prescriptions, virtual consultations, online
              appointments, health passport and QR-medication for seamless access.
            </p>
          </div>

          <div className="program-card">
            <h3>Community Health Outreach</h3>
            <p>
              Awareness programs, preventive screenings, nutrition education,
              school health sessions and women-focused wellness camps.
            </p>
          </div>

          <div className="program-card">
            <h3>Mobile Medical Units</h3>
            <p>
              Fully equipped medical vans for rural, tribal and remote areas
              enabling last-mile healthcare delivery.
            </p>
          </div>

          <div className="program-card">
            <h3>Home-Based Healthcare</h3>
            <p>
              Elder care, physiotherapy, rehabilitation, palliative support,
              chronic disease monitoring and nurse assistance at home.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES (Expanded) */}
      <section id="services" className="services-section">
        <h2 className="section-title">Our Healthcare Services</h2>

        <div className="service-grid">

          <div className="service-card">
            <h4>Primary Clinics</h4>
            <p>
              Comprehensive checkups, routine treatments, diagnosis and preventive care.
            </p>
          </div>

          <div className="service-card">
            <h4>Doctor Home Visits</h4>
            <p>
              Home-based consultations for elders, bedridden patients and chronic cases.
            </p>
          </div>

          <div className="service-card">
            <h4>Telemedicine</h4>
            <p>
              Video consultations, e-prescriptions and remote health monitoring.
            </p>
          </div>

          <div className="service-card">
            <h4>Diagnostics & Screening</h4>
            <p>
              ECG, sugar tests, BP, cancer screening, eye tests and full lab support.
            </p>
          </div>

          <div className="service-card">
            <h4>Mental Health</h4>
            <p>
              Counselling, stress therapy, mental wellness programs and workshops.
            </p>
          </div>

          <div className="service-card">
            <h4>Wellness Programs</h4>
            <p>
              Nutrition, fitness, immunization, AYUSH, lifestyle correction and detox plans.
            </p>
          </div>

        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section id="downloads" className="download-section">
        <h2 className="section-title">Documents</h2>
        <p className="section-sub">
          Download official documents, compliance files and organization reports.
        </p>

        <div className="download-grid">
          <div className="download-card">
            <h3>MOA Document</h3>
            <p>Official Memorandum of Association (PDF)</p>
            <a href="/MOA.pdf" download className="download-btn">Download File</a>
          </div>

          <div className="download-card">
            <h3>Example Document 1</h3>
            <p>Project Proposal Template</p>
            <a href="#" className="download-btn">Download</a>
          </div>

          <div className="download-card">
            <h3>Example Document 2</h3>
            <p>Compliance & Policies Pack</p>
            <a href="#" className="download-btn">Download</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="footer">
        <p>© 2025 SPC Care Foundation — All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Temp;
