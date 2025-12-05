import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
            About <span>Me</span>
          </h2>
          <p className="section-subtitle">Get to know who I am and what I do</p>
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
            <h3>Hi! I'm Uttam Modi</h3>
            <p>
              I'm a passionate Full Stack Developer with 3+ years of experience in building scalable web applications. 
              I specialize in React, Node.js, and modern web technologies. I love transforming complex problems into 
              simple, beautiful, and intuitive designs.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or writing technical blogs. I believe in continuous learning and staying updated with the latest industry trends.
            </p>
            <p>
              My goal is to create impactful digital solutions that make a difference in people's lives. Let's build 
              something amazing together!
            </p>

            <div className="stats-grid">
              <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </motion.div>
              <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
                <div className="stat-number">100+</div>
                <div className="stat-label">Happy Clients</div>
              </motion.div>
              <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div className="about-image" variants={itemVariants}>
            <div className="about-image-box">
              🚀
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
