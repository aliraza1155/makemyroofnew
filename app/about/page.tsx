import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Uncle Morty & MakeMyRoofNew",
  description: "Meet Uncle Morty, your trusted home service advisor, and what MakeMyRoofNew stands for.",
};

// NOTE: Uncle Morty is a brand character, not a real individual. Do not add
// specific biographical claims (years of experience, past employers, real
// job history) — those would be factual claims about a person who doesn't
// exist. His credibility comes from the promise/philosophy below, not a résumé.
export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-sm overflow-hidden mb-8">
        <Image
          src="/images/uncle-morty-about.jpg"
          alt="Uncle Morty, MakeMyRoofNew's trusted home service advisor"
          width={1000}
          height={750}
          className="w-full h-auto"
        />
      </div>

      <h1 className="font-display font-700 text-4xl text-char-900">
        Uncle Morty, your trusted home service advisor
      </h1>
      <p className="mt-5 text-char-700 leading-relaxed">
        Roofing companies sell roofs. Uncle Morty&apos;s only job is to help you figure out
        what your roof actually needs — whether that&apos;s restoration, a repair, or, honestly,
        a full replacement. He treats every homeowner the way he&apos;d want someone to treat
        his own family: straight answers, no scare tactics, no pressure to buy something you
        don&apos;t need.
      </p>
      <ul className="mt-8 space-y-4">
        <li>
          <p className="font-medium text-char-900">Honest advice</p>
          <p className="text-sm text-char-500">
            If restoration makes sense, we&apos;ll show you why. If it doesn&apos;t, we&apos;ll say so.
          </p>
        </li>
        <li>
          <p className="font-medium text-char-900">No pressure</p>
          <p className="text-sm text-char-500">You&apos;re never obligated to move forward.</p>
        </li>
        <li>
          <p className="font-medium text-char-900">Local &amp; reliable</p>
          <p className="text-sm text-char-500">Proudly serving your community.</p>
        </li>
      </ul>
    </section>
  );
}
