"use client";

import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Step1PropertyBasics from "./steps/Step1PropertyBasics";
import Step2RoofDetails from "./steps/Step2RoofDetails";
import Step3Condition from "./steps/Step3Condition";
import Step4Estimate from "./steps/Step4Estimate";
import Step5Screening from "./steps/Step5Screening";
import Step6Contact from "./steps/Step6Contact";
import Step7Booking from "./steps/Step7Booking";
import { FunnelState } from "./types";
import { computeResult, FunnelAnswers } from "@/lib/pricing";

export default function LeadFunnel() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<FunnelState>({});
  const [sendError, setSendError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const update = (patch: Partial<FunnelState>) => setState((s) => ({ ...s, ...patch }));
  const next = () => setStep((s) => Math.min(7, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const sendLeadToGHL = async () => {
    setSendError(null);
    setSending(true);
    try {
      const result = computeResult(state as FunnelAnswers);
      const payload = {
        ...state,
        recommendation: result.recommendation,
        estimateLow: result.estimateLow,
        estimateHigh: result.estimateHigh,
        leadTemperature: result.leadTemperature,
        isPossibleInsuranceCase: result.isPossibleInsuranceCase,
        submittedAt: new Date().toISOString(),
      };
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Lead submission failed");
      setStep(7);
    } catch {
      setSendError("Something went wrong saving your details. Please call us instead at (210) 555-ROOF.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-white border border-char-100 rounded-sm p-6 md:p-8 shadow-sm max-w-xl mx-auto">
      <ProgressBar step={step} />
      {step === 1 && <Step1PropertyBasics state={state} update={update} onNext={next} />}
      {step === 2 && <Step2RoofDetails state={state} update={update} onNext={next} onBack={back} />}
      {step === 3 && <Step3Condition state={state} update={update} onNext={next} onBack={back} />}
      {step === 4 && <Step4Estimate state={state} onNext={next} onBack={back} />}
      {step === 5 && <Step5Screening state={state} update={update} onNext={next} onBack={back} />}
      {step === 6 && (
        <>
          <Step6Contact state={state} update={update} onNext={sendLeadToGHL} onBack={back} />
          {sending && <p className="text-char-500 text-sm mt-3">Saving your details…</p>}
          {sendError && <p className="text-signal-500 text-sm mt-3">{sendError}</p>}
        </>
      )}
      {step === 7 && <Step7Booking state={state} onBack={back} />}
    </div>
  );
}
