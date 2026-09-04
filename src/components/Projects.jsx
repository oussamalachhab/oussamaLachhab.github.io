import { translations } from '../i18n/translations.js'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function Projects() {
  const { language } = useLanguage()
  const t = translations.projects
  const items = t.items[language]

  return (
    <section className="projects wrap" id="projects">
      <div className="section-head reveal">
        <div className="badge"><span className="dot" /> {t.badge[language]}</div>
        <h2>{t.title[language]}</h2>
        <p>{t.desc[language]}</p>
      </div>

      <div className="proj-grid reveal">
        {items.map((p) => (
          <div className="proj-card" key={p.title}>
            <span className="tag-pill">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="proj-techs">
              {p.techs.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <a
              href={p.href}
              target={p.href.startsWith('http') ? '_blank' : undefined}
              rel={p.href.startsWith('http') ? 'noreferrer' : undefined}
              className="proj-link"
            >
              {p.linkLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
