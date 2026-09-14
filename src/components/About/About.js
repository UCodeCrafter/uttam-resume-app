import React from 'react';
import { motion } from 'framer-motion';
import { useResumeData } from '../../context/ResumeContext';
import originalPhoto from '../../assets/original-photo.jpg';
import './About.css';

const About = () => {
  const { about } = useResumeData();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="about-section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            {about.title || 'About'} <span>{about.highlightTitle || 'Me'}</span>
          </h2>
          <p className="section-subtitle">{about.subtitle || 'Get to know who I am and what I do'}</p>
        </motion.div>

        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Content */}
          <motion.div className="about-content" variants={itemVariants}>
            <h3>{about.greeting || "Hi! I'm Uttam Modi"}</h3>
            {about.paragraphs && about.paragraphs.length > 0 ? (
              about.paragraphs.map((para, idx) => <p key={idx}>{para}</p>)
            ) : (
              <p>
                I'm a passionate Full Stack Developer with experience in building scalable web applications.
              </p>
            )}

            {about.stats && about.stats.length > 0 && (
              <div className="stats-grid">
                {about.stats.map((stat, idx) => (
                  <motion.div key={idx} className="stat-card" whileHover={{ scale: 1.05 }}>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Image */}
          <motion.div className="about-image" variants={itemVariants}>
            <div className="about-image-box">
              {about.avatarUrl || (about.avatar && (about.avatar.startsWith('http') || about.avatar.startsWith('/'))) ? (
                <img src={about.avatarUrl || about.avatar} alt="Uttam Modi" />
              ) : (
                <img src={originalPhoto} alt="Uttam Modi" />
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

