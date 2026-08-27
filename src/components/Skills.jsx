import { translations } from '../i18n/translations.js'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function Skills() {
  const { language } = useLanguage()
  const t = translations.skills
  const categories = t.categories[language]

  return (
    <section className="skills wrap" id="skills">
      <div className="section-head reveal">
        <div className="badge"><span className="dot" /> {t.badge[language]}</div>
        <h2>{t.title[language]}</h2>
        <p>{t.desc[language]}</p>
      </div>

      {categories.map((cat) => (
        <div className="skill-cat reveal" key={cat.title}>
          <div className="skill-cat-head">
            <h3>{cat.title}</h3>
            <span>{cat.subtitle}</span>
          </div>
          <div className="skill-grid">
            {cat.items.map((item) => (
              <div className="skill-item" key={item.name}>
                <div className="skill-icon">{item.icon}</div>
                <div>
                  <div className="name">{item.name}</div>
                  <div className="lvl">{item.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
