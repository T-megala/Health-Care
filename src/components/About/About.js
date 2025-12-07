import React from "react";
import "./About.css";
import { FaUserMd, FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-left">
          <img src="/doctor2.jpg" alt="about" className="about-img" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">
          <span className="about-small-title">About Us</span>

          <h2 className="about-title">
            Vision for a healthier and brighter tomorrow
          </h2>

          <div className="about-item">
            <div className="icon-circle">
              <FaUserMd />
            </div>
            <div>
              <h3 className="about-item-title">Who We Are</h3>
              <p className="about-item-text">
                SPC Care Foundation is a Section-8 registered non-profit 
                focused on inclusive and ethical primary healthcare—
                connecting underserved communities with clinics, telehealth,
                mobile medical units and outreach programs.
              </p>
            </div>
          </div>

          <div className="about-item">
            <div className="icon-circle">
              <FaBullseye />
            </div>
            <div>
              <h3 className="about-item-title">Our Mission</h3>
              <p className="about-item-text">
                To offer accessible, affordable, promotive, preventive,
                diagnostic, curative and palliative healthcare services 
                across India.
              </p>
            </div>
          </div>

          <div className="about-item">
            <div className="icon-circle">
              <FaEye />
            </div>
            <div>
              <h3 className="about-item-title">Our Vision</h3>
              <p className="about-item-text">
                A nation where everyone receives ethical, timely and 
                dependable primary care.
              </p>
            </div>
          </div>

          <div className="about-item">
            <div className="icon-circle">
              <FaHandsHelping />
            </div>
            <div>
              <h3 className="about-item-title">Core Values</h3>
              <p className="about-item-text">
                Compassion, Accessibility, Ethics, Community Empowerment,
                and Innovation through Technology.
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="about-btn">What We Do</button>
        </div>
      </div>
    </section>
  );
};

export default About;
