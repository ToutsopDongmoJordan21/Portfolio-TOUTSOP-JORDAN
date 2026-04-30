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
        company: 'Biopharma SA',
        role: 'Informaticien, Administrateur Réseau & Développeur',
        period: '2025 - 2026',
        type: 'current',
        description: 'Collaboration avec les autres départements pour l\'amélioration de l\'efficacité et l\'innovation technologique. Numérisation du processus de demande d\'achat, implémentation d\'une GED.',
        tasks: [
          'Numérisation du processus de demande d\'achat et de production',
          'Configuration et déploiement des équipements informatiques (Switchs CISCO, imprimantes, téléphones IP)',
          'Vérification quotidienne des services SAGE, VOIP, NAS, Domaine, VPN',
          'Configuration et maintien des serveurs (Windows Server, Linux, Active Directory)',
          'Gestion des droits d\'accès, politiques de sécurité et authentification',
          'Assistance technique aux utilisateurs (Helpdesk)',
        ],
        technologies: ['Winbox', 'Tera Term', 'Sage', 'Angular', 'Node JS', 'Microsoft Office', 'Canva'],
        color: '#00e5ff'
      },
      {
        id: 2,
        company: 'Amla Cameroun / Intelcia',
        role: 'Développeur Web & Mobile et Conseiller Technique',
        period: '2024 - 2025',
        type: 'past',
        description: 'Conception, développement et maintenance d\'applications web et mobiles (iOS, Android) pour des clients variés.',
        tasks: [
          'Développement d\'applications web et mobiles iOS/Android',
          'Création d\'interfaces utilisateur responsives et intuitives',
          'Développement et intégration d\'API et services web',
          'Gestion des bases de données et optimisation des requêtes',
          'Support technique premier et deuxième niveau (Helpdesk)',
          'Formation des utilisateurs sur les nouveaux outils',
        ],
        technologies: ['Windev', 'Angular', 'NodeJs', 'Java', 'AnyDesk'],
        color: '#ff6b35'
      },
      {
        id: 3,
        company: 'Floraison',
        role: 'Développeur Front-end',
        period: '2022 - 2023',
        type: 'past',
        description: 'Développement d\'applications web dynamiques avec Angular JS, gestion d\'état et intégration d\'API REST.',
        tasks: [
          'Développement d\'applications web dynamiques avec Angular JS',
          'Création de composants, directives et services réutilisables',
          'Implémentation du data-binding bidirectionnel et gestion d\'état',
          'Consommation d\'API REST et GraphQL',
          'Implémentation de l\'authentification et gestion des tokens JWT',
          'Tests unitaires avec Jasmine/Karma',
        ],
        technologies: ['HTML5', 'CSS3', 'Angular JS', 'TypeScript', 'RxJS', 'Bootstrap', 'Git', 'Webpack'],
        color: '#7c3aed'
      },
      {
        id: 4,
        company: 'Mobi-TechSARL, AdvancedIT, Zepstra, Novazen',
        role: 'Développeur Full Stack & IA',
        period: '2018 - 2022',
        type: 'past',
        description: 'Conception et implémentation d\'applications pour des individus, développement de solutions d\'intelligence artificielle en Python.',
        tasks: [
          'Design et implémentation d\'applications respectant les normes de fonctionnement',
          'Livraison continue avec intégration CI/CD',
          'Développement et déploiement de solutions d\'IA en Python',
          'Modèles de Machine Learning et analyse de données',
          'Méthodologie Agile pour la livraison des projets',
          'Assistance technique et résolution de problèmes matériels/logiciels',
        ],
        technologies: ['PHP', 'Firebase', 'Angular 14', 'SpringBoot', 'NodeJS', 'AWS', 'SQL', 'Python', 'TensorFlow', 'Scikit-learn', 'Pandas'],
        color: '#10b981'
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
        description: 'Plateforme de découverte et réservation de tatouages.',
        url: 'https://www.checktatoo.com/fr/',
        tech: ['Angular', 'PHP', 'MySQL'],
        icon: 'fas fa-palette'
      },
      {
        name: 'La Zone Shop',
        description: 'E-commerce moderne pour la vente en ligne de produits variés.',
        url: 'https://lazoneshop.com/',
        tech: ['Angular', 'SpringBoot', 'AWS'],
        icon: 'fas fa-shopping-cart'
      },
      {
        name: 'Coin Afrique CM',
        description: 'Plateforme d\'annonces et petites annonces pour le marché camerounais.',
        url: 'https://cm.coinafrique.com/',
        tech: ['React', 'Node.js', 'MongoDB'],
        icon: 'fas fa-store'
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
        text: 'Jordan a transformé notre infrastructure informatique. Il a numérisé nos processus clés et configuré l\'ensemble de notre réseau avec un professionnalisme exemplaire. Toujours disponible et proactif, il est un véritable atout pour l\'équipe.',
        rating: 5
      },
      {
        name: 'Équipe Technique',
        role: 'Département Développement',
        company: 'Amla Cameroun / Intelcia',
        avatar: 'AC',
        text: 'Travailler avec Jordan sur nos projets web et mobile a été une expérience enrichissante. Son expertise en Angular et Node.js, couplée à sa capacité à comprendre rapidement les besoins clients, a contribué significativement à la réussite de nos projets.',
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
      { name: 'Allemand', level: 'Notions', percent: 30 },
    ];
  }
}
