import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-[400px] md:h-[500px]">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover object-center rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3"
                alt="Profile"
              />
            </div>
            <div className="text-left space-y-6">
              <p className="text-gray-300 text-lg">
                I am a passionate B.Tech student specializing in Computer Science. With a strong foundation in programming
                and a keen interest in web development, I strive to create innovative solutions that make a difference.
              </p>
              <p className="text-gray-300 text-lg">
                My journey in technology began with curiosity and has evolved into a dedicated pursuit of excellence
                in software development. I enjoy tackling complex problems and turning them into simple, elegant solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-600 rounded-full text-white">Problem Solver</span>
                <span className="px-4 py-2 bg-purple-600 rounded-full text-white">Quick Learner</span>
                <span className="px-4 py-2 bg-green-600 rounded-full text-white">Team Player</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
