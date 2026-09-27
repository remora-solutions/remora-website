// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change contact details.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Remora",
  whatsappNumber: "919037099672",
  whatsappMessage: "Hi Remora, I'd like to talk about my business.",
  email: "hello@yourdomain.com",
};

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;
export const emailLink = `mailto:${site.email}`;

// Structural data only — colors, keys. Translated text lives in lib/i18n.js.
// color: red | yellow | blue | green (the four colors of the Remora logo)
export const backboneNodes = [
  { key: "erp", color: "yellow" },
  { key: "automation", color: "blue" },
  { key: "voice", color: "red" },
  { key: "rag", color: "green" },
  { key: "agentic", color: "blue" },
];

export const audiences = [
  { color: "yellow" },
  { color: "blue" },
  { color: "green" },
  { color: "red" },
];

export const outcomes = [
  { color: "red" },
  { color: "blue" },
  { color: "green" },
  { color: "yellow" },
];
