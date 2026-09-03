import Image from "next/image";

// Uncle Morty's dedicated homepage section — a personal, human anchor for
// the trusted-advisor positioning, separate from the hero's before/after
// visual proof. Two different jobs: hero proves the transformation works,
// this section proves someone honest is behind the recommendation.
export default function MortyPromise() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-sm overflow-hidden order-2 md:order-1">
          <Image
            src="/images/uncle-morty-hero.jpg"
            alt="Uncle Morty, MakeMyRoofNew's trusted home service advisor"
            width={1200}
            height={960}
            className="w-full h-auto"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-display font-700 text-3xl text-char-900">
            A homeowner should have someone on their side.
          </h2>
          <p className="mt-4 text-char-700 leading-relaxed">
            Roofing companies sell roofs. Uncle Morty&apos;s only job is to help you figure out
            what your roof actually needs — restoration, repair, or, honestly, a full
            replacement. No pressure, no scare tactics, just a straight answer.
          </p>
          <p className="mt-4 font-display italic text-lg text-moss-700">
            &ldquo;Honest advice. Quality work. Fair prices.&rdquo;
          </p>
          <p className="text-sm text-char-500">— Uncle Morty</p>
        </div>
      </div>
    </section>
  );
}
