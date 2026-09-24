/**
 * Portfolio Engine - KAMGANG TALLA ENZO WARREN
 * Web Developer | Community Manager | Digital Marketer
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
    hero_subtitle: "Développeur Web & Stratège Marketing Digital / Community Manager",
    hero_bio: "J'architecture des applications web & mobiles robustes et je conçois des stratégies digitales à fort impact. Expert en écosystèmes modernes (React, Next.js, Node.js), growth marketing et animation de communautés engagées.",
    hero_contact_btn: "Me Contacter",
    hero_explore_btn: "Explorer mes Projets",
    hero_status: "Disponible pour nouveaux projets",
    exp_badge_years: "03+",
    exp_badge_text: "Ans d'Expérience\nTech & Marketing",
    about_title: "Découvrez mon Parcours & ma Double Expertise !",
    about_desc: "Passionné par l'alliance entre ingénierie logicielle et croissance digitale, je transforme les idées audacieuses en plateformes performantes et scalables. Mon expertise combine le développement de solutions web/mobiles de bout en bout et le déploiement de stratégies d'acquisition, de content marketing et de community building orientées résultats.",
    about_hire_btn: "Me Recruter",
    about_cv_btn: "Télécharger mon CV",
    hero_cv_btn: "Télécharger CV",
    cv_modal_title: "TÉLÉCHARGER MON CV",
    cv_modal_desc: "Choisissez la déclinaison correspondant au profil recherché pour vos projets :",
    cv_dev_title: "CV Développeur Web",
    cv_dev_desc: "Spécialisation Développement Web : JavaScript, PHP, Python, architectures web performantes, plateformes sur-mesure et intégration d'APIs.",
    cv_marketing_title: "CV Digital Marketing & CM",
    cv_marketing_desc: "Spécialisation Croissance & Animation : Campagnes Meta & Google Ads, stratégie éditoriale, community management et acquisition.",
    cv_action_view: "Aperçu",
    cv_action_download: "Télécharger",
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
    contact_desc: "Actuellement ouvert aux opportunités en Développement Web, Community Management et Marketing Digital. Discutons de votre prochain projet !",
    contact_identity: "KAMGANG TALLA ENZO WARREN",
    contact_role: "Développeur Web & Stratège Digital",
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
    hero_subtitle: "Web Developer & Digital Marketing / Community Manager",
    hero_bio: "I architect scalable web & mobile apps and drive high-impact digital strategies. Specialized in modern frameworks (React, Next.js, Node.js), growth marketing, and building high-converting engaged communities.",
    hero_contact_btn: "Contact Me",
    hero_explore_btn: "Explore My Work",
    hero_status: "Available for new projects",
    exp_badge_years: "03+",
    exp_badge_text: "Years Experience\nTech & Marketing",
    about_title: "Explore My Journey & Dual Skillset!",
    about_desc: "Driven by the synergy between software engineering and digital growth, I turn ambitious ideas into fast, reliable platforms. My experience bridges modern web development with acquisition campaigns, SEO/SEA, content strategy, and community leadership.",
    about_hire_btn: "Hire Me",
    about_cv_btn: "Download my CV",
    hero_cv_btn: "Download CV",
    cv_modal_title: "DOWNLOAD MY RESUME",
    cv_modal_desc: "Choose the resume version matching the profile you need for your projects:",
    cv_dev_title: "Web Developer Resume",
    cv_dev_desc: "Web Development Track: JavaScript, PHP, Python, performant web platforms, custom web tools, and REST APIs.",
    cv_marketing_title: "Digital Marketing & CM Resume",
    cv_marketing_desc: "Growth & Community Track: Meta & Google Ads campaigns, editorial strategy, community management, and user acquisition.",
    cv_action_view: "Preview",
    cv_action_download: "Download",
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
    contact_desc: "Currently open to opportunities in Web Development, Community Management, and Digital Marketing. Let's discuss your vision!",
    contact_identity: "KAMGANG TALLA ENZO WARREN",
    contact_role: "Web Developer & Digital Strategist",
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
    role: "DÉVELOPPEMENT WEB",
    category: "dev",
    title: { fr: "RÉSIDENCE MOLIÈRE - SITE WEB OFFICIEL", en: "RÉSIDENCE MOLIÈRE - OFFICIAL WEBSITE" },
    shortDesc: {
      fr: "Conception et développement du site web vitrine haut standing de la Résidence Molière : présentation des appartements meublés, commodités et module de réservation directe.",
      en: "Design and development of the premium showcase website for Résidence Molière: luxury furnished apartments, amenities, and direct reservation inquiries."
    },
    fullDesc: {
      fr: "Création complète de la plateforme web de la Résidence Molière. Interface responsive immersive, galeries photos optimisées, intégration de demandes de réservation directes (WhatsApp & formulaires) et référencement SEO local pour maximiser les séjours.",
      en: "Complete creation of the Résidence Molière web platform. Immersive responsive UI, optimized photo galleries, direct booking inquiry integration (WhatsApp & forms), and local SEO to maximize bookings."
    },
    tech: ["HTML5 / CSS3", "JavaScript", "PHP", "Responsive Design", "SEO Local"],
    metrics: [
      { label: { fr: "RÉSERVATIONS", en: "BOOKINGS" }, value: "+120%" },
      { label: { fr: "CHARGEMENT", en: "LOAD SPEED" }, value: "0.8s" },
      { label: { fr: "PERFORMANCE", en: "PERFORMANCE" }, value: "98/100" }
    ]
  },
  {
    id: "p2",
    index: "02.",
    role: "DÉVELOPPEMENT WEB CORPORATE",
    category: "dev",
    title: { fr: "F2NLOGISTICS - PLATEFORME DIGITALE", en: "F2NLOGISTICS - CORPORATE WEB PORTAL" },
    shortDesc: {
      fr: "Plateforme web d'entreprise pour F2NLogistics : présentation des solutions de fret international, transit, dédouanement et formulaire intelligent de cotation en ligne.",
      en: "Corporate web portal for F2NLogistics: international freight forwarding, customs clearance, transit services, and online quotation system."
    },
    fullDesc: {
      fr: "Développement du portail corporate de F2NLogistics. Présentation dynamique des pôles logistiques (fret maritime, aérien et terrestre), formulaire intelligent de demande de cotation fret et optimisation mobile-first pour les partenaires internationaux.",
      en: "Development of the corporate portal for F2NLogistics. Dynamic presentation of multimodal logistics services (sea, air, road freight), smart quote request forms, and mobile-first optimization for international partners."
    },
    tech: ["JavaScript", "PHP", "CSS3 Modern", "Formulaires Dynamiques", "SEO"],
    metrics: [
      { label: { fr: "DEMANDES DEVIS", en: "QUOTE REQUESTS" }, value: "+85%" },
      { label: { fr: "TRAFIC MENSUEL", en: "MONTHLY VISITS" }, value: "5k+" },
      { label: { fr: "EXPÉRIENCE MOBILE", en: "MOBILE UX" }, value: "100%" }
    ]
  },
  {
    id: "p3",
    index: "03.",
    role: "APPLICATION WEB & GESTION (SAAS)",
    category: "dev",
    title: { fr: "F2NLOGISTICS - LOGICIEL DE FACTURATION", en: "F2NLOGISTICS - INVOICING SOFTWARE" },
    shortDesc: {
      fr: "Solution logicielle web sur-mesure de gestion commerciale et facturation pour F2NLogistics : devis, factures, bordereaux de livraison, suivi des règlements et exports.",
      en: "Custom web invoicing and commercial management software for F2NLogistics: quotes, invoices, delivery tracking, payment workflows, and financial exports."
    },
    fullDesc: {
      fr: "Conception et déploiement d'un logiciel web de facturation métier adapté aux opérations transit de F2NLogistics. Génération automatisée de documents PDF officiels, gestion multi-devises, suivi des créances clients et tableau de bord analytique en temps réel.",
      en: "Design and deployment of a dedicated web invoicing and management software tailored to F2NLogistics transit operations. Automated official PDF generation, multi-currency processing, receivables tracking, and real-time analytics dashboard."
    },
    tech: ["PHP", "JavaScript", "MySQL", "Génération PDF", "Dashboard Analytics"],
    metrics: [
      { label: { fr: "GAIN DE TEMPS", en: "TIME SAVED" }, value: "-60%" },
      { label: { fr: "FACTURES GÉRÉES", en: "INVOICES" }, value: "1,500+" },
      { label: { fr: "PRÉCISION", en: "ACCURACY" }, value: "100%" }
    ]
  },
  {
    id: "p4",
    index: "04.",
    role: "COMMUNITY MANAGEMENT & GROWTH",
    category: "cm marketing",
    title: { fr: "RÉSIDENCE MOLIÈRE - GESTION DES RÉSEAUX", en: "RÉSIDENCE MOLIÈRE - SOCIAL MEDIA MANAGEMENT" },
    shortDesc: {
      fr: "Stratégie éditoriale, création de contenus visuels et animation des réseaux sociaux (Facebook, Instagram) pour booster la notoriété et le taux d'occupation de la Résidence Molière.",
      en: "Editorial strategy, visual content creation, and active community management across Facebook and Instagram to boost brand awareness and occupancy for Résidence Molière."
    },
    fullDesc: {
      fr: "Gestion globale des réseaux sociaux pour la Résidence Molière. Création de contenus photo/vidéo valorisant le standing des appartements, campagnes publicitaires Meta Ads ciblées pour les voyageurs et expatriés, et engagement communautaire réactif convertissant les interactions en réservations fermes.",
      en: "Comprehensive social media management for Résidence Molière. High-end photo and video content showcasing suites, targeted Meta Ads campaigns for travelers and expats, and prompt audience engagement converting inquiries into confirmed reservations."
    },
    tech: ["Meta Ads Manager", "Instagram & Facebook", "Stratégie de Contenu", "Canva / Montage", "Growth"],
    metrics: [
      { label: { fr: "TAUX OCCUPATION", en: "OCCUPANCY RATE" }, value: "+45%" },
      { label: { fr: "PORTÉE MENSUELLE", en: "MONTHLY REACH" }, value: "150k+" },
      { label: { fr: "RÉPONSE CLIENT", en: "RESPONSE TIME" }, value: "< 15 min" }
    ]
  }
];

// --- BASE DE DONNÉES DES CERTIFICATIONS ---
const certsData = [
  {
    id: "CERT-01",
    title: { fr: "Certification en JavaScript & Programmation Web", en: "JavaScript & Modern Web Programming Certification" },
    issuer: "Accréditation Développement Web & Algorithmique",
    desc: {
      fr: "Validation approfondie des compétences en JavaScript moderne (ES6+), programmation asynchrone (Promises, Async/Await), manipulation dynamique du DOM, architecture modulaire et intégration d'APIs REST.",
      en: "In-depth validation of modern JavaScript (ES6+), asynchronous programming (Promises, Async/Await), dynamic DOM manipulation, modular architecture, and REST API integration."
    },
    skills: [
      "JavaScript moderne (ES6+ / ESNext)",
      "Programmation asynchrone (Fetch, Async/Await, Web APIs)",
      "Architecture modulaire et POO / Design Patterns",
      "Optimisation des performances et Debugging Chrome DevTools"
    ]
  },
  {
    id: "CERT-02",
    title: { fr: "Développement Web & Architecture Logicielle", en: "Web Development & Software Architecture" },
    issuer: "Certification Professionnelle / Tech Validation",
    desc: {
      fr: "Validation approfondie en architecture web, développement PHP, Python, bases de données relationnelles, sécurité web et création d'applications performantes.",
      en: "Comprehensive validation in web architecture, PHP, Python development, relational databases, web security protocols, and performant application construction."
    },
    skills: [
      "JavaScript, PHP, Python & Frameworks modernes",
      "Conception d'APIs sécurisées (JWT, OAuth, CORS)",
      "Bases de données SQL (MySQL, PostgreSQL) & ORM",
      "Déploiement continu (CI/CD, Docker, Vercel)"
    ]
  },
  {
    id: "CERT-03",
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
    id: "CERT-04",
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
    id: "CERT-05",
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
      closeCvModal();
    }
  });

  // Initialiser les modules
  initCanvasAnimation();
  init3DTiltEffect();
  initContactForm();
  initScrollInteractions();
  initMobileMenu();
  initNavigationSpy();
  initCvModal();
});

// --- GESTION DE LA MODALE CV ---
function openCvModal() {
  const modal = document.getElementById('cvModalOverlay');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCvModal() {
  const modal = document.getElementById('cvModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function initCvModal() {
  document.getElementById('heroCvBtn')?.addEventListener('click', openCvModal);
  document.getElementById('aboutCvBtn')?.addEventListener('click', openCvModal);
  document.getElementById('cvModalCloseBtn')?.addEventListener('click', closeCvModal);
  document.getElementById('cvModalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'cvModalOverlay') {
      closeCvModal();
    }
  });
}

