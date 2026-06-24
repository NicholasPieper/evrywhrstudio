// EVRYWHR — lore icons. Photographic collage cutouts (one per fragment id),
// rendered inside the floating lore nodes and the opened fragment panel.

(function () {
  const SRC = {
    origin:      "assets/lore/origin.png?v=2",
    crew:        "assets/lore/crew.png?v=2",
    frequencies: "assets/lore/frequencies.png?v=2",
    manifesto:   "assets/lore/manifesto.png?v=2",
    fieldnotes:  "assets/lore/fieldnotes.png?v=3",
    map:         "assets/lore/map.png?v=2",
    rituals:     "assets/lore/rituals.png?v=3",
    reel:        "assets/lore/reel.png?v=2",
  };

  function LoreIcon({ id, size = 44 }) {
    const src = SRC[id] || SRC.origin;
    return (
      <img
        src={src}
        alt={id}
        draggable={false}
        style={{
          display: "block",
          width: size,
          height: size,
          objectFit: "contain",
          userSelect: "none",
          pointerEvents: "none",
          filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.12))",
        }}
      />
    );
  }

  window.LoreIcon = LoreIcon;
})();
