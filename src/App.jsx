import Loader from './components/Loader.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Quote from './components/Quote.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Journey from './components/Journey.jsx'
import Principles from './components/Principles.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <Loader />
      <Header />
      <Hero />
      <Quote />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Principles />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}
