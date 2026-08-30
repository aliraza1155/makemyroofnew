import { NextRequest, NextResponse } from "next/server";

// SINGLE INTEGRATION POINT for lead delivery.
// Everything the funnel collects arrives here as JSON. Wire in your real
// CRM/SMS/email providers below — the funnel UI never needs to change.
//
// Suggested integrations (pick based on what the business already uses):
//   1. CRM push       -> HubSpot / GoHighLevel / JobNimbus API call
//   2. Instant SMS     -> Twilio, to the sales team's phone
//   3. Instant email    -> Resend / SendGrid, to sales team + auto-reply to lead
//   4. Storage/audit  -> write to Postgres (Supabase/Neon) so nothing is lost
//   5. Analytics      -> server-side GA4/Meta CAPI event for accurate conversion tracking

export async function POST(req: NextRequest) {
  const lead = await req.json();

  if (!lead.fullName || !lead.phone || !lead.email) {
    return NextResponse.json({ error: "Missing required contact fields" }, { status: 400 });
  }

  // --- Step 1: persist the lead (placeholder — wire to your database) ---
  // await db.leads.insert(lead);

  // --- Step 2: push to CRM (placeholder) ---
  // await fetch("https://api.hubapi.com/crm/v3/objects/contacts", { ... });

  // --- Step 3: notify the sales team instantly (placeholder) ---
  // await twilioClient.messages.create({
  //   to: process.env.SALES_TEAM_PHONE!,
  //   body: `New ${lead.leadTemperature} lead: ${lead.fullName} (${lead.phone}) - ${lead.city}`,
  // });

  // --- Step 4: auto-confirm to the homeowner (placeholder) ---
  // await resend.emails.send({ to: lead.email, subject: "You're booked!", ... });

  console.log("New lead received:", lead);

  return NextResponse.json({ ok: true });
}
