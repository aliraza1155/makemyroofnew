import { Metadata } from "next";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "Read what homeowners say about restoring their roof instead of replacing it.",
};

export default function ReviewsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display font-700 text-4xl text-char-900 text-center">
        What homeowners say
      </h1>
      <p className="text-char-500 text-center mt-3 max-w-lg mx-auto">
        Real results from real roofs. Replace these with verified reviews before launch.
      </p>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={`${t.name}-${t.city}`} {...t} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="inline-block bg-moss-600 hover:bg-moss-700 text-white font-medium px-6 py-3 rounded-sm"
        >
          Get my free roof check
        </Link>
      </div>
    </section>
  );
}
