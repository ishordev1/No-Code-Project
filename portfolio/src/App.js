import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import MouseEffect from './components/MouseEffect';

gsap.registerPlugin(ScrollTrigger);

const MainContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section when navigating back from project page
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position when route changes
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">
      <MouseEffect />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
