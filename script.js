/**
 * Portfolio Engine - KAMGANG TALLA ENZO WARREN
 * Full-Stack Developer | Community Manager | Digital Marketer
 */

// --- DICTIONNAIRE MULTILINGUE (FR / EN) ---
const translations = {
  fr: {
    nav_home: "Accueil",
    nav_about: "À Propos",
    nav_projects: "Projets",
    nav_certs: "Certifications",
    nav_contact: "Contact",
    nav_hire_me: "Me Recruter",
    hero_badge: "Bonjour, je suis",
    hero_subtitle: "Développeur Full-Stack & Stratège Marketing Digital / Community Manager",
    hero_bio: "J'architecture des applications web & mobiles robustes et je conçois des stratégies digitales à fort impact. Expert en écosystèmes modernes (React, Next.js, Node.js), growth marketing et animation de communautés engagées.",
    hero_contact_btn: "Me Contacter",
    hero_explore_btn: "Explorer mes Projets",
    hero_status: "Disponible pour nouveaux projets",
    exp_badge_years: "03+",
    exp_badge_text: "Ans d'Expérience\nTech & Marketing",
    about_title: "Découvrez mon Parcours & ma Double Expertise !",
    about_desc: "Passionné par l'alliance entre ingénierie logicielle et croissance digitale, je transforme les idées audacieuses en plateformes performantes et scalables. Mon expertise combine le développement de solutions web/mobiles de bout en bout et le déploiement de stratégies d'acquisition, de content marketing et de community building orientées résultats.",
    about_hire_btn: "Me Recruter",
    about_cv_btn: "Télécharger CV",
    skills_frontend: "Frontend (React, Next.js, TypeScript, Tailwind)",
    skills_backend: "Backend & APIs (Node.js, Express, Python, PostgreSQL)",
    skills_cm: "Community Management & Social Media Strategy",
    skills_marketing: "Marketing Digital, SEO, SEA & Acquisition",
    skills_uiux: "UI/UX Design, Branding & Copywriting",
    works_watermark: "PROJETS CHOISIS_",
    works_heading: "RÉALISATIONS PHARES",
    works_subtext: "Une sélection de mes travaux alliant ingénierie technique, automatisation et performance marketing.",
    filter_all: "Tous",
    filter_dev: "Développement",
    filter_marketing: "Marketing & Growth",
    filter_cm: "Community Management",
    inspect_project: "Explorer le projet →",
    certs_slash: "/",
    certs_heading: "CERTIFICATIONS_VALIDÉES",
    certs_subtext: "Compétences attestées et accréditations techniques.",
    inspect_data: "INSPECTER_DONNÉES →",
    contact_title: "CONSTRUISONS<br><span class=\"accent-text\">QUELQUE CHOSE D'UNIQUE.</span>",
    contact_desc: "Actuellement ouvert aux opportunités en Développement Full-Stack, Community Management et Marketing Digital. Discutons de votre prochain projet !",
    contact_identity: "KAMGANG TALLA ENZO WARREN",
    contact_role: "Full-Stack Dev & Digital Strategist",
    form_heading: "/ INITIALISER_CONNEXION",
    form_name_label: "Nom Complet",
    form_email_label: "Adresse Email",
    form_message_label: "Votre Message",
    form_submit: "ENVOYER LE MESSAGE",
    form_sending: "TRANSMISSION EN COURS...",
    success_title: "MESSAGE TRANSMIS !",
    success_desc: "Merci Enzo Warren a bien reçu votre transmission. Je reviens vers vous dans les plus brefs délais.",
    success_reset: "Envoyer un autre message",
    footer_rights: "Tous droits réservés."
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_certs: "Certifications",
    nav_contact: "Contact",
    nav_hire_me: "Hire Me",
    hero_badge: "Hello, I am",
    hero_subtitle: "Full-Stack Developer & Digital Marketing / Community Manager",
    hero_bio: "I architect scalable web & mobile apps and drive high-impact digital strategies. Specialized in modern frameworks (React, Next.js, Node.js), growth marketing, and building high-converting engaged communities.",
    hero_contact_btn: "Contact Me",
    hero_explore_btn: "Explore My Work",
    hero_status: "Available for new projects",
    exp_badge_years: "03+",
    exp_badge_text: "Years Experience\nTech & Marketing",
    about_title: "Explore My Journey & Dual Skillset!",
    about_desc: "Driven by the synergy between software engineering and digital growth, I turn ambitious ideas into fast, reliable platforms. My experience bridges modern full-stack development with acquisition campaigns, SEO/SEA, content strategy, and community leadership.",
    about_hire_btn: "Hire Me",
    about_cv_btn: "Download CV",
    skills_frontend: "Frontend (React, Next.js, TypeScript, Tailwind)",
    skills_backend: "Backend & APIs (Node.js, Express, Python, PostgreSQL)",
    skills_cm: "Community Management & Social Media Strategy",
    skills_marketing: "Digital Marketing, SEO, SEA & Acquisition",
    skills_uiux: "UI/UX Design, Branding & Copywriting",
    works_watermark: "SELECTED WORKS_",
    works_heading: "FEATURED PROJECTS",
    works_subtext: "A curated selection of work combining software craftsmanship, automation, and marketing performance.",
    filter_all: "All",
    filter_dev: "Development",
    filter_marketing: "Marketing & Growth",
    filter_cm: "Community Management",
    inspect_project: "Explore project →",
    certs_slash: "/",
    certs_heading: "VERIFIED_CREDENTIALS",
    certs_subtext: "Technical accreditations, verified achievements, and certifications.",
    inspect_data: "INSPECT_DATA →",
    contact_title: "LET'S BUILD<br><span class=\"accent-text\">SOMETHING GREAT.</span>",
    contact_desc: "Currently open to opportunities in Full-Stack Web Development, Community Management, and Digital Marketing. Let's discuss your vision!",
    contact_identity: "KAMGANG TALLA ENZO WARREN",
    contact_role: "Full-Stack Dev & Digital Strategist",
    form_heading: "/ INITIATE_CONNECTION",
    form_name_label: "Full Name",
    form_email_label: "Email Address",
    form_message_label: "Your Message",
    form_submit: "SEND TRANSMISSION",
    form_sending: "TRANSMITTING DATA...",
    success_title: "TRANSMISSION RECEIVED!",
    success_desc: "Thank you! Enzo Warren has received your message and will respond shortly.",
    success_reset: "Send another transmission",
    footer_rights: "All rights reserved."
  }
};

