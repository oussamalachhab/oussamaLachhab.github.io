import { translations } from '../i18n/translations.js'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function Certifications() {
  const { language } = useLanguage()
  const t = translations.certifications
  const certs = t.certs[language]
  const languages = t.languages[language]

  return (
    <section className="certs wrap">
      <div className="section-head reveal">
        <div className="badge"><span className="dot" /> {t.badge[language]}</div>
        <h2>{t.title[language]}</h2>
        <p>{t.desc[language]}</p>
      </div>

      <div className="cert-grid reveal">
        <div className="cert-list">
          {certs.map((c) => (
            <div className="cert-row" key={c.title}>
              <div className="ic">{c.icon}</div>
              <div>
                <div className="t">{c.title}</div>
                <div className="s">{c.source}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="lang-card">
          {languages.map((l) => (
            <div className="lang-row" key={l.name}>
              <span className="name">{l.name}</span>
              <div className="lang-bar">
                <div style={{ width: `${l.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
