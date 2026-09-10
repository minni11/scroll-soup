/**
 * PORTFOLIO DATA — edit this file to add or update real work.
 *
 * The portfolio is CATEGORY-FIRST, not property-first: `category` drives
 * the filter bar and grouping (All / UGC / Cinematic / Voiceover /
 * Lifestyle). `project` is just a label shown on the card — it never
 * creates a section, filter, or grouping of its own. Several entries can
 * (and do) share the same `project` name without being merged or grouped
 * — e.g. Mackenzie has entries across UGC, Cinematic, Voiceover and
 * Lifestyle, each a fully independent card.
 *
 * To add a new video:
 *   1. Upload it to Cloudinary (or drop a file into `src/assets/`).
 *   2. Copy one of the objects below and update its fields.
 *   3. Set `src` to the Cloudinary delivery URL / asset path. Leave
 *      `src: null` to keep an elegant placeholder tile instead.
 *
 * Field reference:
 *   id             unique string, used as the React key
 *   project        display label only — NOT a category/filter/section
 *   category       ONLY one of "UGC" | "CINEMATIC" | "VOICEOVER" |
 *                  "LIFESTYLE". LIFESTYLE is intentionally broad (couples,
 *                  friends, families, solo creators, dining, property
 *                  experiences, activities, travel moments, speed-ramp
 *                  edits, etc.) — there are no visible subcategories, and
 *                  a couple-featuring clip is not automatically Lifestyle
 *                  (see the Aspen UGC entry, kept as UGC on purpose).
 *   location       display location, or null when not yet known — never
 *                  invent one
 *   type           "video" | "image"
 *   src            Cloudinary delivery URL (or other path), or null for
 *                  a placeholder tile
 *   poster         optional poster image shown before a video plays
 *   orientation    "portrait" | "landscape" | "square" | "vertical"
 *                  ("vertical" is treated as portrait by the UI — see
 *                  src/utils/orientation.js)
 *   span           masonry sizing hint — "tall" | "wide" | "regular"
 *                  (only pair "wide" with landscape media — a portrait
 *                  clip spanning multiple columns would look stretched)
 *
 * ------------------------------------------------------------------
 * REAL SCROLL SOUP WORK — 29 real, Cloudinary-hosted client videos.
 * No locations, property types, or other details beyond what was
 * provided are invented. No placeholder cards are shown on the live site.
 * ------------------------------------------------------------------
 */
