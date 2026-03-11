export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  filterClass: string;
  details: {
    heading: string;
    objectives: string;
    management: string;
    source: { label: string; url?: string };
  };
  technologies: {
    title: string;
    paragraphs: string[];
    list?: string[];
    contributors?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'alternance',
    title: 'Alternance',
    subtitle: 'Synox',
    image: 'assets/img/portfolio/logo-synox-scaled.webp',
    filterClass: 'filter-app',
    details: {
      heading: 'Alternance chez Synox (Depuis Sept. 2025)',
      objectives: `Assurer une montée en compétences progressive afin d'intégrer pleinement l'équipe de développement de Synox. L'alternance a débuté par la réalisation de deux projets spécifiques permettant d'appréhender l'architecture technique et les standards de qualité de l'entreprise. Cette phase préparatoire avait pour but de me permettre d'intervenir, in fine, comme un développeur à part entière sur le produit principal de supervision.`,
      management: `Le parcours a été structuré pour monter en complexité. J'ai d'abord travaillé en autonomie sur des scripts de migration de données, puis sur le développement d'une interface de gestion interne. Après avoir validé ces étapes et les principes de conception de l'entreprise (SOLID), j'ai intégré l'équipe de développement pour travailler sur l'application phare de supervision.`,
      source: { label: 'Ce projet étant interne à l\'entreprise, je ne peux pas partager de traces.' }
    },
    technologies: {
      title: 'Technologies et apprentissages',
      paragraphs: [
        `La première partie de mon alternance s'est concentrée sur la manipulation de flux de données et l'outillage interne. J'ai d'abord conçu des scripts en <strong>Python</strong> pour migrer des données IoT entre différents topics <strong>Kafka</strong>. Par la suite, j'ai développé un outil permettant de récupérer et structurer des données internes (données de repos et informations utiles à l'entreprise) pour les injecter en base de données. Ce projet a été réalisé en appliquant les méthodes de <strong>classes Factory</strong> et les principes <strong>SOLID</strong>, assurant une architecture robuste.`,
        `Techniquement, j'ai ensuite basculé sur une stack "Fullstack" en rejoignant le projet principal de supervision d'objets connectés. J'interviens désormais sur toute la chaîne de traitement : l'ingestion de données de connexion SIM (Radius) depuis Kafka vers une base <strong>ClickHouse</strong>, leur intégration dans le back-end en <strong>Java</strong>, et enfin leur affichage côté front-end avec <strong>Angular</strong>.`,
        `Cette expérience me permet de consolider mes acquis en architecture logicielle, tout en m'intégrant au sein d'une équipe de développement agile.`
      ]
    }
  },
  {
    id: 'sauvegarde',
    title: 'Application de Sauvegarde',
    image: 'assets/img/portfolio/sauvegarde.png',
    filterClass: 'filter-app',
    details: {
      heading: 'Application de Sauvegarde',
      objectives: `Ce projet en Python visait à concevoir un outil de sauvegarde automatisé entre un client et un serveur. L'idée était de permettre la sécurisation et la synchronisation de dossiers distants de manière fiable.`,
      management: `Le travail a été réalisé en binôme. Nous avons dû coordonner le développement des deux parties (client et serveur) pour assurer une communication fluide et une gestion cohérente des transferts de fichiers.`,
      source: { label: 'github', url: 'https://github.com/Raphael-Rivas/app-sauvegarde' }
    },
    technologies: {
      title: 'Technologies et apprentissages',
      paragraphs: [
        `Le projet repose sur une architecture client-serveur développée entièrement en Python :`,
        `Cette expérience m'a permis de maîtriser les bases du scripting système en Python et de comprendre les problématiques de transfert de données en réseau.`
      ],
      list: [
        'Communication réseau via des sockets pour l\'envoi et la réception de données.',
        'Gestion des arborescences de fichiers et des dossiers locaux et distants.',
        'Mise en place de mécanismes de vérification pour garantir l\'intégrité des fichiers transférés.',
        'Automatisation des processus de synchronisation.'
      ],
      contributors: 'Raphaël RIVAS (Développeur), Maël NICOLAS (Développeur)'
    }
  },
  {
    id: 'referendum',
    title: 'Application de Référendum',
    image: 'assets/img/portfolio/referendum.png',
    filterClass: 'filter-app',
    details: {
      heading: 'Application de référendums',
      objectives: `Ce projet, réalisé durant toute ma deuxième année, avait pour but de concevoir une application Java permettant à un chef d'entreprise de recueillir l'avis de ses employés. Notre client souhaitait une solution sécurisée utilisant l'algorithme El-Gamal, et adaptée à des utilisateurs non techniques.`,
      management: `Le projet suivait la méthode agile. En tant que Scrum Master, j'ai veillé au respect des principes agiles, organisé des réunions quotidiennes (daily meetings), et résolu des conflits au sein de notre équipe de 4 personnes. Cette expérience m'a permis d'améliorer mes compétences en gestion d'équipe et de comprendre l'importance d'une communication efficace dans un projet.`,
      source: { label: 'github', url: 'https://github.com/Raphael-Rivas/Referendum' }
    },
    technologies: {
      title: 'Technologies et apprentissages',
      paragraphs: [
        `Techniquement, le projet m'a permis de me familiariser avec la création d'applications client-serveur et leur sécurisation :`,
        `Ce projet a été une expérience riche, autant sur le plan technique qu'humain. Il m'a permis de mieux comprendre les enjeux de la sécurité informatique et de renforcer mes compétences en gestion de projet.`
      ],
      list: [
        'Utilisation de sockets chiffrés pour la communication entre les applications. Chiffrement des votes avec El-Gamal.',
        'Sécurisation des données sensibles : hachage des mots de passe et stockage local des clés privées.',
        'Connexion de l\'application à la base de données via JDBC.',
        'Compilation et distribution de l\'application avec Maven.'
      ],
      contributors: 'Raphaël RIVAS (Développeur), Maël NICOLAS (Scrum Master), Killian RAMUS (Product Owner), Cyprien BONS (Développeur)'
    }
  },
  {
    id: 'ecommerce',
    title: 'Site de e-Commerce',
    image: 'assets/img/portfolio/ecommerce.png',
    filterClass: 'filter-product',
    details: {
      heading: 'Site de e-Commerce',
      objectives: `Ce projet avait pour but de mettre en pratique les notions de développement web apprises en cours, en créant un site de vente en ligne dynamique complet.`,
      management: `Réalisé en équipe de deux, ce projet m'a permis d'améliorer mes compétences en gestion de projet en petit groupe, notamment en coordination, répartition des tâches, et intégration des contributions de chacun.`,
      source: { label: 'github', url: 'https://github.com/Raphael-Rivas/e-commerce' }
    },
    technologies: {
      title: 'Technologies et apprentissages',
      paragraphs: [
        `Ce projet m'a permis de maîtriser les bases essentielles du développement web dynamique :`,
        `Ce projet marque une avancée significative par rapport à mes premiers sites statiques. Je sais désormais créer un site web dynamique et fonctionnel adapté aux besoins d'une entreprise fictive, avec des fonctionnalités telles qu'un panier d'achat et un système de gestion des utilisateurs.`
      ],
      list: [
        'Manipulation de la base de données avec PHP.',
        'Sécurisation des données sensibles, notamment avec le hachage des mots de passe en suivant la méthode "poivrer, saler, hacher".',
        'Utilisation de l\'architecture MVC (Modèles, Vues, Contrôleurs) pour assurer la maintenabilité et l\'évolution du site.',
        'Création d\'une interface utilisateur intuitive avec HTML et CSS.'
      ],
      contributors: 'Raphaël RIVAS, Maël NICOLAS'
    }
  },
  {
    id: 'stage',
    title: 'Stage',
    subtitle: 'Synox',
    image: 'assets/img/portfolio/stage.png',
    filterClass: 'filter-app',
    details: {
      heading: 'Stage chez Synox',
      objectives: `Projet visant à développer une application permettant la communication de dispositifs connectés dans le nouveau bâtiment de Synox. Ces objets connectés utilisent différents protocoles pour communiquer via le réseau. Le but de cette application est de permettre aux employés de Synox de pouvoir contrôler et gérer les objets connectés de leur bâtiment.`,
      management: `La réalisation du projet de stage s'est découpée en plusieurs parties. La première partie a consisté à comprendre l'environnement technique et à effectuer des recherches. Puis a suivi une phase d'expérimentation et de tests techniques de cet environnement après compréhension. Après quoi, il a fallu conceptualiser le projet, afin de réaliser le développement de la solution complète.`,
      source: { label: 'Ce projet étant interne à l\'entreprise, je ne peux pas partager de traces.' }
    },
    technologies: {
      title: 'Technologies et apprentissages',
      paragraphs: [
        `L'application développée est utilisée en Edge et accessible depuis toute autre application, dans mon cas un site web. L'application en Edge communique grâce au protocole MQTT pour généraliser les données envoyées et reçues. En d'autres termes, l'application agit comme un serveur hébergé sur une machine dans le réseau local, ouvert à la communication avec son réseau grâce à un broker MQTT.`,
        `Techniquement, l'application en Edge a été développée en JavaScript. Elle utilise Node.js pour l'exécution et npm pour la gestion de paquets. Un site Web a aussi été développé pour pouvoir gérer les données de l'application qui transitent via un broker MQTT. Ce site Web sera remplacé à l'avenir par les solutions de Synox. Le site a été développé en HTML, CSS et JavaScript.`,
        `J'ai donc principalement développé des compétences en JavaScript, et dans des notions touchant à l'IoT (l'internet des objets) comme les protocoles réseaux BACnet et Modbus.`
      ]
    }
  },
  {
    id: 'legends',
    title: 'Legends Buster',
    subtitle: 'Durant la Code Game 2024',
    image: 'assets/img/portfolio/legends.png',
    filterClass: 'filter-branding',
    details: {
      heading: 'Legends Buster',
      objectives: `Ce projet s'est fait dans le cadre d'une Code Game Jam. En équipe, le but est de créer un jeu vidéo suivant un thème donné en 30h.`,
      management: `Réalisé en plus gros groupe, à 6, ce projet a posé plus de défis d'organisation. De plus, tout le monde n'étant pas sur place, la communication était très importante. J'ai appris à répartir les tâches du projet comme dans un vrai jeu : des développeurs, des designers, des gens qui s'occupent de la musique...`,
      source: { label: 'Legends Buster', url: 'https://wailreiz.itch.io/legends-buster' }
    },
    technologies: {
      title: 'Technologies et apprentissages',
      paragraphs: [
        `Grâce à ce projet, j'ai appris à me servir d'un logiciel de création de jeu :`,
        `Etant fan de jeu vidéo, j'ai adoré participer à la Code Game Jam. Ce fu assez difficile dû au manque de sommeil, à l'organisation du groupe et à l'apprentissage d'un nouvel outil, mais je pense avoir appris beaucoup de choses.`
      ],
      list: [
        'Développement dans un tout nouvel environnement avec peu de temps pour apprendre.',
        'Développement sur Unity en C#.',
        'Apprendre à travailler sous stress à cause de la limite de temps.',
        'Créativité pour toutes les autres sphères du jeu.'
      ],
      contributors: 'Raphaël RIVAS, Maël NICOLAS, Cyprien BONS, Vincent CALATRABA, Kevin CALATRABA, Ayman BENAZZOUZ.'
    }
  }
];
