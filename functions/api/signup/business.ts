import { appendRow, countByType, type SheetEnv } from "../../_lib/sheets";
import { sendEmail, type ResendEnv } from "../../_lib/resend";
import { MAIL_1_BUSINESS } from "../../_lib/email-templates";

type Env = SheetEnv & ResendEnv;

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: { email?: string; companyName?: string; contactPerson?: string; sector?: string };
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: "Ongeldige aanvraag." }, 400);
  }

  const email = (body.email || "").trim().toLowerCase();
  if (!email || !email.includes("@") || !email.includes(".")) {
    return json({ success: false, error: "Vul a.u.b. een geldig zakelijk e-mailadres in." }, 400);
  }

  const contactPerson = (body.contactPerson || "").trim();
  if (!contactPerson) {
    return json({ success: false, error: "Vul a.u.b. een contactpersoon in." }, 400);
  }

  try {
    const timestamp = new Date().toISOString();
    await appendRow(env, [
      timestamp,
      email,
      "business",
      "pending",
      (body.companyName || "").trim(),
      contactPerson,
      (body.sector || "").trim(),
    ]);

    try {
      await sendEmail(env, {
        to: email,
        subject: MAIL_1_BUSINESS.subject,
        text: MAIL_1_BUSINESS.text,
      });
    } catch (mailError) {
      console.error("Kon bevestigingsmail (business) niet versturen:", mailError);
    }

    const totalBusinesses = await countByType(env, "business");
    return json({
      success: true,
      message: "Hartelijk dank! We nemen contact op zodra we openstaan voor CPM-deals.",
      totalBusinesses,
    });
  } catch (err) {
    console.error("Fout bij business-inschrijving:", err);
    return json({ success: false, error: "Er ging iets mis. Probeer het later opnieuw." }, 500);
  }
};
