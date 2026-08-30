import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

// NOTE: This is boilerplate structure only. Have a lawyer review and finalize
// the actual content before launch — do not treat this as legal advice.
export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-char-700 leading-relaxed">
      <h1 className="font-display font-700 text-3xl text-char-900">Privacy policy</h1>
      <p className="text-xs text-char-500 mt-2">Last updated: [date] — [REQUIRES LEGAL REVIEW]</p>

      <h2 className="font-display font-700 text-xl text-char-900 mt-8">Information we collect</h2>
      <p className="mt-2">
        When you use our free roof evaluation tool, we collect the information you provide,
        including your name, phone number, email address, property address, and answers about
        your roof's condition.
      </p>

      <h2 className="font-display font-700 text-xl text-char-900 mt-8">How we use it</h2>
      <p className="mt-2">
        We use this information solely to provide you with a roof estimate, schedule your
        inspection, and follow up about our services. We do not sell your information to
        third parties.
      </p>

      <h2 className="font-display font-700 text-xl text-char-900 mt-8">Contact us</h2>
      <p className="mt-2">
        Questions about this policy can be directed to [company email/phone].
      </p>
    </section>
  );
}
