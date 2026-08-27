const CERTS = [
  { icon: '🏅', title: 'Gestion de Projet Agile', source: 'HP LIFE' },
  { icon: '📊', title: 'Science des Données & Analytique', source: 'HP LIFE' },
  { icon: '🧭', title: 'Leadership Efficace', source: 'HP LIFE' },
  { icon: '💻', title: 'Front-End Development Libraries', source: 'freeCodeCamp' },
  { icon: '🧪', title: 'Test Automation avec Selenium', source: 'Orange Digital Center' },
]

const LANGUAGES = [
  { name: 'Arabe', level: 100 },
  { name: 'Français', level: 90 },
  { name: 'Anglais', level: 60 },
]

export default function Certifications() {
  return (
    <section className="certs wrap">
      <div className="section-head reveal">
        <div className="badge"><span className="dot" /> Certifications & Langues</div>
        <h2>Formation continue</h2>
        <p>Certifications complémentaires et compétences linguistiques.</p>
      </div>

      <div className="cert-grid reveal">
        <div className="cert-list">
          {CERTS.map((c) => (
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
          {LANGUAGES.map((l) => (
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
