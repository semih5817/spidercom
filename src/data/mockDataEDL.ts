export const edlMockData = {
  comparisons: [
    {
      id: 1,
      date: '02/11/2024',
      property: '12 rue de la Paix, 75002',
      tenant: 'Sophie Martin',
      type: 'Sortie',
      differences: 4,
      differencesDetail: { major: 2, minor: 2 },
      amount: 300,
      status: 'partial_retention',
      items: [
        { room: 'Salon', element: 'Murs', entry: 'Bon état', exit: 'Trou 5cm + griffures', category: 'major', amount: 120 },
        { room: 'Cuisine', element: 'Robinet', entry: 'Neuf', exit: 'Fuite légère', category: 'minor', amount: 85 },
        { room: 'Chambre', element: 'Parquet', entry: 'Très bon état', exit: 'Rayures légères', category: 'normal', amount: 0 },
        { room: 'Entrée', element: 'Porte palier', entry: 'Intact', exit: 'Poignée cassée', category: 'major', amount: 65 },
      ]
    },
    {
      id: 2,
      date: '28/10/2024',
      property: '45 av des Champs, 75008',
      tenant: 'Marc Dubois',
      type: 'Sortie',
      differences: 0,
      differencesDetail: { major: 0, minor: 0 },
      amount: 0,
      status: 'full_return',
      items: []
    },
    {
      id: 3,
      date: '15/10/2024',
      property: '8 bd Saint-Germain, 75005',
      tenant: 'Julie Petit',
      type: 'Sortie',
      differences: 7,
      differencesDetail: { major: 5, minor: 2 },
      amount: 650,
      status: 'major_retention',
      items: [
        { room: 'Salon', element: 'Murs', entry: 'Bon état', exit: 'Taches humidité', category: 'major', amount: 180 },
        { room: 'Cuisine', element: 'Plaque cuisson', entry: 'Neuve', exit: 'Cassée', category: 'major', amount: 220 },
        { room: 'SDB', element: 'Carrelage', entry: 'Intact', exit: 'Fissuré', category: 'major', amount: 150 },
      ]
    },
    {
      id: 4,
      date: '10/10/2024',
      property: '23 rue du Temple, 75003',
      tenant: 'Claire Rousseau',
      type: 'Sortie',
      differences: 2,
      differencesDetail: { major: 1, minor: 1 },
      amount: 150,
      status: 'partial_retention',
      items: []
    },
    {
      id: 5,
      date: '05/10/2024',
      property: '67 bd Voltaire, 75011',
      tenant: 'Antoine Bernard',
      type: 'Sortie',
      differences: 0,
      differencesDetail: { major: 0, minor: 0 },
      amount: 0,
      status: 'full_return',
      items: []
    },
    {
      id: 6,
      date: '28/09/2024',
      property: '14 rue Oberkampf, 75011',
      tenant: 'Laura Martinez',
      type: 'Sortie',
      differences: 3,
      differencesDetail: { major: 2, minor: 1 },
      amount: 280,
      status: 'partial_retention',
      items: []
    },
    {
      id: 7,
      date: '20/09/2024',
      property: '89 av Parmentier, 75010',
      tenant: 'Paul Girard',
      type: 'Sortie',
      differences: 1,
      differencesDetail: { major: 0, minor: 1 },
      amount: 45,
      status: 'partial_retention',
      items: []
    },
    {
      id: 8,
      date: '12/09/2024',
      property: '31 rue des Martyrs, 75009',
      tenant: 'Emma Leroy',
      type: 'Sortie',
      differences: 0,
      differencesDetail: { major: 0, minor: 0 },
      amount: 0,
      status: 'full_return',
      items: []
    },
    {
      id: 9,
      date: '05/09/2024',
      property: '55 rue de Charonne, 75011',
      tenant: 'Lucas Moreau',
      type: 'Sortie',
      differences: 5,
      differencesDetail: { major: 3, minor: 2 },
      amount: 420,
      status: 'partial_retention',
      items: []
    },
    {
      id: 10,
      date: '28/08/2024',
      property: '12 rue Amelot, 75011',
      tenant: 'Sarah Cohen',
      type: 'Sortie',
      differences: 1,
      differencesDetail: { major: 1, minor: 0 },
      amount: 180,
      status: 'partial_retention',
      items: []
    }
  ],

  detectionExamples: [
    {
      id: 1,
      title: 'Mur avec trou',
      beforeDesc: 'Mur blanc intact',
      beforeImage: '/src/assets/edl/mur-blanc-intact.png',
      afterDesc: 'Trou + griffures',
      afterImage: '/src/assets/edl/mur-endommage.png',
      badge: 'major' as const,
      badgeText: '🔴 Dégradation majeure',
      aiAnalysis: 'Trou 5cm + griffures chat. Retenue 120€ (réparation + peinture)',
      amount: 120
    },
    {
      id: 2,
      title: 'Robinet qui fuit',
      beforeDesc: 'Robinet neuf',
      afterDesc: 'Traces calcaire + gouttes',
      badge: 'minor' as const,
      badgeText: '⚠️ Dégradation mineure',
      aiAnalysis: 'Fuite légère + calcaire. Retenue 85€ (remplacement joint + détartrage)',
      amount: 85
    },
    {
      id: 3,
      title: 'Parquet rayé',
      beforeDesc: 'Parquet impeccable',
      afterDesc: 'Légères rayures',
      badge: 'normal' as const,
      badgeText: '✅ Usure normale',
      aiAnalysis: 'Rayures superficielles compatibles avec durée location (3 ans). Pas de retenue.',
      amount: 0
    },
    {
      id: 4,
      title: 'Poignée cassée',
      beforeDesc: 'Poignée intacte',
      afterDesc: 'Poignée arrachée',
      badge: 'major' as const,
      badgeText: '🔴 Dégradation majeure',
      aiAnalysis: 'Poignée porte palier arrachée. Retenue 65€ (remplacement)',
      amount: 65
    },
    {
      id: 5,
      title: 'Évier propre',
      beforeDesc: 'Évier neuf',
      afterDesc: 'Traces d\'usage',
      badge: 'normal' as const,
      badgeText: '✅ Normal',
      aiAnalysis: 'Traces d\'usage normales. Propreté OK. Pas de retenue.',
      amount: 0
    },
    {
      id: 6,
      title: 'Carrelage fissuré',
      beforeDesc: 'Carrelage intact',
      afterDesc: 'Fissure visible',
      badge: 'major' as const,
      badgeText: '🔴 Dégradation',
      aiAnalysis: 'Fissure carrelage salle de bain (15cm). Retenue 180€ (remplacement carreau)',
      amount: 180
    }
  ],

  testimonials: [
    {
      quote: "J'ai divisé par 20 le temps de comparaison. Et surtout, ZÉRO litige oublié depuis 8 mois. Le rapport IA est tellement détaillé que les locataires ne contestent jamais.",
      name: "Thomas Legrand",
      position: "Gestionnaire locatif",
      company: "Immo Gestion Paris - 230 biens",
      stats: "230 biens • 18 mois d'utilisation • 0 litige",
      rating: 5
    },
    {
      quote: "Le rapport a été accepté tel quel par le tribunal. Le juge a même dit 'voilà ce que devrait être un état des lieux moderne'. On a gagné 680€ de retenue contestée.",
      name: "Sophie Martin",
      position: "Directrice d'agence",
      company: "Martin Immobilier Lyon",
      stats: "47 biens • Gain procès 680€",
      rating: 5
    },
    {
      quote: "Avant je stressais à chaque sortie de locataire. Maintenant c'est automatique, je dors tranquille. Et mes locataires apprécient la transparence du rapport IA.",
      name: "Marc Dubois",
      position: "Propriétaire-bailleur",
      company: "12 biens à Paris",
      stats: "12 biens • 24 EDL traités • +3h/semaine",
      rating: 5
    }
  ],

  stats: {
    monthlyComparisons: 156,
    avgTime: 2.3,
    fullReturnRate: 87,
    avgRetention: 180,
    errorRate: 0,
    legalCompliance: 100
  }
};
