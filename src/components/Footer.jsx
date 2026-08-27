import { Link } from 'react-router-dom'
import { translations } from '../i18n/translations.js'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations.footer

  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="foot-logo">
              Oussama <span className="accent">Lachhab</span> •
            </div>
            <div className="foot-role">{t.role[language]}</div>
          </div>
          <div className="foot-social">
            <a href="https://github.com/oussamalachhab" title="GitHub">⌥</a>
            <a href="https://linkedin.com/in/oussama-lachhab-966903266" title="LinkedIn">in</a>
            <a href="mailto:lachhab.oussama264@gmail.com" title="Email">✉</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{t.rights[language]}</span>
          <Link to="/Accueil" className="back-top">{t.backTop[language]}</Link>
        </div>
      </div>
    </footer>
  )
}
