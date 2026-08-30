import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProcessSteps from "@/components/ProcessSteps";
import LeadFunnel from "@/components/LeadFunnel";
import TestimonialCard from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/lib/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProcessSteps />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="font-display font-700 text-3xl text-char-900 text-center">
          What homeowners say
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={`${t.name}-${t.city}`} {...t} />
          ))}
        </div>
      </section>

      <section className="bg-moss-900 py-20" id="get-started">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display font-700 text-3xl text-white text-center">
            See if your roof qualifies
          </h2>
          <p className="text-char-100 text-center mt-2 max-w-lg mx-auto">
            Answer a few quick questions for an instant estimate and to book your free,
            no-obligation inspection.
          </p>
          <div className="mt-10">
            <LeadFunnel />
          </div>
        </div>
      </section>
    </>
  );
}
