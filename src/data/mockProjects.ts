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
    isFeatured: false,
    blogUrl: '/blog/automatisation-agences-immobilieres',
    demoUrl: '/agences-immobilieres',
    clientTestimonial: {
      quote: "Spidercom a transformé notre agence. On a gagné 15h par semaine et doublé notre volume de leads traités.",
      author: "Sophie Martin",
      role: "Directrice",
      company: "Martin Immobilier Paris"
    }
  },
  {
    id: 2,
    slug: 'take-5-automatisation-google-business',
    title: 'Take 5 — Automatisation Google Business & IA Conversationnelle',
    shortDescription: 'Solution automatisée complète qui connecte Google Business Profile à WhatsApp et à une IA conversationnelle pour gérer les avis clients, analyser les métriques et envoyer des rapports mensuels automatiques.',
    fullDescription: `**Contexte :** Les commerçants locaux (restaurateurs, artisans, PME) passent 3-5h par mois à gérer manuellement leurs avis Google et perdent la vision d'ensemble de leur visibilité en ligne.

**Problème :** 
- Seulement 40% des avis reçoivent une réponse
- Aucun suivi structuré des performances Google Business
- Pas de temps pour analyser les données mensuelles
- Réponses souvent tardives ou génériques

**Solution Take 5 :**
Système d'automatisation complet en 4 étapes :

1️⃣ **Connexion API Google Business** (n8n)
   - Récupération quotidienne/hebdomadaire des données
   - Nombre de vues, appels, clics site, demandes d'itinéraire
   - Nouveaux avis et notes clients

2️⃣ **Analyse IA des avis** (OpenAI GPT)
   - Détection automatique du ton (positif/neutre/négatif)
   - Génération de réponses adaptées au contexte et ton de l'entreprise
   - Mode validation humaine optionnel (semi-automatique)

3️⃣ **Envoi automatique sur WhatsApp**
   - Rapport mensuel synthétique et visuel
   - Format : "Votre fiche Google a reçu 5 nouveaux avis ce mois-ci (4,8 ★). 2 appels et 34 visites du site. Résumé complet 👉 [PDF]"
   - Zéro besoin de se connecter à un dashboard

4️⃣ **Archivage & suivi**
   - Sauvegarde auto Google Drive/Notion/Airtable
   - Historique mensuel complet
   - Progression de la visibilité trackée

**Résultats :**
- Temps gestion avis : 3-5h/mois → 0,5h/mois (-85%)
- Taux de réponse aux avis : 40% → 100% (+60 points)
- Analyse mensuelle : 1h → instantané
- Satisfaction : +25% d'avis positifs en moyenne

**Cas concret :**
Restaurateur local avec 12 avis/mois qui passait 4h à répondre manuellement. Maintenant : IA répond automatiquement selon le ton, rapport WhatsApp chaque 1er du mois. Gain net : +3,5h/mois + suivi instantané.`,
    sector: 'Restauration',
    technologies: ['N8N Automation', 'IA & Machine Learning', 'Intégrations API', 'Dashboard & Analytics'],
    date: '2024-10-15',
    duration: '4 semaines',
    roi: '+85% efficacité',
    image: '/projects/take5-dashboard.jpg',
    tags: ['Restauration', 'Google Business', 'WhatsApp', 'IA Conversationnelle', 'Avis Clients', 'N8N'],
    metrics: {
      timeSaved: 'Full automatique',
      conversion: '+60% réponse avis',
      savings: '—',
      satisfaction: '+25% avis positifs'
    },
    isNew: true,
    isPopular: true,
    isFeatured: true,
    blogUrl: null,
    demoUrl: null,
    clientTestimonial: {
      quote: "Avant Take 5, je passais mes soirées à répondre aux avis Google. Maintenant l'IA le fait pour moi avec un ton parfait, et je reçois un rapport clair chaque mois sur WhatsApp. C'est magique.",
      author: "Jean-Pierre Fontaine",
      role: "Propriétaire",
      company: "Restaurant Le Petit Zinc - Lyon"
    }
  },
  {
    id: 3,
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
    id: 4,
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
