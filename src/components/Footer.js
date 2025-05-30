// src/components/Footer.js
import React from 'react';

const CurrentYear = new Date().getFullYear();

const Footer = () => (
  <footer>
    <div>
    <p>Contact: uttammodi.asn@gmail.com</p>
    <p>© {CurrentYear} Uttam Modi</p>
    </div>
   
  </footer>
);

export default Footer;
