import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";

// Images for your projects
import ecom from "../../images/ecom.png"; // Update with the correct path
import netflix from "../../images/netflix.png"; // Update with the correct path
import minecraft from "../../images/minecraft.png"; // Update with the correct path
import networkScanner from "../../images/networkScanner.png"; // Update with the correct path
import smartRoom from "../../images/smartRoom.png"; // Update with the correct path
import esp32Marauder from "../../images/esp32Marauder.png"; // Update with the correct path

function Projects() {
  return (
    <section id="projects">
      <Container>
        <h2 style={{ color: "#fbd9ad", textAlign: "center" }}>Projects</h2>
        <Row>
          {/* Adjusting the columns and adding margin */}
          <Col md={4} className="col-sm-12 col-md-4 mb-4">
    <Fade bottom>
        <div
            className="singleProject"
            style={{
                backgroundColor: "rgb(142 70 186 / 31%)",
                border: "1px solid",
                padding: "15px",
                margin: "10px",
                borderRadius: "5px",
            }}
        >
            <div className="projectContent">
                <h5 style={{ color: "#fbd9ad" }}>E-Commerce Website Design</h5>
                <img src={ecom} alt="E-Commerce Website" style={{ maxWidth: "100%" }} />
            </div>
            <h6>
                <p
                    className="project--desc"
                    style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                        padding: "10px",
                        borderRadius: "5px",
                    }}
                >
                    Functional front-end design for an e-commerce website with
                    cart features and address storing mechanism.
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
                HTML, CSS, JavaScript
            </div>
        </div>
    </Fade>
</Col>


          <Col md={4} className="col-sm-12 col-md-4 mb-4">
            <Fade bottom>
              <div
                className="singleProject"
                style={{
                  backgroundColor: "rgb(142 70 186 / 31%)",
                  border: "1px solid",
                  padding: "15px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              >
                <div className="projectContent">
                  <h5 style={{ color: "#fbd9ad" }}>Netflix Clone Website</h5>
                  <img src={netflix} alt="Netflix Clone" style={{ maxWidth: "100%" }} />
                </div>
                <h6>
                  <p
                    className="project--desc"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    Functional Netflix replica to stream and download videos,
                    with an added provision for uploading custom videos.
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
                  HTML, CSS, JavaScript
                </div>
              </div>
            </Fade>
          </Col>

          <Col md={4} className="col-sm-12 col-md-4 mb-4">
            <Fade bottom>
              <div
                className="singleProject"
                style={{
                  backgroundColor: "rgb(142 70 186 / 31%)",
                  border: "1px solid",
                  padding: "15px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              >
                <div className="projectContent">
                  <h5 style={{ color: "#fbd9ad" }}>Minecraft Server Setup</h5>
                  <img src={minecraft} alt="Minecraft Server" style={{ maxWidth: "100%" }} />
                </div>
                <h6>
                  <p
                    className="project--desc"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    Set up and configured a Minecraft server with custom
                    plugins for gaming communities.
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
                  Minecraft
                </div>
              </div>
            </Fade>
          </Col>

          <Col md={4} className="col-sm-12 col-md-4 mb-4">
            <Fade bottom>
              <div
                className="singleProject"
                style={{
                  backgroundColor: "rgb(142 70 186 / 31%)",
                  border: "1px solid",
                  padding: "15px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              >
                <div className="projectContent">
                  <h5 style={{ color: "#fbd9ad" }}>Network Scanner Project</h5>
                  <img src={networkScanner} alt="Network Scanner" style={{ maxWidth: "100%" }} />
                </div>
                <h6>
                  <p
                    className="project--desc"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    Developed a network scanner tool to scan devices on a
                    network and detect potential security vulnerabilities.
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
                  Cybersecurity
                </div>
              </div>
            </Fade>
          </Col>

          <Col md={4} className="col-sm-12 col-md-4 mb-4">
            <Fade bottom>
              <div
                className="singleProject"
                style={{
                  backgroundColor: "rgb(142 70 186 / 31%)",
                  border: "1px solid",
                  padding: "15px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              >
                <div className="projectContent">
                  <h5 style={{ color: "#fbd9ad" }}>Smart Room with RFID (IoT)</h5>
                  <img src={smartRoom} alt="Smart Room" style={{ maxWidth: "100%" }} />
                </div>
                <h6>
                  <p
                    className="project--desc"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    Designed a smart room project with RFID-enabled access
                    control for IoT environments.
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
                  IoT, RFID
                </div>
              </div>
            </Fade>
          </Col>

          <Col md={4} className="col-sm-12 col-md-4 mb-4">
            <Fade bottom>
              <div
                className="singleProject"
                style={{
                  backgroundColor: "rgb(142 70 186 / 31%)",
                  border: "1px solid",
                  padding: "15px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              >
                <div className="projectContent">
                  <h5 style={{ color: "#fbd9ad" }}>ESP32 Marauder Project</h5>
                  <img src={esp32Marauder} alt="ESP32 Marauder" style={{ maxWidth: "100%" }} />
                </div>
                <h6>
                  <p
                    className="project--desc"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    Working on the ESP32 Marauder, focusing on wireless
                    security auditing and network penetration testing.
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
                  IoT, Security
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
