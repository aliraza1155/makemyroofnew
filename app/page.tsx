import Hero from "@/components/Hero";
import MortyPromise from "@/components/MortyPromise";
import TrustBar from "@/components/TrustBar";
import ProcessSteps from "@/components/ProcessSteps";
import LeadFunnel from "@/components/LeadFunnel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MortyPromise />
      <TrustBar />
      <ProcessSteps />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="font-display font-700 text-3xl text-char-900 text-center">
          Our promise to homeowners
        </h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Honest Assessment", body: "We'll tell you whether restoration makes sense — before you spend a dollar." },
            { title: "No Pressure", body: "You're never obligated to move forward after your free evaluation." },
            { title: "Clear Options", body: "Restoration, repair, or replacement — we'll explain why each does or doesn't fit." },
            { title: "Trusted Help", body: "If replacement is the better call, we'll help you find a quality local roofing company." },
          ].map((p) => (
            <div key={p.title} className="border border-char-100 rounded-sm p-6 bg-white">
              <p className="font-medium text-char-900">{p.title}</p>
              <p className="text-sm text-char-500 mt-2">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-moss-900 py-20" id="get-started">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display font-700 text-3xl text-white text-center">
            What should you do with your roof?
          </h2>
          <p className="text-char-100 text-center mt-2 max-w-lg mx-auto">
            Find out in about 60 seconds — restore, repair, or replace. Then book your free,
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
