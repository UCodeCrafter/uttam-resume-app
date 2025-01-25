// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/achievements" element={<Achievements />} /> */}
        </Routes>
    
      <Footer />
    </div>
  </Router>
  );
}

export default App;
