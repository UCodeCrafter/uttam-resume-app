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

// Helper to ensure basename is always a pathname (e.g., "/uttam-resume-app") and not a full URL
const getBasename = () => {
  const publicUrl = process.env.PUBLIC_URL || '';
  if (publicUrl.startsWith('http://') || publicUrl.startsWith('https://')) {
    try {
      const urlPath = new URL(publicUrl).pathname;
      return urlPath.endsWith('/') && urlPath.length > 1 ? urlPath.slice(0, -1) : urlPath;
    } catch (e) {
      return '';
    }
  }
  return publicUrl.endsWith('/') && publicUrl.length > 1 ? publicUrl.slice(0, -1) : publicUrl;
};

function App() {
  return (
    <ResumeProvider>
      <Router basename={getBasename()}>
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
