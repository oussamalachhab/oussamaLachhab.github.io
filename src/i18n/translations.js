// Central FR / EN dictionary + nav route config.
// Each nav item defines the URL path (e.g. /Accueil) and the section id it scrolls to.

export const NAV_ITEMS = [
  { id: 'home', path: '/Accueil', num: '01', fr: 'Accueil', en: 'Home' },
  { id: 'about', path: '/A-propos', num: '02', fr: 'À propos', en: 'About' },
  { id: 'skills', path: '/Competences', num: '03', fr: 'Compétences', en: 'Skills' },
  { id: 'projects', path: '/Projets', num: '04', fr: 'Projets', en: 'Projects' },
  { id: 'journey', path: '/Parcours', num: '05', fr: 'Parcours', en: 'Journey' },
  { id: 'contact', path: '/Contact', num: '06', fr: 'Contact', en: 'Contact' },
]

export const translations = {
  header: {
    socialsLabel: { fr: 'Réseaux', en: 'Socials' },
    menu: { fr: 'Menu', en: 'Menu' },
    close: { fr: 'Fermer', en: 'Close' },
  },

  hero: {
    available: { fr: 'Disponible pour un PFE 2027', en: 'Available for a 2027 internship' },
    role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
    desc: {
      fr: "Je conçois des applications web complètes — interfaces React soignées, API REST robustes, authentification sécurisée et bases de données bien pensées. Actuellement en dernière année d'ingénierie, à la recherche d'un stage de fin d'études pour 2027.",
      en: "I build complete web applications — polished React interfaces, robust REST APIs, secure authentication and well-designed databases. Currently in my final year of engineering, looking for a final-year internship (PFE) for 2027.",
    },
    ctaProjects: { fr: 'Voir mes projets →', en: 'View my projects →' },
    ctaContact: { fr: 'Me contacter', en: 'Contact me' },
  },

  quote: {
    eyebrow: { fr: '⚡ Full stack, de bout en bout', en: '⚡ Full stack, end to end' },
    lineBefore: { fr: 'Je transforme des idées en ', en: 'I turn ideas into ' },
    accent: { fr: 'produits web fiables', en: 'reliable web products' },
    lineAfter: { fr: '.', en: '.' },
  },

  about: {
    badge: { fr: 'Profil & Parcours', en: 'Profile & Background' },
    title: { fr: 'À propos de moi', en: 'About me' },
    intro: {
      fr: "Développeur Full Stack passionné, entre React.js, Laravel, Node.js et .NET — avec un vrai goût pour les architectures propres et les interfaces soignées.",
      en: "Passionate Full Stack Developer working across React.js, Laravel, Node.js and .NET — with a real taste for clean architecture and polished interfaces.",
    },
    p1: {
      fr: "Développeur Full Stack passionné, spécialisé en React.js, Laravel, Node.js et .NET. Expérience pratique dans la conception d'applications web, les API REST, l'authentification JWT et les bases de données relationnelles.",
      en: "Passionate Full Stack Developer, specialized in React.js, Laravel, Node.js and .NET. Hands-on experience designing web applications, REST APIs, JWT authentication and relational databases.",
    },
    p2: {
      fr: "Habitué au travail en équipe et aux méthodologies Agile, je recherche un Stage de Fin d'Études (PFE) en 2027 afin de mettre mes compétences techniques au service d'un projet concret et à fort impact.",
      en: "Used to working in a team with Agile methodologies, I am looking for a final-year internship (PFE) in 2027 to put my technical skills to work on a concrete, high-impact project.",
    },
    focusLabel: { fr: 'Domaines de focus', en: 'Focus areas' },
    focusAreas: {
      fr: ['</> Frontend Development', '⚙ Backend Development', '🗄 Bases de données', '🔗 API REST & JWT', '🧩 UML & Architecture', '🔁 Agile (Scrum/Kanban)'],
      en: ['</> Frontend Development', '⚙ Backend Development', '🗄 Databases', '🔗 REST APIs & JWT', '🧩 UML & Architecture', '🔁 Agile (Scrum/Kanban)'],
    },
    stats: {
      fr: [
        { icon: '🎓', num: '2027', sub: 'Objectif PFE — SUPMTI' },
        { icon: '💼', num: '2 stages', sub: 'Maghreb Arab Press' },
        { icon: '🧱', num: '6 projets', sub: 'Persos & académiques' },
        { icon: '🛡', num: 'Clean Code', sub: 'Architecture soignée' },
      ],
      en: [
        { icon: '🎓', num: '2027', sub: 'PFE target — SUPMTI' },
        { icon: '💼', num: '2 internships', sub: 'Maghreb Arab Press' },
        { icon: '🧱', num: '6 projects', sub: 'Personal & academic' },
        { icon: '🛡', num: 'Clean Code', sub: 'Careful architecture' },
      ],
    },
  },

  skills: {
    badge: { fr: 'Capacités techniques', en: 'Technical capabilities' },
    title: { fr: 'Compétences & Technologies', en: 'Skills & Technologies' },
    desc: {
      fr: "Une boîte à outils complète : développement web moderne, applications full stack, bases de données et outils de travail en équipe.",
      en: "A complete toolkit: modern web development, full stack applications, databases and team collaboration tools.",
    },
    advanced: { fr: 'Avancé', en: 'Advanced' },
    intermediate: { fr: 'Intermédiaire', en: 'Intermediate' },
    categories: {
      fr: [
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
      ],
      en: [
        {
          title: 'Frontend Development',
          subtitle: 'Modern, reactive and polished interfaces',
          items: [
            { icon: '</>', name: 'HTML5 / CSS3', level: 'Advanced' },
            { icon: 'JS', name: 'JavaScript (ES6+)', level: 'Advanced' },
            { icon: '⚛', name: 'React.js', level: 'Advanced' },
            { icon: '🎨', name: 'Tailwind CSS / Bootstrap', level: 'Advanced' },
          ],
        },
        {
          title: 'Backend & APIs',
          subtitle: 'Robust servers, clean and secure APIs',
          items: [
            { icon: '🐘', name: 'Laravel', level: 'Advanced' },
            { icon: '🟢', name: 'Node.js / Express.js', level: 'Advanced' },
            { icon: '◆', name: '.NET / ASP.NET MVC', level: 'Intermediate' },
            { icon: '🔗', name: 'REST APIs / JWT', level: 'Advanced' },
          ],
        },
        {
          title: 'Databases',
          subtitle: 'Relational schemas, queries and modeling',
          items: [
            { icon: '🐬', name: 'MySQL', level: 'Advanced' },
            { icon: '🍃', name: 'MongoDB', level: 'Intermediate' },
            { icon: '🗃', name: 'SQL Server', level: 'Intermediate' },
            { icon: '💾', name: 'SQLite / Prisma', level: 'Intermediate' },
          ],
        },
        {
          title: 'Tools & Methodologies',
          subtitle: 'Version control, design and teamwork',
          items: [
            { icon: '⌥', name: 'Git / GitHub', level: 'Advanced' },
            { icon: '🧩', name: 'UML', level: 'Intermediate' },
            { icon: '🔁', name: 'Agile (Scrum / Kanban)', level: 'Advanced' },
            { icon: '🐧', name: 'Linux / WordPress', level: 'Intermediate' },
          ],
        },
      ],
    },
  },

  projects: {
    badge: { fr: 'Réalisations concrètes', en: 'Concrete work' },
    title: { fr: 'Projets phares', en: 'Featured projects' },
    desc: {
      fr: "Une sélection de projets personnels et académiques, du prototype à l'application déployée.",
      en: "A selection of personal and academic projects, from prototype to deployed application.",
    },
    seeDetail: { fr: 'Voir le détail →', en: 'See details →' },
    items: {
      fr: [
        { tag: 'Site web · Projet personnel', title: 'Key Partner', desc: 'Conception et réalisation complète du site web de Key Partner, un service de conciergerie pour particuliers — actuellement en ligne.', techs: ['HTML/CSS', 'JavaScript'], linkLabel: 'Voir le site en ligne →', href: 'https://key-partenair.com' },
        { tag: 'Full Stack Web', title: 'ExpireTrack', desc: "Application de gestion des abonnements avec rôles utilisateurs, authentification JWT et API RESTful — réalisée en stage chez Maghreb Arab Press.", techs: ['React.js', 'Tailwind', 'Node.js', 'Prisma', 'MySQL'], linkLabel: 'Voir le détail →', href: '#' },
        { tag: 'Web App', title: 'MotoTrack', desc: "Plateforme de gestion d'entretien moto : tableau de bord, rappels, suivi des coûts, diagnostic et carte des garages partenaires.", techs: ['Laravel', 'React.js', 'MySQL'], linkLabel: 'Voir le détail →', href: 'https://github.com/oussamalachhab/Mototrack' },
        { tag: "Projet d'équipe", title: 'FitnessTracker', desc: 'Application de suivi sportif et nutritionnel : authentification, tableau de bord statistique, journal alimentaire, objectifs et progression.', techs: ['ASP.NET MVC', 'Entity Framework', 'SQLite'], linkLabel: 'Voir le détail →', href: 'https://github.com/oussamalachhab/FitnessTracker' },
        { tag: 'Web App', title: 'AutoLoc', desc: 'Application de location de voitures avec gestion des disponibilités et des réservations selon les dates choisies.', techs: ['Laravel', 'React.js', 'MySQL'], linkLabel: 'Voir le détail →', href: 'https://github.com/oussamalachhab/AutoLoc' },
        { tag: 'E-commerce', title: 'OuCars', desc: "Marketplace e-commerce pour l'achat de voitures entre particuliers, pensée pour une navigation simple et rapide.", techs: ['JavaScript'], linkLabel: 'Voir le détail →', href: 'https://github.com/oussamalachhab/OuCars' },
      ],
      en: [
        { tag: 'Website · Personal project', title: 'Key Partner', desc: 'Full design and build of the Key Partner website, a concierge service for individuals — currently live.', techs: ['HTML/CSS', 'JavaScript'], linkLabel: 'View live site →', href: 'https://key-partenair.com' },
        { tag: 'Full Stack Web', title: 'ExpireTrack', desc: "Subscription management app with user roles, JWT authentication and a RESTful API — built during an internship at Maghreb Arab Press.", techs: ['React.js', 'Tailwind', 'Node.js', 'Prisma', 'MySQL'], linkLabel: 'See details →', href: '#' },
        { tag: 'Web App', title: 'MotoTrack', desc: "Motorcycle maintenance management platform: dashboard, reminders, cost tracking, diagnostics and a map of partner garages.", techs: ['Laravel', 'React.js', 'MySQL'], linkLabel: 'See details →', href: 'https://github.com/oussamalachhab/Mototrack' },
        { tag: 'Team project', title: 'FitnessTracker', desc: 'Sports and nutrition tracking app: authentication, statistics dashboard, food journal, goals and progress.', techs: ['ASP.NET MVC', 'Entity Framework', 'SQLite'], linkLabel: 'See details →', href: 'https://github.com/oussamalachhab/FitnessTracker' },
        { tag: 'Web App', title: 'AutoLoc', desc: 'Car rental application with availability management and date-based bookings.', techs: ['Laravel', 'React.js', 'MySQL'], linkLabel: 'See details →', href: 'https://github.com/oussamalachhab/AutoLoc' },
        { tag: 'E-commerce', title: 'OuCars', desc: "E-commerce marketplace for buying cars between individuals, built for simple and fast browsing.", techs: ['JavaScript'], linkLabel: 'See details →', href: 'https://github.com/oussamalachhab/OuCars' },
      ],
    },
  },

  journey: {
    badge: { fr: 'Progression & jalons', en: 'Progress & milestones' },
    title: { fr: 'Mon parcours', en: 'My journey' },
    desc: {
      fr: "Formation, stages et étapes techniques qui ont construit mon profil de développeur full stack.",
      en: "Education, internships and technical milestones that shaped my full stack developer profile.",
    },
    items: {
      fr: [
        { badge: 'Actuel', cat: 'Formation — Focus', title: 'Ingénieur en Génie Informatique', subtitle: 'École SUPMTI, Rabat · 2025 — 2027 · Recherche PFE 2027', desc: "Dernière année d'ingénierie, option Ingénierie des Systèmes d'Information. Approfondissement de React.js, Node.js, Laravel et des architectures backend, avec un focus sur le code propre et les API bien conçues.", techs: ['React.js', 'Node.js', 'Laravel', '.NET', 'MySQL'] },
        { badge: 'Stage', cat: 'Expérience', title: 'Stagiaire Développeur Web Full Stack', subtitle: 'Maghreb Arab Press (MAP) · Avril — Juin 2025', desc: "Développement d'ExpireTrack, une application de gestion des abonnements. Interface avec React.js et Tailwind CSS, backend avec Node.js/Express, modélisation UML et base de données MySQL via Prisma, authentification JWT et gestion des rôles.", techs: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Prisma', 'JWT'] },
        { badge: 'Milestone', cat: 'Formation', title: 'Licence en Ingénierie des Systèmes Informatiques', subtitle: 'École SUPMTI, Rabat · 2024 — 2025', desc: "Consolidation des bases en ingénierie logicielle et systèmes d'information, en parallèle des premiers projets full stack personnels.", techs: ['Algorithmique', "Systèmes d'information", 'Bases de données'] },
        { badge: 'Stage', cat: 'Expérience', title: 'Stagiaire Développeur Web Full Stack', subtitle: 'Maghreb Arab Press (MAP) · Avril — Mai 2024', desc: "Participation au développement d'une plateforme e-commerce de journaux : backend sécurisé, intégration d'API pour la gestion des stocks et des commandes, fonctionnalités web en JavaScript.", techs: ['JavaScript', 'APIs', 'Backend sécurisé'] },
        { badge: 'Fondation', cat: 'Formation', title: 'Développeur Full Stack — Technicien Spécialisé', subtitle: 'Institut de Technologie Appliquée, Rabat · 2022 — 2024', desc: 'Formation technique intensive : fondamentaux du développement web, structures de données, POO et premiers projets full stack encadrés.', techs: ['HTML5', 'CSS3', 'JavaScript', 'POO', 'Git'] },
        { badge: 'Fondation', cat: 'Éducation', title: 'Baccalauréat en Sciences Physiques', subtitle: 'École Achbal Al Karaouine, Salé · 2022', desc: "Bases scientifiques solides en mathématiques et physique, point de départ vers l'ingénierie informatique.", techs: ['Mathématiques', 'Physique', 'Logique'] },
      ],
      en: [
        { badge: 'Current', cat: 'Education — Focus', title: 'Computer Engineering Degree', subtitle: 'SUPMTI School, Rabat · 2025 — 2027 · Looking for a 2027 PFE', desc: "Final year of engineering, Information Systems Engineering track. Deepening React.js, Node.js, Laravel and backend architectures, with a focus on clean code and well-designed APIs.", techs: ['React.js', 'Node.js', 'Laravel', '.NET', 'MySQL'] },
        { badge: 'Internship', cat: 'Experience', title: 'Full Stack Web Developer Intern', subtitle: 'Maghreb Arab Press (MAP) · April — June 2025', desc: "Built ExpireTrack, a subscription management application. Frontend with React.js and Tailwind CSS, backend with Node.js/Express, UML modeling and a MySQL database via Prisma, JWT authentication and role management.", techs: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Prisma', 'JWT'] },
        { badge: 'Milestone', cat: 'Education', title: "Bachelor's in Computer Systems Engineering", subtitle: 'SUPMTI School, Rabat · 2024 — 2025', desc: "Strengthened foundations in software engineering and information systems, alongside my first personal full stack projects.", techs: ['Algorithms', 'Information Systems', 'Databases'] },
        { badge: 'Internship', cat: 'Experience', title: 'Full Stack Web Developer Intern', subtitle: 'Maghreb Arab Press (MAP) · April — May 2024', desc: "Contributed to a newspaper e-commerce platform: secure backend, API integration for stock and order management, JavaScript web features.", techs: ['JavaScript', 'APIs', 'Secure backend'] },
        { badge: 'Foundation', cat: 'Education', title: 'Full Stack Developer — Specialized Technician', subtitle: 'Institut de Technologie Appliquée, Rabat · 2022 — 2024', desc: 'Intensive technical training: web development fundamentals, data structures, OOP and first supervised full stack projects.', techs: ['HTML5', 'CSS3', 'JavaScript', 'OOP', 'Git'] },
        { badge: 'Foundation', cat: 'Education', title: 'Baccalaureate in Physical Sciences', subtitle: 'Achbal Al Karaouine School, Salé · 2022', desc: "Solid scientific foundations in mathematics and physics, the starting point toward computer engineering.", techs: ['Mathematics', 'Physics', 'Logic'] },
      ],
    },
  },

  principles: {
    badge: { fr: 'Principes directeurs', en: 'Guiding principles' },
    title: { fr: 'Comment je construis', en: 'How I build' },
    desc: {
      fr: "Les convictions qui guident chaque ligne de code et chaque choix d'architecture.",
      en: "The convictions that guide every line of code and every architecture decision.",
    },
    items: {
      fr: [
        { num: '01', icon: '</>', title: 'Code propre', desc: 'Un code lisible, maintenable, avec une architecture claire et une séparation nette des responsabilités.', tag: 'Maintenabilité' },
        { num: '02', icon: '👤', title: "Utilisateur d'abord", desc: 'Des interfaces pensées autour des besoins réels, avec une navigation intuitive et sans friction.', tag: 'Expérience' },
        { num: '03', icon: '✦', title: 'Apprentissage continu', desc: 'Amélioration constante des compétences techniques, en veille sur les standards web et mobile.', tag: 'Progression' },
        { num: '04', icon: '◎', title: 'Construire avec un objectif', desc: 'Créer des solutions réellement utiles, scalables et pensées pour durer.', tag: 'Impact' },
      ],
      en: [
        { num: '01', icon: '</>', title: 'Clean code', desc: 'Readable, maintainable code, with a clear architecture and a clean separation of concerns.', tag: 'Maintainability' },
        { num: '02', icon: '👤', title: 'User first', desc: 'Interfaces designed around real needs, with intuitive, frictionless navigation.', tag: 'Experience' },
        { num: '03', icon: '✦', title: 'Continuous learning', desc: 'Constantly improving technical skills, staying current with web and mobile standards.', tag: 'Growth' },
        { num: '04', icon: '◎', title: 'Build with purpose', desc: 'Creating solutions that are genuinely useful, scalable and built to last.', tag: 'Impact' },
      ],
    },
  },

  certifications: {
    badge: { fr: 'Certifications & Langues', en: 'Certifications & Languages' },
    title: { fr: 'Formation continue', en: 'Continuous learning' },
    desc: { fr: 'Certifications complémentaires et compétences linguistiques.', en: 'Additional certifications and language skills.' },
    certs: {
      fr: [
        { icon: '🏅', title: 'Gestion de Projet Agile', source: 'HP LIFE' },
        { icon: '📊', title: 'Science des Données & Analytique', source: 'HP LIFE' },
        { icon: '🧭', title: 'Leadership Efficace', source: 'HP LIFE' },
        { icon: '💻', title: 'Front-End Development Libraries', source: 'freeCodeCamp' },
        { icon: '🧪', title: 'Test Automation avec Selenium', source: 'Orange Digital Center' },
      ],
      en: [
        { icon: '🏅', title: 'Agile Project Management', source: 'HP LIFE' },
        { icon: '📊', title: 'Data Science & Analytics', source: 'HP LIFE' },
        { icon: '🧭', title: 'Effective Leadership', source: 'HP LIFE' },
        { icon: '💻', title: 'Front-End Development Libraries', source: 'freeCodeCamp' },
        { icon: '🧪', title: 'Test Automation with Selenium', source: 'Orange Digital Center' },
      ],
    },
    languages: {
      fr: [
        { name: 'Arabe', level: 100 },
        { name: 'Français', level: 90 },
        { name: 'Anglais', level: 60 },
      ],
      en: [
        { name: 'Arabic', level: 100 },
        { name: 'French', level: 90 },
        { name: 'English', level: 60 },
      ],
    },
  },

  contact: {
    badge: { fr: 'Restons en contact', en: "Let's stay in touch" },
    title: { fr: 'Construisons quelque chose ensemble', en: "Let's build something together" },
    subtitle: {
      fr: 'Une opportunité de stage, un projet ou juste une question technique ? Écris-moi.',
      en: 'A internship opportunity, a project, or just a technical question? Get in touch.',
    },
    intro: {
      fr: "Je suis toujours partant pour discuter de stages, de projets full stack, d'architecture logicielle ou de collaborations techniques.",
      en: "I'm always up for discussing internships, full stack projects, software architecture or technical collaborations.",
    },
    email: { fr: 'Email', en: 'Email' },
    phone: { fr: 'Téléphone / WhatsApp', en: 'Phone / WhatsApp' },
    formName: { fr: 'Votre nom', en: 'Your name' },
    formNamePh: { fr: 'ex. Sara El Amrani', en: 'e.g. Sara El Amrani' },
    formEmail: { fr: 'Votre email', en: 'Your email' },
    formEmailPh: { fr: 'sara@entreprise.com', en: 'sara@company.com' },
    formSubject: { fr: 'Sujet', en: 'Subject' },
    formSubjectPh: { fr: 'Opportunité de stage / Projet', en: 'Internship opportunity / Project' },
    formMessage: { fr: 'Message', en: 'Message' },
    formMessagePh: { fr: 'Parlez-moi de votre projet, du contexte, des délais...', en: 'Tell me about your project, context, timeline...' },
    submitting: { fr: 'Envoi en cours...', en: 'Sending...' },
    submit: { fr: 'Envoyer le message →', en: 'Send message →' },
    success: { fr: '✓ Message envoyé avec succès !', en: '✓ Message sent successfully!' },
    error: { fr: '✕ Une erreur est survenue. Réessayez.', en: '✕ Something went wrong. Please try again.' },
  },

  footer: {
    role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
    rights: { fr: '© 2026 Oussama Lachhab. Tous droits réservés.', en: '© 2026 Oussama Lachhab. All rights reserved.' },
    backTop: { fr: 'Retour en haut ↑', en: 'Back to top ↑' },
  },
}
