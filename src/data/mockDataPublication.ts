export const mockDataPublication = {
  kpi: {
    time_manual_min: 100,
    time_auto_min: 12,
    error_rate_manual: 0.18,
    error_rate_auto: 0.02,
    visibility_boost_pct: 25,
    properties_per_week_avg: 25,
    platforms_count: 6
  },
  
  platforms: [
    { id: 'seloger', name: 'SeLoger', icon: '🏠', color: '#f59e0b', market_share: 28 },
    { id: 'leboncoin', name: 'Leboncoin', icon: '🔵', color: '#3b82f6', market_share: 35 },
    { id: 'bienici', name: "Bien'ici", icon: '🏡', color: '#8b5cf6', market_share: 18 },
    { id: 'logic', name: 'Logic-Immo', icon: '📊', color: '#10b981', market_share: 12 },
    { id: 'facebook', name: 'Facebook', icon: '📘', color: '#06b6d4', market_share: 15 },
    { id: 'google', name: 'Google Business', icon: '🔍', color: '#ef4444', market_share: 10 }
  ],
  
  roi_calculation: {
    tjm_eur: 35,
    time_saved_per_property_min: 88,
    cost_per_error_eur: 45,
    payback_days: 7
  },
  
  benchmarks: {
    publication_time_industry: "90-120 min",
    error_rate_industry: "15-20%",
    automation_adoption: "12%",
    visibility_loss_manual: "30-35%"
  },
  
  sources: [
    { title: "Real Estate Tech Report", source: "PropTech France", year: 2024 },
    { title: "Multi-listing efficiency study", source: "Century 21 Insights", year: 2024 },
    { title: "Automation in real estate", source: "JLL Research", year: 2023 }
  ]
};
