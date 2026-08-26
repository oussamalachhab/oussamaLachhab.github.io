const TIMELINE = [
  {
    badge: 'Actuel',
    cat: 'Formation — Focus',
    title: 'Ingénieur en Génie Informatique',
    subtitle: 'École SUPMTI, Rabat · 2025 — 2027 · Recherche PFE 2027',
    desc: "Dernière année d'ingénierie, option Ingénierie des Systèmes d'Information. Approfondissement de React.js, Node.js, Laravel et des architectures backend, avec un focus sur le code propre et les API bien conçues.",
    techs: ['React.js', 'Node.js', 'Laravel', '.NET', 'MySQL'],
  },
  {
    badge: 'Stage',
    cat: 'Expérience',
    title: 'Stagiaire Développeur Web Full Stack',
    subtitle: 'Maghreb Arab Press (MAP) · Avril — Juin 2025',
    desc: "Développement d'ExpireTrack, une application de gestion des abonnements. Interface avec React.js et Tailwind CSS, backend avec Node.js/Express, modélisation UML et base de données MySQL via Prisma, authentification JWT et gestion des rôles.",
    techs: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Prisma', 'JWT'],
  },
  {
    badge: 'Milestone',
    cat: 'Formation',
    title: 'Licence en Ingénierie des Systèmes Informatiques',
    subtitle: 'École SUPMTI, Rabat · 2024 — 2025',
    desc: "Consolidation des bases en ingénierie logicielle et systèmes d'information, en parallèle des premiers projets full stack personnels.",
    techs: ['Algorithmique', "Systèmes d'information", 'Bases de données'],
  },
  {
    badge: 'Stage',
    cat: 'Expérience',
    title: 'Stagiaire Développeur Web Full Stack',
    subtitle: 'Maghreb Arab Press (MAP) · Avril — Mai 2024',
    desc: "Participation au développement d'une plateforme e-commerce de journaux : backend sécurisé, intégration d'API pour la gestion des stocks et des commandes, fonctionnalités web en JavaScript.",
    techs: ['JavaScript', 'APIs', 'Backend sécurisé'],
  },
  {
    badge: 'Fondation',
    cat: 'Formation',
    title: 'Développeur Full Stack — Technicien Spécialisé',
    subtitle: 'Institut de Technologie Appliquée, Rabat · 2022 — 2024',
    desc: 'Formation technique intensive : fondamentaux du développement web, structures de données, POO et premiers projets full stack encadrés.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'POO', 'Git'],
  },
  {
    badge: 'Fondation',
    cat: 'Éducation',
    title: 'Baccalauréat en Sciences Physiques',
    subtitle: 'École Achbal Al Karaouine, Salé · 2022',
    desc: "Bases scientifiques solides en mathématiques et physique, point de départ vers l'ingénierie informatique.",
    techs: ['Mathématiques', 'Physique', 'Logique'],
  },
]

export default function Journey() {
  return (
    <section className="journey wrap" id="journey">
      <div className="section-head reveal">
        <div className="badge"><span className="dot" /> Progression & jalons</div>
        <h2>Mon parcours</h2>
        <p>
          Formation, stages et étapes techniques qui ont construit mon profil de
          développeur full stack.
        </p>
      </div>

      <div className="timeline reveal">
        {TIMELINE.map((item, i) => (
          <div className="t-item" key={i}>
            <div className="t-dot" />
            <div className="t-card">
              <div className="t-top">
                <span className="t-badge">{item.badge}</span>
                <span className="t-cat">{item.cat}</span>
              </div>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.desc}</p>
              <div className="t-techs">
                {item.techs.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
