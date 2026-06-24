// EVRYWHR — content data + theme system. Plain JS (loaded before Babel scripts).
(function () {
  // ---- Lore fragments: the floating, draggable pieces of the world ----------
  const LORE = [
    {
      id: "origin",
      glyph: "☉",
      label: "Origin",
      kicker: "Field Record 001",
      coord: "KAMCHATKA → OURAY",
      body: [
        "Before EVRYWHR, we had real jobs (fluorescent lights and all).",
        "Stas was pulling 80-hour weeks as an auditor in SF. Nick was in D.C. trying to protect the oceans through policy. We were tired, but more than that, we both felt there had to be more room in life for travel, curiosity, creativity, and work that moved people.",
        "Then Stas got her green card, and we finally took the trip we'd been dreaming about for years — 10 countries over 3 continents in 3 months. And we figured, why not film the whole thing? We had no clue what we were doing, but we taught ourselves to shoot, edit, and tell stories as we went. That became GEDE, our travel channel. And somewhere in all those late nights, we realized the part we loved most wasn't just the travel. It was the saying something, finding the story, shaping the feeling: making the point!",
        "**That's why we built EVRYWHR: a production studio for travel-inspired storytelling rooted in curiosity, place, and perspective.** We're not interested in content that looks nice and says nothing. We make stories that take risks and leave a point of view behind. It's been rough, and we still work crazy hours. But it's our kind of crazy now, and it actually means something :)"
      ],
      tag: "origin"
    },
    {
      id: "crew",
      glyph: "⚐",
      label: "The Crew",
      kicker: "Field Record 002",
      coord: "2 humans + orbit",
      body: [
        "EVRYWHR is led by Stas and Nick.",
        "We're self-taught and we wear all the hats. Nick is usually the storyteller. He is the one taking you on the journey, connecting the dots and ideas, and digging up all the interesting (okay, nerdy) facts along the way. He produces, he writes, he scripts.",
        "Stas is the creative director and filmmaker, the one who gets lost in the visuals and tiny details that carry the atmosphere of a place. She'll happily film a single leaf shimmering in the sunlight for 20 minutes… usually until Nick loses his patience. That gorgeous atmospheric shot you loved in the film? Probably hers.",
        "But honestly, most of the time we're both doing everything, editing included. This really is a team vision!"
      ],
      tag: "crew"
    },
    {
      id: "frequencies",
      glyph: "♪",
      label: "Frequencies",
      kicker: "Field Record 003",
      coord: "now playing",
      isPlayer: true,
      body: [
        "Sounds we've gathered from all around the world.",
        "We add new tracks after every trip, so this little collection keeps growing."
      ],
      tag: "sound"
    },
    {
      id: "manifesto",
      glyph: "✦",
      label: "Manifesto",
      kicker: "Field Record 004",
      coord: "beyond the postcard",
      body: [
        "We don't travel to confirm what we already believe.",
        "We go to leave a little less certain, a little more curious, and a lot more connected."
      ],
      tag: "creed"
    },
    {
      id: "fieldnotes",
      glyph: "✎",
      label: "Field Notes",
      kicker: "Field Record 005",
      coord: "scraps & margins",
      body: [
        "“You can't come to Dagestan to diet.”",
        "“Outside of space, I doubt there's anywhere better suited to contemplating the abyss than the ocean.”",
        "“In Russia, grass is just for looking. It's a nice thing and if you sit on it or walk on it, you're going to mess it up. So, don't do it if you ever come to Russia.”",
        "“Well, considering that I'm about to tie a rock to myself, sink to the bottom of the ocean and wait for sharks and rays to come get me… I'm doing pretty good.”",
        "“Anywhere can be a party venue.”",
        "“Once you trade away a place like this [Michoacán, Mexico], it's unlikely you or your descendants would ever be able to live somewhere this spectacular again. The longer you spend here, the easier it is to understand. The land is everything.”",
        "“Gezellig is one of those wonderfully untranslatable Dutch words that describes a feeling rather than an actual literal thing.”",
        "“You know, one of my biggest fears is if we die on a hike, my mom will tell everyone that we died on an easy hike, like we told her.”",
        "“The truth is, if you don't go looking for trouble on the coast of Michoacán, you probably won't find any. As outsiders with the passport and privilege of the world's primary superpower, we're unlikely to be bothered here. The real danger here is for locals who can't leave easily.”"
      ],
      tag: "notes"
    },
    {
      id: "map",
      glyph: "⊕",
      label: "The Map",
      kicker: "Field Record 006",
      coord: "pins with stories",
      isMap: true,
      pins: [
        { place: "Kenya", x: 58.1, y: 58.4, dy: -6 },
        { place: "Tanzania", x: 57.5, y: 60.4, left: true, dy: 4 },
        { place: "Zanzibar", x: 58.8, y: 60.4, dy: 8 },
        { place: "Kyrgyzstan", x: 67.7, y: 43.2, dy: -6 },
        { place: "Uzbekistan", x: 64.5, y: 43.2, dy: 8, left: true },
        { place: "Georgia", x: 59.3, y: 42.6, left: true },
        { place: "Russia", x: 57.7, y: 35.3 },
        { place: "Kamchatka", x: 90.4, y: 35.3, left: true },
        { place: "Vietnam", x: 77.6, y: 54.4, dy: -6 },
        { place: "Thailand", x: 75.6, y: 54.8, left: true, dy: 7 },
        { place: "Bali", x: 79.2, y: 61.4 },
        { place: "Costa Rica", x: 25.0, y: 55.0, left: true },
        { place: "Fr. Polynesia", x: 7.1, y: 63.8 },
        { place: "Netherlands", x: 49.2, y: 37.2, left: true },
        { place: "Colorado", x: 19.2, y: 43.9, dy: -6 },
        { place: "California", x: 16.0, y: 44.6, left: true, dy: 6 },
        { place: "Mexico", x: 21.0, y: 50.6, dy: 5 }
      ],
      body: ["This is everywhere we've filmed & we've got a lot of map left to fill :)"],
      tag: "atlas"
    },
    {
      id: "rituals",
      glyph: "❍",
      label: "Rituals",
      kicker: "Field Record 007",
      coord: "superstitions kept",
      groups: [
        { by: "Nick", items: [
          "A new Negroni recipe in every city! I've collected over a 100 so far, headed for a coffee-table book: the Atlas Negroni.",
          "Get lost on purpose at least once a trip. Talk to a stranger, say yes, and follow it wherever it goes.",
          "Open the news app in a new place and read what the locals read."
        ] },
        { by: "Stas", items: [
          "Hunt for stickers in every bazaar and gift shop :) they all live on my water bottle.",
          "A crisp Diet Coke on a road trip!",
          "Always pack a square scarf. I tie it into a top when the night turns dressy. It has saved the fit more than once and always looks like a new fit."
        ] }
      ],
      body: [
        "A new Negroni recipe in every city — over a hundred collected so far, headed for a coffee-table book: the Atlas Negroni.",
        "Get lost on purpose at least once a trip. Talk to a stranger, say yes, and follow it wherever it goes.",
        "Open the news in a new place and read what the locals read.",
        "Hunt for stickers in every bazaar and gift shop — the water bottle keeps the map.",
        "A crisp Diet Coke for the long road.",
        "Always pack a square scarf. Knotted into a top when the night turns dressy, it has saved the fit more than once."
      ],
      tag: "rituals"
    },
    {
      id: "reel",
      glyph: "▷",
      label: "The Reel",
      kicker: "Field Record 008",
      coord: "90 sec / many places",
      isReel: true,
      body: [],
      tag: "watch"
    }
  ];

  // ---- Featured projects (homepage teaser) ----------------------------------
  const PROJECTS = [
    { id: "gedo", name: "Go Everywhere Do Everything", kind: "FLAGSHIP · FILMS · STILLS", coord: "YouTube channel", series: "gede", seriesRole: "channel", blurb: "A curiosity-driven travel channel about how places shape people — and how people shape places back." },
    { id: "michoacan", name: "Michoacan: Inside the Mexican Villages That Expelled the Cartel", kind: "TRAVEL FILM", coord: "18.3°N 103.3°W", series: "gede", blurb: "A travel film tracing color, craft, memory, and the stories that live far past the postcard version of Mexico." },
    { id: "dagestan", name: "Dagestan: Russia’s Most Feared Region", kind: "DOCUMENTARY · PHOTOGRAPHY", coord: "43.0°N 47.5°E", series: "gede", blurb: "A documentary from a place too often flattened by outsiders, held instead through people, mountains, memory, and meals." },
    { id: "corcovado", name: "Corcovado: The Most Biologically Intense Place on Earth", kind: "TRAVEL FILM · PHOTOGRAPHY", coord: "8.5°N 83.6°W", series: "gede", blurb: "A film from the edge of the rainforest, where the itinerary loses and the jungle takes over." },
    { id: "polynesia", name: "The Life Led by Water", kind: "FILM · PHOTO SERIES", coord: "17.6°S 149.5°W", series: "gede", blurb: "A film and photo project about water as road, memory, livelihood, playground, and way of life." },
    { id: "puravida", name: "Is PURA VIDA Real or Tourist BS?", kind: "TRAVEL FILM", coord: "9.7°N 84.0°W", series: "gede", blurb: "Chasing Costa Rica's famous phrase past the resorts to find out whether pura vida is a way of life or a marketing line." },
    { id: "moscow", name: "Inside Moscow: The Russia They Don't Show on the News", kind: "DOCUMENTARY", coord: "55.8°N 37.6°E", series: "gede", blurb: "A week inside the Russian capital, looking for the everyday city that rarely makes it into the headlines." },
    { id: "hagiang", name: "Motorbiking Vietnam's Wild North | Ha Giang Loop", kind: "TRAVEL FILM · MOTO", coord: "23.1°N 105.0°E", series: "gede", blurb: "Three days on two wheels through the mountains, switchbacks, and villages of Vietnam's Ha Giang Loop." },
    { id: "dutch", name: "Why Are Dutch People Happy?", kind: "TRAVEL FILM", coord: "52.4°N 4.9°E", series: "gede", blurb: "An honest look at the Netherlands, asking what actually sits underneath one of the world's happiest countries." },
    { id: "scarves", name: "Deserts — Vol. 01", kind: "OBJECT · LAUNCHING SOON", coord: "wearable archive", blurb: "Wearable artwork pulled from desert palettes. Airy pieces made for movement, travel, and heat." },
    { id: "scoby", name: "SCOBY — Desert Set", kind: "FILM · PHOTOGRAPHY", coord: "music film", blurb: "A collaboration with DJ and producer SCOBY — a music film set against the Sonoran Desert, alongside album-cover photography captured around the world." },
    { id: "atlas", name: "The Atlas Negroni", kind: "BOOK · IN PROGRESS", coord: "travel-by-cocktail book", blurb: "A travel-by-cocktail book: a new negroni in every city, over a hundred collected so far." }
  ];

  const NAV = ["Lore", "Projects", "Dispatches", "Work With Us", "Shop"];

  // ---- Theme system ---------------------------------------------------------
  // Blue + green two-colour systems — a green-leaning blue leads, lime/green is the fill.
  // Two-tier shades: `fill`/`fill2` = the light block/fill colors; `accent`/`accent2` =
  // deeper same-hue versions for text + buttons (where contrast matters).
  const PALETTES = {
    // Periwinkle + lore-lime (default): #a4b8e8 blue fill, #e6ed9b lime fill.
    Field:  { accent: "#41539e", accentDark: "#a4b8e8", fill: "#a4b8e8", fillDark: "#a4b8e8",
              accent2: "#54611f", accent2Dark: "#e6ed9b", fill2: "#e6ed9b", fill2Dark: "#e6ed9b" },
    // Ocean + fern: a touch softer / bluer.
    Canyon: { accent: "#1E84B8", accentDark: "#5FB6E6", fill: "#bfe1f1", fillDark: "#5FB6E6",
              accent2: "#2FA15A", accent2Dark: "#57C58E", fill2: "#bfe7d0", fill2Dark: "#57C58E" },
    // Cobalt + pine: bluest of the three.
    Tide:   { accent: "#2C72CC", accentDark: "#6FA6F0", fill: "#c2d6f5", fillDark: "#6FA6F0",
              accent2: "#1F9D6B", accent2Dark: "#4FC596", fill2: "#bfe6d6", fill2Dark: "#4FC596" }
  };

  const FONTS = {
    "Cormorant Garamond": "'Cormorant Garamond', Georgia, serif",
    "Montserrat": "'Montserrat', system-ui, sans-serif",
    "Syne": "'Syne', system-ui, sans-serif",
    "Hanken Grotesk": "'Hanken Grotesk', system-ui, sans-serif"
  };
  const LOGO = "'Cormorant Garamond', Georgia, serif";
  const MONO = "'Montserrat', system-ui, sans-serif";

  function buildTheme(t) {
    const pal = PALETTES[t.palette] || PALETTES.Field;
    const dark = t.direction === "signal";
    const base = dark
      ? { bg: "oklch(0.215 0.022 198)", surface: "oklch(0.262 0.024 198)", surface2: "oklch(0.312 0.026 196)",
          ink: "oklch(0.94 0.012 175)", muted: "oklch(0.72 0.018 180)", line: "oklch(1 0 0 / 0.14)", grain: 0.07 }
      : { bg: "oklch(0.984 0.004 170)", surface: "oklch(1 0 0)", surface2: "oklch(0.952 0.010 168)",
          ink: "oklch(0.26 0.022 165)", muted: "oklch(0.48 0.018 168)", line: "oklch(0.26 0.022 165 / 0.13)", grain: 0.05 };
    return {
      ...base,
      accent: dark ? (pal.accentDark || pal.accent) : pal.accent,
      accent2: dark ? (pal.accent2Dark || pal.accent2) : pal.accent2,
      accentFill: dark ? (pal.fillDark || pal.fill || pal.accent) : (pal.fill || pal.accent),
      accent2Fill: dark ? (pal.fill2Dark || pal.fill2 || pal.accent2) : (pal.fill2 || pal.accent2),
      onAccent2: "#14241a",
      dark,
      fontLogo: LOGO,
      fontDisplay: FONTS[t.displayFont] || FONTS["Cormorant Garamond"],
      fontBody: FONTS[t.bodyFont] || FONTS["Montserrat"],
      fontMono: MONO
    };
  }

  window.EVRYWHR = { LORE, PROJECTS, NAV, PALETTES, FONTS, buildTheme };
})();
