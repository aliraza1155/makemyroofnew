import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Uncle Morty & MakeMyRoofNew",
  description:
    "Meet Uncle Morty, your trusted roof advisor, and learn what MakeMyRoofNew stands for.",
};

const values = [
  {
    title: "Expert advice",
    body: "Honest recommendations you can trust — backed by an actual on-roof inspection, not a sales script.",
  },
  {
    title: "Smart solutions",
    body: "Restoration extends roof life and protects your home for a fraction of replacement cost.",
  },
  {
    title: "Local & reliable",
    body: "Proudly serving your community, one roof evaluation at a time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4e8a3a]">
              Your trusted roof advisor
            </p>
            <h1 className="mt-4 font-display font-700 text-4xl leading-[1.05] text-char-900 sm:text-5xl">
              Meet Uncle Morty.
            </h1>
            <p className="mt-5 text-char-700 leading-relaxed">
              Thirty-plus years of climbing ladders and looking homeowners in the eye
              before ever picking up a quote pad. Morty joined MakeMyRoofNew to make
              sure every homeowner hears the honest option first — restore, not just
              replace.
            </p>
            <blockquote className="mt-6 border-l-2 border-[#4e8a3a] pl-4 text-sm italic text-char-500">
              &ldquo;An older roof doesn&apos;t always mean you need a new one. Before you
              replace it, see if you can restore it.&rdquo;
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-block rounded-sm bg-char-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Schedule free evaluation
              </Link>
              <Link
                href="/#reviews"
                className="inline-block rounded-sm border border-char-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-char-900 transition hover:bg-char-900 hover:text-white"
              >
                Read reviews
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="relative overflow-hidden rounded-md bg-char-900">
              <Image
                src="/images/uncle-morty.png"
                alt="Uncle Morty, roof advisor at MakeMyRoofNew"
                width={584}
                height={743}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <span className="absolute -left-3 bottom-6 inline-block bg-[#4e8a3a] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
              Roof Advisor, MakeMyRoofNew
            </span>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-char-900 py-16 text-white">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8fc55c]">
              The philosophy
            </p>
            <h2 className="mt-3 font-display font-700 text-2xl leading-snug text-white">
              No pressure. No scare tactics. Just an honest look at your roof.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-char-300">
              Morty spent most of his career on the replacement side of the business —
              and got tired of watching homeowners get sold a full tear-off when a
              restoration would&apos;ve done the job for a fraction of the cost.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-char-300">
              That&apos;s the whole reason MakeMyRoofNew exists:{" "}
              <span className="font-semibold text-white">
                evaluate first, recommend second.
              </span>{" "}
              Sometimes that means a full replacement really is the right call. Often,
              it doesn&apos;t.
            </p>
          </div>

          <ul className="divide-y divide-white/10 border-t border-white/10">
            {values.map((v) => (
              <li key={v.title} className="py-5">
                <p className="font-display font-700 text-white">{v.title}</p>
                <p className="mt-1 text-sm text-char-300">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}