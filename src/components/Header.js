// src/components/Header.js
import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';

import { TypeAnimation } from 'react-type-animation';
import './Header.css';
import { AppBar, Toolbar, Typography, Link , Container, Box, Stack } from '@mui/material';

const pages = [
    { name: "Education", id: "education" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
];

const Header = () => {
    return (
      <AppBar position="static" color="primary">
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">Uttam Modi</Typography>
              <Typography variant="body1">
                Email: <Link href="mailto:uttammodi.asn@gmail.com" color="inherit">uttammodi.asn@gmail.com</Link> | Phone: +91-9064272344
              </Typography>
              <Typography variant="body1">
                <Link href="https://www.linkedin.com/in/uttammodi/" target="_blank" rel="noopener noreferrer" color="inherit">LinkedIn</Link> | 
                <Link href="https://github.com/UCodeCrafter/SpringBootBlogRestAPI" target="_blank" rel="noopener noreferrer" color="inherit">GitHub</Link>
              </Typography>
            </Box>
            <Box>
              <Stack direction="row" spacing={2}>
                <Link component={RouterLink} to="/" color="inherit" underline="none">Home</Link>
                <Link component={RouterLink} to="/education" color="inherit" underline="none">Education</Link>
                <Link component={RouterLink} to="/skills" color="inherit" underline="none">Skills</Link>
                <Link component={RouterLink} to="/experience" color="inherit" underline="none">Experience</Link>
                <Link component={RouterLink} to="/projects" color="inherit" underline="none">Projects</Link>
                <Link component={RouterLink} to="/achievements" color="inherit" underline="none">Achievements</Link>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  
  export default Header;
