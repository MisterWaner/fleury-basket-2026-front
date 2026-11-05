import { useState, useEffect } from "react";
import Pocketbase, { ClientResponseError } from "pocketbase";
import type { Match, MatchRecord } from "@/types/match";
import { parseFrenchDateString } from "@/helpers/parseFrenchDateString";
import { formatMatchRecordToMatch } from "@/helpers/formatMatch";

const pbUrl = import.meta.env.PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";
const pb = new Pocketbase(pbUrl);

export function useNextMatch() {
    const [nextMatch, setNextMatch] = useState<Match | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchNextMatch() {
            try {
                setLoading(true);
                setError(null);

                const records = await pb
                    .collection("matches")
                    .getFullList<MatchRecord>({
                        filter: 'status = "SCHEDULED" && team.name = "Seniors Masculins 1"',
                        expand: "team",
                        sort: "date",
                        requestKey: null,
                    });

                const sortedRecords = [...(records || [])].sort((a, b) => parseFrenchDateString(a.date) - parseFrenchDateString(b.date));

                const formattedMatches: Match[] = sortedRecords.map((record) =>
                    formatMatchRecordToMatch(record),
                );

                if (!isMounted) return;

                if (sortedRecords.length > 0) {
                    const match = formattedMatches[0];
                    setNextMatch(match);
                }
            } catch (error) {
                console.error("❌ ERREUR attrapée dans le catch :", error);
                if (error instanceof ClientResponseError && error.isAbort) {
                    return;
                }
                if (isMounted) {
                    setError("Impossible de charger le match.");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchNextMatch();

        return () => {
            isMounted = false;
        };
    }, []);

    return { nextMatch, loading, error };
}




