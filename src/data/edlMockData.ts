export interface EDLDossier {
  id: string;
  nomLocataire: string;
  adresse: string;
  dateEntree: string;
  dateSortie?: string;
  loyer: number;
  caution: number;
  statut: "en_attente" | "termine" | "analyse_en_cours";
  photosEntree: string[];
  photosSortie?: string[];
  rapportId?: string;
}

export interface Anomalie {
  id: string;
  piece: string;
  description: string;
  severite: "conforme" | "a_verifier" | "non_conforme";
  photoEntree: string;
  photoSortie: string;
  // Coordonnées du cercle rouge (x, y en %, radius en %)
  annotation?: {
    x: number;
    y: number;
    radius: number;
  };
}

export interface EDLRapport {
  id: string;
  dossierId: string;
  dateGeneration: string;
  scoreGlobal: number; // 0-100
  tempAnalyse: number; // en secondes
  anomalies: Anomalie[];
  statistiques: {
    conforme: number;
    aVerifier: number;
    nonConforme: number;
  };
  montantRetenuEstime: number;
}

// Photos mockées (on utilise des URLs Unsplash pour la démo)
const PHOTOS_MOCK = {
  cuisine_entree: "https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=800",
  cuisine_sortie: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
  salon_entree: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
  salon_sortie: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
  chambre_entree: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
  chambre_sortie: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800",
  sdb_entree: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800",
  sdb_sortie: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
  wc_entree: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800",
  wc_sortie: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800",
};

// Dossiers mockés (3-5 exemples)
export const mockDossiers: EDLDossier[] = [
  {
    id: "doss-001",
    nomLocataire: "Sophie Dupont",
    adresse: "15 rue de Paris, 75009 Paris",
    dateEntree: "2023-01-15",
    dateSortie: "2024-10-30",
    loyer: 1200,
    caution: 2400,
    statut: "termine",
    photosEntree: [
      PHOTOS_MOCK.cuisine_entree,
      PHOTOS_MOCK.salon_entree,
      PHOTOS_MOCK.chambre_entree,
      PHOTOS_MOCK.sdb_entree,
    ],
    photosSortie: [
      PHOTOS_MOCK.cuisine_sortie,
      PHOTOS_MOCK.salon_sortie,
      PHOTOS_MOCK.chambre_sortie,
      PHOTOS_MOCK.sdb_sortie,
    ],
    rapportId: "rapp-001",
  },
  {
    id: "doss-002",
    nomLocataire: "Thomas Martin",
    adresse: "8 avenue Victor Hugo, 75116 Paris",
    dateEntree: "2022-06-01",
    dateSortie: "2024-11-05",
    loyer: 1800,
    caution: 3600,
    statut: "termine",
    photosEntree: [
      PHOTOS_MOCK.salon_entree,
      PHOTOS_MOCK.cuisine_entree,
      PHOTOS_MOCK.chambre_entree,
    ],
    photosSortie: [
      PHOTOS_MOCK.salon_sortie,
      PHOTOS_MOCK.cuisine_sortie,
      PHOTOS_MOCK.chambre_sortie,
    ],
    rapportId: "rapp-002",
  },
  {
    id: "doss-003",
    nomLocataire: "Marie Leblanc",
    adresse: "42 boulevard Voltaire, 75011 Paris",
    dateEntree: "2024-03-10",
    dateSortie: "2024-11-01",
    loyer: 950,
    caution: 1900,
    statut: "termine",
    photosEntree: [
      PHOTOS_MOCK.cuisine_entree,
      PHOTOS_MOCK.chambre_entree,
      PHOTOS_MOCK.sdb_entree,
      PHOTOS_MOCK.wc_entree,
    ],
    photosSortie: [
      PHOTOS_MOCK.cuisine_sortie,
      PHOTOS_MOCK.chambre_sortie,
      PHOTOS_MOCK.sdb_sortie,
      PHOTOS_MOCK.wc_sortie,
    ],
    rapportId: "rapp-003",
  },
  {
    id: "doss-004",
    nomLocataire: "Pierre Durand",
    adresse: "23 rue de la République, 75003 Paris",
    dateEntree: "2024-08-01",
    loyer: 1350,
    caution: 2700,
    statut: "en_attente",
    photosEntree: [
      PHOTOS_MOCK.salon_entree,
      PHOTOS_MOCK.cuisine_entree,
      PHOTOS_MOCK.chambre_entree,
      PHOTOS_MOCK.sdb_entree,
    ],
  },
  {
    id: "doss-005",
    nomLocataire: "Julie Moreau",
    adresse: "156 rue du Faubourg Saint-Denis, 75010 Paris",
    dateEntree: "2024-09-15",
    loyer: 1100,
    caution: 2200,
    statut: "en_attente",
    photosEntree: [
      PHOTOS_MOCK.cuisine_entree,
      PHOTOS_MOCK.salon_entree,
      PHOTOS_MOCK.chambre_entree,
    ],
  },
];

