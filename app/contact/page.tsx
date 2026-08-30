import { Metadata } from "next";
import LeadFunnel from "@/components/LeadFunnel";

export const metadata: Metadata = {
  title: "Get Your Free Roof Evaluation",
  description:
    "Answer a few quick questions for an instant roof restoration estimate and book your free, no-obligation inspection today.",
};

export default function ContactPage() {
  return (
    <section className="bg-paper-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h1 className="font-display font-700 text-3xl md:text-4xl text-char-900">
            Get your free roof evaluation
          </h1>
          <p className="text-char-500 mt-3">
            Takes under 3 minutes. No obligation. A local, licensed technician confirms
            everything in person, for free.
          </p>
        </div>
        <LeadFunnel />
      </div>
    </section>
  );
}
