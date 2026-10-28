const values = [
  "Hand-knitted in small batches",
  "Natural fibres",
  "Finished by hand",
  "Rooted in Magadh",
  "Made to be kept",
];

export function ValuesStrip() {
  return (
    <section className="values-strip" aria-label="The Aangan approach">
      <div className="marquee-track">
        {[0, 1].map((set) => (
          <div
            key={set}
            className="flex items-center"
            aria-hidden={set === 1 ? "true" : undefined}
          >
            {values.map((value) => (
              <span key={`${set}-${value}`} className="marquee-item">
                {value}
                <span className="marquee-dot" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
