export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  sector: string;
  technologies: string[];
  date: string;
  duration: string;
  roi: string;
  image: string;
  tags: string[];
  metrics: {
    timeSaved: string;
    conversion: string;
    savings: string;
    satisfaction: string;
  };
  isNew?: boolean;
  isPopular?: boolean;
  isFeatured?: boolean;
  isComingSoon?: boolean;
  blogUrl?: string;
  demoUrl?: string;
  clientTestimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'automatisation-agences-immobilieres',
    title: 'Automatisation Complète pour Agences Immobilières',
    shortDescription: 'Développement d\'un écosystème complet d\'automatisations via N8N et d\'outils visuels Lovable pour agences immobilières. Centralisation de la qualification de leads, publication multi-plateformes, gestion locative et reporting.',
    fullDescription: `Projet de transformation digitale complète pour agences immobilières.
    
**Contexte :** Les agences perdaient 15h/semaine en tâches répétitives (qualification leads, publication annonces, gestion locative).

**Solution :** 5 automatisations + 2 outils métier développés :
- Qualification & scoring automatique des leads
- Emails & relances post-visite automatiques
- Intégration CRM multi-outils
- Publication multi-plateformes (6 portails en 12 min)
- Gestion locative automatisée (incidents, loyers, quittances)
- Home Staging Virtuel IA
- Comparateur États des Lieux IA

**Résultats :**
- 87% de temps économisé
- +40% de conversion leads
- +3 200€/agent/mois économisés
- 4.9/5 satisfaction client`,
    sector: 'Agence Immobilière',
    technologies: ['N8N Automation', 'Lovable', 'IA & Machine Learning', 'Dashboard & Analytics', 'Intégrations API'],
    date: '2024-11-01',
    duration: '6 semaines',
    roi: '+87% efficacité',
    image: '/projects/agence-immo-dashboard.jpg',
    tags: ['Immobilier', 'Automatisation', 'N8N', 'Lovable', 'Dashboard', 'IA'],
    metrics: {
      timeSaved: '15h/semaine',
      conversion: '+40%',
      savings: '3 200€/mois',
      satisfaction: '4.9/5'
    },
    isNew: true,
    isPopular: true,
    isFeatured: true,
    blogUrl: '/blog/automatisation-agences-immobilieres',
    demoUrl: '/agences-immobilieres',
    clientTestimonial: {
      quote: "Spydercom a transformé notre agence. On a gagné 15h par semaine et doublé notre volume de leads traités.",
      author: "Sophie Martin",
      role: "Directrice",
      company: "Martin Immobilier Paris"
    }
  },
  {
    id: 2,
    slug: 'coming-soon-restaurant',
    title: 'Automatisation Restaurant (À venir)',
    shortDescription: 'Projet en cours de développement...',
    fullDescription: 'Système d\'automatisation complet pour restaurants : gestion des réservations, commandes en ligne, fidélisation client et analytics.',
    sector: 'Restauration',
    technologies: ['N8N Automation'],
    date: '2024-12-01',
    duration: 'TBD',
    roi: 'TBD',
    image: '/projects/placeholder.jpg',
    tags: ['Restauration', 'Réservations'],
    metrics: {
      timeSaved: 'TBD',
      conversion: 'TBD',
      savings: 'TBD',
      satisfaction: 'TBD'
    },
    isComingSoon: true
  },
  {
    id: 3,
    slug: 'coming-soon-ecommerce',
    title: 'E-commerce Automatisé (À venir)',
    shortDescription: 'Projet en préparation...',
    fullDescription: 'Solution e-commerce complète avec automatisation des commandes, gestion du stock, et marketing automation.',
    sector: 'E-commerce',
    technologies: ['N8N Automation', 'Intégrations API'],
    date: '2025-01-01',
    duration: 'TBD',
    roi: 'TBD',
    image: '/projects/placeholder.jpg',
    tags: ['E-commerce', 'Automatisation'],
    metrics: {
      timeSaved: 'TBD',
      conversion: 'TBD',
      savings: 'TBD',
      satisfaction: 'TBD'
    },
    isComingSoon: true
  }
];

export const sectors = [
  '🏠 Tous les secteurs',
  '🏢 Agence Immobilière',
  '🍽️ Restauration',
  '🏥 Santé & Bien-être',
  '🛍️ E-commerce',
  '🎓 Éducation & Formation',
  '💼 Services B2B',
  '🏗️ BTP & Construction'
];

export const technologies = [
  '⚙️ N8N Automation',
  '🎨 Lovable (No-code)',
  '🤖 IA & Machine Learning',
  '📊 Dashboard & Analytics',
  '🔗 Intégrations API',
  '📱 Application Mobile',
  '🌐 Site Web'
];
