import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import htmlCssCert from "../../images/htmlCssCert.png";
import js from "../../images/js.png";
import css from "../../images/css.png";
import coursera from "../../images/coursera.png";
import ecommerce from "../../images/ecommerce.png";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Certification() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Certifications</h1>
              </Zoom>
            </Col>
            <Col ms={12} className="mt-3">
              <Row className="g-5">

                {/* HTML & CSS Certificate */}
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.mygreatlearning.com/academy/learn-for-free/courses/html-tutorial"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img className="logo_img" src={htmlCssCert} alt="HTML & CSS Certification" />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3 className="content-title" style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          HTML & CSS Certification
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - Great Learning
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>

                {/* JavaScript Certificate */}
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-javascript"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img className="logo_img" src={js} alt="JavaScript Certification" />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3 className="content-title" style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          JavaScript Certification
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - Great Learning
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>

                {/* CSS Certificate */}
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.mygreatlearning.com/academy/learn-for-free/courses/css-tutorial"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img className="logo_img" src={css} alt="CSS Certification" />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3 className="content-title" style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          CSS Certification
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - Great Learning
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>

                {/* Ecommerce Website Certificate */}
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.mygreatlearning.com/academy/learn-for-free/courses/ecommerce-website-with-html-css"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img className="logo_img" src={ecommerce} alt="Ecommerce Website Certification" />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3 className="content-title" style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          Ecommerce Website Certification
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - Great Learning
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>

                {/* Coursera Certificate */}
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img className="logo_img" src={coursera} alt="Coursera Certification" />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3 className="content-title" style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          Coursera Certification
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - Project-based Certification
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>

              </Row>
            </Col>
          </Row>

          <div className="blog--viewAll">
            <Link to="/certificatepage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
