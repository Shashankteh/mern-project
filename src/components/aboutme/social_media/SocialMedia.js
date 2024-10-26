import React from "react";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>Connect with me</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={4}>
            <a
              href="https://www.instagram.com/shashank_1o/profilecard/?igsh=MTB3bGlydHhsM2JhdQ=="
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiOutlineInstagram />
              </Zoom>
            </a>
          </Col>
          <Col md={4}>
            <a
              href="https://github.com/Shashankteh"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiFillGithub />
              </Zoom>
            </a>
          </Col>
          <Col md={4}>
            <a
              href="https://www.linkedin.com/in/shashankgoyal10"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiFillLinkedin />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
