import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
