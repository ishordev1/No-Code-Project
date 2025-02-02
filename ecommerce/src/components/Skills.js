import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Vue.js", level: 80 }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 70 }
    ]
  },
  {
    category: "Design Tools",
    items: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 85 },
      { name: "Photoshop", level: 75 },
      { name: "Illustrator", level: 70 }
    ]
  }
];

const Skills = () => {
  const sectionRef = useRef(null);
  const skillRefs = useRef([]);

  useEffect(() => {
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".skills-heading", {
        scrollTrigger: {
          trigger: ".skills-heading",
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 1
      });

      // Skills categories animation
      skillRefs.current.forEach((category, index) => {
        if (category) {
          // Category title animation
          gsap.from(category.querySelector('.skill-category'), {
            scrollTrigger: {
              trigger: category,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            x: -50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2
          });

          // Skill bars animation
          const bars = category.querySelectorAll('.skill-progress-bar');
          bars.forEach((bar, barIndex) => {
            const progress = bar.getAttribute('data-progress');
            gsap.fromTo(bar,
              { width: "0%" },
              {
                scrollTrigger: {
                  trigger: bar,
                  start: "top 85%",
                  toggleActions: "play none none reverse"
                },
                width: `${progress}%`,
                duration: 1,
                delay: index * 0.2 + barIndex * 0.1
              }
            );
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="skills-section py-5" ref={sectionRef}>
      <Container>
        <h2 className="skills-heading text-center mb-5">Technical Skills</h2>
        <Row>
          {skills.map((category, categoryIndex) => (
            <Col lg={4} key={categoryIndex}>
              <div 
                className="skill-category-container mb-4" 
                ref={el => skillRefs.current[categoryIndex] = el}
              >
                <h3 className="skill-category mb-4">{category.category}</h3>
                {category.items.map((skill, skillIndex) => (
                  <div className="skill-item mb-4" key={skillIndex}>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div
                        className="skill-progress-bar"
                        data-progress={skill.level}
                        style={{ 
                          backgroundColor: `hsl(${210 + categoryIndex * 30}, 70%, 50%)`,
                          width: "0%" // Start at 0% width
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
