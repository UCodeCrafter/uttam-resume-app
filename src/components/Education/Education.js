import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Kalyani Government Engineering College',
      year: '2019 - 2022',
      icon: '🎓',
      cgpa: '8.5/10',
      location: 'Kalyani, West Bengal, India',
      description: 'Specialized in Web Development and Data Structures. Completed multiple projects in full-stack development.',
      courses: 'Data Structures, Web Development, Database Management, OOP',
    },
    {
      degree: 'Diploma in Computer Science & Technology',
      institution: 'Kanyapur Polytechnic',
      year: '2016 - 2019',
      icon: '📚',
      cgpa: '7.5/10',
      location: 'Asansol, India',
      description: 'Foundation in programming and software development. Projects in C, Java, and Web Technologies.',
      courses: 'C Programming, Java, HTML/CSS/JavaScript, Database Basics',
    },
    {
      degree: 'H.S (Class XII)',
      institution: 'Joharmull Jalan Institution',
      year: '2014 - 2016',
      icon: '🏫',
      cgpa: 'Science Stream',
      location: 'Asansol, India',
      description: 'Secondary education with science stream focus.',
      courses: 'Physics, Chemistry, Mathematics, English',
    },
  ];

  const certifications = [
    { name: 'React Advanced Patterns', issuer: 'Udemy', icon: '⚛️' },
    { name: 'Full Stack Web Development', issuer: 'Coursera', icon: '💻' },
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon', icon: '☁️' },
    { name: 'JavaScript ES6+', issuer: 'Frontend Masters', icon: '📜' },
    { name: 'Node.js Best Practices', issuer: 'Pluralsight', icon: '🟢' },
    { name: 'Web Security Fundamentals', issuer: 'TryHackMe', icon: '🔒' },
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
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="education-icon">{edu.icon}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-year">{edu.year}</p>
              <p className="education-description">{edu.description}</p>
              <div className="education-details">
                <div className="education-detail">
                  <strong>Location:</strong> <span>{edu.location}</span>
                </div>
                <div className="education-detail">
                  <strong>CGPA:</strong> <span>{edu.cgpa}</span>
                </div>
                <div className="education-detail">
                  <strong>Courses:</strong> <span>{edu.courses}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
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
                <div className="certification-icon">{cert.icon}</div>
                <div className="certification-info">
                  <div className="certification-name">{cert.name}</div>
                  <div className="certification-issuer">{cert.issuer}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