let currentLang = localStorage.getItem('enzo_lang') || 'fr';
let currentTheme = localStorage.getItem('enzo_theme') || 'dark';

// --- BASE DE DONNÉES DES PROJETS ---
const projectsData = [
  {
    id: "p1",
    index: "01.",
    role: "FULL-STACK & GROWTH",
    category: "dev marketing",
    title: { fr: "E-COMMERCE & GROWTH FUNNEL", en: "E-COMMERCE & GROWTH FUNNEL" },
    shortDesc: {
      fr: "Plateforme de vente en ligne complète couplée à un tunnel d'acquisition automatisé, tracking Facebook Pixel, Google Analytics 4 et optimisation du taux de conversion.",
      en: "Complete e-commerce platform coupled with an automated acquisition funnel, Facebook Pixel tracking, GA4, and conversion rate optimization."
    },
    fullDesc: {
      fr: "Conception architecturale d'une boutique en ligne haute vitesse avec Next.js et API Node.js. Intégration de passerelles de paiement (Mobile Money, Carte), gestion des stocks en temps réel et implémentation d'une stratégie de remarketing et d'inbound marketing qui a boosté le ROI des campagnes de 280%.",
      en: "Architectural design of a high-speed online storefront with Next.js and Node.js API. Payment gateway integration (Mobile Money, Cards), live inventory sync, and implementation of a remarketing strategy driving a 280% ROI boost on ad campaigns."
    },
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Meta Ads", "GA4"],
    metrics: [
      { label: { fr: "CROISSANCE ROI", en: "ROI GROWTH" }, value: "+280%" },
      { label: { fr: "VITESSE CHARGEMENT", en: "LOAD SPEED" }, value: "0.8s" },
      { label: { fr: "TAUX CONVERSION", en: "CONVERSION" }, value: "4.6%" }
    ]
  },
  {
    id: "p2",
    index: "02.",
    role: "COMMUNITY & AUTOMATION",
    category: "cm dev",
    title: { fr: "SOCIAL ENGAGEMENT & AI BOT", en: "SOCIAL ENGAGEMENT & AI BOT" },
    shortDesc: {
      fr: "Moteur d'automatisation des publications et de modération intelligente pour communautés Telegram, WhatsApp et réseaux sociaux via des scripts automatisés.",
      en: "Autonomous post scheduling and smart moderation engine for Telegram, WhatsApp groups, and social platforms via automated scripts."
    },
    fullDesc: {
      fr: "Développement d'un bot d'animation et de filtrage pour gérer des communautés de plus de 15 000 membres actifs. Programmation éditoriale, gamification des interactions, réponses instantanées par IA et métriques d'engagement en temps réel.",
      en: "Engineered an interactive moderation and animation bot overseeing communities of 15,000+ active members. Automated editorial scheduling, interaction gamification, AI-assisted responses, and live engagement analytics."
    },
    tech: ["Python", "Node.js", "Telegram API", "WhatsApp Cloud", "n8n"],
    metrics: [
      { label: { fr: "MEMBRES ACTIFS", en: "ACTIVE MEMBERS" }, value: "15k+" },
      { label: { fr: "ENGAGEMENT", en: "ENGAGEMENT" }, value: "+65%" },
      { label: { fr: "RÉPONSE MOY.", en: "AVG RESPONSE" }, value: "< 2s" }
    ]
  },
  {
    id: "p3",
    index: "03.",
    role: "MARKETING DIGITAL & ADS",
    category: "marketing",
    title: { fr: "DIGITAL ADS ACQUISITION SUITE", en: "DIGITAL ADS ACQUISITION SUITE" },
    shortDesc: {
      fr: "Campagnes d'acquisition multicanales (Meta Ads, Google Search/Display, TikTok Ads) avec landing pages ultra-optimisées et stratégie de copywriting persuasif.",
      en: "Multichannel customer acquisition campaigns (Meta Ads, Google Ads, TikTok) with ultra-optimized landing pages and persuasive copywriting."
    },
    fullDesc: {
      fr: "Pilotage complet de campagnes publicitaires à fort impact pour des marques et PME. Création des visuels engageants, tests A/B des hooks vidéos, segmentation d'audiences ciblées et réduction du coût par acquisition (CPA) de 42%.",
      en: "End-to-end management of high-impact advertising campaigns for brands and SMBs. Engaging visual creation, hook A/B testing, precise audience segmentation, and a 42% reduction in Cost Per Acquisition (CPA)."
    },
    tech: ["Meta Ads Manager", "Google Ads", "Canva Pro", "A/B Testing", "SEO"],
    metrics: [
      { label: { fr: "PORTEE CUMULEE", en: "TOTAL REACH" }, value: "500k+" },
      { label: { fr: "BAISSE DU CPA", en: "CPA REDUCTION" }, value: "-42%" },
      { label: { fr: "ROAS MOYEN", en: "AVG ROAS" }, value: "4.8x" }
    ]
  },
  {
    id: "p4",
    index: "04.",
    role: "FULL-STACK SAAS",
    category: "dev",
    title: { fr: "WARREN CAMPUS & ERP SYSTEM", en: "WARREN CAMPUS & ERP SYSTEM" },
    shortDesc: {
      fr: "Système de gestion académique et administrative avec portail étudiant, gestion des cours, suivi des notes et tableau de bord décisionnel.",
      en: "Academic and enterprise resource planner featuring student portals, faculty tracking, grade management, and leadership dashboards."
    },
    fullDesc: {
      fr: "Application web d'envergure conçue avec React, TypeScript et PostgreSQL. Gestion des rôles RBAC (Administrateurs, Professeurs, Étudiants), génération automatique de relevés de notes en PDF et notifications SMS/Email.",
      en: "Enterprise-grade web application built with React, TypeScript, and PostgreSQL. RBAC permission handling, automated PDF report card generation, and SMS/Email notification alerts."
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    metrics: [
      { label: { fr: "UTILISATEURS", en: "TOTAL USERS" }, value: "3,200+" },
      { label: { fr: "DISPONIBILITÉ", en: "UPTIME" }, value: "99.9%" },
      { label: { fr: "REQUÊTES / SEC", en: "TPS" }, value: "1,200" }
    ]
  },
  {
    id: "p5",
    index: "05.",
    role: "COMMUNITY & BRANDING",
    category: "cm marketing",
    title: { fr: "VIRAL BRANDING & CONTENT ACCELERATOR", en: "VIRAL BRANDING & CONTENT ACCELERATOR" },
    shortDesc: {
      fr: "Stratégie de personal branding, calendrier éditorial percutant et création de vidéos shorts / reels ayant généré plus d'un million de vues cumulées.",
      en: "Personal branding roadmap, high-retention content calendar, and viral shorts/reels production generating over 1M cumulative organic views."
    },
    fullDesc: {
      fr: "Élaboration d'une identité de marque puissante et cohérente sur LinkedIn, Instagram et TikTok. Scripts vidéos conçus selon la méthode AIDA, animation de live interactifs et conversion des followers en leads qualifiés.",
      en: "Created a strong and consistent brand identity across LinkedIn, Instagram, and TikTok. High-retention video scripting based on AIDA framework, live Q&A hosting, and converting social followers into qualified sales leads."
    },
    tech: ["Content Strategy", "CapCut", "Photoshop", "Copywriting", "Analytics"],
    metrics: [
      { label: { fr: "VUES ORGANIQUES", en: "ORGANIC VIEWS" }, value: "1.2M+" },
      { label: { fr: "NOUVEAUX SUIVANTS", en: "NEW FOLLOWERS" }, value: "+28k" },
      { label: { fr: "LEADS GÉNÉRÉS", en: "LEADS WON" }, value: "450+" }
    ]
  },
  {
    id: "p6",
    index: "06.",
    role: "FULL-STACK INTERACTIVE",
    category: "dev",
    title: { fr: "CYBERPUNK PORTFOLIO CORE", en: "CYBERPUNK PORTFOLIO CORE" },
    shortDesc: {
      fr: "Moteur interactif temps-réel à 60 FPS avec canvas de particules aurore, bascule bilingue instantanée et système d'inspection de données modulaires.",
      en: "Real-time 60 FPS interactive portfolio engine with aurora meteor canvas, instantaneous bilingual support, and modular inspection drawers."
    },
    fullDesc: {
      fr: "Développement d'un portfolio haute fidélité sans frameworks lourds pour des performances maximales. Effets de tilt 3D basés sur la physique de la souris, gestion fluide du Dark/Light mode et responsive design sans faille.",
      en: "Engineered a high-fidelity portfolio without heavy frameworks for peak performance. Mouse physics-based 3D tilt effects, seamless dark/light mode switching, and flawless responsive layouts."
    },
    tech: ["HTML5", "Vanilla CSS", "JavaScript ES6+", "HTML5 Canvas", "SVG"],
    metrics: [
      { label: { fr: "SCORE LIGHTHOUSE", en: "LIGHTHOUSE" }, value: "100" },
      { label: { fr: "TEMPS DE RÉPONSE", en: "LATENCY" }, value: "0ms" },
      { label: { fr: "FRAME RATE", en: "FRAME RATE" }, value: "60 FPS" }
    ]
  }
];

// --- BASE DE DONNÉES DES CERTIFICATIONS ---
const certsData = [
  {
    id: "CERT-01",
    title: { fr: "Full-Stack Web & Software Engineering", en: "Full-Stack Web & Software Engineering" },
    issuer: "Certification Professionnelle / Tech Validation",
    desc: {
      fr: "Validation approfondie en architecture logicielle web, bases de données relationnelles et non-relationnelles, sécurité web et création d'APIs RESTful performantes.",
      en: "Comprehensive validation in web software architecture, relational & NoSQL databases, web security protocols, and performant RESTful API construction."
    },
    skills: [
      "JavaScript ES6+, TypeScript & Frameworks modernes",
      "Conception d'APIs sécurisées (JWT, OAuth, CORS)",
      "Bases de données SQL (PostgreSQL, MySQL) & ORM",
      "Déploiement continu (CI/CD, Docker, Vercel)"
    ]
  },
  {
    id: "CERT-02",
    title: { fr: "Social Media & Community Management", en: "Social Media & Community Management" },
    issuer: "Spécialisation Stratégie d'Influence & Communautés",
    desc: {
      fr: "Expertise éprouvée dans la création, l'animation et la fidélisation de communautés en ligne. Maîtrise des algorithmes et techniques d'engagement viral.",
      en: "Proven expertise in launching, engaging, and retaining online communities. Deep mastery of social algorithms and viral engagement mechanics."
    },
    skills: [
      "Stratégie de contenu & calendrier éditorial",
      "Animation de groupes (WhatsApp, Telegram, Discord, Facebook)",
      "Modération, gestion de crise & service client",
      "Analyse des KPI d'engagement et reporting ROI"
    ]
  },
  {
    id: "CERT-03",
    title: { fr: "Digital Marketing, SEO & Ads Campaigns", en: "Digital Marketing, SEO & Ads Campaigns" },
    issuer: "Acquisition & Conversion Specialist",
    desc: {
      fr: "Maîtrise de l'acquisition payante (Google Ads, Meta Ads) et organique (SEO technique, content marketing, copywriting orienté vente).",
      en: "Proficiency in paid customer acquisition (Google Ads, Meta Ads) and organic growth (Technical SEO, inbound content, high-converting copywriting)."
    },
    skills: [
      "Gestion & optimisation de budgets publicitaires (Meta, Google)",
      "Audit SEO technique, recherche sémantique & netlinking",
      "Copywriting persuasion et tunnels de conversion AIDA",
      "Analytics avancés : Google Analytics 4, Pixel & Tag Manager"
    ]
  },
  {
    id: "CERT-04",
    title: { fr: "UI/UX Design & Frontend Engineering", en: "UI/UX Design & Frontend Engineering" },
    issuer: "Digital Product & Design Systems",
    desc: {
      fr: "Conception d'interfaces utilisateurs intuitives, esthétiques et conformes aux meilleures pratiques d'ergonomie et d'accessibilité numérique.",
      en: "Designing intuitive, aesthetically appealing digital interfaces adhering to accessibility standards, user research, and responsive systems."
    },
    skills: [
      "Design d'interfaces (Figma, Glassmorphism, Design Systems)",
      "Intégration responsive mobile-first ultra fluide",
      "Micro-animations & interactions immersives",
      "Tests d'utilisabilité et parcours clients optimisés"
    ]
  }
];

// --- INITIALISATION DU MOTEUR CANVAS AURORA & METEORS ---
function initCanvasAnimation() {
  const canvas = document.getElementById('meteorCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particules & Météores
  const particles = [];
  const particleCount = Math.floor(Math.min(width, 1400) / 18);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.color = Math.random() > 0.4 ? '#ff5e00' : '#0051ff';
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > width) this.speedX *= -1;
      if (this.y < 0 || this.y > height) this.speedY *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    }
  }

  // Étoiles filantes / Météores
  const meteors = [];

  class Meteor {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width + 200;
      this.y = -50;
      this.length = Math.random() * 80 + 50;
      this.speed = Math.random() * 6 + 7;
      this.opacity = Math.random() * 0.7 + 0.3;
      this.angle = Math.PI / 4; // 45 degrés
    }

    update() {
      this.x -= this.speed * Math.cos(this.angle);
      this.y += this.speed * Math.sin(this.angle);

      if (this.y > height + 100 || this.x < -100) {
        if (Math.random() < 0.02) {
          this.reset();
        }
      }
    }

    draw() {
      ctx.beginPath();
      const endX = this.x + this.length * Math.cos(this.angle);
      const endY = this.y - this.length * Math.sin(this.angle);

      const grad = ctx.createLinearGradient(this.x, this.y, endX, endY);
      grad.addColorStop(0, '#ff5e00');
      grad.addColorStop(0.5, '#ff00ea');
      grad.addColorStop(1, 'transparent');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  for (let i = 0; i < 3; i++) {
    meteors.push(new Meteor());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Dessin et liaison des particules
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 90) {
          ctx.beginPath();
          ctx.strokeStyle = currentTheme === 'dark' ? 'rgba(255, 94, 0, 0.08)' : 'rgba(0, 81, 255, 0.08)';
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Dessin des météores
    meteors.forEach(m => {
      m.update();
      m.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// --- GESTIONNAIRE DE THÈME ---
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('enzo_theme', theme);

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    if (theme === 'light') {
      themeBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      themeBtn.setAttribute('title', 'Passer en mode sombre');
    } else {
      themeBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      themeBtn.setAttribute('title', 'Passer en mode clair');
    }
  }
}

// --- GESTIONNAIRE DE LANGUE ---
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('enzo_lang', lang);

  const t = translations[lang];
  if (!t) return;

  // Mise à jour de tous les éléments balisés data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Mise à jour du label du bouton de langue
  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = lang === 'fr' ? 'EN' : 'FR';
  }

  // Rendu dynamique des projets et certifications avec la langue active
  renderProjectsGrid();
  renderCertsGrid();
}

