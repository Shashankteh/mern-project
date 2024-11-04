import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Please fill out all fields!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/submitForm",
        formData
      );
      console.log(response.data.message);
      alert(`Thanks ${formData.name}, I will shortly connect with you!`);
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("The backend server is not running while submitting the form.");
    }

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="contact">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact Me</h1>
              </Zoom>
            </Col>
            <Col md={12} className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form onSubmit={handleSubmit}>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">Full Name</label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">Email address</label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">Message</label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <button type="submit" className="submitBtn">
                          Submit
                          <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contacts-details">
                    <a href={`mailto:shashankgoyal@jklu.edu.in`} className="personal-details">
                      <div className="detailsIcon"><FiAtSign /></div>
                      <p style={{ color: "#fbd9ad" }}>shashankgoyal@jklu.edu.in</p>
                    </a>
                    <a href={`tel:+8432474451`} className="personal-details">
                      <div className="detailsIcon"><FiPhone /></div>
                      <p style={{ color: "#fbd9ad" }}>+91 84324 74451</p>
                    </a>
                    <a href="https://maps.app.goo.gl/1D2WcG4eyfMTfMny7" className="personal-details">
                      <div className="detailsIcon"><HiOutlineLocationMarker /></div>
                      <p style={{ color: "#fbd9ad" }}>Nursing colony, Kacheri road, Gangapur city, 322201.</p>
                    </a>
                  </div>
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.833618785371!2d90.41265112695315!3d24.036931700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755db9832166e63%3A0x96050e560e6dc4fa!2sBOF%20Central%20Mosque!5e0!3m2!1sen!2sbd!4v1695023265917!5m2!1sen!2sbd"
                      width="100%"
                      height="400"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      aria-hidden="false"
                      title="Contact Location"
                      loading="lazy"
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
