import { useState } from 'react'

export default function Contact() {
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
      subject: form.subject || 'Opportunité de stage / Projet',
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
          <span className="dot" /> Restons en contact
        </div>

        <h2>Construisons quelque chose ensemble</h2>

        <p>
          Une opportunité de stage, un projet ou juste une question technique ?
          Écris-moi.
        </p>
      </div>

      <div className="contact-grid reveal">
        <div className="contact-info">
          <p className="intro">
            Je suis toujours partant pour discuter de stages, de projets full
            stack, d&apos;architecture logicielle ou de collaborations
            techniques.
          </p>

          <div className="info-row">
            <div className="left">
              <div className="ic">✉</div>

              <div>
                <div className="lbl">Email</div>
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
                <div className="lbl">Téléphone / WhatsApp</div>
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
            <label>Votre nom</label>

            <input
              type="text"
              name="name"
              placeholder="ex. Oussama LACHHAB"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Votre email</label>

            <input
              type="email"
              name="email"
              placeholder="oussama@entreprise.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Sujet</label>

            <input
              type="text"
              name="subject"
              placeholder="Opportunité de stage / Projet / Informations"
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Message</label>

            <textarea
              rows={5}
              name="message"
              placeholder="Parlez-moi de votre projet, du contexte, des délais..."
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
            {loading
              ? 'Envoi en cours...'
              : 'Envoyer le message →'}
          </button>

          {status === 'success' && (
            <p className="form-success">
              ✓ Message envoyé avec succès !
            </p>
          )}

          {status === 'error' && (
            <p className="form-error">
              ✕ Une erreur est survenue. Réessayez.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}