import { Metadata } from "next";
import Link from "next/link";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "How Roof Restoration Works",
  description:
    "Learn how roof restoration extends the life of your asphalt shingle roof for a fraction of the cost of full replacement.",
};

const FAQS = [
  {
    q: "How is restoration different from replacement?",
    a: "Replacement tears off and rebuilds your entire roof. Restoration treats your existing shingles to restore flexibility and protection, extending their life by years at a fraction of the cost.",
  },
  {
    q: "Will restoration work on my roof?",
    a: "Most asphalt shingle roofs under 20 years old with less than 30% granule loss are good candidates. Our free inspection gives you a definitive answer, no pressure either way.",
  },
  {
    q: "How long does restoration take?",
    a: "Most residential jobs are completed in 1–2 days, versus a week or more for a full tear-off replacement.",
  },
  {
    q: "What's the warranty?",
    a: "Every restoration is backed by a 5-year transferable warranty, so the protection stays with the home even if you sell.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-char-900 text-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display font-700 text-4xl">How restoration works</h1>
          <p className="mt-4 text-char-300">
            A safer, faster, far less expensive alternative to a full roof replacement —
            without compromising protection.
          </p>
        </div>
      </section>

      <ProcessSteps />

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="font-display font-700 text-2xl text-char-900 mb-6">
          Common questions
        </h2>
        <div className="divide-y divide-char-100 border-y border-char-100">
          {FAQS.map((f) => (
            <details key={f.q} className="py-4 group">
              <summary className="cursor-pointer font-medium text-char-900 flex justify-between items-center">
                {f.q}
                <span className="text-char-300 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-char-500 text-sm mt-2">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-block bg-moss-600 hover:bg-moss-700 text-white font-medium px-6 py-3 rounded-sm"
          >
            Check if my roof qualifies
          </Link>
        </div>
      </section>
    </>
  );
}
