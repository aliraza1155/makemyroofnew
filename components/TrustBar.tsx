// Credibility points that are true by construction (describe the process,
// not unverified outcome claims). Do NOT add specific numbers here
// ("1,000+ roofs", "80% savings", etc.) until they are real and documentable.
const POINTS = [
  { value: "Free", label: "Roof evaluation, no obligation" },
  { value: "Honest", label: "Restore, repair, or replace — we say which" },
  { value: "60 sec", label: "To get your initial recommendation" },
  { value: "Local", label: "Service professionals in your area" },
];

export default function TrustBar() {
  return (
    <section className="bg-paper-100 border-y border-char-100">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {POINTS.map((s) => (
          <div key={s.label}>
            <p className="font-display font-700 text-2xl md:text-3xl text-moss-700">
              {s.value}
            </p>
            <p className="text-sm text-char-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="shingle-divider">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className={i % 2 === 0 ? "bg-moss-600" : "bg-oil-500"} />
        ))}
      </div>
    </section>
  );
}
