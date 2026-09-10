/**
 * Normalizes orientation values coming from portfolio data into the
 * set of orientations the UI actually styles for: "portrait" | "landscape" | "square".
 *
 * Real client media is sometimes tagged "vertical" (matching how it's
 * referred to outside the codebase) — this maps that to "portrait" so
 * PortfolioCard/MediaViewer styling stays consistent without needing a
 * fourth CSS variant.
 */
export function normalizeOrientation(orientation) {
  if (orientation === "vertical") return "portrait";
  return orientation;
}
