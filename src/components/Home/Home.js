import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useResumeData } from '../../context/ResumeContext';
import { getTechIcon } from './TechIcons';
import './Home.css';

const getSkillIcon = (skillName) => {
  return getTechIcon(skillName);
};

const Home = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { personal, skills } = useResumeData();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMoveCard = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 16;
    const rotateY = ((x - centerX) / centerX) * 16;

    const shiftX = ((x - centerX) / centerX) * 22;
    const shiftY = ((y - centerY) / centerY) * 22;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setIsHovered(true);
    setRotate({ x: rotateX, y: rotateY });
    setMousePos({ x: shiftX, y: shiftY });
    setGlarePos({ x: glareX, y: glareY });
  };

  const handleMouseEnterCard = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveCard = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setMousePos({ x: 0, y: 0 });
    setGlarePos({ x: 50, y: 50 });
  };

  // Comprehensive Skill set matching reference screenshot and ResumeContext
  const defaultHeroSkills = [
    'Java 8+', 'JavaScript', 'Python', 'C++', 'HTML/CSS',
    'React.js', 'TypeScript', 'Tailwind CSS', 'Material UI',
    'Redux', 'Framer Motion', 'Spring Boot', 'Spring MVC',
    'Spring Data JPA', 'Hibernate', 'MySQL', 'MongoDB',
    'PostgreSQL', 'Kafka', 'REST API', 'GraphQL', 'SOAP',
    'HTTP', 'Async Messaging', 'AWS', 'Docker',
    'Kubernetes', 'CI/CD', 'Jenkins', 'OpenShift', 'Git',
    'JUnit5', 'Mockito', 'Integration Testing', 'Code Reviews',
    'Agile/Scrum', 'OOP', 'Data Structures', 'Design Patterns',
    'Multithreading', 'Performance Optimization'
  ];

  const contextSkills = skills && skills.length > 0
    ? skills.flatMap(cat => cat.skills || [])
    : [];

  const heroSkills = Array.from(new Set([...defaultHeroSkills, ...contextSkills]));

  const titlesSequence = (personal.titles || [
    'Full Stack Developer',
    'Web Developer',
    'Software Engineer',
    'Tech Enthusiast'
  ]).flatMap(title => [title, 2000]);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Hi, I'm{' '}
            <span className="name-highlight">{personal.name || 'Uttam Modi'}</span>
          </h1>

          <div className="typing-animation">
            <TypeAnimation
              key={titlesSequence.join('-')}
              sequence={titlesSequence}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '24px', display: 'inline-block' }}
            />
          </div>

          <motion.div
            className="hero-subtitle-container"
            whileHover={{ scale: 1.04, x: 6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <p className="hero-subtitle">{personal.subtitle || 'Crafting Digital Experiences'}</p>
          </motion.div>

          <motion.div
            className="hero-description-container"
            whileHover={{ scale: 1.025, rotateX: -3, rotateY: 4, z: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
          >
            <p className="hero-description">
              {personal.description ||
                'I build responsive, scalable, and user-centric web applications using cutting-edge technologies.'}
            </p>
          </motion.div>

          <div className="hero-buttons">
            <a
              href={personal.resumeUrl || '#'}
              className="hero-btn hero-btn-primary"
              style={{ textDecoration: 'none' }}
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="hero-btn hero-btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              View Projects
            </a>
          </div>

          <div className="social-links">
            {personal.socialLinks?.linkedin && (
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
            )}
            {personal.socialLinks?.github && (
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {personal.socialLinks?.email && (
              <a
                href={personal.socialLinks.email}
                className="social-link"
                title="Email"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            )}
          </div>

          {/* Quick Professional Stats Bar */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">40+</span>
              <span className="stat-label">Tech Tools</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right 3D Interactive Card */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseEnter={handleMouseEnterCard}
          onMouseLeave={handleMouseLeaveCard}
          onMouseMove={handleMouseMoveCard}
        >
          <motion.div
            className="hero-image-box 3d-card"
            animate={{
              rotateX: rotate.x,
              rotateY: rotate.y,
              scale: isHovered ? 1.04 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 18,
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              className="card-glare"
              style={{
                background: isHovered
                  ? `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.25) 0%, transparent 60%)`
                  : 'none',
              }}
            />
            {personal.avatarUrl || (personal.avatar && (personal.avatar.startsWith('http') || personal.avatar.startsWith('/'))) ? (
              <img
                src={personal.avatarUrl || personal.avatar}
                alt={personal.name || 'Uttam Modi'}
                className="3d-card-img"
              />
            ) : (
              <img
                src={avatarImage}
                alt={personal.name || 'Uttam Modi'}
                className="3d-card-img"
              />
            )}
          </motion.div>

          {/* Floating Skill Badges surrounding outside top, left, bottom ONLY on hover */}
          <motion.div
            className={`hero-floating-skills ${isHovered ? 'active' : ''}`}
            animate={isHovered ? {
              opacity: 1,
              x: mousePos.x * 1.1,
              y: mousePos.y * 1.1,
            } : { opacity: 0, x: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          >
            {/* Top Ring (Floating above 3D Photo Box) */}
            <div className="skills-ring-top">
              {[
                'Java 8+', 'JavaScript', 'Python', 'C++', 'HTML/CSS', 'React.js', 'TypeScript', 'Tailwind CSS'
              ].map((skillName, index) => {
                const skillIcon = getSkillIcon(skillName);
                return (
                  <motion.div
                    key={`top-${index}`}
                    className="hero-skill-badge"
                    initial={{ opacity: 0, scale: 0.5, y: -15 }}
                    animate={isHovered ? {
                      opacity: 1,
                      scale: 1,
                      y: [0, index % 2 === 0 ? -5 : 5, 0],
                    } : { opacity: 0, scale: 0.5, y: -15 }}
                    transition={{
                      opacity: { duration: 0.25, delay: isHovered ? index * 0.02 : 0 },
                      scale: { duration: 0.3, delay: isHovered ? index * 0.02 : 0 },
                      y: isHovered ? {
                        duration: 2.4 + (index % 3) * 0.4,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                      } : { duration: 0.2 }
                    }}
                    whileHover={{
                      scale: 1.18,
                      zIndex: 60,
                      boxShadow: '0 0 25px rgba(56, 189, 248, 0.85), 0 0 12px rgba(168, 85, 247, 0.7)',
                      borderColor: '#38bdf8',
                      color: '#ffffff'
                    }}
                  >
                    <span className="hero-skill-icon">{skillIcon}</span>
                    <span>{skillName}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Left Ring (Floating to the Left of 3D Photo Box) */}
            <div className="skills-ring-left">
              {[
                'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'MySQL', 'MongoDB', 'PostgreSQL', 'Kafka', 'REST API', 'GraphQL'
              ].map((skillName, index) => {
                const skillIcon = getSkillIcon(skillName);
                return (
                  <motion.div
                    key={`left-${index}`}
                    className="hero-skill-badge"
                    initial={{ opacity: 0, scale: 0.5, x: -20 }}
                    animate={isHovered ? {
                      opacity: 1,
                      scale: 1,
                      x: [0, index % 2 === 0 ? -6 : 6, 0],
                    } : { opacity: 0, scale: 0.5, x: -20 }}
                    transition={{
                      opacity: { duration: 0.25, delay: isHovered ? index * 0.02 : 0 },
                      scale: { duration: 0.3, delay: isHovered ? index * 0.02 : 0 },
                      x: isHovered ? {
                        duration: 2.6 + (index % 3) * 0.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                      } : { duration: 0.2 }
                    }}
                    whileHover={{
                      scale: 1.18,
                      zIndex: 60,
                      boxShadow: '0 0 25px rgba(56, 189, 248, 0.85), 0 0 12px rgba(168, 85, 247, 0.7)',
                      borderColor: '#38bdf8',
                      color: '#ffffff'
                    }}
                  >
                    <span className="hero-skill-icon">{skillIcon}</span>
                    <span>{skillName}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Ring (Floating below 3D Photo Box) */}
            <div className="skills-ring-bottom">
              {[
                'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Git', 'JUnit5', 'Mockito', 'Multithreading', 'Data Structures', 'Design Patterns'
              ].map((skillName, index) => {
                const skillIcon = getSkillIcon(skillName);
                return (
                  <motion.div
                    key={`bottom-${index}`}
                    className="hero-skill-badge"
                    initial={{ opacity: 0, scale: 0.5, y: 15 }}
                    animate={isHovered ? {
                      opacity: 1,
                      scale: 1,
                      y: [0, index % 2 === 0 ? 5 : -5, 0],
                    } : { opacity: 0, scale: 0.5, y: 15 }}
                    transition={{
                      opacity: { duration: 0.25, delay: isHovered ? index * 0.02 : 0 },
                      scale: { duration: 0.3, delay: isHovered ? index * 0.02 : 0 },
                      y: isHovered ? {
                        duration: 2.5 + (index % 3) * 0.4,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                      } : { duration: 0.2 }
                    }}
                    whileHover={{
                      scale: 1.18,
                      zIndex: 60,
                      boxShadow: '0 0 25px rgba(56, 189, 248, 0.85), 0 0 12px rgba(168, 85, 247, 0.7)',
                      borderColor: '#38bdf8',
                      color: '#ffffff'
                    }}
                  >
                    <span className="hero-skill-icon">{skillIcon}</span>
                    <span>{skillName}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          className="scroll-indicator"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </motion.div>
      )}

      {/* Bottom Skills Moving Patti (Right-to-Left Ticker Banner) */}
      <div className="skills-marquee-patti">
        <div className="marquee-track">
          {[...heroSkills, ...heroSkills].map((skill, index) => {
            const skillName = typeof skill === 'string' ? skill : skill.name;
            const skillIcon = getSkillIcon(skillName);
            return (
              <div key={index} className="marquee-item">
                <span className="marquee-icon">{skillIcon}</span>
                <span className="marquee-text">{skillName}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
