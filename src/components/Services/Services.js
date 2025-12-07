import React from "react";
import "./Services.css";
import {
  FaClinicMedical,
  FaLaptopMedical,
  FaAmbulance,
  FaUserNurse,
  FaHeartbeat,
  FaBrain,
  FaLeaf,
  FaBookReader,
  FaHandsHelping
} from "react-icons/fa";


const Services = () => {
  return (
    <section id="services" className="services-wrapper">

      {/* HEADER */}
      <div className="services-hero" data-aos="fade-up">
        <h3 className="services-badge">Our Impact Areas</h3>
        <h1 className="services-main-title">
          Transforming Primary Healthcare  
          <span> Across Communities</span>
        </h1>
        <p className="services-subtext">
          Built on ethics, accessibility and innovation — SPC Care Foundation 
          delivers healthcare through clinics, digital platforms, outreach, 
          education, preventive programs & home-based care.
        </p>
      </div>


      {/* HORIZONTAL SCROLL CARDS */}
      <div className="scroll-container">

        <div className="service-scroll-card" data-aos="fade-up">
          <FaClinicMedical className="scroll-icon" />
          <h3>Ethical Primary Care Clinics</h3>
          <p>
            Promotive, preventive, diagnostic, curative, rehabilitative & 
            palliative care — supported by pharmacies, diagnostics & digital tools.
          </p>
        </div>

        <div className="service-scroll-card" data-aos="fade-up" data-aos-delay="100">
          <FaLaptopMedical className="scroll-icon" />
          <h3>Telemedicine & Digital Health</h3>
          <p>
            EHR, cloud platforms, QR-coded prescriptions, virtual triage, 
            digital health passports & online appointments.
          </p>
        </div>

        <div className="service-scroll-card" data-aos="fade-up" data-aos-delay="200">
         <FaAmbulance className="scroll-icon" />
          <h3>Mobile Medical Units</h3>
          <p>
            Rural outreach, screenings, early detection, chronic care, 
            maternal health & on-ground medical support.
          </p>
        </div>

        <div className="service-scroll-card" data-aos="fade-up" data-aos-delay="300">
          <FaUserNurse className="scroll-icon" />
          <h3>Home-Based Care</h3>
          <p>
            Palliative care, geriatric care, physiotherapy, rehabilitation, 
            nursing & long-term monitoring at home.
          </p>
        </div>

        <div className="service-scroll-card" data-aos="fade-up" data-aos-delay="400">
          <FaBrain className="scroll-icon" />
          <h3>Innovation & Research</h3>
          <p>
            VR-based training, simulation programs, pilot models & 
            scalable healthcare innovations.
          </p>
        </div>

        <div className="service-scroll-card" data-aos="fade-up" data-aos-delay="500">
          <FaLeaf className="scroll-icon" />
          <h3>Nutrition & Public Wellness</h3>
          <p>
            Health-focused food products, RDA education, adult vaccination, 
            cancer screening & AYUSH therapies.
          </p>
        </div>

        <div className="service-scroll-card" data-aos="fade-up" data-aos-delay="600">
          <FaBookReader className="scroll-icon" />
          <h3>Health Literacy & Training</h3>
          <p>
            Citizen training, self-learning modules, community awareness & 
            healthcare workforce development.
          </p>
        </div>

        <div className="service-scroll-card" data-aos="fade-up" data-aos-delay="700">
          <FaHandsHelping className="scroll-icon" />
          <h3>Community Empowerment</h3>
          <p>
            Women’s health, disability support, elder programs, 
            preventive campaigns & social health partnerships.
          </p>
        </div>
      </div>


      {/* CTA */}
      <div className="services-cta" data-aos="zoom-in">
        <button className="cta-btn">Explore All Programs</button>
      </div>
    </section>
  );
};

export default Services;
