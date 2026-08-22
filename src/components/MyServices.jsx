import React from "react";
import { FaDesktop, FaServer, FaMobileAlt, FaEdit, FaCode } from "react-icons/fa";
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import SectorDivider from './SectorDivider';

function MyServices() {
  const { isDark } = useTheme();
  const { language } = useLanguage();

  const services = [
    {
      icon: <FaDesktop className="text-3xl text-[var(--sector-green)]" />,
      title: language === "fr" ? "Développement Frontend" : "Frontend Development",
      description:
        language === "fr"
          ? "Création d'interfaces intuitives et performantes offrant une expérience fluide sur tous les appareils."
          : "Crafting intuitive and high-performance UIs that deliver seamless experiences across devices.",
    },
    {
      icon: <FaServer className="text-3xl text-[var(--sector-purple)]" />,
      title: language === "fr" ? "Développement Backend" : "Backend Development",
      description:
        language === "fr"
          ? "Conception de systèmes robustes, sécurisés et évolutifs pour des applications fiables et puissantes."
          : "Building robust, secure, and scalable server-side systems for smooth and powerful app operations.",
    },
    {
      icon: <FaEdit className={`text-3xl ${isDark ? 'text-white' : 'text-gray-800'}`} />,
      title: language === "fr" ? "Design Créatif" : "Creative Design",
      description:
        language === "fr"
          ? "Exploiter les principes artistiques et esthétiques pour créer des expériences visuelles engageantes."
          : "Leveraging artistic element and aesthetic principles to craft visually appealing and engaging user experiences.",
    },
    {
      icon: <FaCode className="text-3xl text-[var(--race-red)]" />,
      title: language === "fr" ? "Code Propre" : "Clean Code",
      description:
        language === "fr"
          ? "Écriture de code structuré, lisible et maintenable, en suivant les bonnes pratiques de développement."
          : "Writing code that is well-structured, readable and maintainable. It involves following coding best practices.",
    },
  ];

  return (
    <>
    <section
      className={`py-16 px-8 transition-all duration-500 ${
        isDark
          ? "bg-[var(--panel-dark)] text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <p className="font-mono-data text-xs uppercase tracking-[0.2em] mb-2 text-center text-[var(--race-red)]">
        // {language === "fr" ? "Ce que je fais" : "What I do"}
      </p>
      <h2
        className={`font-display text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {language === "fr" ? "Mes Services" : "My Services"}
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-xl p-8 text-center relative border transition-all duration-300 hover:-translate-y-1 ${
              isDark
                ? "bg-[var(--asphalt)] border-white/10 hover:border-white/20"
                : "bg-[var(--paddock)] border-gray-200 hover:border-gray-300"
            }`}
          >
            {/* Icon Circle */}
            <div
              className={`absolute -top-8 left-1/2 -translate-x-1/2 p-4 rounded-full border transition-all duration-300 ${
                isDark
                  ? "bg-[var(--panel-dark)] border-white/10"
                  : "bg-white border-gray-300 shadow-md"
              }`}
            >
              {service.icon}
            </div>

            {/* Content */}
            <h3
              className={`font-display mt-8 text-xl font-semibold transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {service.title}
            </h3>

            <p
              className={`mt-4 transition-colors duration-300 ${
                isDark ? "text-[var(--ink-muted)]" : "text-[var(--graphite-muted)]"
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    <SectorDivider />
    </>
  );
}

export default MyServices;
