import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', level: 90, color: 'bg-blue-500' },
  { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
  { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
  { name: 'Python', level: 80, color: 'bg-green-500' },
  { name: 'Node.js', level: 75, color: 'bg-purple-500' },
  { name: 'SQL', level: 70, color: 'bg-red-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Here are some of the technologies I work with
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-gray-700">
                        Skill Level
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-white">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