// --- RENDU DYNAMIQUE DE LA GRILLE DE PROJETS ---
let activeFilter = 'all';

function renderProjectsGrid() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  const t = translations[currentLang];
  const filtered = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category.includes(activeFilter));

  container.innerHTML = filtered.map(p => `
    <article class="project-card" data-project-id="${p.id}" tabindex="0" role="button" aria-label="Voir le projet ${p.title[currentLang]}">
      <div class="card-shimmer"></div>
      <div class="card-top">
        <div class="meta-row">
          <span class="project-index">${p.index}</span>
          <span class="role-badge">${p.role}</span>
        </div>
        <h3 class="project-title">${p.title[currentLang]}</h3>
        <p class="project-desc">${p.shortDesc[currentLang]}</p>
        <div class="tech-stack">
          ${p.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="card-bottom-bar">
        <span class="card-cta-hint">${t.inspect_project}</span>
        <div class="cyber-barcode"></div>
      </div>
    </article>
  `).join('');

  // Attacher les écouteurs de clic sur chaque carte de projet
  container.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-project-id');
      openProjectModal(pid);
    });
  });
}

// --- MODALE PROJET ---
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById('projectModalOverlay');
  const modalPanel = document.getElementById('projectModalContent');
  if (!modalOverlay || !modalPanel) return;

  const title = project.title[currentLang];
  const desc = project.fullDesc[currentLang];

  modalPanel.innerHTML = `
    <button class="modal-close-btn" id="modalCloseBtn" aria-label="Fermer">✕</button>
    <div class="modal-header">
      <div class="modal-meta">
        <span class="project-index">${project.index}</span>
        <span class="role-badge">${project.role}</span>
      </div>
      <h2 class="modal-title">${title}</h2>
    </div>
    <div class="modal-body">
      <div class="modal-section">
        <div class="modal-section-title">// APERÇU DU PROJET</div>
        <p class="modal-desc">${desc}</p>
      </div>

      <div class="modal-metrics">
        ${project.metrics.map(m => `
          <div class="metric-item">
            <span class="metric-value">${m.value}</span>
            <span class="metric-label">${m.label[currentLang]}</span>
          </div>
        `).join('')}
      </div>

      <div class="modal-section">
        <div class="modal-section-title">// STACK TECHNIQUE & OUTILS</div>
        <div class="tech-stack" style="border:none; padding:0;">
          ${project.tech.map(t => `<span class="tech-tag" style="font-size:0.85rem; padding:0.4rem 0.8rem;">${t}</span>`).join('')}
        </div>
      </div>

      <div class="modal-footer">
        <a href="#contact" class="highlight-btn btn-primary" onclick="closeProjectModal()">
          Discuter d'un projet similaire
        </a>
        <a href="https://wa.me/237687935401?text=Bonjour%20Enzo,%20j'ai%20vu%20votre%20projet%20${encodeURIComponent(title)}" target="_blank" class="highlight-btn btn-secondary">
          WhatsApp Direct →
        </a>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  document.getElementById('modalCloseBtn')?.addEventListener('click', closeProjectModal);
}

function closeProjectModal() {
  const modalOverlay = document.getElementById('projectModalOverlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- RENDU DYNAMIQUE DES CERTIFICATIONS ---
function renderCertsGrid() {
  const container = document.getElementById('certsGrid');
  if (!container) return;

  const t = translations[currentLang];

  container.innerHTML = certsData.map((c, idx) => `
    <article class="cert-card" data-cert-id="${c.id}" tabindex="0" role="button" aria-label="Voir la certification ${c.title[currentLang]}">
      <div class="cert-content">
        <div class="cert-top-bar">
          <span class="cert-id">[0${idx + 1}]</span>
          <span class="cert-status">VALIDATED</span>
        </div>
        <h3 class="cert-title">${c.title[currentLang]}</h3>
        <span class="cert-issuer">// ${c.issuer}</span>
        <p class="cert-desc">${c.desc[currentLang]}</p>
        <div class="cert-footer">
          <div class="cyber-barcode"></div>
          <span class="view-details">${t.inspect_data}</span>
        </div>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => {
      const cid = card.getAttribute('data-cert-id');
      openCertDrawer(cid);
    });
  });
}

