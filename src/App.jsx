// App.js
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import MyServices from './components/MyServices';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { LanguageProvider } from './contexts/LanguageContext';
import Projects from './components/Projets';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <Header />
          <section id="hero" className="scroll-mt-24">
            <Hero />
          </section>
          <section id="about" className="scroll-mt-24">
            <AboutMe />
          </section>
          <section id="services" className="scroll-mt-24">
            <MyServices />
          </section>
          <section id="resume" className="scroll-mt-24">
            <Resume />
          </section>
          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>
          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </div>
      </LanguageProvider>

    </ThemeProvider>
  );
}

export default App;