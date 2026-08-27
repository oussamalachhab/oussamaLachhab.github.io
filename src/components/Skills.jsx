const CATEGORIES = [
  {
    title: 'Frontend Development',
    subtitle: 'Interfaces modernes, réactives et soignées',
    items: [
      { icon: '</>', name: 'HTML5 / CSS3', level: 'Avancé' },
      { icon: 'JS', name: 'JavaScript (ES6+)', level: 'Avancé' },
      { icon: '⚛', name: 'React.js', level: 'Avancé' },
      { icon: '🎨', name: 'Tailwind CSS / Bootstrap', level: 'Avancé' },
    ],
  },
  {
    title: 'Backend & APIs',
    subtitle: 'Serveurs robustes, API propres et sécurisées',
    items: [
      { icon: '🐘', name: 'Laravel', level: 'Avancé' },
      { icon: '🟢', name: 'Node.js / Express.js', level: 'Avancé' },
      { icon: '◆', name: '.NET / ASP.NET MVC', level: 'Intermédiaire' },
      { icon: '🔗', name: 'REST APIs / JWT', level: 'Avancé' },
    ],
  },
  {
    title: 'Bases de données',
    subtitle: 'Schémas relationnels, requêtes et modélisation',
    items: [
      { icon: '🐬', name: 'MySQL', level: 'Avancé' },
      { icon: '🍃', name: 'MongoDB', level: 'Intermédiaire' },
      { icon: '🗃', name: 'SQL Server', level: 'Intermédiaire' },
      { icon: '💾', name: 'SQLite / Prisma', level: 'Intermédiaire' },
    ],
  },
  {
    title: 'Outils & Méthodologies',
    subtitle: 'Contrôle de version, conception et travail en équipe',
    items: [
      { icon: '⌥', name: 'Git / GitHub', level: 'Avancé' },
      { icon: '🧩', name: 'UML', level: 'Intermédiaire' },
      { icon: '🔁', name: 'Agile (Scrum / Kanban)', level: 'Avancé' },
      { icon: '🐧', name: 'Linux / WordPress', level: 'Intermédiaire' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills wrap" id="skills">
      <div className="section-head reveal">
        <div className="badge"><span className="dot" /> Capacités techniques</div>
        <h2>Compétences & Technologies</h2>
        <p>
          Une boîte à outils complète : développement web moderne, applications
          full stack, bases de données et outils de travail en équipe.
        </p>
      </div>

      {CATEGORIES.map((cat) => (
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
