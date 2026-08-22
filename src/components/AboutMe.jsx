import React from 'react'
import { FaLaravel, FaReact } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import img from '../assets/me.png'
import cvFr from '../assets/CV_FR.pdf'
import cvEn from '../assets/CV_EN.pdf'
import { SiJavascript, SiMysql } from 'react-icons/si'
import SectorDivider from './SectorDivider'

function AboutMe() {
    const { isDark } = useTheme();
    const { language } = useLanguage();

    // === TRANSLATIONS ===
    const translations = {
        en: {
            subtitle: "About me",
            title: "Who Am I",
            description: [
                "I'm LACHHAB Oussama, a passionate Full Stack Developer specializing in JavaScript, React.js, and Laravel. I've built e-commerce platforms and multi-user applications during my internship at Maghreb Arab Press, gaining hands-on experience in both front-end and back-end development.",
                "When I'm not coding, you'll find me following Formula 1, exploring new destinations, or geeking out over cars. I'm driven by curiosity, creativity, and the challenge of building impactful digital experiences."
            ],
            download: "Download CV",
            react: "ReactJs",
            js: "JavaScript",
            laravel: "Laravel",
            mysql: "MySQL",
            photoAlt: "Photo of LACHHAB Oussama",
        },
        fr: {
            subtitle: "À propos de moi",
            title: "Qui suis-je",
            description: [
                "Je suis LACHHAB Oussama, un développeur Full Stack passionné spécialisé en JavaScript, React.js et Laravel. J'ai construit des plateformes e-commerce et des applications multi-utilisateurs lors de mon stage à Maghreb Arab Press, acquérant une solide expérience pratique en développement front-end et back-end.",
                "En dehors du code, je suis passionné de Formule 1, d'exploration de nouvelles destinations et d'automobiles. Ma curiosité et ma créativité me poussent à créer des expériences numériques impactantes."
            ],
            download: "Télécharger le CV",
            react: "ReactJs",
            js: "JavaScript",
            laravel: "Laravel",
            mysql: "MySQL",
            photoAlt: "Photo de LACHHAB Oussama",
        }
    };

    const t = translations[language];
    const cv = language === 'fr' ? cvFr : cvEn;

    return (
        <>
        <section className={`py-16 px-8 flex flex-col md:flex-row items-center gap-12 min-h-screen justify-center transition-all duration-500 ${
            isDark 
                ? 'bg-[var(--asphalt)] text-[var(--ink)]' 
                : 'bg-[var(--paddock)] text-[var(--graphite)]'
        }`}>
            {/* Image Section */}
            <div className={`w-full md:w-1/2 max-w-md border rounded-lg flex items-center justify-center p-4 transition-all duration-300 ${
                isDark 
                    ? 'bg-[var(--panel-dark)] border-white/10 shadow-[0_0_30px_-10px_rgba(225,6,0,0.35)]' 
                    : 'bg-white border-black/5 shadow-[0_0_30px_-10px_rgba(225,6,0,0.2)]'
            }`}>
                <img
                    src={img}
                    alt={t.photoAlt}
                    loading="lazy"
                    className="w-full h-auto object-cover rounded-md"
                />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2">
                <p className={`font-mono-data text-xs uppercase tracking-[0.2em] mb-3 transition-colors duration-300 text-[var(--race-red)]`}>
                    // {t.subtitle}
                </p>
                
                <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                }`}>
                    {t.title}
                </h2>
                
                {t.description.map((paragraph, i) => (
                    <p
                        key={i}
                        className={`mb-4 last:mb-6 leading-relaxed transition-colors duration-300 ${
                            isDark ? 'text-[var(--ink-muted)]' : 'text-[var(--graphite-muted)]'
                        }`}
                    >
                        {paragraph}
                    </p>
                ))}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-4 mb-6 font-mono-data text-sm">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
                        isDark 
                            ? 'bg-[var(--panel-dark)] text-white border border-white/10' 
                            : 'bg-white text-gray-800 border border-gray-200 shadow-md'
                    }`}>
                        <FaReact className="text-[var(--sector-green)]" /> {t.react}
                    </div>
                    
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
                        isDark 
                            ? 'bg-[var(--panel-dark)] text-white border border-white/10' 
                            : 'bg-white text-gray-800 border border-gray-200 shadow-md'
                    }`}>
                        <SiJavascript className="text-[var(--sector-purple)]" /> {t.js}
                    </div>
                    
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
                        isDark 
                            ? 'bg-[var(--panel-dark)] text-white border border-white/10' 
                            : 'bg-white text-gray-800 border border-gray-200 shadow-md'
                    }`}>
                        <FaLaravel className="text-[var(--race-red)]" /> {t.laravel}
                    </div>
                    
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
                        isDark 
                            ? 'bg-[var(--panel-dark)] text-white border border-white/10' 
                            : 'bg-white text-gray-800 border border-gray-200 shadow-md'
                    }`}>
                        <SiMysql className="text-[var(--sector-green)]" /> {t.mysql}
                    </div>
                </div>

                {/* Download CV Button */}
                <a
                    href={cv}
                    className="inline-block px-6 py-3 rounded-md font-display font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 bg-[var(--race-red)] text-white shadow-[0_4px_20px_-4px_rgba(225,6,0,0.6)] hover:shadow-[0_6px_24px_-4px_rgba(225,6,0,0.8)]"
                    download
                >
                    {t.download}
                </a>
            </div>
        </section>
        <SectorDivider />
        </>
    )
}

export default AboutMe
