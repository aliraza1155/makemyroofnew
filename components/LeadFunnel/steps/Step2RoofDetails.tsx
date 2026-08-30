import { FunnelState } from "../types";

type Props = {
  state: FunnelState;
  update: (patch: Partial<FunnelState>) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function Step2RoofDetails({ state, update, onNext, onBack }: Props) {
  const canContinue = !!state.roofAgeYears && !!state.roofSizeSqFt;

  return (
    <div>
      <h2 className="font-display font-700 text-2xl text-char-900">
        Tell us about your roof
      </h2>
      <p className="text-char-500 text-sm mt-1">
        Rough estimates are fine — a technician confirms exact details at the free inspection.
      </p>

      <div className="mt-6">
        <label className="text-sm text-char-700 block mb-1" htmlFor="age">
          Roof age (years)
        </label>
        <input
          id="age"
          type="range"
          min={0}
          max={30}
          value={state.roofAgeYears ?? 10}
          onChange={(e) => update({ roofAgeYears: Number(e.target.value) })}
          className="w-full accent-moss-600"
        />
        <p className="text-sm text-char-900 mt-1">{state.roofAgeYears ?? 10} years old</p>
      </div>

      <div className="mt-6">
        <label className="text-sm text-char-700 block mb-1" htmlFor="size">
          Approximate roof size (square feet)
        </label>
        <input
          id="size"
          type="number"
          min={500}
          step={100}
          value={state.roofSizeSqFt ?? ""}
          onChange={(e) => update({ roofSizeSqFt: Number(e.target.value) })}
          className="w-full border border-char-100 rounded-sm px-3 py-2 text-sm"
          placeholder="e.g. 2000 (not sure? enter your best guess)"
        />
        <p className="text-xs text-char-500 mt-1">
          Tip: a typical single-story 3-bedroom home is roughly 1,800–2,200 sq ft of roof.
        </p>
      </div>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="border border-char-100 text-char-700 font-medium px-5 py-3 rounded-sm"
        >
          Back
        </button>
        <button
          type="button"
          disabled={!canContinue}
          onClick={onNext}
          className="flex-1 bg-moss-600 disabled:bg-char-100 disabled:text-char-300 hover:bg-moss-700 text-white font-medium py-3 rounded-sm transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
