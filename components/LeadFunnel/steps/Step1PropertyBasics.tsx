import { FunnelState } from "../types";
import OptionCard from "../OptionCard";

type Props = {
  state: FunnelState;
  update: (patch: Partial<FunnelState>) => void;
  onNext: () => void;
};

const HOME_TYPES = [
  { value: "single-family", label: "Single-family home" },
  { value: "multi-family", label: "Multi-family / apartment" },
  { value: "commercial", label: "Commercial building" },
] as const;

export default function Step1PropertyBasics({ state, update, onNext }: Props) {
  const canContinue = !!state.homeType && !!state.city && !!state.zip;

  return (
    <div>
      <h2 className="font-display font-700 text-2xl text-char-900">
        Let&apos;s start with your property
      </h2>
      <p className="text-char-500 text-sm mt-1">
        This helps us match you with the right local technician.
      </p>

      <div className="mt-6 space-y-3">
        {HOME_TYPES.map((t) => (
          <OptionCard
            key={t.value}
            label={t.label}
            selected={state.homeType === t.value}
            onClick={() => update({ homeType: t.value })}
          />
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-char-700 block mb-1" htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            value={state.city ?? ""}
            onChange={(e) => update({ city: e.target.value })}
            className="w-full border border-char-100 rounded-sm px-3 py-2 text-sm"
            placeholder="e.g. Dallas"
          />
        </div>
        <div>
          <label className="text-sm text-char-700 block mb-1" htmlFor="zip">Zip code</label>
          <input
            id="zip"
            type="text"
            inputMode="numeric"
            value={state.zip ?? ""}
            onChange={(e) => update({ zip: e.target.value })}
            className="w-full border border-char-100 rounded-sm px-3 py-2 text-sm"
            placeholder="75201"
          />
        </div>
      </div>

      <button
        type="button"
        disabled={!canContinue}
        onClick={onNext}
        className="mt-8 w-full bg-moss-600 disabled:bg-char-100 disabled:text-char-300 hover:bg-moss-700 text-white font-medium py-3 rounded-sm transition-colors"
      >
        Continue
      </button>
    </div>
  );
}
