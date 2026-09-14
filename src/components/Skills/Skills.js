import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useResumeData } from '../../context/ResumeContext';
import './Skills.css';

const Skills = () => {
  const [animateProgress, setAnimateProgress] = useState(false);
  const { skills } = useResumeData();

  useEffect(() => {
    setAnimateProgress(true);
  }, []);

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
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            My <span>Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills && skills.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3>
                <span className="skill-icon">{category.icon}</span>
                {category.category}
              </h3>

              <div className="skill-list">
                {category.skills && category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>

              {category.descriptions && (
                <p className="skill-description">{category.descriptions}</p>
              )}

              {category.progressSkills && category.progressSkills.length > 0 && (
                <div style={{ marginTop: '30px' }}>
                  {category.progressSkills.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div className="skill-name">
                        <span>{skill.name}</span>
                        <span className="skill-percentage">
                          {animateProgress ? skill.level : 0}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: idx * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

