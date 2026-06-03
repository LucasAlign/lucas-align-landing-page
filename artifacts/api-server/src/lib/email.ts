import { ReplitConnectors } from "@replit/connectors-sdk";

const NOTIFY_TO = "Bryant@rivcolucasinc.com";
const NOTIFY_FROM = "notifications@lucasalign.com";

export async function sendContactNotification(submission: {
  name: string;
  email: string;
  organization?: string | null;
  interest?: string | null;
  message?: string | null;
  source: string;
}): Promise<void> {
  const connectors = new ReplitConnectors();

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
      <h2 style="margin-bottom:4px">New contact submission</h2>
      <p style="color:#666;margin-top:0">From the Lucas Align website (${submission.source} page)</p>
      <table style="width:100%;border-collapse:collapse;margin-top:16px">
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:600;width:140px">Name</td><td style="padding:8px 0;border-bottom:1px solid #eee">${submission.name}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:600">Email</td><td style="padding:8px 0;border-bottom:1px solid #eee"><a href="mailto:${submission.email}">${submission.email}</a></td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:600">Organization</td><td style="padding:8px 0;border-bottom:1px solid #eee">${submission.organization || "—"}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:600">Interest</td><td style="padding:8px 0;border-bottom:1px solid #eee">${submission.interest || "—"}</td></tr>
      </table>
      ${submission.message ? `<div style="margin-top:20px"><p style="font-weight:600;margin-bottom:6px">Message</p><p style="background:#f5f5f5;padding:12px 16px;border-radius:6px;margin:0;line-height:1.6">${submission.message.replace(/\n/g, "<br>")}</p></div>` : ""}
    </div>
  `;

  await connectors.proxy("resend", "/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      subject: `New message from ${submission.name} (${submission.source})`,
      html,
    }),
  });
}
