import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with product catalog, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: '🛍️',
      link: '#',
      github: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      tech: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
      icon: '✅',
      link: '#',
      github: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard displaying real-time weather data with beautiful visualizations.',
      tech: ['React', 'API Integration', 'Chart.js', 'CSS3'],
      icon: '🌤️',
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for tracking social media metrics and performance across platforms.',
      tech: ['React', 'Python', 'PostgreSQL', 'D3.js'],
      icon: '📊',
      link: '#',
      github: '#',
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, categories, and user authentication.',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3'],
      icon: '📝',
      link: '#',
      github: '#',
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with video calling, file sharing, and message encryption.',
      tech: ['React', 'Socket.io', 'WebRTC', 'Express'],
      icon: '💬',
      link: '#',
      github: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="section-subtitle">Showcasing my best work and technical expertise</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-image">{project.icon}</div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="project-link project-link-primary">
                    View Live
                  </a>
                  <a href={project.github} className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
