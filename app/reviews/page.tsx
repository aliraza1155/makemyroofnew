import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Promise to Homeowners",
  description: "What to expect from a free roof evaluation with MakeMyRoofNew.",
};

// Real verified reviews are not live yet. Do NOT reintroduce testimonial
// names/quotes/star ratings until they are real and verifiable — this page
// previously leaked internal placeholder instructions to real visitors,
// which is exactly the failure mode to avoid going forward.
const PROMISES = [
  { title: "Honest Assessment", body: "We'll tell you whether restoration makes sense for your roof — plainly, before you spend a dollar." },
  { title: "No Pressure", body: "You're never obligated to move forward after your free evaluation." },
  { title: "Clear Options", body: "We'll walk you through restoration, repair, and replacement — and why each one fits or doesn't." },
  { title: "Trusted Help", body: "If replacement is genuinely the better call, we'll help connect you with a quality local roofing company." },
];

export default function ReviewsPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-display font-700 text-4xl text-char-900 text-center">
        Our promise to homeowners
      </h1>
      <p className="text-char-500 text-center mt-3 max-w-lg mx-auto">
        We're still early — real, verified customer reviews will appear here as jobs are
        completed. In the meantime, here's what you can count on.
      </p>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {PROMISES.map((p) => (
          <div key={p.title} className="border border-char-100 rounded-sm p-6 bg-white">
            <p className="font-medium text-char-900">{p.title}</p>
            <p className="text-sm text-char-500 mt-2">{p.body}</p>
          </div>
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
