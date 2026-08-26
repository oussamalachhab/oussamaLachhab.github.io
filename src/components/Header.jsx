import { useState } from 'react'

const LINKS = [
  { href: '#home', label: 'Accueil', num: '01' },
  { href: '#about', label: 'À propos', num: '02' },
  { href: '#skills', label: 'Compétences', num: '03' },
  { href: '#projects', label: 'Projets', num: '04' },
  { href: '#journey', label: 'Parcours', num: '05' },
  { href: '#contact', label: 'Contact', num: '06' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header>
        <div className="logo">
          Oussama <span className="accent">Lachhab</span> <span className="dot" />
        </div>
      </header>

      <button
        className={`menu-btn${open ? ' open' : ''}`}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <><span>Close</span> <span className="close-x">✕</span></>
        ) : (
          <><span>Menu</span> <span className="plus">+</span></>
        )}
      </button>

      <div className={`nav-overlay${open ? ' open' : ''}`}>
        <div className="nav-overlay-inner">
          <nav className="nav-links">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
                <sup className="nav-num">{link.num}</sup>
              </a>
            ))}
          </nav>

          <div className="nav-social">
            <div className="nav-social-label mono">Socials</div>
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
