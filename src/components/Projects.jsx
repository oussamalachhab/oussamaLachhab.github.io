const PROJECTS = [
  {
    tag: 'Site web · Projet personnel',
    title: 'Key Partner',
    desc: 'Conception et réalisation complète du site web de Key Partner, un service de conciergerie pour particuliers — actuellement en ligne.',
    techs: ['HTML/CSS', 'JavaScript'],
    linkLabel: 'Voir le site en ligne →',
    href: 'https://key-partenair.com',
  },
  {
    tag: 'Full Stack Web',
    title: 'ExpireTrack',
    desc: "Application de gestion des abonnements avec rôles utilisateurs, authentification JWT et API RESTful — réalisée en stage chez Maghreb Arab Press.",
    techs: ['React.js', 'Tailwind', 'Node.js', 'Prisma', 'MySQL'],
    linkLabel: 'Voir le détail →',
    href: '#',
  },
  {
    tag: 'Web App',
    title: 'MotoTrack',
    desc: "Plateforme de gestion d'entretien moto : tableau de bord, rappels, suivi des coûts, diagnostic et carte des garages partenaires.",
    techs: ['Laravel', 'React.js', 'MySQL'],
    linkLabel: 'Voir le détail →',
    href: 'https://github.com/oussamalachhab/Mototrack',
  },
  {
    tag: "Projet d'équipe",
    title: 'FitnessTracker',
    desc: 'Application de suivi sportif et nutritionnel : authentification, tableau de bord statistique, journal alimentaire, objectifs et progression.',
    techs: ['ASP.NET MVC', 'Entity Framework', 'SQLite'],
    linkLabel: 'Voir le détail →',
    href: 'https://github.com/oussamalachhab/FitnessTracker',
  },
  {
    tag: 'Web App',
    title: 'AutoLoc',
    desc: 'Application de location de voitures avec gestion des disponibilités et des réservations selon les dates choisies.',
    techs: ['Laravel', 'React.js', 'MySQL'],
    linkLabel: 'Voir le détail →',
    href: 'https://github.com/oussamalachhab/AutoLoc',
  },
  {
    tag: 'E-commerce',
    title: 'OuCars',
    desc: "Marketplace e-commerce pour l'achat de voitures entre particuliers, pensée pour une navigation simple et rapide.",
    techs: ['JavaScript'],
    linkLabel: 'Voir le détail →',
    href: 'https://github.com/oussamalachhab/OuCars',
  },
]

export default function Projects() {
  return (
    <section className="projects wrap" id="projects">
      <div className="section-head reveal">
        <div className="badge"><span className="dot" /> Réalisations concrètes</div>
        <h2>Projets phares</h2>
        <p>
          Une sélection de projets personnels et académiques, du prototype à
          l&apos;application déployée.
        </p>
      </div>

      <div className="proj-grid reveal">
        {PROJECTS.map((p) => (
          <div className="proj-card" key={p.title}>
            <span className="tag-pill">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="proj-techs">
              {p.techs.map((t) => <span key={t}>{t}</span>)}
            </div>
            <a
              href={p.href}
              target={p.href.startsWith('http') ? '_blank' : undefined}
              rel={p.href.startsWith('http') ? 'noreferrer' : undefined}
              className="proj-link"
            >
              {p.linkLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
