const STATS = [
  { value: "1,000+", label: "Roofs restored" },
  { value: "Up to 80%", label: "Savings vs. replacement" },
  { value: "1–2 days", label: "Typical completion time" },
  { value: "5-year", label: "Transferable warranty" },
];

export default function TrustBar() {
  return (
    <section className="bg-paper-100 border-y border-char-100">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s) => (
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
