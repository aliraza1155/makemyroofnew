import { computeResult, FunnelAnswers } from "@/lib/pricing";
import { FunnelState } from "../types";

type Props = {
  state: FunnelState;
  onNext: () => void;
  onBack: () => void;
};

export default function Step4Estimate({ state, onNext, onBack }: Props) {
  // By this step all required fields for FunnelAnswers minus screening
  // questions are present; screening/budget defaults are placeholders
  // used only if the user somehow reaches this step early (shouldn't happen
  // given step gating, but keeps this component crash-safe).
  const result = computeResult({
    homeType: state.homeType ?? "single-family",
    roofAgeYears: state.roofAgeYears ?? 10,
    roofSizeSqFt: state.roofSizeSqFt ?? 2000,
    hasActiveLeaks: state.hasActiveLeaks ?? false,
    granuleLoss: state.granuleLoss ?? "some",
    stormDamage: state.stormDamage ?? false,
    budgetComfort: state.budgetComfort ?? "not-sure",
    timeline: state.timeline ?? "this-month",
    isDecisionMaker: state.isDecisionMaker ?? true,
  } as FunnelAnswers);

  return (
    <div>
      <span className="inline-block text-xs font-medium bg-oil-50 text-oil-700 px-2 py-1 rounded-sm">
        Your instant result
      </span>
      <h2 className="font-display font-700 text-2xl text-char-900 mt-3">
        {result.headline}
      </h2>

      {result.recommendation !== "monitor" && (
        <div className="mt-6 border border-char-100 rounded-sm p-5">
          <p className="text-sm text-char-500">
            Estimated {result.recommendation === "replace" ? "replacement" : "restoration"} cost
          </p>
          <p className="font-display font-700 text-3xl text-moss-700 mt-1">
            ${result.estimateLow.toLocaleString()}–${result.estimateHigh.toLocaleString()}
          </p>
          {result.recommendation === "restore" && (
            <p className="text-sm text-char-500 mt-2">
              vs. an estimated ${result.replacementComparisonLow.toLocaleString()}–$
              {result.replacementComparisonHigh.toLocaleString()} for a full replacement —
              roughly <strong className="text-moss-700">{result.savingsPct}% savings</strong>.
            </p>
          )}
        </div>
      )}

      {result.recommendation === "monitor" && (
        <p className="mt-6 text-char-700">
          Based on your answers, your roof doesn&apos;t need treatment yet. We recommend a free
          checkup every couple of years to catch problems early — no pressure, no cost.
        </p>
      )}

      <p className="text-xs text-char-500 mt-4">
        This is a preliminary estimate based on your answers, not a formal quote. A certified
        technician confirms exact pricing at your free, no-obligation inspection.
      </p>

      <div className="mt-8 flex gap-3">
        <button type="button" onClick={onBack} className="border border-char-100 text-char-700 font-medium px-5 py-3 rounded-sm">
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex-1 bg-moss-600 hover:bg-moss-700 text-white font-medium py-3 rounded-sm transition-colors"
        >
          Book my free inspection
        </button>
      </div>
    </div>
  );
}
