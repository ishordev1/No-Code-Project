import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'e-commerce-platform',
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    category: "Web Development",
    tools: "React, Node.js, MongoDB"
  },
  {
    id: 'portfolio-website',
    title: "Portfolio Website",
    description: "Creative portfolio website with GSAP animations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Web Design",
    tools: "React, GSAP, Bootstrap"
  },
  {
    id: 'mobile-banking-app',
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    category: "Mobile App",
    tools: "React Native, Firebase"
  },
  {
    id: 'ai-dashboard',
    title: "AI Dashboard",
    description: "Analytics dashboard with AI-powered insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Web App",
    tools: "Python, TensorFlow, React"
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    // Make sure elements are visible initially
    gsap.set(".projects-heading", { opacity: 1 });
    projectRefs.current.forEach(ref => {
      if (ref) gsap.set(ref, { opacity: 1 });
    });

    const ctx = gsap.context(() => {
      // Heading animation with a more reliable trigger
      gsap.from(".projects-heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
          markers: false
        }
      });

      // Project cards animation with improved triggers
      projectRefs.current.forEach((project, index) => {
        if (project) {
          gsap.from(project, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: project,
              start: "top bottom-=50",
              end: "top center",
              toggleActions: "play none none reverse",
              markers: false,
              onEnter: () => {
                gsap.to(project, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power2.out"
                });
              },
              onLeaveBack: () => {
                gsap.to(project, {
                  opacity: 0,
                  y: 100,
                  duration: 0.8,
                  ease: "power2.in"
                });
              }
            }
          });
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="projects-section py-5" ref={sectionRef} id="projects">
      <Container>
        <h2 className="projects-heading text-center mb-5">Featured Projects</h2>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={6} key={index}>
              <div
                className="project-card"
                ref={el => projectRefs.current[index] = el}
                style={{ opacity: 1 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tools">
                    <small>{project.tools}</small>
                  </div>
                  <Link 
                    to={`/project/${project.id}`} 
                    className="btn btn-outline-primary mt-3"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
