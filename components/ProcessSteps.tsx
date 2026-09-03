const STEPS = [
  { n: "01", title: "Tell us about your roof", body: "Answer a few simple questions. Takes under a minute." },
  { n: "02", title: "Get your free evaluation", body: "We assess your roof's actual condition — no guessing." },
  { n: "03", title: "Get an honest recommendation", body: "Restore it, repair it, or replace it. We'll say which, and why." },
  { n: "04", title: "We help you follow through", body: "Restoration? We handle it. Replacement? We'll connect you with a quality local roofer." },
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
