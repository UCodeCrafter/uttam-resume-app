import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { ResumeProvider } from './context/ResumeContext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import BackgroundGlow from './components/BackgroundGlow/BackgroundGlow';
import FirebaseSyncControl from './components/FirebaseSyncControl';

function App() {
  return (
    <ResumeProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <BackgroundGlow />
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
          <ScrollToTop />
          <FirebaseSyncControl />
        </div>
      </Router>
    </ResumeProvider>
  );
}

export default App;
