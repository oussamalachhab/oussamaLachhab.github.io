import profile from '../assets/profile.png'

const STACK = [
  'React.js', 'Laravel', 'Node.js', '.NET', 'MySQL', 'MongoDB',
  'Tailwind CSS', 'Express.js', 'JWT', 'UML', 'Agile / Scrum',
]

function TickerRow() {
  return (
    <span>
      {STACK.map((tech, i) => (
        <span key={i}>
          <b>{tech}</b>
          {i < STACK.length - 1 && <span className="sep">•</span>}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="grid-bg" />
      <div className="badge" style={{ marginBottom: 26 }}>
        <span className="dot" /> Disponible pour un PFE 2027
      </div>

      <div className="hero-photo-wrap">
        <div className="hero-photo">
          <img src={profile} alt="Oussama Lachhab" />
        </div>
      </div>

      <h1>Oussama Lachhab</h1>
      <div className="role">Développeur Full Stack</div>
      <p className="desc">
        Je conçois des applications web complètes — interfaces React soignées, API
        REST robustes, authentification sécurisée et bases de données bien pensées.
        Actuellement en dernière année d&apos;ingénierie, à la recherche d&apos;un
        stage de fin d&apos;études pour 2027.
      </p>

      <div className="btn-row">
        <a href="#projects" className="btn btn-solid">Voir mes projets →</a>
        <a href="#contact" className="btn btn-outline">Me contacter</a>
      </div>

      <div className="ticker-wrap">
        <div className="ticker">
          <TickerRow />
          <TickerRow />
        </div>
      </div>
    </section>
  )
}
