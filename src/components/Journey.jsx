import { translations } from '../i18n/translations.js'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function Journey() {
  const { language } = useLanguage()
  const t = translations.journey
  const items = t.items[language]

  return (
    <section className="journey wrap" id="journey">
      <div className="section-head reveal">
        <div className="badge"><span className="dot" /> {t.badge[language]}</div>
        <h2>{t.title[language]}</h2>
        <p>{t.desc[language]}</p>
      </div>

      <div className="timeline reveal">
        {items.map((item, i) => (
          <div className="t-item" key={i}>
            <div className="t-dot" />
            <div className="t-card">
              <div className="t-top">
                <span className="t-badge">{item.badge}</span>
                <span className="t-cat">{item.cat}</span>
              </div>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.desc}</p>
              <div className="t-techs">
                {item.techs.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
