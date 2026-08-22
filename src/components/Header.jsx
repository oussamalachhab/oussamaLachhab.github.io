import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'

function Header() {
  const { isDark, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  // Translations
  const texts = {
    en: {
      home: "Home",
      about: "About Me",
      resume: "Resume",
      projects: "Projects",
      services: "Services",
      contact: "Contact Me",
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      resume: "CV",
      projects: "Projets",
      services: "Services",
      contact: "Contactez-moi",
    }
  }

  const navLinks = [
    { id: 'hero', label: texts[language].home },
    { id: 'about', label: texts[language].about },
    { id: 'resume', label: texts[language].resume },
    { id: 'projects', label: texts[language].projects },
    { id: 'services', label: texts[language].services },
  ]

  return (
    <>
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] backdrop-blur-lg rounded-full shadow-lg flex justify-between items-center px-6 py-3 transition-all duration-300 z-50 ${isDark
        ? 'bg-[var(--panel-dark)]/80 text-white'
        : 'bg-white/80 text-gray-900 shadow-xl'
        }`}>
        <span
          className="font-display text-xl font-bold tracking-wide text-gradient-oussama cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          LACHHAB OU.
        </span>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 font-mono-data text-xs uppercase tracking-wider">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="cursor-pointer transition-colors duration-200 hover:text-[var(--race-red)]"
            >
              {link.label}
            </li>
          ))}
          <li>
            <button className="border px-4 py-1 rounded-full transition-colors duration-200 hover:bg-[var(--race-red)] hover:border-[var(--race-red)] hover:text-white" onClick={() => scrollToSection('contact')}>
              {texts[language].contact}
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            aria-label={language === 'fr' ? 'Passer en anglais' : 'Switch to French'}
            className={`language transition-colors duration-200 ${isDark ? 'text-white' : 'text-gray-900'
              }`}
          >
            🌐 {language === "en" ? "EN" : "FR"}
          </button>

          <button
            onClick={toggleTheme}
            aria-label={isDark ? (language === 'fr' ? 'Activer le mode clair' : 'Switch to light mode') : (language === 'fr' ? 'Activer le mode sombre' : 'Switch to dark mode')}
            className={`theme p-2 rounded-full transition-all duration-300 hover:scale-110 ${isDark
              ? 'text-yellow-400 hover:bg-yellow-400/10'
              : 'text-orange-500 hover:bg-orange-500/10'
              }`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Hamburger button - mobile only */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? (language === 'fr' ? 'Fermer le menu' : 'Close menu') : (language === 'fr' ? 'Ouvrir le menu' : 'Open menu')}
            aria-expanded={isMenuOpen}
            className={`md:hidden p-2 rounded-full transition-all duration-300 ${isDark
              ? 'text-white hover:bg-white/10'
              : 'text-gray-900 hover:bg-gray-900/10'
              }`}
          >
            {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl shadow-lg backdrop-blur-lg z-40 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          } ${isDark ? 'bg-[var(--panel-dark)]/95 text-white' : 'bg-white/95 text-gray-900'
          }`}
      >
        <ul className="flex flex-col items-center gap-4 text-sm">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="cursor-pointer transition-colors duration-200 hover:text-[var(--race-red)]"
            >
              {link.label}
            </li>
          ))}
          <li>
            <button
              className="border px-4 py-1 rounded-full transition-colors duration-200 hover:bg-[var(--race-red)] hover:border-[var(--race-red)] hover:text-white"
              onClick={() => scrollToSection('contact')}
            >
              {texts[language].contact}
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
