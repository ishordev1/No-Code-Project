import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const works = [
  {
    id: 1,
    title: "3D Animation",
    description: "Character animation showcase",
    image: "https://images.unsplash.com/photo-1616499615076-8b17c9937649",
    category: "Animation"
  },
  {
    id: 2,
    title: "Motion Graphics",
    description: "Corporate brand animation",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    category: "Motion"
  },
  {
    id: 3,
    title: "Visual Effects",
    description: "Special effects reel",
    image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca",
    category: "VFX"
  },
  {
    id: 4,
    title: "UI Animation",
    description: "Interactive interface designs",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    category: "UI/UX"
  }
];

const Works = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Featured Works</h2>
      <Row>
        {works.map((work) => (
          <Col key={work.id} lg={3} md={6} className="mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-100 shadow">
                <Card.Img
                  variant="top"
                  src={work.image}
                  alt={work.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{work.title}</Card.Title>
                  <Card.Text>{work.description}</Card.Text>
                  <span className="badge bg-primary">{work.category}</span>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Works;
