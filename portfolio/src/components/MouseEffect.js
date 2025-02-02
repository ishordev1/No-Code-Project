import React, { useEffect, useState, useCallback } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const MouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState([]);
  const controls = useAnimationControls();

  // Generate particles
  const generateParticles = useCallback(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: 0,
      y: 0,
      angle: (Math.PI * 2 * i) / 6,
      speed: 1 + Math.random() * 0.5,
      scale: 0.5 + Math.random() * 0.5,
    }));
  }, []);

  useEffect(() => {
    setParticles(generateParticles());
  }, [generateParticles]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });

      // Update particle positions
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: clientX + Math.cos(particle.angle) * 20 * particle.speed,
        y: clientY + Math.sin(particle.angle) * 20 * particle.speed,
      })));
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, [tabindex="0"]');
      if (target) {
        setIsHovering(true);
        // Apply magnetic effect
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const strength = 0.3; // Magnetic pull strength

        setMousePosition(prev => ({
          x: prev.x + (centerX - prev.x) * strength,
          y: prev.y + (centerY - prev.y) * strength,
        }));
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full" />
      </motion.div>

      {/* Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          className="pointer-events-none fixed top-0 left-0 z-[9998]"
          animate={{
            x: particle.x - 4,
            y: particle.y - 4,
            scale: isHovering ? particle.scale * 1.5 : particle.scale,
          }}
          transition={{
            type: "spring",
            stiffness: 150 - index * 10,
            damping: 15,
            mass: 0.1 + index * 0.05,
          }}
        >
          <div 
            className="w-2 h-2 rounded-full opacity-60"
            style={{
              background: `hsl(${(index * 60) % 360}, 100%, 75%)`,
              filter: 'blur(1px)',
            }}
          />
        </motion.div>
      ))}

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9997]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.2 : 1,
          opacity: isHovering ? 0.8 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.1
        }}
      >
        <div 
          className="w-10 h-10 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 70%)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9996]"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.15 : 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.5
        }}
      >
        <div 
          className="w-20 h-20 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(139,92,246,0.5) 50%, transparent 70%)',
            filter: 'blur(10px)',
          }}
        />
      </motion.div>
    </>
  );
};

export default MouseEffect;
