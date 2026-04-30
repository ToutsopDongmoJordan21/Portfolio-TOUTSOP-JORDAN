import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getProfile() {
    return {
      name: 'Jordan Toutsop Dongmo',
      title: 'Ingénieur en Génie Logicielle',
      subtitle: 'Full Stack Developer & Network Administrator',
      description: 'Ingénieur logiciel axé sur les résultats avec plus de six ans d\'expérience dans le développement full stack. Maîtrise de plusieurs langages et technologies de programmation.',
      email: 'jordantoutsop472@gmail.com',
      phone1: '(+237) 681409045',
      phone2: '(+237) 699028439',
      location: 'Yaoundé / Douala, Cameroun',
      github: 'https://github.com/ToutsopDongmoJordan21',
      linkedin: 'https://www.linkedin.com/in/jordan-toutsop-6b2b731a1/',
      photoUrl: 'assets/images/jordan.jpg'
    };
  }

  getSkills() {
    return [
      { name: 'Angular / Angular JS', level: 92, category: 'Frontend' },
      { name: 'HTML5 / CSS3 / SCSS', level: 95, category: 'Frontend' },
      { name: 'TypeScript / JavaScript', level: 90, category: 'Frontend' },
      { name: 'Node.js', level: 85, category: 'Backend' },
      { name: 'Java / SpringBoot', level: 78, category: 'Backend' },
      { name: 'PHP / Firebase', level: 75, category: 'Backend' },
      { name: 'Python / TensorFlow', level: 72, category: 'IA & Data' },
      { name: 'SQL / Bases de données', level: 82, category: 'Backend' },
      { name: 'AWS / DevOps', level: 68, category: 'Cloud' },
      { name: 'Réseau / CISCO', level: 80, category: 'Réseau' },
      { name: 'Windows Server / Linux', level: 78, category: 'Réseau' },
      { name: 'Windev', level: 70, category: 'Desktop' },
    ];
  }

  getSoftSkills() {
    return [
      { name: 'Résolution de problèmes', icon: 'fas fa-puzzle-piece' },
      { name: 'Communication', icon: 'fas fa-comments' },
      { name: 'Structure des données', icon: 'fas fa-database' },
      { name: 'Algorithmes', icon: 'fas fa-code-branch' },
      { name: 'Conception ', icon: 'fas fa-object-group' },
      { name: 'Leadership', icon: 'fas fa-crown' },
      { name: 'Organisé et rigoureux', icon: 'fas fa-tasks' },
      { name: 'Créatif et curieux', icon: 'fas fa-lightbulb' },
      { name: 'Orienté business', icon: 'fas fa-shield-alt' },
      { name: 'Gestion du temps', icon: 'fas fa-clock' },
    ];
  }

  getExperiences() {
    return [
      {
        id: 1,
        company: 'G-STONES RESSOURCES SA',
        role: 'Informaticien Réseau, Développement & Innovation',
        period: '2026 - Now',
        type: 'current',
        description: 'Déploiement d\'une nouvelle architecture réseau sur un site minier pour connecter une centaine d\'utilisateurs. Développement de solutions technologiques innovantes pour moderniser et automatiser les processus du site. Intervention sur les équipements réseau, maintenance des machines de production et gestion du pont bascule.',
        tasks: [
          'Conception et déploiement de l\'architecture réseau du site minier (LAN, VLANs, switching CISCO)',
          'Configuration des équipements réseau : switchs CISCO, routeurs MikroTik, téléphones IP',
          'Développement de nouvelles solutions technologiques adaptées aux besoins du site minier',
          'Numérisation et automatisation des processus métier internes',
          'Maintenance et support des laptops et postes utilisateurs (helpdesk sur site)',
          'Maintenance des machines de production (diagnostic, interventions de premier niveau)',
          'Gestion et supervision des serveurs (Windows Server, Active Directory, Linux)',
          'Gestion des droits d\'accès, politiques de sécurité et authentification',
          'Agent pont bascule : supervision et test du pesage des camions par conducteur',
          'Vérification quotidienne des services critiques : SAGE, VoIP, NAS, VPN, Domaine',
        ],
        technologies: [
          'Cisco IOS', 'MikroTik / Winbox', 'Windows Server', 'Active Directory',
          'Linux', 'Angular', 'Node.js', 'Sage', 'Tera Term', 'VoIP', 'NAS'
        ],
        color: '#E07B39'
      },
      {
        id: 2,
        company: 'Biopharma SA',
        role: 'Informaticien, Administrateur Réseau & Développeur',
        period: '2025 - 2026',
        type: 'past',
        description: 'Collaboration transversale avec les départements métier pour l\'amélioration de l\'efficacité opérationnelle et l\'innovation technologique. Développement d\'une GED custom et numérisation complète du processus de demande d\'achat. Supervision de l\'infrastructure réseau et renforcement de la sécurité du système d\'information.',
        tasks: [
          'Développement d\'une GED (Gestion Électronique de Documents) custom avec Angular & Node.js',
          'Numérisation du processus de demande d\'achat et de production',
          'Conception et modélisation de la base de données (MySQL/PostgreSQL)',
          'Configuration et déploiement des équipements réseau (switchs CISCO, imprimantes, téléphones IP)',
          'Supervision et monitoring de l\'infrastructure réseau en temps réel',
          'Mise en place et maintien des politiques de sécurité réseau & firewall',
          'Configuration et maintien des serveurs (Windows Server, Linux, Active Directory)',
          'Gestion des droits d\'accès, GPO et authentification des utilisateurs',
          'Vérification quotidienne des services critiques : SAGE, VoIP, NAS, VPN, Domaine',
          'Formation des utilisateurs aux nouveaux outils et bonnes pratiques informatiques',
          'Assistance technique aux utilisateurs (Helpdesk niveau 1 & 2)',
          'Gestion du versioning et collaboration via Git / GitHub',
        ],
        technologies: [
          'Angular', 'Node.js', 'MySQL', 'PostgreSQL', 'Git / GitHub',
          'Cisco IOS', 'MikroTik / Winbox', 'Windows Server', 'Active Directory',
          'Linux', 'Sage', 'Tera Term', 'VoIP', 'NAS'
        ],
        color: '#0EA5E9'
      },
      {
        id: 3,
        company: 'Amla Cameroun / Intelcia',
        role: 'Développeur Web & Mobile et Conseiller Technique',
        period: '2024 - 2025',
        type: 'past',
        description: 'Conception, développement et maintenance d\'applications web et mobiles (iOS, Android) pour des clients métier et grand public. Intégration de solutions de paiement mobile africain, déploiement en production et accompagnement technique des clients tout au long du cycle de vie des projets.',
        tasks: [
          'Développement d\'applications web et mobiles iOS/Android (métier & grand public)',
          'Création d\'interfaces utilisateur responsives et intuitives',
          'Développement et intégration d\'API RESTful et services web',
          'Intégration de solutions de paiement mobile (MTN Mobile Money, Orange Money)',
          'Gestion des bases de données et optimisation des requêtes (MySQL, MongoDB)',
          'Intégration de Firebase (authentification, notifications push, Firestore)',
          'Tests, débogage et assurance qualité (QA) des applications',
          'Déploiement et mise en production des applications web et mobiles',
          'Gestion de projet et suivi client : recueil des besoins, livrables, jalons',
          'Versioning et collaboration en équipe via Git / GitHub',
          'Support technique premier et deuxième niveau (Helpdesk)',
          'Formation des utilisateurs sur les nouveaux outils déployés',
        ],
        technologies: [
          'Angular', 'Node.js', 'Java', 'Windev',
          'MySQL', 'MongoDB', 'Firebase',
          'Git / GitHub', 'AnyDesk'
        ],
        color: '#3B82F6'
      },
      {
        id: 4,
        company: 'Floraison',
        role: 'Développeur Front-end',
        period: '2022 - 2023',
        type: 'past',
        description: 'Développement d\'applications web dynamiques et sites e-commerce avec Angular JS. Création de composants réutilisables, intégration d\'API REST et optimisation des performances front-end.',
        tasks: [
          'Développement de sites vitrines et applications e-commerce avec Angular JS',
          'Création de composants, directives et services réutilisables',
          'Implémentation du data-binding bidirectionnel et gestion d\'état',
          'Consommation d\'API REST et GraphQL',
          'Implémentation de l\'authentification et gestion des tokens JWT',
          'Intégration de passerelles de paiement et tunnels de conversion e-commerce',
          'Optimisation des performances (lazy loading, tree shaking, Webpack)',
          'Mise en place du responsive design et compatibilité cross-browser',
          'Tests unitaires et d\'intégration avec Jasmine / Karma',
          'Versioning et collaboration via Git (branches, PR, code review)',
          'Déploiement et mise en production des applications web',
        ],
        technologies: [
          'Angular JS', 'TypeScript', 'RxJS',
          'HTML5', 'CSS3', 'Bootstrap',
          'PostgreSQL', 'MongoDB',
          'Docker', 'Webpack', 'Git'
        ],
        color: '#7C3AED'
      },
      {
        id: 5,
        company: 'Mobi-Tech SARL, AdvancedIT, Zepstra, Novazen',
        role: 'Développeur Full Stack & IA',
        period: '2018 - 2022',
        type: 'past',
        description: 'Conception et développement d\'applications full stack pour des clients variés. Développement de solutions d\'intelligence artificielle orientées recommandation, prédiction et automatisation de processus métier (RPA). Livraison en méthodologie Agile avec pipeline CI/CD.',
        tasks: [
          'Conception et développement d\'applications full stack (PHP, Angular, Spring Boot, Node.js)',
          'Développement de modèles de Machine Learning (recommandation & prédiction)',
          'Automatisation de processus métier via des solutions RPA en Python',
          'Analyse de données et visualisation avec Pandas et Scikit-learn',
          'Entraînement et déploiement de modèles TensorFlow en production',
          'Conteneurisation des applications avec Docker et orchestration Kubernetes',
          'Mise en place de pipelines CI/CD pour la livraison continue',
          'Conception et gestion de bases de données relationnelles et NoSQL (SQL, PostgreSQL, MongoDB)',
          'Déploiement et gestion d\'infrastructure cloud sur AWS',
          'Développement et exposition d\'API REST avec Spring Boot et Node.js',
          'Méthodologie Agile (Scrum) : sprints, backlog, retrospectives',
          'Assistance technique et résolution de problèmes matériels / logiciels',
        ],
        technologies: [
          'Python', 'TensorFlow', 'Scikit-learn', 'Pandas',
          'PHP', 'Angular 14', 'Spring Boot', 'Node.js',
          'SQL', 'PostgreSQL', 'MongoDB', 'Firebase',
          'Docker', 'Kubernetes', 'AWS', 'Git'
        ],
        color: '#10B981'
      }
    ];
  }

  getEducation() {
    return [
      {
        degree: 'Master en Génie Logiciel',
        school: 'Université de Buea',
        period: '2021 - 2024',
        description: 'Formation avancée en développement logiciel complexe, Intelligence Artificielle, gestion de projets et travail d\'équipe.'
      },
      {
        degree: 'Bachelor en Génie Logiciel',
        school: 'Université de Buea',
        period: '2017 - 2021',
        description: 'Fondements théoriques en programmation, bases de données, et intelligence artificielle pour les applications logicielles.'
      }
    ];
  }

  getProjects() {
    return [
      {
        name: 'Jonalepay',
        description: 'Plateforme de paiement en ligne sécurisée pour les transactions digitales.',
        url: 'https://jonalepay.net/accueil',
        tech: ['Angular', 'Node.js', 'Firebase'],
        icon: 'fas fa-credit-card'
      },
      {
        name: 'Check Tatoo',
        description: 'Plateforme de certification de conformité de ENEO, DGI, CAMWATER.',
        url: 'https://www.checktatoo.com/fr/',
        tech: ['WINDEV', 'WEBDEV', 'WinDev Mobile', 'HFSQL', 'ALM', 'Méthodes Agiles'],
        icon: 'fas fa-fingerprint'
      },
      {
        name: 'Iziway',
        description: 'Marketplace en ligne proposant smartphones, tablettes et électroménager avec livraison dans tout le Cameroun.',
        url: 'https://iziway.cm/',
        tech: ['Vue.js', 'Laravel', 'PostgreSQL'],
        icon: 'fas fa-mobile-alt'
      },
      {
        name: 'Djoolah',
        description: 'Site d\'achat et de vente en ligne avec large catalogue produits, livraison à domicile en moins de 24h.',
        url: 'https://djoolah.com/',
        tech: ['React', 'Node.js', 'Firebase'],
        icon: 'fas fa-box'
      },
      {
        name: 'Durrell Market',
        description: 'Marketplace multivendeurs : les PME camerounaises créent leur boutique en ligne en 10 minutes.',
        url: 'https://durrellmarket.com/',
        tech: ['PHP', 'Laravel', 'MySQL'],
        icon: 'fas fa-shop'
      },
      {
        name: 'ISNOV ERP',
        description: 'ERP de gestion intégrée africain : CRM, RH, comptabilité, production, BI. Conçu pour les PME/PMI camerounaises.',
        url: 'https://isnov.com/',
        tech: ['Java', 'Angular', 'PostgreSQL'],
        icon: 'fas fa-cogs'
      },
      {
        name: 'LocalHost Digital',
        description: 'Agence digitale basée à Douala proposant des solutions ERP, CRM et gestion commerciale pour PME camerounaises.',
        url: 'https://localhost-digital.com/',
        tech: ['WordPress', 'WooCommerce', 'PHP'],
        icon: 'fas fa-server'
      },
      {
        name: 'Mutations',
        description: 'Quotidien d\'information indépendant : actualités nationales, analyses politiques et économiques du Cameroun.',
        url: 'https://www.mutations.cm/',
        tech: ['Angular', 'Node.js', 'MySQL'],
        icon: 'fas fa-pen-nib'
      },
      {
        name: 'Investir au Cameroun',
        description: 'Portail d\'actualités économiques et financières : opportunités d\'investissement, marchés publics et business au Cameroun.',
        url: 'https://www.investiraucameroun.com/',
        tech: ['Angular', 'PHP', 'PostgreSQL'],
        icon: 'fas fa-chart-bar'
      }
    ];
  }

  getTestimonials() {
    return [
      {
        name: 'SOP DEFFO Lionel Landry',
        role: 'Coordinator, Dept of Computer Engineering',
        company: 'Université de Buea',
        avatar: 'SL',
        text: 'Jordan est un étudiant exceptionnel qui s\'est démarqué par ses compétences techniques avancées et sa rigueur dans les projets. Sa capacité à analyser des problèmes complexes et à proposer des solutions innovantes est remarquable.',
        rating: 5
      },
      {
        name: 'FOTSO Simplice',
        role: 'Responsable Informatique',
        company: 'Biopharma SA',
        avatar: 'FS',
        text: 'Jordan a transformé notre infrastructure informatique. Il a numérisé nos processus clés et configuré l\'ensemble de notre réseau avec un professionnalisme exemplaire. Toujours disponible et proactif, il étais un véritable atout pour l\'équipe.',
        rating: 5
      },
      {
        name: 'Équipe Technique',
        role: 'Département Développement',
        company: 'Amla Cameroun',
        avatar: 'AC',
        text: 'Travailler avec Jordan sur nos projets web et mobile a été une expérience enrichissante. Son expertise sous les outils WINDEV, couplée à sa capacité à comprendre rapidement les besoins clients, a contribué significativement à la réussite de nos projets.',
        rating: 5
      },
      {
        name: 'Lead Developer',
        role: 'Architecte Front-end',
        company: 'Floraison',
        avatar: 'FL',
        text: 'Jordan maîtrise parfaitement Angular et les meilleures pratiques de développement front-end. Son code est propre, bien documenté et maintenable. Il est également excellent pour la gestion des versions avec Git et le travail en équipe.',
        rating: 4
      }
    ];
  }

  getLanguages() {
    return [
      { name: 'Français', level: 'Natif', percent: 100 },
      { name: 'Anglais', level: 'Courant', percent: 85 },
      { name: 'Allemand', level: 'Notions', percent: 20 },
    ];
  }
}
