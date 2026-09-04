import { translations } from '../i18n/translations.js'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function Quote() {
  const { language } = useLanguage()
  const t = translations.quote

  return (
    <section className="quote-section wrap reveal">
      <span className="eyebrow">{t.eyebrow[language]}</span>
      <h2>
        "{t.lineBefore[language]}
        <span className="accent">{t.accent[language]}</span>{t.lineAfter[language]}"
      </h2>
    </section>
  )
}
