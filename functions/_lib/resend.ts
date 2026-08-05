export interface ResendEnv {
  RESEND_API_KEY: string;
  RESEND_FROM: string; // bv. "Promptkoffie <onboarding@resend.dev>"
}

export async function sendEmail(
  env: ResendEnv,
  opts: { to: string; subject: string; text: string }
): Promise<void> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.RESEND_FROM,
      to: [opts.to],
      subject: opts.subject,
      text: opts.text,
    }),
  });

  if (!res.ok) {
    // Bewust geen throw hier: een mislukte mail mag de inschrijving zelf
    // (de Sheets-write) niet ongedaan maken. De aanroeper vangt dit apart af.
    throw new Error(`Resend-fout: ${res.status} ${await res.text()}`);
  }
}
