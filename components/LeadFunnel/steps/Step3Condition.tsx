import { FunnelState } from "../types";
import OptionCard from "../OptionCard";

type Props = {
  state: FunnelState;
  update: (patch: Partial<FunnelState>) => void;
  onNext: () => void;
  onBack: () => void;
};

const GRANULE_OPTIONS = [
  { value: "none", label: "Little to none", sublabel: "Shingles still look fairly uniform in color" },
  { value: "some", label: "Some loss", sublabel: "A few bald patches or granules in the gutter" },
  { value: "a-lot", label: "A lot", sublabel: "Widespread bald spots, shingles look gray/black" },
] as const;

export default function Step3Condition({ state, update, onNext, onBack }: Props) {
  const canContinue =
    state.hasActiveLeaks !== undefined &&
    !!state.granuleLoss &&
    state.stormDamage !== undefined;

  return (
    <div>
      <h2 className="font-display font-700 text-2xl text-char-900">
        A few quick questions about condition
      </h2>

      <div className="mt-6">
        <p className="text-sm font-medium text-char-900 mb-2">
          Any active leaks or water stains on ceilings?
        </p>
        <div className="flex gap-3">
          <OptionCard label="Yes" selected={state.hasActiveLeaks === true} onClick={() => update({ hasActiveLeaks: true })} />
          <OptionCard label="No" selected={state.hasActiveLeaks === false} onClick={() => update({ hasActiveLeaks: false })} />
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-char-900 mb-2">Granule loss on shingles?</p>
        <div className="space-y-3">
          {GRANULE_OPTIONS.map((g) => (
            <OptionCard
              key={g.value}
              label={g.label}
              sublabel={g.sublabel}
              selected={state.granuleLoss === g.value}
              onClick={() => update({ granuleLoss: g.value })}
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-char-900 mb-2">
          Recent hail or storm damage in your area?
        </p>
        <div className="flex gap-3">
          <OptionCard label="Yes" selected={state.stormDamage === true} onClick={() => update({ stormDamage: true })} />
          <OptionCard label="No" selected={state.stormDamage === false} onClick={() => update({ stormDamage: false })} />
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
          See my result
        </button>
      </div>
    </div>
  );
}
