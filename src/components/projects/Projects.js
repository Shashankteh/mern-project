import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import ecom from "../../images/ecom.png"; // Your e-commerce project image
import netflix from "../../images/netflix.png"; // Your Netflix project image
import minecraft from "../../images/minecraft.png"; // Your Minecraft project image
import { FaCode } from "react-icons/fa";

export default function Projects() {
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
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>

            {/* E-Commerce Project */}
            <Col md={4}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      E-Commerce Website
                    </h5>
                    <img src={ecom} alt="E-Commerce Project" />
                    <div className="project--showcaseBtn">
                      <a
                        href={"https://github.com/Shashankteh/ecommerce-project"} // Replace with your actual GitHub link
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Designed and developed a functional e-commerce website
                      featuring a login page, shopping cart, and backend address
                      storage mechanism. The site allows users to browse products,
                      add items to their cart, and manage their accounts.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, JavaScript, React
                  </div>
                </div>
              </Fade>
            </Col>

            {/* Netflix Clone Project */}
            <Col md={4}>
              <Fade bottom>
                <div
                  key={2}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Netflix Clone
                    </h5>
                    <img src={netflix} alt="Netflix Project" />
                    <div className="project--showcaseBtn">
                      <a
                        href={"https://github.com/Shashankteh/netflix-clone"} // Replace with your actual GitHub link
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Developed a Netflix clone that allows users to stream and
                      download videos, with features for user authentication and
                      custom video uploads.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, JavaScript, React
                  </div>
                </div>
              </Fade>
            </Col>

            {/* Minecraft Server Setup Project */}
            <Col md={4}>
              <Fade bottom>
                <div
                  key={3}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Minecraft Server Setup
                    </h5>
                    <img src={minecraft} alt="Minecraft Project" />
                    <div className="project--showcaseBtn">
                      <a
                        href={"https://github.com/Shashankteh/minecraft-server"} // Replace with your actual GitHub link
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Set up and configured a Minecraft server with custom plugins
                      to enhance gameplay for community members, providing a fun
                      and interactive gaming experience.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Java, Minecraft Plugins
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
