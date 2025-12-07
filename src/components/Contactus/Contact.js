import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h2>Contact us</h2>
        <p>Kassapay is ready to provide the right solution according to your needs</p>
      </div>

      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h3>Get in touch</h3>
          <p>
            Sociosqu viverra lectus placerat sem efficitur molestie vehicula
            cubilia leo etiam nam.
          </p>

          <div className="info-box">
            <div className="icon"><FaMapMarkerAlt /></div>
            <div>
              <h4>Head Office</h4>
              <p>Jalan Cempaka Wangi No 22<br />Jakarta - Indonesia</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon"><FaEnvelope /></div>
            <div>
              <h4>Email Us</h4>
              <p>support@yourdomain.tld<br />hello@yourdomain.tld</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon"><FaPhoneAlt /></div>
            <div>
              <h4>Call Us</h4>
              <p>Phone : +6221.2002.2012<br />Fax : +6221.2002.2013</p>
            </div>
          </div>

          <h4 className="social-title">Follow our social media</h4>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h3>Send us a message</h3>

          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Company" />
          </div>

          <div className="form-row">
            <input type="text" placeholder="Phone" />
            <input type="email" placeholder="Email" />
          </div>

          <input type="text" className="full" placeholder="Subject" />

          <textarea className="full" placeholder="Message"></textarea>

          <button className="send-btn">Send</button>
        </div>
      </div>
    </div>
  );
}
