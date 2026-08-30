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
import Confirmation from "./Confirmation";
import { FunnelState } from "./types";
import { computeResult, FunnelAnswers } from "@/lib/pricing";

export default function LeadFunnel() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<FunnelState>({});
  const [bookedSlot, setBookedSlot] = useState<string | null>(null);

  const update = (patch: Partial<FunnelState>) => setState((s) => ({ ...s, ...patch }));
  const next = () => setStep((s) => Math.min(7, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = async (slot: string) => {
    const result = computeResult(state as FunnelAnswers);

    const payload = {
      ...state,
      appointmentSlot: slot,
      recommendation: result.recommendation,
      estimateLow: result.estimateLow,
      estimateHigh: result.estimateHigh,
      leadTemperature: result.leadTemperature,
      submittedAt: new Date().toISOString(),
    };

    // POST to the lead-capture API route (see app/api/leads/route.ts).
    // That route is the single integration point for CRM/SMS/email —
    // swap its internals without touching any funnel UI code.
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Lead submission failed");

    setBookedSlot(slot);
  };

  if (bookedSlot) return <Confirmation slot={bookedSlot} />;

  return (
    <div className="bg-white border border-char-100 rounded-sm p-6 md:p-8 shadow-sm max-w-xl mx-auto">
      <ProgressBar step={step} />
      {step === 1 && <Step1PropertyBasics state={state} update={update} onNext={next} />}
      {step === 2 && <Step2RoofDetails state={state} update={update} onNext={next} onBack={back} />}
      {step === 3 && <Step3Condition state={state} update={update} onNext={next} onBack={back} />}
      {step === 4 && <Step4Estimate state={state} onNext={next} onBack={back} />}
      {step === 5 && <Step5Screening state={state} update={update} onNext={next} onBack={back} />}
      {step === 6 && <Step6Contact state={state} update={update} onNext={next} onBack={back} />}
      {step === 7 && <Step7Booking state={state} onBack={back} onSubmit={handleSubmit} />}
    </div>
  );
}
