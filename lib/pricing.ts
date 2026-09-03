// Deterministic, client-side recommendation engine.
// No API calls, no per-lookup cost.
//
// POSITIONING: MakeMyRoofNew is a trusted-advisor, not a restoration seller.
// This function must give an honest answer across FOUR possible outcomes —
// monitor, restore, repair, or replace — even though "replace" doesn't earn
// MakeMyRoofNew a restoration job. That's the point: the credibility of
// "restore" recommendations depends entirely on "replace" being a real,
// honestly-reached answer sometimes, not a disguised upsell.

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

export type Recommendation = "monitor" | "repair" | "restore" | "replace";

export type FunnelResult = {
  recommendation: Recommendation;
  headline: string;
  subtext: string;
  estimateLow: number;
  estimateHigh: number;
  replacementComparisonLow: number;
  replacementComparisonHigh: number;
  savingsPct: number;
  leadTemperature: "hot" | "warm" | "cold";
  // true when storm/hail damage is reported — this is a DIFFERENT lead type
  // (potentially insurance-eligible) from ordinary end-of-life replacement,
  // per the earlier insurance-positioning discussion. Route these leads
  // differently in your CRM/workflow if you build that split out.
  isPossibleInsuranceCase: boolean;
};

// PLACEHOLDER FIGURES — replace with real numbers before launch.
const PRICE_PER_SQFT_RESTORE = 0.9;
const PRICE_PER_SQFT_REPAIR = 0.35; // spot repairs, not full-roof treatment
const PRICE_PER_SQFT_REPLACE = 6.5;

export function computeResult(a: FunnelAnswers): FunnelResult {
  const isPossibleInsuranceCase = a.stormDamage === true;

  // Decision logic — four honest outcomes, in order of severity:
  let recommendation: Recommendation;
  if (a.granuleLoss === "a-lot" || a.roofAgeYears >= 20) {
    recommendation = "replace";
  } else if (a.hasActiveLeaks && a.granuleLoss !== "none") {
    // Active leak + some granule loss: a real problem, but not necessarily
    // roof-wide — a targeted repair candidate rather than full restoration.
    recommendation = "repair";
  } else if (a.roofAgeYears <= 4 && a.granuleLoss === "none" && !a.hasActiveLeaks) {
    recommendation = "monitor";
  } else {
    recommendation = "restore";
  }

  const restoreLow = Math.round(a.roofSizeSqFt * PRICE_PER_SQFT_RESTORE * 0.85);
  const restoreHigh = Math.round(a.roofSizeSqFt * PRICE_PER_SQFT_RESTORE * 1.25);
  const repairLow = Math.round(a.roofSizeSqFt * PRICE_PER_SQFT_REPAIR * 0.5); // repairs are partial-roof
  const repairHigh = Math.round(a.roofSizeSqFt * PRICE_PER_SQFT_REPAIR * 1.0);
  const replaceLow = Math.round(a.roofSizeSqFt * PRICE_PER_SQFT_REPLACE * 0.85);
  const replaceHigh = Math.round(a.roofSizeSqFt * PRICE_PER_SQFT_REPLACE * 1.25);

  const estimateByRecommendation: Record<Recommendation, [number, number]> = {
    monitor: [0, 0],
    repair: [repairLow, repairHigh],
    restore: [restoreLow, restoreHigh],
    replace: [replaceLow, replaceHigh],
  };
  const [estimateLow, estimateHigh] = estimateByRecommendation[recommendation];

  const savingsPct =
    recommendation === "restore" || recommendation === "repair"
      ? Math.round((1 - estimateHigh / replaceHigh) * 100)
      : 0;

  const COPY: Record<Recommendation, { headline: string; subtext: string }> = {
    monitor: {
      headline: "Your roof looks healthy right now",
      subtext:
        "Based on what you've told us, there's no need to spend anything yet. We recommend a free check-up every couple of years to catch problems early.",
    },
    repair: {
      headline: "A few targeted repairs may be all you need",
      subtext:
        "Your roof doesn't need full restoration or replacement — some focused repair work could solve the issue for a fraction of either cost.",
    },
    restore: {
      headline: "Your roof is a strong candidate for restoration",
      subtext:
        "Your shingles likely still have real life left in them. Restoration can extend that life significantly, for well below the cost of a new roof.",
    },
    replace: {
      headline: "Your roof has likely reached the end of its useful life",
      subtext: isPossibleInsuranceCase
        ? "Given the storm damage you mentioned, this may be eligible for an insurance claim. We can help you explore replacement options, including whether a claim makes sense — no pressure either way."
        : "Restoration isn't the right fit here — we'll say so honestly. We can help you explore replacement options with a quality local roofing company.",
    },
  };

  // Lead scoring — unchanged logic, still based on urgency + decision authority.
  let leadTemperature: FunnelResult["leadTemperature"] = "cold";
  if (a.timeline === "asap" && a.isDecisionMaker) leadTemperature = "hot";
  else if (a.timeline !== "just-researching" && a.isDecisionMaker) leadTemperature = "warm";

  return {
    recommendation,
    headline: COPY[recommendation].headline,
    subtext: COPY[recommendation].subtext,
    estimateLow,
    estimateHigh,
    replacementComparisonLow: replaceLow,
    replacementComparisonHigh: replaceHigh,
    savingsPct: savingsPct > 0 ? savingsPct : 0,
    leadTemperature,
    isPossibleInsuranceCase,
  };
}
