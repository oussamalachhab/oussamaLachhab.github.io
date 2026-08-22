import React, { useState } from "react";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaUser,
    FaBook,
    FaBriefcase,
    FaLanguage,
    FaTools,
    FaCertificate,
    FaProjectDiagram
} from "react-icons/fa";
import img from '../assets/me.png'
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import SectorDivider from "./SectorDivider";

function Resume() {
    const { isDark } = useTheme();
    const { language } = useLanguage();

    

    return (
        <>
        <section className={`flex justify-center py-10 px-4 md:px-8 transition-all duration-500 ${isDark
            ? 'bg-[var(--asphalt)] text-[var(--ink)]'
            : 'bg-[var(--paddock)] text-[var(--graphite)]'
            }`}>

            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">

                {/* ==== LEFT SIDE ==== */}
                <aside className={`w-full md:w-1/4 rounded-lg p-6 flex flex-col items-center shadow-lg transition-all duration-500 ${isDark
                    ? 'bg-[var(--panel-dark)]'
                    : 'bg-white border border-black/5'
                    }`}>
                    {/* Profile Photo */}
                    <div className={`w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden border-8 transition-all duration-500 ${isDark
                        ? 'bg-[var(--panel-dark)] shadow-[0_0_20px_-4px_rgba(225,6,0,0.5)] border-[var(--race-red)]'
                        : 'bg-gray-100 shadow-[0_0_20px_-4px_rgba(225,6,0,0.3)] border-[var(--race-red)]'
                        }`}>
                        <img src={img} alt={language === 'fr' ? 'Photo de LACHHAB Oussama' : 'Photo of LACHHAB Oussama'} loading="lazy" className="w-full h-full object-cover" />
                    </div>

                    {/* Name */}
                    <h1 className="font-display mt-2 text-2xl font-bold">LACHHAB Oussama</h1>
                    <p className={`text-sm px-3 py-1 rounded mt-2 transition-all duration-500 ${isDark
                        ? 'bg-white/10 font-mono-data'
                        : 'bg-[var(--graphite)] text-white font-mono-data'
                        }`}>
                        {language === "fr" ? "Développeur Full Stack" : "Full Stack Developer"}
                    </p>
                    <p className="font-mono-data text-xs uppercase tracking-wider mt-2 text-[var(--race-red)] text-center">
                        {language === "fr" ? "Recherche Stage de Fin d'Études (PFE) — 2027" : "Seeking Final-Year Internship (PFE) — 2027"}
                    </p>

                    {/* Contact Info */}
                    <div className="mt-8 w-full space-y-6 text-sm">
                        {/* Email */}
                        <div>
                            <div className="flex items-center gap-3 text-gray-500 text-xs font-semibold tracking-widest">
                                <FaEnvelope className="text-[var(--race-red)] text-base" /> E-MAIL :
                            </div>
                            <p className={`${isDark ? 'text-white' : 'text-black'}`}>lachhab.oussama264@gmail.com</p>
                        </div>
                        <hr className="border-gray-600" />

                        {/* Phone */}
                        <div>
                            <div className="flex items-center gap-3 text-gray-500 text-xs font-semibold tracking-widest">
                                <FaPhone className="text-[var(--race-red)] text-base" /> {language === "fr" ? "TÉLÉPHONE :" : "PHONE :"}
                            </div>
                            <p className={`${isDark ? 'text-white' : 'text-black'}`}>+212 6 84 00 12 92</p>
                        </div>
                        <hr className="border-gray-600" />

                        {/* Address */}
                        <div>
                            <div className="flex items-center gap-3 text-gray-500 text-xs font-semibold tracking-widest">
                                <FaMapMarkerAlt className="text-[var(--race-red)] text-base" /> {language === "fr" ? "ADRESSE :" : "ADDRESS :"}
                            </div>
                            <p className={`${isDark ? 'text-white' : 'text-black'}`}>Salé, Morocco</p>
                        </div>
                    </div>
                </aside>

                {/* ==== RIGHT SIDE ==== */}
                <main className={`w-full md:flex-1 rounded-lg p-6 md:p-8 shadow-lg transition-all duration-500 ${isDark ? 'bg-[var(--panel-dark)]' : 'bg-white border border-black/5'}`}>
                    {/* Resume Title */}
                    <div className="mb-6">
                        <h1 className={`font-display text-white text-3xl font-bold px-8 py-3 inline-block rounded-tr-3xl rounded-bl-3xl shadow-lg ${isDark
                            ? 'bg-[var(--race-red)]'
                            : 'bg-[var(--race-red)]'
                            }`}>
                            {language === "fr" ? "Curriculum Vitae" : "Resume"}
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* LEFT PART */}
                        <div className="space-y-8">
                            {/* About Me */}
                            <section>
                                <h2 className="flex items-center gap-2 font-display text-[var(--race-red)] text-xl font-semibold">
                                    <FaUser /> {language === "fr" ? "À propos de moi" : "About Me"}
                                </h2>
                                <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {language === "fr"
                                        ? "Développeur Full Stack passionné, spécialisé en React.js, Laravel, Node.js et .NET. Expérimenté dans la création d'applications web sécurisées avec authentification JWT, API REST et bases de données relationnelles. À l'aise en méthodologie Agile et motivé à rejoindre une équipe innovante."
                                        : "Passionate Full Stack Developer, specialized in React.js, Laravel, Node.js and .NET. Experienced in building secure web applications with JWT authentication, REST APIs, and relational databases. Comfortable working in Agile methodology and motivated to join an innovative team."}
                                </p>
                            </section>

                            {/* Experience */}
                            <section>
                                <h2 className="flex items-center gap-2 font-display text-[var(--race-red)] text-xl font-semibold">
                                    <FaBriefcase /> {language === "fr" ? "Expérience Professionnelle" : "Professional Experience"}
                                </h2>
                                <div className="mt-2 space-y-4 text-sm">
                                    <div>
                                        <p className="font-semibold">{language === "fr" ? "Stagiaire Développeur Web Full Stack" : "Full Stack Web Developer Intern"} — Maghreb Arab Press (MAP)</p>
                                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{language === "fr" ? "Avril 2025 – Juin 2025" : "April 2025 – June 2025"}</p>
                                        <ul className={`mt-1 space-y-1 list-disc list-inside leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {(language === "fr"
                                                ? [
                                                    "Développement d'ExpireTrack, une application web de gestion des abonnements.",
                                                    "Conception de l'interface utilisateur avec React.js et Tailwind CSS.",
                                                    "Développement du backend avec Node.js et Express.js.",
                                                    "Modélisation UML et conception de la base de données MySQL avec Prisma.",
                                                    "Mise en place de l'authentification JWT et de la gestion des rôles utilisateurs.",
                                                ]
                                                : [
                                                    "Development of ExpireTrack, a subscription management web application.",
                                                    "Designed the user interface with React.js and Tailwind CSS.",
                                                    "Developed the backend with Node.js and Express.js.",
                                                    "UML modeling and MySQL database design with Prisma.",
                                                    "Implemented JWT authentication and user role management.",
                                                ]
                                            ).map((line) => <li key={line}>{line}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-semibold">{language === "fr" ? "Stagiaire Développeur Web Full Stack" : "Full Stack Web Developer Intern"} — Maghreb Arab Press (MAP)</p>
                                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{language === "fr" ? "Avril 2024 – Mai 2024" : "April 2024 – May 2024"}</p>
                                        <ul className={`mt-1 space-y-1 list-disc list-inside leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {(language === "fr"
                                                ? [
                                                    "Participation au développement d'une plateforme e-commerce de journaux.",
                                                    "Conception et développement d'un backend sécurisé.",
                                                    "Intégration d'APIs pour la gestion des stocks et des commandes.",
                                                    "Développement de fonctionnalités web en JavaScript.",
                                                    "Participation aux différentes étapes du cycle de développement Full Stack.",
                                                ]
                                                : [
                                                    "Took part in developing a newspaper e-commerce platform.",
                                                    "Designed and developed a secure backend.",
                                                    "Integrated APIs for stock and order management.",
                                                    "Developed web features in JavaScript.",
                                                    "Participated in the various stages of the Full Stack development cycle.",
                                                ]
                                            ).map((line) => <li key={line}>{line}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Education */}
                            <section>
                                <h2 className="flex items-center gap-2 font-display text-[var(--race-red)] text-xl font-semibold">
                                    <FaBook /> {language === "fr" ? "Formation Académique" : "Academic Background"}
                                </h2>
                                <ul className="mt-2 space-y-2 text-sm">
                                    <li>
                                        <span className="font-semibold"> - {language === "fr" ? "Ingénieur en Génie Informatique, option Ingénierie des Systèmes d'Information" : "Engineering Degree in Computer Science, Information Systems Engineering track"}</span> - SUPMTI, Rabat <br />
                                        <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2025 – 2027</span><br />
                                        <span className="text-[var(--race-red)] text-xs font-mono-data uppercase tracking-wide">{language === "fr" ? "Dernière année — Recherche PFE 2027" : "Final year — Seeking PFE 2027"}</span>
                                    </li>
                                    <li>
                                        <span className="font-semibold"> - {language === "fr" ? "Licence en Ingénierie des Systèmes Informatiques" : "Bachelor's Degree in Information Systems Engineering"}</span> - SUPMTI, Rabat <br />
                                        <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2024 – 2025</span>
                                    </li>
                                    <li>
                                        <span className="font-semibold"> - {language === "fr" ? "Développeur Full Stack – Technicien Spécialisé" : "Full Stack Developer – Specialized Technician"}</span> - {language === "fr" ? "Institut de Technologie Appliquée Spécialisation, Rabat" : "Institut de Technologie Appliquée Spécialisation, Rabat"} <br />
                                        <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2022 – 2024</span>
                                    </li>
                                    <li>
                                        <span className="font-semibold"> - {language === "fr" ? "Baccalauréat en Sciences Physiques" : "Baccalaureate in Physical Sciences"}</span> - {language === "fr" ? "École Achbal Al Karaouine, Salé" : "Achbal Al Karaouine School, Salé"} <br />
                                        <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2022</span>
                                    </li>
                                </ul>
                            </section>

                            {/* Projects */}
                            <section>
                                <h2 className="flex items-center gap-2 font-display text-[var(--race-red)] text-xl font-semibold">
                                    <FaProjectDiagram /> {language === "fr" ? "Projets" : "Projects"}
                                </h2>
                                <ul className="mt-2 space-y-2 text-sm list-disc list-inside">
                                    <li><b>Key Partner</b> — {language === "fr" ? "Site web, projet personnel" : "Website, personal project"} - {language === "fr" ? "Site de conciergerie pour particuliers, en ligne sur" : "Concierge service website for individuals, live at"} key-partenair.com</li>
                                    <li><b>MotoTrack</b> — {language === "fr" ? "Gestion d'entretien moto" : "Motorcycle maintenance management"} - Laravel, React.js, MySQL</li>
                                    <li><b>FitnessTracker</b> — {language === "fr" ? "Suivi sportif et nutritionnel" : "Fitness & nutrition tracking"} - ASP.NET MVC, Entity Framework, SQLite</li>
                                    <li><b>ExpireTrack</b> — {language === "fr" ? "Gestion des abonnements" : "Subscription management"} - React.js, Tailwind CSS, Node.js, Express.js, MySQL, Prisma, JWT</li>
                                    <li><b>AutoLoc</b> — {language === "fr" ? "Plateforme de location de voitures" : "Car rental platform"} - Laravel, React.js, MySQL</li>
                                    <li><b>OuCars</b> — {language === "fr" ? "Marketplace e-commerce pour l'achat de voitures" : "E-commerce marketplace for buying cars"} - JavaScript</li>
                                </ul>
                            </section>
                        </div>

                        {/* RIGHT PART */}
                        <div className="space-y-8">
                            {/* Skills */}
                            <section>
                                <h2 className="flex items-center gap-2 font-display text-[var(--race-red)] text-xl font-semibold">
                                    <FaTools /> {language === "fr" ? "Compétences" : "Skills"}
                                </h2>
                                <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                                    <li><b>{language === "fr" ? "Langages" : "Languages"}:</b> JavaScript, Python, HTML, CSS, SQL, C, Java, XML</li>
                                    <li><b>{language === "fr" ? "Frameworks" : "Frameworks"}:</b> React.js, Express.js, Laravel, Bootstrap, Tailwind CSS, J2EE, .NET Framework, ASP.NET MVC, Entity Framework</li>
                                    <li><b>{language === "fr" ? "Bases de données" : "Databases"}:</b> MySQL, MongoDB, SQL Server, SQLite</li>
                                    <li><b>{language === "fr" ? "Outils" : "Tools"}:</b> Git, GitHub, Linux, WordPress, UML</li>
                                    <li><b>{language === "fr" ? "Méthodologies" : "Methodologies"}:</b> Agile (Scrum, Kanban)</li>
                                    <li><b>{language === "fr" ? "Réseaux" : "Networking"}:</b> {language === "fr" ? "Fondamentaux TCP/IP, réseaux de base" : "TCP/IP fundamentals, basic networking"}</li>
                                </ul>
                            </section>

                            {/* Certificates */}
                            <section>
                                <h2 className="flex items-center gap-2 font-display text-[var(--race-red)] text-xl font-semibold">
                                    <FaCertificate /> {language === "fr" ? "Certificats" : "Certificates"}
                                </h2>
                                <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                                    <li>{language === "fr" ? "Gestion de Projet Agile" : "Agile Project Management"} – HP LIFE</li>
                                    <li>{language === "fr" ? "Science des Données & Analytique" : "Data Science & Analytics"} – HP LIFE</li>
                                    <li>{language === "fr" ? "Leadership Efficace" : "Effective Leadership"} – HP LIFE</li>
                                    <li>Front-End Development Libraries – FreeCodeCamp</li>
                                    <li>{language === "fr" ? "Test Automation avec Selenium" : "Test Automation with Selenium"} – Orange Digital Centre</li>
                                </ul>
                            </section>

                            {/* Languages */}
                            <section>
                                <h2 className="flex items-center gap-2 font-display text-[var(--race-red)] text-xl font-semibold">
                                    <FaLanguage /> {language === "fr" ? "Langues" : "Languages"}
                                </h2>
                                <ul className="mt-2 space-y-1 text-sm">
                                    {(language === "fr"
                                        ? ["Arabe — Langue maternelle", "Français — Courant", "Anglais — Intermédiaire"]
                                        : ["Arabic — Native", "French — Fluent", "English — Intermediate"]
                                    ).map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            {/* GitHub */}
                            <section>
                                <h2 className="flex items-center gap-2 font-display text-[var(--race-red)] text-xl font-semibold">
                                    <FaGithub /> GitHub
                                </h2>
                                <a
                                    href="https://github.com/oussamalachhab"
                                    className={`hover:underline text-base ${isDark ? 'text-white' : 'text-black'}`}
                                >
                                    github.com/oussamalachhab
                                </a>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </section>
        <SectorDivider />
        </>
    );
}

export default Resume;
