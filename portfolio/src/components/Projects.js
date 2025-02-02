import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3',
    tags: ['React', 'Node.js', 'MongoDB'],
    features: [
      'User authentication and authorization',
      'Product catalog with search and filter',
      'Shopping cart and checkout process',
      'Admin dashboard for product management',
      'Real-time order tracking'
    ],
    demoLink: '#',
    link: '#'
  },
  {
    id: 'weather',
    title: 'Weather App',
    description: 'Real-time weather application using OpenWeather API',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3',
    tags: ['React', 'API Integration', 'CSS'],
    features: [
      'Real-time weather updates',
      'Location-based weather detection',
      'Five-day weather forecast',
      'Interactive weather maps',
      'Weather alerts and notifications'
    ],
    demoLink: '#',
    link: '#'
  },
  {
    id: 'taskmanager',
    title: 'Task Manager',
    description: 'A collaborative task management tool for teams',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3',
    tags: ['React', 'Firebase', 'Material-UI'],
    features: [
      'Task creation and assignment',
      'Project timeline visualization',
      'Team collaboration features',
      'File attachment support',
      'Progress tracking and reporting'
    ],
    demoLink: '#',
    link: '#'
  }
];

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId, e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Here are some of my recent works
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <img
                    className="w-full h-full object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => handleProjectClick(project.id, e)}
                      className="text-white bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-gray-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-700 text-sm text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
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

export default Projects;
