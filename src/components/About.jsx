const FOCUS_AREAS = [
  '</> Frontend Development',
  '⚙ Backend Development',
  '🗄 Bases de données',
  '🔗 API REST & JWT',
  '🧩 UML & Architecture',
  '🔁 Agile (Scrum/Kanban)',
]

const STATS = [
  { icon: '🎓', num: '2027', sub: 'Objectif PFE — SUPMTI' },
  { icon: '💼', num: '2 stages', sub: 'Maghreb Arab Press' },
  { icon: '🧱', num: '6 projets', sub: 'Persos & académiques' },
  { icon: '🛡', num: 'Clean Code', sub: 'Architecture soignée' },
]

export default function About() {
  return (
    <section className="about wrap" id="about">
      <div className="section-head reveal">
        <div className="badge"><span className="dot" /> Profil & Parcours</div>
        <h2>À propos de moi</h2>
        <p>
          Développeur Full Stack passionné, entre React.js, Laravel, Node.js et
          .NET — avec un vrai goût pour les architectures propres et les
          interfaces soignées.
        </p>
      </div>

      <div className="about-grid reveal">
        <div className="card about-text">
          <p>
            <b>Développeur Full Stack passionné</b>, spécialisé en React.js,
            Laravel, Node.js et .NET. Expérience pratique dans la conception
            d&apos;applications web, les API REST, l&apos;authentification JWT
            et les bases de données relationnelles.
          </p>
          <p>
            Habitué au travail en équipe et aux méthodologies Agile, je
            recherche un <b>Stage de Fin d&apos;Études (PFE) en 2027</b> afin de
            mettre mes compétences techniques au service d&apos;un projet
            concret et à fort impact.
          </p>
          <div className="label">Domaines de focus</div>
          <div className="pill-grid">
            {FOCUS_AREAS.map((item) => (
              <span className="pill" key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="stat-grid">
          {STATS.map((s) => (
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
