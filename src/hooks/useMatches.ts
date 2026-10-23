import { useState, useEffect } from "react";
import PocketBase, { ClientResponseError } from "pocketbase";
import { formatMatchRecordToMatch } from "../helpers/formatMatch";
import { parseFrenchDateString } from "@/helpers/parseFrenchDateString";
import type { MatchRecord, Match } from "../types/match";

const pbUrl = import.meta.env.PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";
console.log("🔗 URL PocketBase configurée :", pbUrl);

const pb = new PocketBase(pbUrl);

export function useMatches() {
    const [matches, setMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchMatches() {
            console.log("🚀 1. Début de fetchMatches");
            try {
                setLoading(true);
                setError(null);

                console.log("📡 2. Envoi de la requête à PocketBase...");
                const records = await pb
                    .collection("matches")
                    .getFullList<MatchRecord>({
                        sort: "date",
                        expand: "team",
                        requestKey: null,
                    });

                console.log(
                    "📦 3. Données brutes reçues de PocketBase :",
                    records,
                );

                if (!isMounted) return;

                const sortedRecords = [...(records || [])].sort((a, b) => parseFrenchDateString(a.date) - parseFrenchDateString(b.date));

                const formattedMatches: Match[] = sortedRecords.map(
                    (record) => formatMatchRecordToMatch(record),
                );

                console.log(
                    "✨ 4. Matchs formatés avec succès :",
                    formattedMatches,
                );
                setMatches(formattedMatches);
            } catch (err: unknown) {
                console.error("❌ ERREUR attrapée dans le catch :", err);
                if (err instanceof ClientResponseError && err.isAbort) {
                    return;
                }
                if (isMounted) {
                    setError("Impossible de charger le calendrier.");
                }
            } finally {
                console.log(
                    "🏁 5. Bloc finally atteint, désactivation du loading",
                );
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchMatches();

        return () => {
            isMounted = false;
        };
    }, []);

    return { matches, loading, error };
}


