import { FunnelState } from "../types";
import OptionCard from "../OptionCard";

type Props = {
  state: FunnelState;
  update: (patch: Partial<FunnelState>) => void;
  onNext: () => void;
  onBack: () => void;
};

const BUDGET = [
  { value: "under-3k", label: "Under $3,000" },
  { value: "3k-8k", label: "$3,000–$8,000" },
  { value: "8k-plus", label: "$8,000+" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

const TIMELINE = [
  { value: "asap", label: "As soon as possible" },
  { value: "this-month", label: "Within the next month" },
  { value: "just-researching", label: "Just researching for now" },
] as const;

export default function Step5Screening({ state, update, onNext, onBack }: Props) {
  const canContinue =
    !!state.budgetComfort && !!state.timeline && state.isDecisionMaker !== undefined;

  return (
    <div>
      <h2 className="font-display font-700 text-2xl text-char-900">
        Almost there
      </h2>
      <p className="text-char-500 text-sm mt-1">
        This helps us prepare the right technician and options for your visit.
      </p>

      <div className="mt-6">
        <p className="text-sm font-medium text-char-900 mb-2">Comfortable budget range</p>
        <div className="grid grid-cols-2 gap-3">
          {BUDGET.map((b) => (
            <OptionCard key={b.value} label={b.label} selected={state.budgetComfort === b.value} onClick={() => update({ budgetComfort: b.value })} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-char-900 mb-2">When are you hoping to get this done?</p>
        <div className="space-y-3">
          {TIMELINE.map((t) => (
            <OptionCard key={t.value} label={t.label} selected={state.timeline === t.value} onClick={() => update({ timeline: t.value })} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-char-900 mb-2">Are you the homeowner or decision-maker?</p>
        <div className="flex gap-3">
          <OptionCard label="Yes" selected={state.isDecisionMaker === true} onClick={() => update({ isDecisionMaker: true })} />
          <OptionCard label="No" selected={state.isDecisionMaker === false} onClick={() => update({ isDecisionMaker: false })} />
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
          Continue
        </button>
      </div>
    </div>
  );
}
