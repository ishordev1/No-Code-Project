import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';

// Project data (in real app, this would come from an API/database)
const projectsData = {
  'e-commerce-platform': {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    fullDescription: `A comprehensive e-commerce solution that provides a seamless shopping experience. 
    The platform includes features such as product catalog, shopping cart, secure checkout, user authentication, 
    and order management.`,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    category: "Web Development",
    tools: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
    features: [
      "Responsive design for all devices",
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "User authentication and authorization",
      "Order tracking and history",
      "Admin dashboard for product management"
    ],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example/project"
  },
  'portfolio-website': {
    title: "Portfolio Website",
    description: "Creative portfolio website with GSAP animations",
    fullDescription: `A modern portfolio website showcasing creative work with smooth animations and transitions. 
    Built with React and GSAP, the site features a responsive design and interactive elements that engage visitors.`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Web Design",
    tools: ["React", "GSAP", "Bootstrap", "CSS3", "HTML5"],
    features: [
      "Custom GSAP animations",
      "Responsive layout",
      "Project showcase",
      "Contact form integration",
      "Performance optimization",
      "SEO friendly"
    ],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example/project"
  },
  'mobile-banking-app': {
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application",
    fullDescription: `A secure mobile banking application that allows users to manage their finances on the go. 
    The app includes features for account management, transfers, bill payments, and financial tracking.`,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    category: "Mobile App",
    tools: ["React Native", "Firebase", "Node.js", "MongoDB", "JWT"],
    features: [
      "Biometric authentication",
      "Real-time transaction tracking",
      "Bill payment scheduling",
      "Account management",
      "Secure data encryption",
      "Push notifications"
    ],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example/project"
  },
  'ai-dashboard': {
    title: "AI Dashboard",
    description: "Analytics dashboard with AI-powered insights",
    fullDescription: `An intelligent analytics dashboard that provides AI-powered insights and visualizations. 
    The dashboard helps businesses make data-driven decisions through interactive charts and predictive analytics.`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Web App",
    tools: ["Python", "TensorFlow", "React", "D3.js", "Flask", "PostgreSQL"],
    features: [
      "Real-time data visualization",
      "Predictive analytics",
      "Custom reporting",
      "Data export capabilities",
      "User role management",
      "API integration"
    ],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example/project"
  }
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];
  
  const pageRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    // Ensure immediate visibility
    gsap.set(pageRef.current, { opacity: 1, visibility: 'visible' });
    
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(imageRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8
    })
    .from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, '-=0.4')
    .from(featuresRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, '-=0.4');

    return () => tl.kill();
  }, [projectId]);

  if (!project) {
    return (
      <Container className="py-5 text-center">
        <h2>Project not found</h2>
        <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
      </Container>
    );
  }

  return (
    <div className="project-details-page" ref={pageRef} style={{ opacity: 1, visibility: 'visible' }}>
      <div className="project-header py-5 mb-5">
        <Container>
          <Link to="/" className="btn btn-outline-primary mb-4">
            ← Back to Projects
          </Link>
          <h1>{project.title}</h1>
          <Badge bg="primary" className="me-2">{project.category}</Badge>
        </Container>
      </div>

      <Container>
        <Row className="mb-5">
          <Col lg={8}>
            <div ref={imageRef} className="project-image mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid rounded shadow"
              />
            </div>
          </Col>
          <Col lg={4}>
            <div ref={contentRef} className="project-info">
              <h3 className="mb-4">Project Overview</h3>
              <p className="mb-4">{project.fullDescription}</p>
              <div className="mb-4">
                <h4 className="h5 mb-3">Technologies Used</h4>
                <div className="d-flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <Badge key={index} bg="secondary" className="me-2 mb-2">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-3"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  View Code
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <div ref={featuresRef} className="project-features mb-5">
          <h3 className="mb-4">Key Features</h3>
          <Row>
            {project.features.map((feature, index) => (
              <Col md={6} lg={4} key={index} className="mb-3">
                <div className="feature-item p-3 bg-light rounded">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  {feature}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetails;
