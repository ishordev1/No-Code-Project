import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Set initial visibility
    gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, imageRef.current, buttonsRef.current], {
      opacity: 1,
      visibility: 'visible'
    });

    const ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline({
        defaults: { 
          ease: 'power3.out',
          duration: 1
        }
      });

      // Title animation
      tl.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        onStart: () => {
          gsap.set(titleRef.current, { visibility: 'visible' });
        }
      })
      // Subtitle animation
      .from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        onStart: () => {
          gsap.set(subtitleRef.current, { visibility: 'visible' });
        }
      }, '-=0.5')
      // Description animation
      .from(descriptionRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        onStart: () => {
          gsap.set(descriptionRef.current, { visibility: 'visible' });
        }
      }, '-=0.3')
      // Buttons animation
      .from(buttonsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        onStart: () => {
          gsap.set(buttonsRef.current, { visibility: 'visible' });
        }
      }, '-=0.3')
      // Image animation
      .from(imageRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        onStart: () => {
          gsap.set(imageRef.current, { visibility: 'visible' });
        }
      }, '-=0.8');

      // Floating animation for the image
      gsap.to(imageRef.current, {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" ref={heroRef}>
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content" style={{ visibility: 'visible', opacity: 1 }}>
            <h1 
              ref={titleRef} 
              className="hero-title"
              style={{ visibility: 'visible', opacity: 1 }}
            >
              Hi, I'm Ishor
            </h1>
            <h2 
              ref={subtitleRef} 
              className="hero-subtitle"
              style={{ visibility: 'visible', opacity: 1 }}
            >
              Full Stack Developer
            </h2>
            <p 
              ref={descriptionRef} 
              className="hero-description"
              style={{ visibility: 'visible', opacity: 1 }}
            >
              I create beautiful and functional websites with modern technologies
            </p>
            <div 
              ref={buttonsRef} 
              className="hero-buttons mt-4"
              style={{ visibility: 'visible', opacity: 1 }}
            >
              <button 
                onClick={scrollToProjects}
                className="btn btn-primary me-3"
              >
                View Projects
              </button>
              <Link 
                to="/contact" 
                className="btn btn-outline-primary"
              >
                Contact Me
              </Link>
            </div>
          </Col>
          <Col lg={6} className="hero-image-container">
            <div 
              ref={imageRef} 
              className="hero-image"
              style={{ visibility: 'visible', opacity: 1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Hero"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
