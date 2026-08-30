import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CITIES, getCity } from "@/lib/cities";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProcessSteps from "@/components/ProcessSteps";
import LeadFunnel from "@/components/LeadFunnel";

type Params = { params: Promise<{ city: string }> };

// Pre-renders all 17 metro pages at build time — critical for SEO,
// since each is a real static HTML page Google can crawl and rank.
export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: `Roof Restoration in ${city.name}, ${city.stateAbbr}`,
    description: `Save thousands on your ${city.name} roof with restoration instead of replacement. Free evaluation, 1-2 day service, 5-year warranty.`,
  };
}

export default async function LocationPage({ params }: Params) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return notFound();

  return (
    <>
      <Hero
        headline={`${city.name} homeowners are choosing restoration over replacement`}
        subhead={`Save up to 80% versus a full roof replacement — most ${city.name} jobs completed in 1-2 days.`}
        localNote={city.heroNote}
      />
      <TrustBar />

      {/* Local proof block — replace copy below with real, city-specific
          testimonials/photos before launch. This structure (unique per-page
          content, not templated boilerplate) is what earns local SEO rankings. */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-char-700">
        <h2 className="font-display font-700 text-2xl text-char-900 mb-4">
          Why {city.name} homeowners choose us
        </h2>
        <p>
          {city.state} roofs face their own mix of weather stress — from summer heat to
          seasonal storms — that ages asphalt shingles faster than the manufacturer's
          rated lifespan. Restoration treats that damage directly instead of tearing off
          a roof that may have years of life left in it.
        </p>
        <p className="mt-4">
          Every {city.name} inspection is handled by a local, licensed technician. Call{" "}
          <a href={`tel:${city.phone.replace(/[^\d]/g, "")}`} className="text-moss-700 font-medium">
            {city.phone}
          </a>{" "}
          or use the form below to get started.
        </p>
      </section>

      <ProcessSteps />

      <section className="bg-moss-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display font-700 text-3xl text-white text-center">
            Check if your {city.name} roof qualifies
          </h2>
          <div className="mt-10">
            <LeadFunnel />
          </div>
        </div>
      </section>
    </>
  );
}
