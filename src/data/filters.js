// Portfolio content-type filter bar. "value: null" means "show everything".
// Keep this in sync with the `category` values used in portfolio.js —
// valid categories are ONLY: "UGC" | "CINEMATIC" | "VOICEOVER" | "LIFESTYLE".
// Order matters: this is the exact left-to-right order the filter bar renders in.
const filters = [
  { label: "All", value: null },
  { label: "UGC", value: "UGC" },
  { label: "Cinematic", value: "CINEMATIC" },
  { label: "Voiceover", value: "VOICEOVER" },
  { label: "Lifestyle", value: "LIFESTYLE" },
];

export default filters;
