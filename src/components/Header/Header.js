import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useResumeData } from '../../context/ResumeContext';
import NavMonkey from './NavMonkey';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNavIndex, setHoveredNavIndex] = useState(null);
  const [ctaHovered, setCtaHovered] = useState(false);
  const { personal } = useResumeData();

  const nameParts = (personal.name || 'Uttam Modi').split(' ');
  const initials = nameParts.map(p => p[0]).join('').toUpperCase();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Education', path: '#education' },
  ];

  // Handle smooth scroll to section
  const handleNavClick = (e, path) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const sectionId = path.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMobileMenuOpen(false); // Close mobile menu after click
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <RouterLink to="/" className="navbar-brand">
          <span className="navbar-logo">{initials || 'UM'}</span>
          <span>{personal.name || 'Uttam Modi'}</span>
        </RouterLink>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className="nav-item-wrapper"
              onMouseEnter={() => setHoveredNavIndex(index)}
              onMouseLeave={() => setHoveredNavIndex(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <AnimatePresence>
                {hoveredNavIndex === index && (
                  <motion.div
                    className="nav-monkey-peek"
                    initial={{ y: -65, opacity: 0, rotate: -12 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -65, opacity: 0, rotate: 12 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  >
                    <NavMonkey />
                  </motion.div>
                )}
              </AnimatePresence>
              <a
                href={link.path}
                className="navbar-link"
                onClick={(e) => handleNavClick(e, link.path)}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Social Links & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div className="navbar-social">
            {personal.socialLinks?.linkedin && (
              <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="navbar-social-link">
                <LinkedInIcon sx={{ fontSize: '24px' }} />
              </a>
            )}
            {personal.socialLinks?.github && (
              <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" className="navbar-social-link">
                <GitHubIcon sx={{ fontSize: '24px' }} />
              </a>
            )}
          </div>
          {personal.socialLinks?.email && (
            <div
              className="nav-item-wrapper"
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
            >
              <AnimatePresence>
                {ctaHovered && (
                  <motion.div
                    className="nav-monkey-peek"
                    initial={{ y: -65, opacity: 0, rotate: -12 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -65, opacity: 0, rotate: 12 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  >
                    <NavMonkey />
                  </motion.div>
                )}
              </AnimatePresence>
              <a href={personal.socialLinks.email} className="navbar-cta">
                Let's Talk
              </a>
            </div>
          )}
        </div>

        {/* Hamburger Menu */}
        <button
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="navbar-menu-mobile active"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="navbar-link"
              onClick={(e) => handleNavClick(e, link.path)}
            >
              {link.name}
            </a>
          ))}
          {personal.socialLinks?.email && (
            <a href={personal.socialLinks.email} className="navbar-link" onClick={() => setMobileMenuOpen(false)}>
              📧 Contact
            </a>
          )}
        </motion.div>
      )}
    </nav>
  );
};

export default Header;


