const WHATSAPP_NUMBER = "33778565917";
const WHATSAPP_MESSAGE = encodeURIComponent("Bonjour, je suis intéressé par vos services MT03. Pouvons-nous en discuter ?");

export const useCalendly = () => {
  const openCalendly = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank"
    );
  };

  return { openCalendly };
};
