import React, { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import SectorDivider from './SectorDivider'

function Projects() {
  const { isDark } = useTheme()
  const { language } = useLanguage()
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeMedia, setActiveMedia] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Translations
  const texts = {
    en: {
      title: "My Projects",
      subtitle: "A selection of things I've built",
      demo: "Live Demo",
      code: "Source Code",
      more: "View details",
      close: "Close",
      tech: "Tech stack",
    },
    fr: {
      title: "Mes Projets",
      subtitle: "Une sélection de mes réalisations",
      demo: "Voir le site",
      code: "Code source",
      more: "En savoir plus",
      close: "Fermer",
      tech: "Technologies",
    }
  }

  // ---- Modifie ce tableau avec tes vrais projets ----
  // "media" accepte des images ET des vidéos, dans n'importe quel ordre.
  // Pour une image :  { type: "image", src: "/projects/xxx.png" }
  // Pour une vidéo :  { type: "video", src: "/projects/xxx.mp4" }
  const projects = [
    {
      id: 1,
      title: "FitnessTracker",
      // Description courte affichée sur la carte
      shortDescription: {
        en: "A complete web app for tracking workouts, meals and fitness goals.",
        fr: "Application web complète de suivi sportif et nutritionnel."
      },
      // Description longue affichée dans la fenêtre "En savoir plus"
      fullDescription: {
        en: "FitnessTracker is a complete web application for tracking workouts, nutrition and fitness goals on a daily basis. It includes secure user authentication, a personalized dashboard summarizing calories burned, calories consumed, weekly activity and calorie balance, workout logging (type, duration, calories burned, notes), a food journal tracking meals with macronutrients (protein, carbs, fat), and custom goal management with target values, deadlines and progress tracking. Charts (via Chart.js) visualize daily calorie balance and weekly activity at a glance.",
        fr: "FitnessTracker est une application web complète de suivi sportif et nutritionnel, conçue pour aider les utilisateurs à suivre leurs entraînements, leur alimentation et leurs objectifs fitness au quotidien. Elle propose une authentification sécurisée, un tableau de bord personnalisé (calories brûlées, calories consommées, activité hebdomadaire, bilan calorique), l'enregistrement des séances sportives (type, durée, calories, notes), un journal alimentaire avec suivi des macronutriments (protéines, glucides, lipides), et la gestion d'objectifs personnalisés avec valeurs cibles, échéances et suivi de progression. Des graphiques (Chart.js) permettent de visualiser le bilan calorique quotidien et l'activité de la semaine en un coup d'œil."
      },
      media: [
        { type: "video", src: "/projects/fitnesstracker-demo.mp4", poster: "/projects/fitnesstracker-cover.png" },
      ], // place ta vidéo ET une image de couverture (poster) dans public/projects/
      tech: ["ASP.NET Core MVC", "Entity Framework Core", "SQLite", "Bootstrap 5", "Chart.js"],
      demoLink: "", // ajoute le lien si tu as une démo en ligne
      codeLink: "https://github.com/oussamalachhab/FitnessTracker"
    },
    {
      id: 2,
      title: "MotoTrack",
      shortDescription: {
        en: "A web platform connecting motorcycle owners and partner garages to simplify maintenance tracking.",
        fr: "Plateforme web connectant motards et garages partenaires pour simplifier la gestion de l'entretien moto."
      },
      fullDescription: {
        en: "MotoTrack is a web platform designed to simplify motorcycle management and maintenance by connecting riders and partner garages around a shared tool. Riders get a personal space to track their bikes, maintenance expenses and appointments, and receive automatic reminders before critical maintenance is due. A diagnostic assistant helps them quickly identify a potential issue from their symptoms, and an interactive map helps them locate the nearest partner garages. On the other side, garages get a professional space to set up their profile (information, location, services offered) and efficiently manage incoming appointment requests. MotoTrack's goal is to digitalize and simplify the entire motorcycle maintenance chain — from personal tracking to booking a garage appointment — in a clear, intuitive interface built for daily use.",
        fr: "MotoTrack est une plateforme web pensée pour simplifier la gestion et l'entretien des motos, en connectant motards et garages partenaires autour d'un même outil. D'un côté, les motards disposent d'un espace personnel pour suivre leurs motos, leurs dépenses d'entretien, leurs rendez-vous et recevoir des rappels automatiques avant chaque entretien critique. Un assistant de diagnostic leur permet aussi d'identifier rapidement une panne potentielle à partir de leurs symptômes, et une carte interactive les aide à localiser les garages partenaires les plus proches. De l'autre côté, les garages bénéficient d'un espace professionnel pour configurer leur fiche (informations, localisation, services proposés) et gérer efficacement les demandes de rendez-vous reçues de leurs clients. L'objectif de MotoTrack est de digitaliser et simplifier toute la chaîne d'entretien moto — du suivi personnel jusqu'à la prise de rendez-vous en garage — dans une interface claire, intuitive et pensée pour un usage quotidien."
      },
      media: [
        { type: "video", src: "/projects/Mototrack.mp4", poster: "/projects/MotoTrackPro.png" },
      ],
      tech: ["React.js", "Laravel", "MySQL"],
      demoLink: "", // ajoute le lien si tu as une démo en ligne
      codeLink: "" // ajoute le lien GitHub si le repo est public
    },
    {
      id: 3,
      title: "TrackFlow",
      shortDescription: {
        en: "A modern logistics digitalization solution for time savings, full traceability and smart management.",
        fr: "Solution moderne de digitalisation logistique pour gagner du temps et gérer intelligemment."
      },
      fullDescription: {
        en: "TrackFlow is a modern logistics digitalization solution. It saves time by streamlining and automating logistics operations, provides full traceability so every shipment and step can be tracked end to end, improves customer satisfaction through clearer visibility and faster processing, and enables smart management with a centralized, data-driven approach to logistics.",
        fr: "TrackFlow est une solution moderne de digitalisation logistique. Elle permet un gain de temps en fluidifiant et automatisant les opérations logistiques, une traçabilité complète pour suivre chaque envoi et chaque étape de bout en bout, une meilleure satisfaction client grâce à une visibilité plus claire et un traitement plus rapide, et une gestion intelligente grâce à une approche centralisée et pilotée par les données."
      },
      media: [
        { type: "video", src: "/projects/TrackFlow.mp4", poster: "/projects/TrackFlow.png" },
      ],
      tech: ["Laravel", "MySQL", "Bootstrap"],
      demoLink: "", // ajoute le lien si tu as une démo en ligne
      codeLink: "" // ajoute le lien GitHub si le repo est public
    },
  ]
  // ----------------------------------------------------

  const openProject = (project) => {
    setSelectedProject(project)
    setActiveMedia(0)
    setIsPlaying(false)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setActiveMedia(0)
    setIsPlaying(false)
  }

  const selectMedia = (idx) => {
    setActiveMedia(idx)
    setIsPlaying(false)
  }

  // Fermer avec la touche Echap + bloquer le scroll de la page derrière la modal
  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeProject()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  // Placeholder en SVG local (pas de dépendance à un service externe qui peut tomber en panne)
  const FALLBACK_IMAGE =
    "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%231b1f2a'/%3E%3Ctext x='400' y='250' fill='%23666' font-family='sans-serif' font-size='28' text-anchor='middle' dominant-baseline='middle'%3EImage indisponible%3C/text%3E%3C/svg%3E"

  const handleImgError = (e) => {
    e.target.onerror = null
    e.target.src = FALLBACK_IMAGE
  }

  // Retourne le premier média "image" pour la vignette de carte (fallback sur le premier média si aucune image)
  const getCardThumbnail = (project) => {
    const firstImage = project.media.find((m) => m.type === 'image')
    return firstImage || project.media[0]
  }

  return (
    <>
    <section
      id="projects"
      className={`py-24 px-6 md:px-16 transition-colors duration-300 ${
        isDark ? 'bg-[var(--asphalt)] text-white' : 'bg-[var(--paddock)] text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-mono-data text-xs uppercase tracking-[0.2em] mb-2 text-[var(--race-red)]">
            // {language === 'fr' ? 'Garage' : 'Garage'}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-oussama">
            {texts[language].title}
          </h2>
          <p className={`mt-3 text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {texts[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const thumb = getCardThumbnail(project)
            return (
              <div
                key={project.id}
                onClick={() => openProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') openProject(project) }}
                className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isDark
                    ? 'bg-[var(--panel-dark)] border-white/10 hover:border-[var(--race-red)]/40'
                    : 'bg-white border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className="relative overflow-hidden h-48 bg-black">
                  {/* Fond flouté agrandi pour combler l'espace sans couper l'image principale */}
                  <img
                    src={thumb.type === 'video' ? thumb.poster : thumb.src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-50"
                  />
                  <img
                    src={thumb.type === 'video' ? thumb.poster : thumb.src}
                    alt={project.title}
                    loading="lazy"
                    className="relative w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={handleImgError}
                  />
                  {thumb.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                      <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-lg text-gray-900 shadow-lg">
                        ▶
                      </span>
                    </div>
                  )}
                  {project.media.length > 1 && (
                    <span className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded-full bg-black/60 text-white backdrop-blur-sm">
                      +{project.media.length - 1}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-2">{project.title}</h3>
                  <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.shortDescription[language]}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-3 py-1 rounded-full ${
                          isDark
                            ? 'bg-white/5 text-gray-300 border border-white/10'
                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className={`text-xs px-3 py-1 rounded-full ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => { e.stopPropagation(); openProject(project) }}
                    className={`text-sm font-medium underline-offset-4 hover:underline ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {texts[language].more} →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ---- Fenêtre de détail (modal) ---- */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={closeProject}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Contenu */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border ${
              isDark
                ? 'bg-[var(--panel-dark)] border-white/10 text-white'
                : 'bg-white border-gray-200 text-gray-900'
            }`}
          >
            {/* Bouton fermer */}
            <button
              onClick={closeProject}
              aria-label={texts[language].close}
              className={`absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200 ${
                isDark
                  ? 'bg-black/50 text-white hover:bg-black/70'
                  : 'bg-white/90 text-gray-900 hover:bg-white shadow'
              }`}
            >
              ✕
            </button>

            {/* Média principal (image ou vidéo) */}
            <div className="relative h-64 md:h-80 bg-black flex items-center justify-center">
              {selectedProject.media[activeMedia].type === 'video' ? (
                isPlaying ? (
                  <video
                    key={selectedProject.media[activeMedia].src}
                    src={selectedProject.media[activeMedia].src}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative w-full h-full group/play"
                    aria-label="Play video"
                  >
                    <img
                      src={selectedProject.media[activeMedia].poster}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-50"
                    />
                    <img
                      src={selectedProject.media[activeMedia].poster}
                      alt={`${selectedProject.title} cover`}
                      className="relative w-full h-full object-contain"
                      onError={handleImgError}
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/play:bg-black/40 transition-colors duration-300">
                      <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-2xl text-gray-900 shadow-lg group-hover/play:scale-110 transition-transform duration-300">
                        ▶
                      </span>
                    </span>
                  </button>
                )
              ) : (
                <img
                  src={selectedProject.media[activeMedia].src}
                  alt={`${selectedProject.title} ${activeMedia + 1}`}
                  className="w-full h-full object-cover"
                  onError={handleImgError}
                />
              )}
            </div>

            {/* Miniatures de la galerie */}
            {selectedProject.media.length > 1 && (
              <div className="flex gap-2 px-6 pt-4 overflow-x-auto">
                {selectedProject.media.map((m, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectMedia(idx)}
                    className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                      activeMedia === idx
                        ? 'border-[var(--race-red)]'
                        : isDark ? 'border-white/10' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={m.type === 'video' ? m.poster : m.src}
                      alt={`thumb ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={handleImgError}
                    />
                    {m.type === 'video' && (
                      <span className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-xs">
                        ▶
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}

            <div className="p-6">
              <h3 className="font-display text-2xl font-bold mb-3 text-gradient-oussama">
                {selectedProject.title}
              </h3>

              <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedProject.fullDescription[language]}
              </p>

              <div className="mb-6">
                <h4 className={`text-xs uppercase tracking-wide mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  {texts[language].tech}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-3 py-1 rounded-full ${
                        isDark
                          ? 'bg-white/5 text-gray-300 border border-white/10'
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                {selectedProject.demoLink && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium px-5 py-2 rounded-full transition-colors duration-200 ${
                      isDark
                        ? 'bg-white text-gray-900 hover:bg-gray-200'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {texts[language].demo}
                  </a>
                )}
                {selectedProject.codeLink && (
                  <a
                    href={selectedProject.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium px-5 py-2 rounded-full border transition-colors duration-200 ${
                      isDark
                        ? 'border-white/20 text-white hover:bg-white/10'
                        : 'border-gray-300 text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {texts[language].code}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
    <SectorDivider />
    </>
  )
}

export default Projects