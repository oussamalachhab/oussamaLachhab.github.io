import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { NAV_ITEMS } from './i18n/translations.js'
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
  const location = useLocation()

  // Keep the URL in sync with the visible section: navigating to a route
  // like /Accueil or /Contact smooth-scrolls to the matching section
  // instead of loading a separate page.
  useEffect(() => {
    const match = NAV_ITEMS.find(
      (item) => item.path.toLowerCase() === location.pathname.toLowerCase()
    )
    const targetId = match ? match.id : location.pathname === '/' ? null : null

    if (targetId) {
      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.pathname])

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
