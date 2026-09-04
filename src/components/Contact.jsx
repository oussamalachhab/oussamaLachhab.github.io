import { useState } from 'react'
import { translations } from '../i18n/translations.js'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function Contact() {
  const { language } = useLanguage()
  const t = translations.contact

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [copied, setCopied] = useState(null)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)
    setStatus('')

    const data = {
      access_key: 'c048078c-0755-406e-bd5f-5c78c98af906',

      name: form.name,
      email: form.email,
      subject: form.subject || t.formSubjectPh[language],
      message: form.message,

      // Anti-spam
      botcheck: '',

      // Adresse qui reçoit les messages
      from_name: 'Portfolio Oussama',
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  function copyText(text, key) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key)

      setTimeout(() => {
        setCopied(null)
      }, 1200)
    })
  }

  return (
    <section className="contact wrap" id="contact">
      <div className="section-head reveal">
        <div className="badge">
          <span className="dot" /> {t.badge[language]}
        </div>

        <h2>{t.title[language]}</h2>

        <p>{t.subtitle[language]}</p>
      </div>

      <div className="contact-grid reveal">
        <div className="contact-info">
          <p className="intro">{t.intro[language]}</p>

          <div className="info-row">
            <div className="left">
              <div className="ic">✉</div>

              <div>
                <div className="lbl">{t.email[language]}</div>
                <div className="val">
                  lachhab.oussama264@gmail.com
                </div>
              </div>
            </div>

            <button
              type="button"
              className="copy"
              onClick={() =>
                copyText(
                  'lachhab.oussama264@gmail.com',
                  'email'
                )
              }
            >
              {copied === 'email' ? '✓' : '⧉'}
            </button>
          </div>

          <div className="info-row">
            <div className="left">
              <div className="ic">☎</div>

              <div>
                <div className="lbl">{t.phone[language]}</div>
                <div className="val">+212 6 84 00 12 92</div>
              </div>
            </div>

            <button
              type="button"
              className="copy"
              onClick={() =>
                copyText('+212684001292', 'phone')
              }
            >
              {copied === 'phone' ? '✓' : '⧉'}
            </button>
          </div>

          <div className="social-row">
            <a href="https://linkedin.com/in/oussama-lachhab-966903266" className="social-btn">
              in LinkedIn
            </a>

            <a href="https://github.com/oussamalachhab" className="social-btn">
              ⌥ GitHub
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>{t.formName[language]}</label>

            <input
              type="text"
              name="name"
              placeholder={t.formNamePh[language]}
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>{t.formEmail[language]}</label>

            <input
              type="email"
              name="email"
              placeholder={t.formEmailPh[language]}
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>{t.formSubject[language]}</label>

            <input
              type="text"
              name="subject"
              placeholder={t.formSubjectPh[language]}
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>{t.formMessage[language]}</label>

            <textarea
              rows={5}
              name="message"
              placeholder={t.formMessagePh[language]}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? t.submitting[language] : t.submit[language]}
          </button>

          {status === 'success' && (
            <p className="form-success">{t.success[language]}</p>
          )}

          {status === 'error' && (
            <p className="form-error">{t.error[language]}</p>
          )}
        </form>
      </div>
    </section>
  )
}
