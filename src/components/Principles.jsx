const PRINCIPLES = [
  {
    num: '01',
    icon: '</>',
    title: 'Code propre',
    desc: 'Un code lisible, maintenable, avec une architecture claire et une séparation nette des responsabilités.',
    tag: 'Maintenabilité',
  },
  {
    num: '02',
    icon: '👤',
    title: "Utilisateur d'abord",
    desc: 'Des interfaces pensées autour des besoins réels, avec une navigation intuitive et sans friction.',
    tag: 'Expérience',
  },
  {
    num: '03',
    icon: '✦',
    title: 'Apprentissage continu',
    desc: 'Amélioration constante des compétences techniques, en veille sur les standards web et mobile.',
    tag: 'Progression',
  },
  {
    num: '04',
    icon: '◎',
    title: 'Construire avec un objectif',
    desc: 'Créer des solutions réellement utiles, scalables et pensées pour durer.',
    tag: 'Impact',
  },
]

export default function Principles() {
  return (
    <section className="principles wrap">
      <div className="section-head reveal">
        <div className="badge"><span className="dot" /> Principes directeurs</div>
        <h2>Comment je construis</h2>
        <p>
          Les convictions qui guident chaque ligne de code et chaque choix
          d&apos;architecture.
        </p>
      </div>

      <div className="prin-grid reveal">
        {PRINCIPLES.map((p) => (
          <div className="prin-card" key={p.num}>
            <div className="prin-top">
              <div className="prin-icon">{p.icon}</div>
              <div className="prin-num">{p.num}</div>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span className="prin-tag">{p.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
