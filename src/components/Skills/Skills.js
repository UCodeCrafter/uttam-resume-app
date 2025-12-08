import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    setAnimateProgress(true);
  }, []);

  const skillsData = [
    {
      category: 'Languages',
      icon: '💻',
      skills: ['Java 8+', 'JavaScript', 'Python', 'C++', 'HTML/CSS'],
      descriptions: 'Streams, Lambdas, Functional Interfaces, J2EE',
      progressSkills: [
        { name: 'Java', level: 95 },
        { name: 'JavaScript', level: 92 },
        { name: 'Python', level: 82 },
        { name: 'C++', level: 78 },
      ],
    },
    {
      category: 'Frontend',
      icon: '⚛️',
      skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Redux', 'Framer Motion'],
      descriptions: 'Component Development, State Management, Animations',
      progressSkills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Redux', level: 85 },
      ],
    },
    {
      category: 'Frameworks & Databases',
      icon: '🗄️',
      skills: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'MySQL', 'MongoDB', 'PostgreSQL'],
      descriptions: 'REST API, Microservices, Schema Design, Query Optimization',
      progressSkills: [
        { name: 'Spring Boot', level: 95 },
        { name: 'Hibernate', level: 90 },
        { name: 'MySQL', level: 92 },
        { name: 'MongoDB', level: 85 },
      ],
    },
    {
      category: 'Messaging & APIs',
      icon: '📨',
      skills: ['Kafka', 'REST API', 'GraphQL', 'SOAP', 'HTTP', 'Async Messaging'],
      descriptions: 'Inter-service Communication, API Design, Event-driven Architecture',
      progressSkills: [
        { name: 'Kafka', level: 88 },
        { name: 'REST API', level: 95 },
        { name: 'GraphQL', level: 80 },
        { name: 'Async Messaging', level: 85 },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'OpenShift', 'Git'],
      descriptions: 'EC2, S3, RDP, EKS, Container Orchestration, Pipeline Management',
      progressSkills: [
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 82 },
        { name: 'Jenkins', level: 85 },
        { name: 'AWS', level: 80 },
      ],
    },
    {
      category: 'Testing & Quality',
      icon: '✅',
      skills: ['JUnit5', 'Mockito', 'Integration Testing', 'Code Reviews', 'Agile/Scrum'],
      descriptions: 'Debugging, Refactoring, CI/CD Pipelines, Performance Monitoring',
      progressSkills: [
        { name: 'JUnit5', level: 90 },
        { name: 'Mockito', level: 88 },
        { name: 'Code Reviews', level: 92 },
        { name: 'Agile/Scrum', level: 90 },
      ],
    },
    {
      category: 'Core Concepts',
      icon: '🧠',
      skills: ['OOP', 'Data Structures', 'Design Patterns', 'Multithreading', 'Performance Optimization'],
      descriptions: 'Exception Handling, Concurrency, DBMS, System Design',
      progressSkills: [
        { name: 'OOP', level: 95 },
        { name: 'Design Patterns', level: 90 },
        { name: 'Multithreading', level: 88 },
        { name: 'Data Structures', level: 92 },
      ],
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
          {skillsData.map((category, index) => (
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
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>

              <p className="skill-description">{category.descriptions}</p>

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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
