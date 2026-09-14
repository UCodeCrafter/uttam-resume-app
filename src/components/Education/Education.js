import React from 'react';
import { motion } from 'framer-motion';
import { useResumeData } from '../../context/ResumeContext';
import './Education.css';

const Education = () => {
  const { education, certifications } = useResumeData();

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
    <section className="education-section" id="education">
      <div className="container">
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Education <span>& Qualifications</span>
          </h2>
          <p className="section-subtitle">My academic background and continuous learning journey</p>
        </motion.div>

        <motion.div
          className="education-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education && education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="education-icon">{edu.icon || '🎓'}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-year">{edu.year}</p>
              <p className="education-description">{edu.description}</p>
              <div className="education-details">
                {edu.location && (
                  <div className="education-detail">
                    <strong>Location:</strong> <span>{edu.location}</span>
                  </div>
                )}
                {edu.cgpa && (
                  <div className="education-detail">
                    <strong>CGPA:</strong> <span>{edu.cgpa}</span>
                  </div>
                )}
                {edu.courses && (
                  <div className="education-detail">
                    <strong>Courses:</strong> <span>{edu.courses}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        {certifications && certifications.length > 0 && (
          <motion.div
            className="certifications-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="certifications-title">Certifications & Achievements</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-badge"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="certification-icon">{cert.icon || '📜'}</div>
                  <div className="certification-info">
                    <div className="certification-name">{cert.name}</div>
                    <div className="certification-issuer">{cert.issuer}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Education;

