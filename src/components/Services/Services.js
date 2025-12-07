import React from "react";
import "./Services.css";
import {
  FaUserMd,
  FaHeartbeat,
  FaStethoscope,
  FaAmbulance,
  FaClinicMedical,
  FaLaptopMedical,
  FaHandHoldingHeart
} from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <span className="services-subtitle">What We Offer</span>
        <h2 className="services-title">
          Complete, Accessible & Ethical Healthcare Services
        </h2>
        <p className="services-text">
          SPC Care Foundation delivers healthcare through clinics, telemedicine,
          mobile medical units, community outreach & preventive care programs.
        </p>
      </div>

      <div className="services-grid">

        <div className="service-card" data-aos="fade-up">
          <div className="service-icon">
            <FaClinicMedical />
          </div>
          <h3 className="service-title">Primary Health Clinics</h3>
          <p className="service-description">
            Affordable primary consultations, continuous treatment, screenings,
            follow-up care & family health services.
          </p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="150">
          <div className="service-icon">
            <FaLaptopMedical />
          </div>
          <h3 className="service-title">Telemedicine & Digital Care</h3>
          <p className="service-description">
            Remote doctor consultations, digital prescriptions, patients triage,
            and virtual monitoring through our health platform.
          </p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <div className="service-icon">
            <FaAmbulance />
          </div>
          <h3 className="service-title">Mobile Medical Units</h3>
          <p className="service-description">
            Fully equipped on-ground medical units for rural outreach, screenings,
            diagnostics & emergency primary care.
          </p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="450">
          <div className="service-icon">
            <FaStethoscope />
          </div>
          <h3 className="service-title">Preventive Health Programs</h3>
          <p className="service-description">
            Health awareness, lifestyle counseling, wellness camps, and
            early-detection initiatives for communities.
          </p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="600">
          <div className="service-icon">
            <FaHandHoldingHeart />
          </div>
          <h3 className="service-title">Community Outreach</h3>
          <p className="service-description">
            Free health camps, elder care support, women’s health programs,
            chronic disease management and disability support.
          </p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="750">
          <div className="service-icon">
            <FaHeartbeat />
          </div>
          <h3 className="service-title">Home-Based Care</h3>
          <p className="service-description">
            Nursing care, chronic care management, post-hospital care and
            home health monitoring for vulnerable groups.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
