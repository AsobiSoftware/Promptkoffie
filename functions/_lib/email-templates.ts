// Alleen Mail 1 hoort in deze Worker-scope. Mail 2-4 (update, release,
// reminder/follow-up) vereisen een apart verzendmechanisme na lancering —
// zie promptkoffie-emailteksten.md.

export const MAIL_1_USER = {
  subject: "Je staat op de lijst voor PromptKoffie",
  text: `Bedankt voor je inschrijving. Je staat op de lijst.

Je ontvangt van ons in totaal nog 3 mails, niet meer:
1. Een update zodra de lancering dichterbij komt
2. Een mail zodra PromptKoffie live staat, met installatielink
3. Eén herinnering — maar alleen als je 'm dan nog niet geïnstalleerd hebt

Daarna hoor je niks meer van ons, tenzij je zelf contact opneemt.`,
};

export const MAIL_1_BUSINESS = {
  subject: "Bedankt voor je interesse in adverteren via PromptKoffie",
  text: `Bedankt voor je interesse. We bouwen momenteel de gebruikersbasis op.

Je ontvangt van ons in totaal nog 3 mails, niet meer:
1. Een update zodra de lancering dichterbij komt
2. Een mail zodra we cijfers hebben en openstaan voor directe CPM-deals
3. Eén follow-up — maar alleen als we dan nog niks van je gehoord hebben

Daarna hoor je niks meer van ons, tenzij je zelf contact opneemt.`,
};
