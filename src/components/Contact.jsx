import React, { useState } from "react";
import { FaSquareInstagram, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../index.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add further form submission logic here
  };

  return (
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>
      
      {/* Social Media Icons */}
      <div
        className="contact-icon"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <a href="https://www.instagram.com" target="_blank" className="items" rel="noopener noreferrer">
          <FaSquareInstagram className="icons" />
        </a>
        <a href="https://www.facebook.com" target="_blank" className="items" rel="noopener noreferrer">
          <FaFacebook className="icons" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" className="items" rel="noopener noreferrer">
          <FaLinkedin className="icons" />
        </a>
        <a href="https://www.twitter.com" target="_blank" className="items" rel="noopener noreferrer">
          <FaTwitterSquare className="icons" />
        </a>
        <a href="https://www.github.com" target="_blank" className="items" rel="noopener noreferrer">
          <FaGithubSquare className="icons" />
        </a>
        <a href="mailto:your-email@example.com" target="_blank" className="items" rel="noopener noreferrer">
          <SiGmail className="icons" />
        </a>
      </div>

      {/* Contact Form */}
      <section className="contact-form-section"
      data-aos="zoom-in"
      data-aos-duration="1000">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
