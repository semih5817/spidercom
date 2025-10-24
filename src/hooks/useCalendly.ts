export const useCalendly = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/semih-tuna/audit-gratuit-spydercom-30-min'
      });
    }
  };

  return { openCalendly };
};

// Type declaration for Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}
