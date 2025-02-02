import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Set initial visibility
    gsap.set([titleRef.current, contentRef.current, skillsRef.current, imageRef.current], {
      opacity: 1,
      visibility: 'visible'
    });

    const ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline({
        defaults: { 
          ease: 'power3.out',
          duration: 0.8
        },
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animate title
      tl.from(titleRef.current, {
        y: 30,
        opacity: 0,
        onStart: () => {
          gsap.set(titleRef.current, { visibility: 'visible' });
        }
      })
      // Animate content
      .from(contentRef.current, {
        y: 30,
        opacity: 0,
        onStart: () => {
          gsap.set(contentRef.current, { visibility: 'visible' });
        }
      }, '-=0.4')
      // Animate skills
      .from(skillsRef.current, {
        y: 30,
        opacity: 0,
        onStart: () => {
          gsap.set(skillsRef.current, { visibility: 'visible' });
        }
      }, '-=0.4')
      // Animate image
      .from(imageRef.current, {
        x: 50,
        opacity: 0,
        onStart: () => {
          gsap.set(imageRef.current, { visibility: 'visible' });
        }
      }, '-=0.6');
    }, aboutRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="about-section py-5" ref={aboutRef} id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-content">
              <h2 
                ref={titleRef} 
                className="about-title mb-4"
                style={{ visibility: 'visible', opacity: 1 }}
              >
                About Me
              </h2>
              <div 
                ref={contentRef}
                style={{ visibility: 'visible', opacity: 1 }}
              >
                <p className="about-description mb-4">
                  Hi! I'm Ishor, a passionate Full Stack Developer with a keen eye for creating 
                  engaging and user-friendly web applications. With several years of experience 
                  in web development, I specialize in building modern, responsive, and scalable 
                  applications using cutting-edge technologies.
                </p>
                <p className="about-description mb-4">
                  My journey in web development started with a curiosity for creating interactive 
                  websites, and has evolved into a professional career where I help businesses 
                  achieve their digital goals through innovative solutions.
                </p>
              </div>
              <div 
                ref={skillsRef} 
                className="about-skills"
                style={{ visibility: 'visible', opacity: 1 }}
              >
                <h3 className="mb-3">Core Skills</h3>
                <div className="skill-tags">
                  {['React', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 'MongoDB', 'SQL', 'AWS'].map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div 
              ref={imageRef} 
              className="about-image"
              style={{ visibility: 'visible', opacity: 1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
                alt="About Me"
                className="img-fluid rounded shadow"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
