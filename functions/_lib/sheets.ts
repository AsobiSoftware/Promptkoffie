import { getSheetsAccessToken, type GoogleAuthEnv } from "./google-auth";

export interface SheetEnv extends GoogleAuthEnv {
  GOOGLE_SHEET_ID: string;
}

// Kolommen: timestamp | email | type | status | companyName | contactPerson | sector
const RANGE_ALL = "A:G";

export async function getAllRows(env: SheetEnv): Promise<string[][]> {
  const token = await getSheetsAccessToken(env);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${env.GOOGLE_SHEET_ID}/values/${RANGE_ALL}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) {
    throw new Error(`Sheets-leesfout: ${res.status} ${await res.text()}`);
  }
  const data = (await res.json()) as { values?: string[][] };
  return data.values ?? [];
}

export async function emailExists(env: SheetEnv, email: string): Promise<boolean> {
  const rows = await getAllRows(env);
  const normalized = email.trim().toLowerCase();
  return rows.slice(1).some((row) => (row[1] || "").trim().toLowerCase() === normalized);
}

export async function countByType(env: SheetEnv, type: "user" | "business"): Promise<number> {
  const rows = await getAllRows(env);
  return rows.slice(1).filter((row) => (row[2] || "").trim().toLowerCase() === type).length;
}

export async function appendRow(env: SheetEnv, row: string[]): Promise<void> {
  const token = await getSheetsAccessToken(env);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${env.GOOGLE_SHEET_ID}/values/${RANGE_ALL}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [row] }),
  });
  if (!res.ok) {
    throw new Error(`Sheets-schrijffout: ${res.status} ${await res.text()}`);
  }
}
