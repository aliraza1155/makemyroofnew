import { FunnelState } from "../types";

type Props = {
  state: FunnelState;
  update: (patch: Partial<FunnelState>) => void;
  onNext: () => void;
  onBack: () => void;
};

const PHONE_RE = /^[\d\s()+-]{7,}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Step6Contact({ state, update, onNext, onBack }: Props) {
  const nameValid = !!state.fullName && state.fullName.trim().length > 1;
  const phoneValid = !!state.phone && PHONE_RE.test(state.phone);
  const emailValid = !!state.email && EMAIL_RE.test(state.email);
  const canContinue = nameValid && phoneValid && emailValid;

  return (
    <div>
      <h2 className="font-display font-700 text-2xl text-char-900">
        Where should we send your inspection confirmation?
      </h2>
      <p className="text-char-500 text-sm mt-1">
        We&apos;ll only use this to schedule your free inspection — no spam, ever.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="text-sm text-char-700 block mb-1" htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            type="text"
            value={state.fullName ?? ""}
            onChange={(e) => update({ fullName: e.target.value })}
            className="w-full border border-char-100 rounded-sm px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="text-sm text-char-700 block mb-1" htmlFor="phone">Phone number</label>
          <input
            id="phone"
            type="tel"
            value={state.phone ?? ""}
            onChange={(e) => update({ phone: e.target.value })}
            className="w-full border border-char-100 rounded-sm px-3 py-2 text-sm"
            placeholder="(555) 123-4567"
          />
          {state.phone && !phoneValid && (
            <p className="text-signal-500 text-xs mt-1">Enter a valid phone number</p>
          )}
        </div>
        <div>
          <label className="text-sm text-char-700 block mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={state.email ?? ""}
            onChange={(e) => update({ email: e.target.value })}
            className="w-full border border-char-100 rounded-sm px-3 py-2 text-sm"
            placeholder="you@example.com"
          />
          {state.email && !emailValid && (
            <p className="text-signal-500 text-xs mt-1">Enter a valid email address</p>
          )}
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <button type="button" onClick={onBack} className="border border-char-100 text-char-700 font-medium px-5 py-3 rounded-sm">
          Back
        </button>
        <button
          type="button"
          disabled={!canContinue}
          onClick={onNext}
          className="flex-1 bg-moss-600 disabled:bg-char-100 disabled:text-char-300 hover:bg-moss-700 text-white font-medium py-3 rounded-sm transition-colors"
        >
          Continue to booking
        </button>
      </div>
    </div>
  );
}
