import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Education', path: '#education' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <RouterLink to="/" className="navbar-brand">
          <span className="navbar-logo">UM</span>
          <span>Uttam Modi</span>
        </RouterLink>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <RouterLink to={link.path} className="navbar-link">
                {link.name}
              </RouterLink>
            </motion.li>
          ))}
        </ul>

        {/* Social Links & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div className="navbar-social">
            <a href="https://linkedin.com/in/uttammodi" target="_blank" rel="noopener noreferrer" className="navbar-social-link">
              in
            </a>
            <a href="https://github.com/UCodeCrafter" target="_blank" rel="noopener noreferrer" className="navbar-social-link">
              ◇
            </a>
          </div>
          <a href="mailto:uttammodi.asn@gmail.com" className="navbar-cta">
            Let's Talk
          </a>
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
            <RouterLink
              key={index}
              to={link.path}
              className="navbar-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </RouterLink>
          ))}
          <a href="mailto:uttammodi.asn@gmail.com" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>
            📧 Contact
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;
 
