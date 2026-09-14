import React from 'react';
import { motion } from 'framer-motion';
import { useResumeData } from '../../context/ResumeContext';
import './Experience.css';

const Experience = () => {
  const { experience } = useResumeData();

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

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="experience-section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Professional <span>Experience</span>
          </h2>
          <p className="section-subtitle">My journey in the tech industry</p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience && experience.map((exp, index) => (
            <motion.div key={index} className="timeline-item" variants={itemVariants}>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-date">{exp.duration}</div>
                <div className="timeline-title">{exp.title}</div>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-description">{exp.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

