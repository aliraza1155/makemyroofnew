const STEPS = [
  { n: "01", title: "Answer a few questions", body: "Tell us about your home and roof. Takes under a minute, no account needed." },
  { n: "02", title: "Get your instant result", body: "See whether your roof is a fit for restoration, and an estimated price range." },
  { n: "03", title: "Book a free inspection", body: "Pick a time that works. A local technician confirms everything in person, free." },
  { n: "04", title: "Restore & protect", body: "Most jobs are complete in 1–2 days, backed by a 5-year transferable warranty." },
];

export default function ProcessSteps() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-display font-700 text-3xl text-char-900 text-center">
        How it works
      </h2>
      <p className="text-char-500 text-center mt-2 max-w-xl mx-auto">
        A real process with a real order — each step unlocks the next.
      </p>
      <div className="mt-12 grid md:grid-cols-4 gap-8">
        {STEPS.map((step) => (
          <div key={step.n}>
            <p className="font-display text-oil-600 text-sm font-700">{step.n}</p>
            <h3 className="font-medium text-char-900 mt-2">{step.title}</h3>
            <p className="text-sm text-char-500 mt-2">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
