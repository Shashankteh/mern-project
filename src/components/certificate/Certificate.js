import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HTML_CSS from "../../images/HTML_CSS_Certificate.jpg";
import Photography from "../../images/Photography_Certificate.jpg";
import Python from "../../images/Python_Certificate.jpg";
import Java from "../../images/Java_Certificate.jpg";
import WordPress from "../../images/WordPress_Certificate.jpg";
import Fade from "react-reveal/Fade";

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            {/* HTML & CSS Certificate */}
            <Col md={4} className="d-flex flex-column align-items-center">
              <img
                src={HTML_CSS}
                alt="HTML & CSS Certificate"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <h3 className="mt-3 text-center">HTML & CSS Certification</h3>
              <p className="text-center">- Great Learning</p>
            </Col>

            {/* Photography Certificate */}
            <Col md={4} className="d-flex flex-column align-items-center">
              <img
                src={Photography}
                alt="Photography Certificate"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <h3 className="mt-3 text-center">Photography Certification</h3>
              <p className="text-center">- Canon Certification</p>
            </Col>

            {/* Python Certificate */}
            <Col md={4} className="d-flex flex-column align-items-center">
              <img
                src={Python}
                alt="Python Certificate"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <h3 className="mt-3 text-center">Python Certification</h3>
              <p className="text-center">- Great Learning</p>
            </Col>

            {/* Java Certificate */}
            <Col md={4} className="d-flex flex-column align-items-center">
              <img
                src={Java}
                alt="Java Certificate"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <h3 className="mt-3 text-center">Java Certification</h3>
              <p className="text-center">- Great Learning</p>
            </Col>

            {/* WordPress Certificate */}
            <Col md={4} className="d-flex flex-column align-items-center">
              <img
                src={WordPress}
                alt="WordPress Certificate"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <h3 className="mt-3 text-center">WordPress Certification</h3>
              <p className="text-center">- Coursera</p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}
