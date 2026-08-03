import { emailExists, appendRow, countByType, type SheetEnv } from "../../_lib/sheets";
import { sendEmail, type ResendEnv } from "../../_lib/resend";
import { MAIL_1_USER } from "../../_lib/email-templates";

type Env = SheetEnv & ResendEnv;

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: { email?: string; userType?: string };
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: "Ongeldige aanvraag." }, 400);
  }

  const email = (body.email || "").trim().toLowerCase();
  if (!email || !email.includes("@") || !email.includes(".")) {
    return json({ success: false, error: "Vul a.u.b. een geldig e-mailadres in." }, 400);
  }

  try {
    if (await emailExists(env, email)) {
      const totalUsers = await countByType(env, "user");
      return json({
        success: true,
        message: "Je bent al aangemeld! We houden je op de hoogte zodra de extensie live gaat.",
        alreadyRegistered: true,
        totalUsers,
      });
    }

    const timestamp = new Date().toISOString();
    await appendRow(env, [timestamp, email, "user", "pending", "", "", ""]);

    // Een mislukte bevestigingsmail mag de al gelukte inschrijving niet ongedaan maken.
    try {
      await sendEmail(env, { to: email, subject: MAIL_1_USER.subject, text: MAIL_1_USER.text });
    } catch (mailError) {
      console.error("Kon bevestigingsmail (user) niet versturen:", mailError);
    }

    const totalUsers = await countByType(env, "user");
    return json({
      success: true,
      message: "Hoera! Je bent toegevoegd aan de PromptKoffie bèta-wachtlijst.",
      totalUsers,
    });
  } catch (err) {
    console.error("Fout bij user-inschrijving:", err);
    return json({ success: false, error: "Er ging iets mis. Probeer het later opnieuw." }, 500);
  }
};
