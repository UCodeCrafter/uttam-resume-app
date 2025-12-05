import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      duration: 'Jan 2023 - Present',
      description: 'Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      duration: 'Jun 2021 - Dec 2022',
      description: 'Developed and maintained 15+ web applications. Improved application performance by 40% through optimization techniques.',
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Hub',
      duration: 'Jan 2021 - May 2021',
      description: 'Built responsive web pages using HTML, CSS, and JavaScript. Collaborated with design team to implement UI/UX designs.',
    },
    {
      title: 'Freelance Developer',
      company: 'Self Employed',
      duration: 'Aug 2020 - Dec 2020',
      description: 'Created custom websites for small businesses. Provided technical support and maintenance services.',
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
          {experiences.map((exp, index) => (
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
