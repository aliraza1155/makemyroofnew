import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// SINGLE INTEGRATION POINT for lead delivery.
// Sends every completed lead as a formatted email via Gmail SMTP.
//
// REQUIRED SETUP (see .env.local.example):
//   GMAIL_USER            - the Gmail address that SENDS the email
//   GMAIL_APP_PASSWORD    - a Gmail "App Password", NOT your regular password
//   LEAD_NOTIFICATION_EMAIL - the address that RECEIVES lead notifications
//
// To generate a Gmail App Password:
//   1. Turn on 2-Step Verification on the sending Gmail account
//      (myaccount.google.com/security)
//   2. Go to myaccount.google.com/apppasswords
//   3. Create a new app password (name it e.g. "MakeMyRoofNew website")
//   4. Copy the 16-character password into GMAIL_APP_PASSWORD

function formatLeadEmail(lead: Record<string, unknown>): string {
  const rows = Object.entries(lead)
    .map(([key, value]) => `<tr><td style="padding:4px 12px 4px 0;color:#54534C;font-size:13px">${key}</td><td style="padding:4px 0;font-weight:600;color:#1B1A16;font-size:13px">${String(value)}</td></tr>`)
    .join("");
  return `
    <div style="font-family:Arial,sans-serif;max-width:500px">
      <h2 style="color:#2F6141;margin-bottom:4px">New Roof Check Lead</h2>
      <p style="color:#54534C;font-size:13px;margin-top:0">Submitted ${new Date().toLocaleString()}</p>
      <table style="border-collapse:collapse;width:100%">${rows}</table>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  const lead = await req.json();

  if (!lead.fullName || !lead.phone || !lead.email) {
    return NextResponse.json({ error: "Missing required contact fields" }, { status: 400 });
  }

  console.log("New lead received:", JSON.stringify(lead));

  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
  const LEAD_NOTIFICATION_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !LEAD_NOTIFICATION_EMAIL) {
    console.warn(
      "Email not sent — GMAIL_USER, GMAIL_APP_PASSWORD, or LEAD_NOTIFICATION_EMAIL " +
        "is missing from .env.local. Lead was logged locally only."
    );
    return NextResponse.json({ ok: true, warning: "Email not configured yet" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    });

    await transporter.sendMail({
      from: `"MakeMyRoofNew Leads" <${GMAIL_USER}>`,
      to: LEAD_NOTIFICATION_EMAIL,
      subject: `New Lead: ${lead.fullName} (${lead.leadTemperature ?? "unscored"}) - ${lead.city ?? "unknown city"}`,
      html: formatLeadEmail(lead),
    });
  } catch (err) {
    console.error("Failed to send lead email:", err);
    return NextResponse.json({ ok: true, warning: "Email send failed, check logs" });
  }

  return NextResponse.json({ ok: true });
}