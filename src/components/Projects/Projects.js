import React from 'react';
import { motion } from 'framer-motion';
import { useResumeData } from '../../context/ResumeContext';
import './Projects.css';

const Projects = () => {
  const { projects } = useResumeData();

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
          {projects && projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-image">{project.icon || '🚀'}</div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.tech && (
                  <div className="project-tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="project-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary">
                      View Live
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub
                    </a>
                  )}
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

