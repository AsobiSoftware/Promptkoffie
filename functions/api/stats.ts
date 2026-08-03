import { countByType, type SheetEnv } from "../_lib/sheets";

export const onRequestGet: PagesFunction<SheetEnv> = async ({ env }) => {
  try {
    const [totalUsers, totalBusinesses] = await Promise.all([
      countByType(env, "user"),
      countByType(env, "business"),
    ]);

    return new Response(
      JSON.stringify({
        totalUsers,
        totalBusinesses,
        averageCupsPerMonth: "2 - 3",
        privacyRating: "100% Zero-Read",
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Fout bij ophalen stats:", err);
    return new Response(JSON.stringify({ error: "Kon statistieken niet ophalen." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
