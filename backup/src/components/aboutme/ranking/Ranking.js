import React from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function AreasOfInterest() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>Areas of Interest</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={4}>
            <Zoom cascade>
              <h3>VFX Designing + Animation</h3>
            </Zoom>
            <p>
              Shashank has a passion for creating visually compelling content,
              with experience in tools like Blender 3D, Adobe Photoshop, and
              Lightroom.
            </p>
          </Col>
          <Col md={4}>
            <Zoom cascade>
              <h3>Cyber Security (Red Teaming)</h3>
            </Zoom>
            <p>
              His interest in Cybersecurity lies in Red Teaming, focusing on
              identifying system vulnerabilities and ethical hacking.
            </p>
          </Col>
          <Col md={4}>
            <Zoom cascade>
              <h3>Full-stack Web Development</h3>
            </Zoom>
            <p>
              Shashank is proficient in web technologies and aims to build
              comprehensive full-stack applications, leveraging HTML, CSS,
              JavaScript, and frameworks like React.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
