import roomEmpty from "@/assets/staging/room-empty-new.png";
import roomDecoratedDay from "@/assets/staging/room-decorated-day-new.png";
import roomDecoratedNight from "@/assets/staging/room-decorated-night-new.png";
import roomEmptyMinimalist from "@/assets/staging/room-empty-minimalist.png";
import roomDecoratedMinimalist from "@/assets/staging/room-decorated-minimalist.png";
import roomEmptyBoheme from "@/assets/staging/room-empty-boheme.png";
import roomDecoratedBoheme from "@/assets/staging/room-decorated-boheme.png";
import roomEmptyParisien from "@/assets/staging/room-empty-parisien.png";
import roomDecoratedParisien from "@/assets/staging/room-decorated-parisien.png";
import roomEmptyLuxe from "@/assets/staging/room-empty-luxe.png";
import roomDecoratedLuxe from "@/assets/staging/room-decorated-luxe.png";

export interface Transformation {
  id: string;
  before: string;
  after: string;
  afterNight: string;
  style: string;
  rating: number;
  processingTime: number;
}

export const stagingStyles = [
  { id: "all", name: "Tous les styles", emoji: "🎨", color: "primary" },
  { id: "contemporain", name: "Contemporain", emoji: "✨", color: "secondary" },
  { id: "parisien", name: "Parisien", emoji: "🇫🇷", color: "primary" },
  { id: "minimaliste", name: "Minimaliste", emoji: "⬜", color: "white" },
  { id: "boheme", name: "Bohème", emoji: "🌺", color: "pink-500" },
  { id: "luxe", name: "Luxe", emoji: "💎", color: "yellow-500" },
];

export const stagingTransformations: Transformation[] = [
  {
    id: "1",
    before: roomEmpty,
    after: roomDecoratedDay,
    afterNight: roomDecoratedNight,
    style: "Contemporain",
    rating: 4.8,
    processingTime: 2.1,
  },
  {
    id: "2",
    before: roomEmptyParisien,
    after: roomDecoratedParisien,
    afterNight: roomDecoratedParisien,
    style: "Parisien",
    rating: 4.9,
    processingTime: 1.8,
  },
  {
    id: "5",
    before: roomEmptyMinimalist,
    after: roomDecoratedMinimalist,
    afterNight: roomDecoratedMinimalist,
    style: "Minimaliste",
    rating: 4.9,
    processingTime: 1.9,
  },
  {
    id: "6",
    before: roomEmptyBoheme,
    after: roomDecoratedBoheme,
    afterNight: roomDecoratedBoheme,
    style: "Bohème",
    rating: 4.7,
    processingTime: 2.2,
  },
  {
    id: "7",
    before: roomEmptyLuxe,
    after: roomDecoratedLuxe,
    afterNight: roomDecoratedLuxe,
    style: "Luxe",
    rating: 4.8,
    processingTime: 2.0,
  },
];

export const stagingStats = {
  activeAutomations: 47,
  successRate: 98.5,
  photosToday: 234,
  avgProcessingTime: 2.1,
  satisfactionRate: 96.8,
  salesIncrease: 52,
};

export const weeklyData = [
  { day: "Lun", photos: 45 },
  { day: "Mar", photos: 62 },
  { day: "Mer", photos: 38 },
  { day: "Jeu", photos: 71 },
  { day: "Ven", photos: 55 },
  { day: "Sam", photos: 28 },
  { day: "Dim", photos: 42 },
];

export const styleDistribution = [
  { style: "Contemporain", percentage: 28 },
  { style: "Parisien", percentage: 22 },
  { style: "Scandinave", percentage: 18 },
  { style: "Minimaliste", percentage: 16 },
  { style: "Luxe", percentage: 16 },
];

export const conversionData = [
  { month: "Jan", rate: 2.3 },
  { month: "Fév", rate: 3.1 },
  { month: "Mar", rate: 3.8 },
  { month: "Avr", rate: 4.5 },
  { month: "Mai", rate: 5.2 },
  { month: "Juin", rate: 6.1 },
];

export const revenueData = [
  { month: "Jan", revenue: 12500 },
  { month: "Fév", revenue: 18700 },
  { month: "Mar", revenue: 23400 },
  { month: "Avr", revenue: 29800 },
  { month: "Mai", revenue: 35200 },
  { month: "Juin", revenue: 42600 },
];
