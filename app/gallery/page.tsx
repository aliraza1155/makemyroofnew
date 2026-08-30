import { Metadata } from "next";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Before & After Roof Restoration Gallery",
  description: "Real roof restoration results from homeowners across our service areas.",
};

// Placeholder set — replace with real job photos tagged by city and
// material once available. Each entry becomes one SEO-friendly image
// pair with location/material alt text (see BUILD_GUIDE.md).
const PROJECTS = [
  { id: 1, city: "Dallas, TX", material: "Architectural shingle" },
  { id: 2, city: "Charlotte, NC", material: "3-tab shingle" },
  { id: 3, city: "Nashville, TN", material: "Architectural shingle" },
];

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display font-700 text-4xl text-char-900 text-center">
        Before &amp; after
      </h1>
      <p className="text-char-500 text-center mt-3 max-w-lg mx-auto">
        Drag the slider on any project to see the restoration result.
      </p>
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {PROJECTS.map((p) => (
          <div key={p.id}>
            <BeforeAfterSlider
              beforeSrc="/images/roof-before.jpg"
              afterSrc="/images/roof-after.jpg"
            />
            <p className="mt-3 text-sm font-medium text-char-900">{p.city}</p>
            <p className="text-xs text-char-500">{p.material}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
