import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container className="py-5 mt-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-5">Get in Touch</h2>
        <Row className="justify-content-center">
          <Col md={6} className="mb-5">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={4} className="offset-md-1">
            <div className="contact-info">
              <h4 className="mb-4">Contact Information</h4>
              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="me-3" size={20} />
                <p className="mb-0">123 Animation Street, Creative City, 12345</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaPhone className="me-3" size={20} />
                <p className="mb-0">+1 234 567 890</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaEnvelope className="me-3" size={20} />
                <p className="mb-0">contact@portfolio.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Contact;
