// Deterministic, client-side recommendation engine.
// No API calls, no per-lookup cost. Replace the thresholds/prices with
// figures from the business owner before launch — these are placeholders
// that encode the SAME logic Roof Maxx and Demand IQ describe publicly:
// granule loss + age + leak history determine restore vs. replace.

export type FunnelAnswers = {
  homeType: "single-family" | "multi-family" | "commercial";
  roofAgeYears: number; // self-reported, e.g. 8
  roofSizeSqFt: number; // self-reported estimate, e.g. 2000
  hasActiveLeaks: boolean;
  granuleLoss: "none" | "some" | "a-lot";
  stormDamage: boolean;
  budgetComfort: "under-3k" | "3k-8k" | "8k-plus" | "not-sure";
  timeline: "asap" | "this-month" | "just-researching";
  isDecisionMaker: boolean;
};

export type FunnelResult = {
  recommendation: "restore" | "replace" | "monitor";
  headline: string;
  estimateLow: number;
  estimateHigh: number;
  replacementComparisonLow: number;
  replacementComparisonHigh: number;
  savingsPct: number;
  leadTemperature: "hot" | "warm" | "cold";
};

const PRICE_PER_SQFT_RESTORE = 0.9; // placeholder — replace with real figure
const PRICE_PER_SQFT_REPLACE = 6.5; // placeholder — replace with real figure

export function computeResult(a: FunnelAnswers): FunnelResult {
  const tooFarGone = a.granuleLoss === "a-lot" || a.roofAgeYears >= 20;
  const needsReplace = tooFarGone;

  const restoreLow = Math.round(a.roofSizeSqFt * PRICE_PER_SQFT_RESTORE * 0.85);
  const restoreHigh = Math.round(a.roofSizeSqFt * PRICE_PER_SQFT_RESTORE * 1.25);
  const replaceLow = Math.round(a.roofSizeSqFt * PRICE_PER_SQFT_REPLACE * 0.85);
  const replaceHigh = Math.round(a.roofSizeSqFt * PRICE_PER_SQFT_REPLACE * 1.25);

  const recommendation: FunnelResult["recommendation"] = needsReplace
    ? "replace"
    : a.roofAgeYears <= 4 && a.granuleLoss === "none" && !a.hasActiveLeaks
    ? "monitor"
    : "restore";

  const savingsPct = Math.round((1 - restoreHigh / replaceHigh) * 100);

  const headline =
    recommendation === "replace"
      ? "Your roof is likely past the point of restoration"
      : recommendation === "monitor"
      ? "Your roof looks healthy — here's how to keep it that way"
      : "Your roof is a strong candidate for restoration";

  // Lead scoring — mirrors the screening-question logic Demand IQ uses to
  // separate high-intent leads from browsers.
  let leadTemperature: FunnelResult["leadTemperature"] = "cold";
  if (a.timeline === "asap" && a.isDecisionMaker) leadTemperature = "hot";
  else if (a.timeline !== "just-researching" && a.isDecisionMaker) leadTemperature = "warm";

  return {
    recommendation,
    headline,
    estimateLow: recommendation === "replace" ? replaceLow : restoreLow,
    estimateHigh: recommendation === "replace" ? replaceHigh : restoreHigh,
    replacementComparisonLow: replaceLow,
    replacementComparisonHigh: replaceHigh,
    savingsPct: savingsPct > 0 ? savingsPct : 0,
    leadTemperature,
  };
}
