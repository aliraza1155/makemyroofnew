"use client";

import { FunnelState } from "../types";

type Props = {
  state: FunnelState;
  onBack: () => void;
};

// Real appointment booking via an embedded GoHighLevel Calendar widget.
// Set NEXT_PUBLIC_GHL_CALENDAR_URL in .env.local (see .env.local.example).
// GHL's calendar embed accepts prefill query params so the homeowner
// doesn't have to re-type what they already gave us in Step 6.
export default function Step7Booking({ state, onBack }: Props) {
  const calendarBaseUrl = process.env.NEXT_PUBLIC_GHL_CALENDAR_URL;

  const prefillParams = new URLSearchParams({
    ...(state.fullName ? { name: state.fullName } : {}),
    ...(state.email ? { email: state.email } : {}),
    ...(state.phone ? { phone: state.phone } : {}),
  }).toString();

  const calendarUrl = calendarBaseUrl ? `${calendarBaseUrl}?${prefillParams}` : null;

  return (
    <div>
      <h2 className="font-display font-700 text-2xl text-char-900">
        Pick a time for your free inspection
      </h2>
      <p className="text-char-500 text-sm mt-1">
        {state.fullName ? `Thanks, ${state.fullName.split(" ")[0]}.` : "Thanks."} Your details
        are already saved — just choose a slot below.
      </p>

      <div className="mt-6">
        {calendarUrl ? (
          <iframe
            src={calendarUrl}
            title="Book your free roof inspection"
            className="w-full border border-char-100 rounded-sm"
            style={{ minHeight: 620 }}
            loading="lazy"
          />
        ) : (
          <div className="border border-dashed border-char-300 rounded-sm p-6 text-center">
            <p className="text-char-700 text-sm">
              Online scheduling isn&apos;t connected yet.
            </p>
            <p className="text-char-500 text-sm mt-2">
              We have your details — a team member will call{" "}
              <strong>{state.phone || "you"}</strong> shortly to confirm a time. Or call us
              now at{" "}
              <a href="tel:2105557663" className="text-moss-700 font-medium">
                (210) 555-ROOF
              </a>
              .
            </p>
          </div>
        )}
      </div>

      <div className="mt-8">
        <button
          type="button"
          onClick={onBack}
          className="border border-char-100 text-char-700 font-medium px-5 py-3 rounded-sm"
        >
          Back
        </button>
      </div>
    </div>
  );
}