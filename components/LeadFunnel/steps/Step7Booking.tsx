"use client";

import { useMemo, useState } from "react";
import { FunnelState } from "../types";

type Props = {
  state: FunnelState;
  onBack: () => void;
  onSubmit: (slot: string) => Promise<void>;
};

// Generates the next 5 weekdays with two slot times each.
// Replace this with a real scheduling tool's embed/API (see BUILD_GUIDE.md)
// once one is chosen — the rest of the funnel does not need to change.
function useUpcomingSlots() {
  return useMemo(() => {
    const days: { date: string; slots: string[] }[] = [];
    const d = new Date();
    while (days.length < 5) {
      d.setDate(d.getDate() + 1);
      const dow = d.getDay();
      if (dow === 0 || dow === 6) continue;
      days.push({
        date: d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" }),
        slots: ["9:00 AM – 11:00 AM", "1:00 PM – 3:00 PM"],
      });
    }
    return days;
  }, []);
}

export default function Step7Booking({ state, onBack, onSubmit }: Props) {
  const days = useUpcomingSlots();
  const [selected, setSelected] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!selected) {
      setError("Pick a time slot first");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      await onSubmit(selected);
    } catch {
      setError("Something went wrong submitting your request. Please call us instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="font-display font-700 text-2xl text-char-900">
        Pick a time for your free inspection
      </h2>
      <p className="text-char-500 text-sm mt-1">
        {state.fullName ? `Thanks, ${state.fullName.split(" ")[0]}.` : "Thanks."} A local technician
        will confirm by text shortly after you book.
      </p>

      <div className="mt-6 space-y-4">
        {days.map((day) => (
          <div key={day.date}>
            <p className="text-sm font-medium text-char-900 mb-2">{day.date}</p>
            <div className="grid grid-cols-2 gap-3">
              {day.slots.map((slot) => {
                const key = `${day.date} · ${slot}`;
                const isSelected = selected === key;
                return (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => {
                      setSelected(key);
                      setError(null);
                    }}
                    className={`border rounded-sm px-3 py-2 text-sm transition-colors ${
                      isSelected
                        ? "border-moss-600 bg-moss-50 text-moss-700"
                        : "border-char-100 hover:border-moss-300 text-char-700"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {error && <p className="text-signal-500 text-sm mt-4">{error}</p>}

      <div className="mt-8 flex gap-3">
        <button type="button" onClick={onBack} className="border border-char-100 text-char-700 font-medium px-5 py-3 rounded-sm">
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="flex-1 bg-moss-600 disabled:bg-char-300 hover:bg-moss-700 text-white font-medium py-3 rounded-sm transition-colors"
        >
          {submitting ? "Booking..." : "Confirm my free inspection"}
        </button>
      </div>
    </div>
  );
}