// Rapports mockés
export const mockRapports: EDLRapport[] = [
  {
    id: "rapp-001",
    dossierId: "doss-001",
    dateGeneration: "2024-10-30T14:30:00",
    scoreGlobal: 78,
    tempAnalyse: 42,
    statistiques: {
      conforme: 3,
      aVerifier: 0,
      nonConforme: 1,
    },
    montantRetenuEstime: 320,
    anomalies: [
      {
        id: "anom-001",
        piece: "Cuisine",
        description: "Rayures importantes sur le plan de travail",
        severite: "non_conforme",
        photoEntree: PHOTOS_MOCK.cuisine_entree,
        photoSortie: PHOTOS_MOCK.cuisine_sortie,
        annotation: { x: 45, y: 60, radius: 8 },
      },
      {
        id: "anom-002",
        piece: "Salon",
        description: "Murs en bon état, pas de dégradation",
        severite: "conforme",
        photoEntree: PHOTOS_MOCK.salon_entree,
        photoSortie: PHOTOS_MOCK.salon_sortie,
      },
      {
        id: "anom-003",
        piece: "Chambre",
        description: "Parquet en excellent état",
        severite: "conforme",
        photoEntree: PHOTOS_MOCK.chambre_entree,
        photoSortie: PHOTOS_MOCK.chambre_sortie,
      },
      {
        id: "anom-004",
        piece: "Salle de bain",
        description: "Joint de douche propre",
        severite: "conforme",
        photoEntree: PHOTOS_MOCK.sdb_entree,
        photoSortie: PHOTOS_MOCK.sdb_sortie,
      },
    ],
  },
  {
    id: "rapp-002",
    dossierId: "doss-002",
    dateGeneration: "2024-11-05T10:15:00",
    scoreGlobal: 65,
    tempAnalyse: 38,
    statistiques: {
      conforme: 1,
      aVerifier: 1,
      nonConforme: 1,
    },
    montantRetenuEstime: 580,
    anomalies: [
      {
        id: "anom-005",
        piece: "Salon",
        description: "Tache importante sur le mur (humidité ou impact)",
        severite: "non_conforme",
        photoEntree: PHOTOS_MOCK.salon_entree,
        photoSortie: PHOTOS_MOCK.salon_sortie,
        annotation: { x: 30, y: 40, radius: 12 },
      },
      {
        id: "anom-006",
        piece: "Cuisine",
        description: "Léger éclat sur carrelage, à inspecter de près",
        severite: "a_verifier",
        photoEntree: PHOTOS_MOCK.cuisine_entree,
        photoSortie: PHOTOS_MOCK.cuisine_sortie,
        annotation: { x: 65, y: 75, radius: 6 },
      },
      {
        id: "anom-007",
        piece: "Chambre",
        description: "État conforme, pas de dégradation visible",
        severite: "conforme",
        photoEntree: PHOTOS_MOCK.chambre_entree,
        photoSortie: PHOTOS_MOCK.chambre_sortie,
      },
    ],
  },
  {
    id: "rapp-003",
    dossierId: "doss-003",
    dateGeneration: "2024-11-01T16:45:00",
    scoreGlobal: 92,
    tempAnalyse: 45,
    statistiques: {
      conforme: 3,
      aVerifier: 1,
      nonConforme: 0,
    },
    montantRetenuEstime: 0,
    anomalies: [
      {
        id: "anom-008",
        piece: "Cuisine",
        description: "Électroménager en parfait état",
        severite: "conforme",
        photoEntree: PHOTOS_MOCK.cuisine_entree,
        photoSortie: PHOTOS_MOCK.cuisine_sortie,
      },
      {
        id: "anom-009",
        piece: "Chambre",
        description: "Petite marque sur la plinthe, vérifier si pré-existante",
        severite: "a_verifier",
        photoEntree: PHOTOS_MOCK.chambre_entree,
        photoSortie: PHOTOS_MOCK.chambre_sortie,
        annotation: { x: 20, y: 85, radius: 5 },
      },
      {
        id: "anom-010",
        piece: "Salle de bain",
        description: "Robinetterie et sanitaires impeccables",
        severite: "conforme",
        photoEntree: PHOTOS_MOCK.sdb_entree,
        photoSortie: PHOTOS_MOCK.sdb_sortie,
      },
      {
        id: "anom-011",
        piece: "WC",
        description: "État conforme",
        severite: "conforme",
        photoEntree: PHOTOS_MOCK.wc_entree,
        photoSortie: PHOTOS_MOCK.wc_sortie,
      },
    ],
  },
];

// Fonction utilitaire pour calculer les stats globales
export const calculateGlobalStats = () => {
  const dossiersTermines = mockDossiers.filter((d) => d.statut === "termine");
  const totalDossiers = dossiersTermines.length;

  // Calcul temps gagné : 45 min - 45 sec = 44 min 15 sec par dossier
  const tempsGagneMinutes = totalDossiers * 44.25;
  const tempsGagneHeures = Math.floor(tempsGagneMinutes / 60);

  // Calcul argent économisé : 44.25 min × (35€/60min) × nombre dossiers
  const argentEconomise = Math.round(totalDossiers * 44.25 * (35 / 60));

  // Calcul litiges évités : dossiers avec au moins 1 non-conformité
  const litigesEvites = mockRapports.filter((r) =>
    r.anomalies.some((a) => a.severite === "non_conforme")
  ).length;

  // Score global moyen
  const scoreGlobalMoyen = Math.round(
    mockRapports.reduce((acc, r) => acc + r.scoreGlobal, 0) / mockRapports.length
  );

  // Stats par catégorie (total toutes anomalies)
  let totalConforme = 0;
  let totalAVerifier = 0;
  let totalNonConforme = 0;

  mockRapports.forEach((rapport) => {
    totalConforme += rapport.statistiques.conforme;
    totalAVerifier += rapport.statistiques.aVerifier;
    totalNonConforme += rapport.statistiques.nonConforme;
  });

  return {
    totalDossiers,
    tempsGagneHeures,
    tempsGagneMinutes: Math.round(tempsGagneMinutes),
    argentEconomise,
    litigesEvites,
    scoreGlobalMoyen,
    totalConforme,
    totalAVerifier,
    totalNonConforme,
  };
};
