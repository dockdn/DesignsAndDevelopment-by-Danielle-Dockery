const brands = [
  "Panther Siding & Windows",
  "Elite Construction of NY",
  "KNC Studios",
];

export function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container">
        <div className="trust-shell reveal">
          <span className="trust-heading">Trusted by growing businesses & entrepreneurs</span>
          <div className="trust-grid trust-grid-compact" aria-label="Companies represented on the site">
            {brands.map((brand) => (
              <div className="trust-logo" key={brand}>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
