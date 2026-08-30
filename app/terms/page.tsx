import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

// NOTE: Boilerplate structure only — requires legal review before launch.
export default function TermsPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-char-700 leading-relaxed">
      <h1 className="font-display font-700 text-3xl text-char-900">Terms of service</h1>
      <p className="text-xs text-char-500 mt-2">Last updated: [date] — [REQUIRES LEGAL REVIEW]</p>

      <h2 className="font-display font-700 text-xl text-char-900 mt-8">Use of this site</h2>
      <p className="mt-2">
        By using this website, you agree to provide accurate information when requesting an
        estimate or scheduling an inspection.
      </p>

      <h2 className="font-display font-700 text-xl text-char-900 mt-8">Estimates</h2>
      <p className="mt-2">
        Estimates provided through our online tool are preliminary and based on
        self-reported information. Final pricing is determined after an in-person, free
        inspection.
      </p>

      <h2 className="font-display font-700 text-xl text-char-900 mt-8">Contact us</h2>
      <p className="mt-2">Questions about these terms can be directed to [company email/phone].</p>
    </section>
  );
}
