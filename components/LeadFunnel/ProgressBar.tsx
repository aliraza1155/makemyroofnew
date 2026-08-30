import { TOTAL_STEPS, STEP_LABELS } from "./types";

export default function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between text-xs text-char-500 mb-2">
        <span>{STEP_LABELS[step - 1]}</span>
        <span>
          Step {step} of {TOTAL_STEPS}
        </span>
      </div>
      <div className="h-1.5 bg-char-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-moss-600 transition-all duration-300"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        />
      </div>
    </div>
  );
}
