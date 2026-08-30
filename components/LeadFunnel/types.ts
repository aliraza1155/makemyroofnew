import { FunnelAnswers } from "@/lib/pricing";

export type ContactInfo = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  zip: string;
};

export type FunnelState = Partial<FunnelAnswers> & Partial<ContactInfo>;

export const TOTAL_STEPS = 7;

export const STEP_LABELS = [
  "Property",
  "Roof details",
  "Condition",
  "Estimate",
  "A few more questions",
  "Contact info",
  "Book inspection",
];