const portfolio = [
  // ---- UGC (8) --------------------------------------------------------
  {
    id: "ugc-gradure",
    project: "Gradure",
    category: "UGC",
    location: null,
    type: "video",
    // Same Cloudinary URL as the hero video (see heroVideo below) —
    // intentionally not re-uploaded/duplicated.
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789026145/gradure_ugc.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
  {
    id: "ugc-plutus",
    project: "Plutus",
    category: "UGC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789031860/Ugc_Plutus.mp4",
    poster: null,
    orientation: "vertical",
    span: "regular",
  },
  {
    id: "ugc-nebula",
    project: "Nebula",
    category: "UGC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789031857/ugc_nebula_2.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
  {
    id: "ugc-tree-house-aspen",
    project: "Tree House Aspen",
    category: "UGC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789031404/tree_house_aspen_ugc.mp4",
    poster: null,
    orientation: "vertical",
    span: "regular",
  },
  {
    id: "ugc-nebula-day-vs-night",
    project: "Nebula — Day vs Night",
    category: "UGC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789031188/nebula_day_vs_night_ugc.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
  {
    id: "ugc-mackenzie-1",
    project: "Mackenzie",
    category: "UGC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789031005/Mackenzie_Ugc_1.mp4",
    poster: null,
    orientation: "vertical",
    span: "regular",
  },
  {
    id: "ugc-aspen-couple",
    project: "Aspen",
    category: "UGC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789030976/Aspen_1_ugc_couple.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
  {
    id: "ugc-mackenzie-2",
    project: "Mackenzie",
    category: "UGC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789030930/makenzie_ugc.mp4",
    poster: null,
    orientation: "vertical",
    span: "regular",
  },

  // ---- CINEMATIC (14) ---------------------------------------------------
  {
    id: "cinematic-mackenzie-room-tour",
    project: "Mackenzie — Room Tour",
    category: "CINEMATIC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789034453/Maceknzie_room_tour_cinematic.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
  {
    id: "cinematic-plutus-1",
    project: "Plutus",
    category: "CINEMATIC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789034427/plutus_cinematic.mp4",
    poster: null,
    orientation: "vertical",
    span: "regular",
  },
  {
    id: "cinematic-plutus-2",
    project: "Plutus",
    category: "CINEMATIC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789033948/plutush_cinematic.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
  {
    id: "cinematic-mackenzie-property",
    project: "Mackenzie",
    category: "CINEMATIC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789033818/mackenzie_property_cinematic.mp4",
    poster: null,
    orientation: "vertical",
    span: "regular",
  },
  {
    id: "cinematic-vellora-1",
    project: "Vellora",
    category: "CINEMATIC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789033831/vellora_cinematic.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
  {
    id: "cinematic-puntush-1",
    project: "Puntush",
    category: "CINEMATIC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789033904/puntush_cinematic.mp4",
    poster: null,
    orientation: "vertical",
    span: "regular",
  },
  {
    id: "cinematic-wisteria-1",
    project: "Wisteria",
    category: "CINEMATIC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789033817/wisteria_cinematic.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
  {
    id: "cinematic-mackenzie-2",
    project: "Mackenzie",
    category: "CINEMATIC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789033800/mackenzie_cinematic.mp4",
    poster: null,
    orientation: "vertical",
    span: "regular",
  },
  {
    id: "cinematic-puntush-2",
    project: "Puntush",
    category: "CINEMATIC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789033773/puntush_cinematic_2.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
  {
    id: "cinematic-wisteria-2",
    project: "Wisteria",
    category: "CINEMATIC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789033728/wisteria_cinematic_2.mp4",
    poster: null,
    orientation: "vertical",
    span: "regular",
  },
  {
    id: "cinematic-vellora-2",
    project: "Vellora",
    category: "CINEMATIC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789033661/vellora_cinematic_2.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
  {
    id: "cinematic-mackenzie-3",
    project: "Mackenzie",
    category: "CINEMATIC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789033640/Mackenzi_cinematic_1_1.mp4",
    poster: null,
    orientation: "vertical",
    span: "regular",
  },
  {
    id: "cinematic-tree-house-aspen",
    project: "Tree House Aspen",
    category: "CINEMATIC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789033471/tree_house_cinemattic.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
  {
    id: "cinematic-nebula-hospitality",
    project: "Nebula — Hospitality Cinematic",
    category: "CINEMATIC",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789033288/Hospitality_cinematic_nebula.mp4",
    poster: null,
    orientation: "vertical",
    span: "regular",
  },

  // ---- VOICEOVER (2) ------------------------------------------------
  {
    id: "voiceover-mackenzie",
    project: "Mackenzie — Voiceover",
    category: "VOICEOVER",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789036316/mackenzie_voiceover_ugc.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
  {
    id: "voiceover-gradure",
    project: "Gradure — Voiceover",
    category: "VOICEOVER",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789036276/grandure_ugc_voiceover.mp4",
    poster: null,
    orientation: "vertical",
    span: "regular",
  },

  // ---- LIFESTYLE (5) --------------------------------------------------
  {
    id: "lifestyle-puntush",
    project: "Puntush",
    category: "LIFESTYLE",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789026087/Puntush_ugc_1.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
  {
    id: "lifestyle-mackenzie",
    project: "Mackenzie",
    category: "LIFESTYLE",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789026294/ugc_makenzie.mp4",
    poster: null,
    orientation: "vertical",
    span: "regular",
  },
  {
    id: "lifestyle-plutus-speed-ramp",
    project: "Plutus — Speed Ramp",
    category: "LIFESTYLE",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789036705/Speed_Ramp_Plutus.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
  {
    id: "lifestyle-aspen",
    project: "Aspen",
    category: "LIFESTYLE",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789036632/aspen_2.mp4",
    poster: null,
    orientation: "vertical",
    span: "regular",
  },
  {
    id: "lifestyle-vellora-speed-ramp",
    project: "Vellora — Speed Ramp",
    category: "LIFESTYLE",
    location: null,
    type: "video",
    src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789036561/speed_ramp_vellora.mp4",
    poster: null,
    orientation: "vertical",
    span: "tall",
  },
];

/**
 * HERO VIDEO — Gradure.
 * Deliberately kept separate from the `portfolio` array above: this is
 * the full-screen hero background, not a Selected Work grid card, so it
 * must never be rendered by PortfolioCard/the portfolio grid. Uses the
 * exact same Cloudinary URL as the "ugc-gradure" entry above — the file
 * is not duplicated or re-uploaded.
 */
export const heroVideo = {
  id: "hero-gradure",
  project: "Gradure",
  category: "UGC",
  location: null,
  type: "video",
  src: "https://res.cloudinary.com/skv5mo9t/video/upload/v1789026145/gradure_ugc.mp4",
  poster: null,
  orientation: "vertical",
};

export default portfolio;
