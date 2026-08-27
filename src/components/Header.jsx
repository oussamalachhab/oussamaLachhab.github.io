import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NAV_ITEMS, translations } from '../i18n/translations.js'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const t = translations.header

  return (
    <>
      <header>
        <Link to="/Accueil" className="logo" onClick={() => setOpen(false)}>
          Oussama <span className="accent">Lachhab</span> <span className="dot" />
        </Link>

        <button
          type="button"
          className="lang-switch"
          onClick={toggleLanguage}
          aria-label="Toggle language"
        >
          <span className={language === 'fr' ? 'active' : ''}>FR</span>
          <span className="lang-sep">/</span>
          <span className={language === 'en' ? 'active' : ''}>EN</span>
        </button>
      </header>

      <button
        className={`menu-btn${open ? ' open' : ''}`}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <><span>{t.close[language]}</span> <span className="close-x">✕</span></>
        ) : (
          <><span>{t.menu[language]}</span> <span className="plus">+</span></>
        )}
      </button>

      <div className={`nav-overlay${open ? ' open' : ''}`}>
        <div className="nav-overlay-inner">
          <nav className="nav-links">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {item[language]}
                <sup className="nav-num">{item.num}</sup>
              </Link>
            ))}
          </nav>

          <div className="nav-social">
            <div className="nav-social-label mono">{t.socialsLabel[language]}</div>
            <div className="nav-social-links">
              <a href="https://github.com/oussamalachhab" onClick={() => setOpen(false)}>GitHub</a>
              <span className="sep">·</span>
              <a href="https://linkedin.com/in/oussama-lachhab-966903266" onClick={() => setOpen(false)}>LinkedIn</a>
              <span className="sep">·</span>
              <a href="mailto:lachhab.oussama264@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
