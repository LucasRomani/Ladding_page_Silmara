export const fbTrack = (event, data = {}) => {
  if (typeof window.fbq !== "undefined") {
    window.fbq('track', event, data);
  } else {
    console.warn("Facebook Pixel não carregado ainda");
  }
};
