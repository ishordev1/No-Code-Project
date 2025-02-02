import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 'ecommerce',
    title: 'E-commerce Platform',
    longDescription: `A comprehensive e-commerce solution that provides a robust and 
    scalable platform for online retail. Built with React for the frontend and Node.js for the 
    backend, it offers a seamless shopping experience for customers and powerful management 
    tools for administrators.`,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3',
    tags: ['React', 'Node.js', 'MongoDB'],
    features: [
      'User authentication and authorization',
      'Product catalog with search and filter',
      'Shopping cart and checkout process',
      'Admin dashboard for product management',
      'Real-time order tracking'
    ],
    technologies: {
      Frontend: ['React', 'Redux', 'Tailwind CSS'],
      Backend: ['Node.js', 'Express', 'MongoDB'],
      DevOps: ['Docker', 'AWS', 'CI/CD']
    },
    demoLink: '#',
    githubLink: '#',
    completed: '2024'
  },
  {
    id: 'weather',
    title: 'Weather App',
    longDescription: `A sophisticated weather application that provides real-time weather 
    updates and forecasts. Using the OpenWeather API, it delivers accurate weather data 
    with an intuitive interface and interactive visualizations.`,
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3',
    tags: ['React', 'API Integration', 'CSS'],
    features: [
      'Real-time weather updates',
      'Location-based weather detection',
      'Five-day weather forecast',
      'Interactive weather maps',
      'Weather alerts and notifications'
    ],
    technologies: {
      Frontend: ['React', 'Chart.js', 'CSS3'],
      APIs: ['OpenWeather API', 'Geolocation API'],
      Tools: ['Axios', 'PWA']
    },
    demoLink: '#',
    githubLink: '#',
    completed: '2024'
  },
  {
    id: 'taskmanager',
    title: 'Task Manager',
    longDescription: `A comprehensive task management system designed for modern teams. 
    This application streamlines project workflows, enhances team collaboration, and 
    provides powerful tools for tracking progress and managing resources.`,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3',
    tags: ['React', 'Firebase', 'Material-UI'],
    features: [
      'Task creation and assignment',
      'Project timeline visualization',
      'Team collaboration features',
      'File attachment support',
      'Progress tracking and reporting'
    ],
    technologies: {
      Frontend: ['React', 'Material-UI', 'Chart.js'],
      Backend: ['Firebase', 'Cloud Functions'],
      Tools: ['Git', 'Jira']
    },
    demoLink: '#',
    githubLink: '#',
    completed: '2024'
  }
];

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <AnimatePresence>
        {isImageExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsImageExpanded(false)}
          >
            <motion.img
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              src={project.image}
              alt={project.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => navigate('/')}
          className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {project.longDescription}
            </p>
            <div className="flex gap-4">
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 inline-flex items-center group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">View Live Demo</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all hover:scale-105 inline-flex items-center group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">View Code</span>
                <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-2xl hover:shadow-blue-500/20"
            onClick={() => setIsImageExpanded(true)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Technologies</h2>
              {Object.entries(project.technologies).map(([category, techs], categoryIndex) => (
                <div key={category} className="mb-4 last:mb-0">
                  <h3 className="text-lg font-medium text-gray-400 mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-blue-500/10 rounded-full text-sm text-blue-300 hover:bg-blue-500/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Key Features</h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1 group-hover:bg-blue-500/30 transition-colors"
                  >
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
