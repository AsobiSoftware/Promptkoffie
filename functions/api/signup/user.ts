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

/** 303 zodat de browser na een POST met GET verdergaat (geen herhaalde submit bij refresh). */
function redirect(location: string): Response {
  return new Response(null, { status: 303, headers: { Location: location } });
}

function isValidEmail(email: string): boolean {
  return Boolean(email) && email.includes("@") && email.includes(".");
}

type SignupOutcome =
  | { ok: true; alreadyRegistered: boolean; totalUsers: number }
  | { ok: false };

/**
 * De opslaglogica, gedeeld door de JSON- en de formulier-route.
 * Gooit niet; de aanroeper vertaalt het resultaat naar het juiste antwoordformaat.
 */
async function registerUser(env: Env, email: string): Promise<SignupOutcome> {
  try {
    if (await emailExists(env, email)) {
      const totalUsers = await countByType(env, "user");
      return { ok: true, alreadyRegistered: true, totalUsers };
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
    return { ok: true, alreadyRegistered: false, totalUsers };
  } catch (err) {
    console.error("Fout bij user-inschrijving:", err);
    return { ok: false };
  }
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const contentType = request.headers.get("Content-Type") || "";
  const isForm = contentType.includes("application/x-www-form-urlencoded");

  // ---- Formulier zonder JS: lees form data, antwoord met een redirect ----
  if (isForm) {
    let email = "";
    try {
      const form = await request.formData();
      email = String(form.get("email") || "").trim().toLowerCase();
    } catch {
      return redirect("/?fout=ongeldig#inschrijven");
    }

    if (!isValidEmail(email)) {
      return redirect("/?fout=email#inschrijven");
    }

    const result = await registerUser(env, email);
    return result.ok ? redirect("/bedankt") : redirect("/?fout=server#inschrijven");
  }

  // ---- JSON (de fetch-route vanuit SignupForm) ----
  let body: { email?: string; userType?: string };
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: "Ongeldige aanvraag." }, 400);
  }

  const email = (body.email || "").trim().toLowerCase();
  if (!isValidEmail(email)) {
    return json({ success: false, error: "Vul a.u.b. een geldig e-mailadres in." }, 400);
  }

  const result = await registerUser(env, email);
  if (!result.ok) {
    return json({ success: false, error: "Er ging iets mis. Probeer het later opnieuw." }, 500);
  }

  return json(
    result.alreadyRegistered
      ? {
          success: true,
          message: "Je bent al aangemeld! We houden je op de hoogte zodra de extensie live gaat.",
          alreadyRegistered: true,
          totalUsers: result.totalUsers,
        }
      : {
          success: true,
          message: "Hoera! Je bent toegevoegd aan de Promptkoffie bèta-wachtlijst.",
          totalUsers: result.totalUsers,
        }
  );
};