// --- DRAWER LATÉRAL CERTIFICATIONS ---
function openCertDrawer(certId) {
  const cert = certsData.find(c => c.id === certId);
  if (!cert) return;

  const drawer = document.getElementById('certDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (!drawer || !overlay) return;

  drawer.innerHTML = `
    <button class="modal-close-btn" id="drawerCloseBtn" aria-label="Fermer">✕</button>
    <div class="modal-header">
      <div class="modal-meta">
        <span class="cert-id" style="font-size:1.1rem;">// ${cert.id}</span>
      </div>
      <h2 class="modal-title" style="font-size:1.8rem;">${cert.title[currentLang]}</h2>
      <span class="cert-issuer" style="display:block; margin-top:0.5rem;">${cert.issuer}</span>
    </div>

    <div class="status-indicator">
      <span class="status-dot-pulse"></span>
      <span>ACCRÉDITATION ACTIVE & VÉRIFIÉE</span>
    </div>

    <div style="margin-bottom:2rem;">
      <h4 style="font-size:0.85rem; color:var(--accent-color); margin-bottom:1rem; text-transform:uppercase;">
        // COMPÉTENCES & CRITÈRES VALIDÉS
      </h4>
      <ul class="skills-list">
        ${cert.skills.map(s => `
          <li>
            <span class="list-bullet">▶</span>
            <span>${s}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <p style="font-size:0.95rem; line-height:1.7; color:var(--text-muted); margin-bottom:2.5rem;">
      ${cert.desc[currentLang]}
    </p>

    <div style="margin-top:auto;">
      <a href="#contact" class="highlight-btn btn-primary" style="width:100%; text-align:center;" onclick="closeCertDrawer()">
        Mobiliser cette compétence pour votre projet
      </a>
    </div>
  `;

  overlay.classList.add('active');
  drawer.classList.add('active');
  document.body.style.overflow = 'hidden';

  document.getElementById('drawerCloseBtn')?.addEventListener('click', closeCertDrawer);
}

function closeCertDrawer() {
  const drawer = document.getElementById('certDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- INTERACTION TILT 3D SUR L'AVATAR HERO ---
function init3DTiltEffect() {
  const card = document.getElementById('heroTiltCard');
  if (!card) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });
}

// --- FORMULAIRE DE CONTACT AVEC VALIDATION CYBERPUNK ---
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successView = document.getElementById('contactSuccess');
  const resetBtn = document.getElementById('resetFormBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('userName')?.value.trim();
    const email = document.getElementById('userEmail')?.value.trim();
    const message = document.getElementById('userMsg')?.value.trim();

    if (!name || !email || !message) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const submitBtn = form.querySelector('.submit-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="loading-text">${translations[currentLang].form_sending}</span>
      `;
    }

    // Simulation de l'envoi / Enregistrement
    setTimeout(() => {
      form.style.display = 'none';
      if (successView) {
        successView.classList.add('active');
      }
    }, 1000);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = 'flex';
      const submitBtn = form.querySelector('.submit-btn');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>${translations[currentLang].form_submit}</span>
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        `;
      }
      if (successView) {
        successView.classList.remove('active');
      }
    });
  }
}

// --- GESTION DU SCROLL, ANIMATIONS DE VISIBILITÉ & ZOOM SVG ---
function initScrollInteractions() {
  const navbar = document.getElementById('mainNavbar');
  const hero = document.getElementById('hero');
  const zoomSvg = document.querySelector('.zoom-svg');
  const zoomIntro = document.querySelector('.certifications-intro');

  // Activer l'animation cascade du Hero immédiatement
  setTimeout(() => {
    hero?.classList.add('is-visible');
  }, 100);

  // IntersectionObserver pour les sections et éléments animés
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // Si c'est la section about, remplir les jauges
        if (entry.target.id === 'about' || entry.target.classList.contains('about-container')) {
          entry.target.querySelectorAll('.progress-fill').forEach(bar => {
            const target = bar.getAttribute('data-width');
            if (target) {
              bar.style.width = target;
            }
          });
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.about-container, .contact-wrapper, .certs-wrapper, .animate-left, .animate-right').forEach(el => {
    observer.observe(el);
  });

  // Scroll listener pour navbar et zoom SVG interactif
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Effet dynamique de Zoom SVG au défilement
    if (zoomIntro && zoomSvg) {
      const rect = zoomIntro.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.top < windowH && rect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height)));
        const scale = 1 + progress * 0.75;
        zoomSvg.style.transform = `scale(${scale})`;
        zoomSvg.style.transition = 'transform 0.1s ease-out';
      }
    }
  });
}

// --- BOUTON DE NAVIGATION MOBILE ---
function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const navContent = document.getElementById('navContent');

  if (!toggle || !navContent) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navContent.classList.toggle('open');
  });

  // Fermer le menu lors d'un clic sur un lien
  navContent.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navContent.classList.remove('open');
    });
  });
}

// --- SYSTÈME DE NAVIGATION ACTIVE (SCROLLSPY & CLIC) ---
function initNavigationSpy() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sectionIds = ['hero', 'about', 'projects', 'certs-list', 'contact'];
  const sections = sectionIds
    .map(id => ({ id, el: document.getElementById(id) }))
    .filter(item => item.el !== null);

  let isNavClicking = false;
  let navClickTimer = null;

  function setActiveNavLink(targetId) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${targetId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function updateActiveOnScroll() {
    if (isNavClicking) return;

    const scrollY = window.scrollY;
    const windowH = window.innerHeight;
    const docH = document.documentElement.scrollHeight;

    // Si on est en haut de la page
    if (scrollY < 120) {
      setActiveNavLink('hero');
      return;
    }

    // Si on est tout en bas de page (contact)
    if (scrollY + windowH >= docH - 60) {
      setActiveNavLink('contact');
      return;
    }

    // Recherche de la section active
    let currentId = 'hero';
    for (const item of sections) {
      // Décalage pour prendre en compte la navbar fixe (80px)
      if (scrollY >= item.el.offsetTop - 140) {
        currentId = item.id;
      }
    }

    setActiveNavLink(currentId);
  }

  // Écouteur de clic sur tous les liens internes de la page
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', () => {
      const targetId = anchor.getAttribute('href')?.replace('#', '');
      if (targetId && sectionIds.includes(targetId)) {
        setActiveNavLink(targetId);
        isNavClicking = true;
        clearTimeout(navClickTimer);
        navClickTimer = setTimeout(() => {
          isNavClicking = false;
        }, 850);
      }
    });
  });

  window.addEventListener('scroll', updateActiveOnScroll, { passive: true });
  window.addEventListener('resize', updateActiveOnScroll, { passive: true });
  updateActiveOnScroll();
}

// --- INITIALISATION GLOBALE AU CHARGEMENT ---
document.addEventListener('DOMContentLoaded', () => {
  // Appliquer le thème et la langue mémorisés
  applyTheme(currentTheme);
  applyLanguage(currentLang);

  // Initialiser les écouteurs de bascule
  document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  document.getElementById('langToggleBtn')?.addEventListener('click', () => {
    applyLanguage(currentLang === 'fr' ? 'en' : 'fr');
  });

  // Filtres de projets
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter') || 'all';
      renderProjectsGrid();
    });
  });

  // Modale overlay clic pour fermer
  document.getElementById('projectModalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'projectModalOverlay') {
      closeProjectModal();
    }
  });

  document.getElementById('drawerOverlay')?.addEventListener('click', closeCertDrawer);

  // Fermer avec la touche Echap
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeCertDrawer();
    }
  });

  // Initialiser les modules
  initCanvasAnimation();
  init3DTiltEffect();
  initContactForm();
  initScrollInteractions();
  initMobileMenu();
  initNavigationSpy();
});

