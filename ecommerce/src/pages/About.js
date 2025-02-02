import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pageRef = useRef(null);
  const introRef = useRef(null);
  const statsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" }
  ];

  const experiences = [
    {
      period: "2021 - Present",
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies."
    },
    {
      period: "2019 - 2021",
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed and maintained multiple client projects using modern web technologies."
    },
    {
      period: "2018 - 2019",
      role: "Frontend Developer",
      company: "WebCraft Studios",
      description: "Specialized in creating responsive and interactive user interfaces."
    }
  ];

  const education = [
    {
      year: "2018",
      degree: "B.Tech in Computer Science",
      institution: "Technical University",
      description: "Specialized in Software Engineering and Web Technologies"
    },
    {
      year: "2020",
      degree: "AWS Certified Developer",
      institution: "Amazon Web Services",
      description: "Professional certification in cloud development"
    }
  ];

  useEffect(() => {
    // Set initial visibility
    gsap.set([introRef.current, statsRef.current, experienceRef.current, educationRef.current], {
      opacity: 1,
      visibility: 'visible'
    });

    const ctx = gsap.context(() => {
      // Animate intro section
      gsap.from(introRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animate stats
      gsap.from('.stat-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animate experience items
      gsap.from('.experience-item', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animate education items
      gsap.from('.education-item', {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: educationRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page" ref={pageRef}>
      {/* Hero Section */}
      <div className="about-hero">
        <Container>
          <Row className="align-items-center min-vh-60">
            <Col lg={6}>
              <div ref={introRef} className="about-intro">
                <h1 className="display-4 fw-bold mb-4">About Me</h1>
                <p className="lead mb-4">
                  I'm Ishor, a passionate Full Stack Developer with a keen eye for creating 
                  engaging and user-friendly web applications.
                </p>
                <div className="d-flex gap-3 mb-5">
                  <a href="#" className="btn btn-primary">Download CV</a>
                  <a href="#" className="btn btn-outline-primary">My Work</a>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
                  alt="Ishor"
                  className="about-image img-fluid rounded-3 shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Stats Section */}
      <section className="stats-section py-5 bg-light">
        <Container>
          <div ref={statsRef} className="stats-wrapper">
            <Row className="justify-content-center">
              {stats.map((stat, index) => (
                <Col key={index} md={3} sm={6} className="text-center mb-4">
                  <div className="stat-item">
                    <h2 className="display-4 fw-bold text-primary mb-2">{stat.number}</h2>
                    <p className="text-muted">{stat.label}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      {/* Experience Section */}
      <section className="experience-section py-5">
        <Container>
          <div ref={experienceRef}>
            <h2 className="section-title text-center mb-5">Professional Experience</h2>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item mb-4">
                  <Row className="align-items-center">
                    <Col md={3}>
                      <div className="period text-primary fw-bold">{exp.period}</div>
                    </Col>
                    <Col md={9}>
                      <div className="experience-content p-4 bg-light rounded-3">
                        <h3 className="h5 mb-2">{exp.role}</h3>
                        <h4 className="h6 text-primary mb-3">{exp.company}</h4>
                        <p className="mb-0">{exp.description}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Education Section */}
      <section className="education-section py-5 bg-light">
        <Container>
          <div ref={educationRef}>
            <h2 className="section-title text-center mb-5">Education & Certifications</h2>
            <Row className="justify-content-center">
              {education.map((edu, index) => (
                <Col key={index} md={6} className="mb-4">
                  <div className="education-item p-4 bg-white rounded-3 shadow-sm h-100">
                    <div className="year text-primary fw-bold mb-2">{edu.year}</div>
                    <h3 className="h5 mb-2">{edu.degree}</h3>
                    <h4 className="h6 text-muted mb-3">{edu.institution}</h4>
                    <p className="mb-0">{edu.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
