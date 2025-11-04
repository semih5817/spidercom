export interface Ticket {
  id: number;
  type: 'plomberie' | 'electricite' | 'chauffage' | 'serrurerie' | 'loyer' | 'admin';
  icon: string;
  title: string;
  tenant: string;
  property: string;
  urgency: 'urgent' | 'normal' | 'faible';
  status: 'new' | 'inprogress' | 'resolved';
  created: string;
  automated: boolean;
  assignedTo: string | null;
  description?: string;
}

export const mockTickets: Ticket[] = [
  {
    id: 1,
    type: 'plomberie',
    icon: '💧',
    title: 'Fuite chauffe-eau salle de bain',
    tenant: 'Sophie Martin',
    property: '12 rue de la Paix, 75002',
    urgency: 'urgent',
    status: 'new',
    created: 'Il y a 12 min',
    automated: true,
    assignedTo: null,
    description: 'Le chauffe-eau fuit depuis ce matin. Eau qui coule dans la salle de bain.'
  },
  {
    id: 2,
    type: 'electricite',
    icon: '⚡',
    title: 'Disjoncteur qui saute régulièrement',
    tenant: 'Marc Dubois',
    property: '45 av des Champs, 75008',
    urgency: 'normal',
    status: 'inprogress',
    created: 'Il y a 2h',
    automated: true,
    assignedTo: 'Électricité Pro',
    description: 'Disjoncteur principal qui saute 2-3 fois par jour depuis une semaine.'
  },
  {
    id: 3,
    type: 'chauffage',
    icon: '🔥',
    title: 'Chauffage ne fonctionne plus',
    tenant: 'Julie Petit',
    property: '8 bd Saint-Germain, 75005',
    urgency: 'urgent',
    status: 'inprogress',
    created: 'Il y a 4h',
    automated: true,
    assignedTo: 'Chauffage Plus',
    description: 'Plus de chauffage depuis hier soir. Appartement très froid.'
  },
  {
    id: 4,
    type: 'serrurerie',
    icon: '🔑',
    title: 'Clé cassée dans la serrure',
    tenant: 'Pierre Durant',
    property: '23 rue Lepic, 75018',
    urgency: 'normal',
    status: 'resolved',
    created: 'Hier',
    automated: true,
    assignedTo: 'Serrurier 24h',
    description: 'Clé cassée en ouvrant la porte. Impossible d\'ouvrir.'
  },
  {
    id: 5,
    type: 'loyer',
    icon: '💰',
    title: 'Loyer impayé depuis 5 jours',
    tenant: 'Emma Bernard',
    property: '67 rue de Rennes, 75006',
    urgency: 'normal',
    status: 'inprogress',
    created: 'Il y a 6h',
    automated: true,
    assignedTo: 'Relance auto',
    description: 'Loyer de novembre non reçu. Relance automatique envoyée.'
  },
  {
    id: 6,
    type: 'admin',
    icon: '📄',
    title: 'Demande quittance octobre',
    tenant: 'Thomas Leroy',
    property: '91 rue La Boétie, 75008',
    urgency: 'faible',
    status: 'resolved',
    created: 'Hier',
    automated: true,
    assignedTo: 'Auto PDF',
    description: 'Demande de quittance pour le mois d\'octobre. Envoyée automatiquement.'
  }
];
