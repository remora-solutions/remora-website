// Prefixes a public/ asset path with the base path GitHub Pages needs
// (e.g. "/remora-website"), so images keep working on project sites.
export function asset(path) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}
