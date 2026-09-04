import { translations } from '../i18n/translations.js'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function Principles() {
  const { language } = useLanguage()
  const t = translations.principles
  const items = t.items[language]

  return (
    <section className="principles wrap">
      <div className="section-head reveal">
        <div className="badge"><span className="dot" /> {t.badge[language]}</div>
        <h2>{t.title[language]}</h2>
        <p>{t.desc[language]}</p>
      </div>

      <div className="prin-grid reveal">
        {items.map((p) => (
          <div className="prin-card" key={p.num}>
            <div className="prin-top">
              <div className="prin-icon">{p.icon}</div>
              <div className="prin-num">{p.num}</div>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span className="prin-tag">{p.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
