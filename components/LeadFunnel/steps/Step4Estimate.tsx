import { computeResult, FunnelAnswers } from "@/lib/pricing";
import { FunnelState } from "../types";

type Props = {
  state: FunnelState;
  onNext: () => void;
  onBack: () => void;
};

const BADGE_COPY: Record<string, string> = {
  monitor: "Your instant result: Monitor",
  repair: "Your instant result: Repair candidate",
  restore: "Your instant result: Restoration candidate",
  replace: "Your instant result: Replacement likely",
};

export default function Step4Estimate({ state, onNext, onBack }: Props) {
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
        {BADGE_COPY[result.recommendation]}
      </span>
      <h2 className="font-display font-700 text-2xl text-char-900 mt-3">
        {result.headline}
      </h2>
      <p className="text-char-700 text-sm mt-2">{result.subtext}</p>

      {result.recommendation !== "monitor" && (
        <div className="mt-6 border border-char-100 rounded-sm p-5">
          <p className="text-sm text-char-500">
            Estimated {result.recommendation} cost
          </p>
          <p className="font-display font-700 text-3xl text-moss-700 mt-1">
            ${result.estimateLow.toLocaleString()}–${result.estimateHigh.toLocaleString()}
          </p>
          {(result.recommendation === "restore" || result.recommendation === "repair") && (
            <div className="mt-3 pt-3 border-t border-char-100 text-sm text-char-700">
              <div className="flex justify-between">
                <span>Estimated full replacement</span>
                <span>
                  ${result.replacementComparisonLow.toLocaleString()}–$
                  {result.replacementComparisonHigh.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between font-medium text-moss-700 mt-1">
                <span>Your estimated savings</span>
                <span>{result.savingsPct}%</span>
              </div>
            </div>
          )}
        </div>
      )}

      {result.recommendation === "replace" && (
        <div className="mt-4 bg-paper-100 border border-char-100 rounded-sm p-4 text-sm text-char-700">
          We won&apos;t try to sell you a restoration your roof doesn&apos;t qualify for. If you&apos;d
          like, we can introduce you to a quality local roofing company for a fair-price
          replacement quote — entirely optional.
        </div>
      )}

      <p className="text-xs text-char-500 mt-4">
        This is a preliminary estimate based on your answers, not a formal quote. A technician
        confirms exact findings at your free, no-obligation inspection.
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
          {result.recommendation === "monitor" ? "Continue" : "Book my free inspection"}
        </button>
      </div>
    </div>
  );
}
