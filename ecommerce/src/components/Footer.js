import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5>Portfolio</h5>
            <p className="mb-0">Creating amazing animations since 2024</p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <div className="social-links">
              <a href="#" className="text-light mx-2"><FaGithub size={24} /></a>
              <a href="#" className="text-light mx-2"><FaLinkedin size={24} /></a>
              <a href="#" className="text-light mx-2"><FaInstagram size={24} /></a>
              <a href="#" className="text-light mx-2"><FaEnvelope size={24} /></a>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <p className="mb-0">© 2024 Portfolio. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
