import profile from '../assets/profile.png'
import { translations } from '../i18n/translations.js'
import { useLanguage } from '../contexts/LanguageContext.jsx'

const STACK = [
  'React.js', 'Laravel', 'Node.js', '.NET', 'MySQL', 'MongoDB',
  'Tailwind CSS', 'Express.js', 'JWT', 'UML', 'Agile / Scrum',
]

function TickerRow() {
  return (
    <span>
      {STACK.map((tech, i) => (
        <span key={i}>
          <b>{tech}</b>
          {i < STACK.length - 1 && <span className="sep">•</span>}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const { language } = useLanguage()
  const t = translations.hero

  return (
    <section className="hero" id="home">
      <div className="grid-bg" />
      <div className="badge" style={{ marginBottom: 26 }}>
        <span className="dot" /> {t.available[language]}
      </div>

      <div className="hero-photo-wrap">
        <div className="hero-photo">
          <img src={profile} alt="Oussama Lachhab" />
        </div>
      </div>

      <h1>Oussama Lachhab</h1>
      <div className="role">{t.role[language]}</div>
      <p className="desc">{t.desc[language]}</p>

      <div className="btn-row">
        <a href="#projects" className="btn btn-solid">{t.ctaProjects[language]}</a>
        <a href="#contact" className="btn btn-outline">{t.ctaContact[language]}</a>
      </div>

      <div className="ticker-wrap">
        <div className="ticker">
          <TickerRow />
          <TickerRow />
        </div>
      </div>
    </section>
  )
}
