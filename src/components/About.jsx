import { translations } from '../i18n/translations.js'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function About() {
  const { language } = useLanguage()
  const t = translations.about
  const focusAreas = t.focusAreas[language]
  const stats = t.stats[language]

  return (
    <section className="about wrap" id="about">
      <div className="section-head reveal">
        <div className="badge"><span className="dot" /> {t.badge[language]}</div>
        <h2>{t.title[language]}</h2>
        <p>{t.intro[language]}</p>
      </div>

      <div className="about-grid reveal">
        <div className="card about-text">
          <p>{t.p1[language]}</p>
          <p>{t.p2[language]}</p>
          <div className="label">{t.focusLabel[language]}</div>
          <div className="pill-grid">
            {focusAreas.map((item) => (
              <span className="pill" key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="stat-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.num}>
              <div className="stat-icon">{s.icon}</div>
              <div className="num">{s.num}</div>
              <div className="sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
