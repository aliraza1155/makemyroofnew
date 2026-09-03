import Link from "next/link";
import BeforeAfterSlider from "./BeforeAfterSlider";

type Props = {
  headline?: string;
  subhead?: string;
  localNote?: string;
};

export default function Hero({
  headline = "Don't replace your roof until you know you need to.",
  subhead = "Get an honest evaluation first. If restoration makes sense, we'll show you how. If you need a new roof, we'll tell you that too — and help you find a quality roofing company for a fair price.",
  localNote,
}: Props) {
  return (
    <section className="bg-char-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          {localNote && (
            <p className="text-oil-500 text-sm font-medium mb-3">{localNote}</p>
          )}
          <h1 className="font-display font-700 text-4xl md:text-5xl leading-tight">
            {headline}
          </h1>
          <p className="mt-5 text-char-300 text-lg max-w-md">{subhead}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-oil-500 hover:bg-oil-600 text-char-900 font-medium px-6 py-3 rounded-sm transition-colors"
            >
              Get my free roof check
            </Link>
            <a
              href="tel:2105557663"
              className="border border-char-300 hover:border-white text-white font-medium px-6 py-3 rounded-sm transition-colors"
            >
              Call (210) 555-ROOF
            </a>
          </div>
          <p className="mt-6 text-xs text-char-300">
            No pressure. No scare tactics. Just an honest look at your roof.
          </p>
        </div>
        <BeforeAfterSlider
          beforeSrc="/images/roof-before.jpg"
          afterSrc="/images/roof-after.jpg"
        />
      </div>
    </section>
  );
}
