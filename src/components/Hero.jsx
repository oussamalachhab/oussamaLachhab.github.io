import React from 'react'
import HeroIcons from './HeroIcons'
import SectorDivider from './SectorDivider'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { FaBootstrap, FaCss3, FaGit, FaHtml5, FaJava, FaLaravel, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { SiExpress, SiGit, SiJavascript, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si'

const TECH_STACK = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Laravel', icon: <FaLaravel /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'CSS', icon: <FaCss3 /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
]

function Hero() {
  const { isDark } = useTheme()
  const { language } = useLanguage()
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const texts = {
    en: {
      status: "Seeking PFE 2027",
      line1: "Oussama",
      line2: "Full Stack Developer",
      base: "Based in Salé, Morocco",
      desc: "Final-year engineering student seeking a Final-Year Internship (PFE) for 2027. I build fast, reliable web applications — from database to interface — with the same care a good pit crew brings to a car: precise, tested, and built to perform under pressure.",
      hire: "Get in touch",
      stack: "Stack",
    },
    fr: {
      status: "Recherche PFE 2027",
      line1: "Oussama",
      line2: "Développeur Full Stack",
      base: "Basé à Salé, Maroc",
      desc: "Étudiant ingénieur en dernière année, à la recherche d'un Stage de Fin d'Études (PFE) pour 2027. Je construis des applications web rapides et fiables — de la base de données à l'interface — avec la même rigueur qu'une bonne équipe technique apporte à une voiture de course : précis, testé, pensé pour tenir sous pression.",
      hire: "Me contacter",
      stack: "Stack",
    }
  }
  const t = texts[language]

  return (
    <main>
      <section className={`min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 transition-all duration-500 ${isDark
          ? 'bg-[var(--asphalt)] text-[var(--ink)]'
          : 'bg-[var(--paddock)] text-[var(--graphite)]'
        }`}>

        {/* Status line — style écran de télémétrie */}
        <div className={`font-mono-data flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.2em] mb-6 px-4 py-1.5 rounded-full border ${
          isDark ? 'border-white/10 text-[var(--ink-muted)]' : 'border-black/10 text-[var(--graphite-muted)]'
        }`}>
          <span className="status-dot w-2 h-2 rounded-full bg-[var(--sector-green)]"></span>
          {t.status}
        </div>

        {/* Nom + rôle */}
        <div>
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-none tracking-tight">
            <span className="text-gradient-oussama">{t.line1}</span>
          </h1>
          <h2 className="font-display text-2xl md:text-4xl font-semibold mt-3 tracking-wide">
            {t.line2}
          </h2>
        </div>

        {/* Localisation — style label télémétrie */}
        <p className={`font-mono-data mt-3 text-xs md:text-sm uppercase tracking-[0.15em] ${
          isDark ? 'text-[var(--ink-muted)]' : 'text-[var(--graphite-muted)]'
        }`}>
          {t.base}
        </p>

        {/* Description */}
        <p className={`mt-6 max-w-xl transition-colors duration-300 ${isDark ? 'text-[var(--ink-muted)]' : 'text-[var(--graphite-muted)]'
          }`}>
          {t.desc}
        </p>

        {/* CTA + icônes sociales */}
        <div className="mt-8 flex items-center gap-5">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-7 py-2.5 rounded-md font-display font-semibold text-base tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 bg-[var(--race-red)] text-white shadow-[0_4px_20px_-4px_rgba(225,6,0,0.6)] hover:shadow-[0_6px_24px_-4px_rgba(225,6,0,0.8)]"
          >
            {t.hire}
          </button>
          <HeroIcons />
        </div>
      </section>

      <SectorDivider />

      {/* Tech ticker — bandeau télémétrie */}
      <div className={`py-3 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[var(--panel-dark)]' : 'bg-[var(--graphite)]'
      }`}>
        <div className='flex w-max animate-marquee whitespace-nowrap font-mono-data text-xs md:text-sm'>
          {[0, 1].map((copy) => (
            <div key={copy} className='flex items-center gap-6' aria-hidden={copy === 1}>
              <span className="uppercase tracking-[0.2em] text-[var(--sector-green)] px-4">{t.stack} //</span>
              {TECH_STACK.map((tech, i) => (
                <React.Fragment key={tech.name}>
                  <div className="flex items-center gap-2 text-[var(--ink-muted)]">
                    <span className="text-[var(--ink)]">{tech.icon}</span>
                    <span className="uppercase tracking-wide">{tech.name}</span>
                  </div>
                  <span className="text-[var(--sector-purple)]">/</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Hero
