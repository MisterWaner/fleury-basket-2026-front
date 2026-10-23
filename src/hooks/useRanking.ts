import { useState, useEffect } from "react";
import type { RankingItem, RankingRecord, RankingOptions } from "@/types/ranking";
import pocketbase, { ClientResponseError } from "pocketbase";
import { formatRankingRecordToRankingItem } from "@/helpers/formatRankings";

const pbUrl = import.meta.env.PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";
const pb = new pocketbase(pbUrl);

export function useRanking(currentTeamId?: string) {
    const [ranking, setRanking] = useState<RankingItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchRanking() {
            try {
                setLoading(true);
                setError(null);

                console.log("🔍 teamId reçu dans le hook :", currentTeamId);
                const teamData = await pb
                    .collection("teams")
                    .getFirstListItem(`slug="${currentTeamId}"`);
                console.log("✅ Équipe reçue:", teamData);

                
                const records = await pb.collection("rankings").getFullList<RankingRecord>({
                    expand: "team_ref",
                    filter: `team_ref = "${teamData.id}"`,
                    requestKey: null
                });
                console.log("📊 Enregistrements filtrés trouvés :", records);

                if (!isMounted) return;

                const formattedRanking = records.map((record) => {
                    const item = formatRankingRecordToRankingItem(record);
                    
                    return item;
                });

                formattedRanking.sort((a, b) => {
                    if (b.points !== a.points) {
                        return b.points - a.points;
                    }
                    return b.pointsDiff - a.pointsDiff;
                })

                const finalRankings = formattedRanking.map((item, index) => ({
                    ...item,
                    position: index + 1
                }));

                setRanking(finalRankings);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération du classement:",
                    error,
                );
                if (isMounted) {
                    setError("Impossible de charger le classement.");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }
        fetchRanking();

        return () => {
            isMounted = false;
        };
    }, [currentTeamId]);

    return { ranking, loading, error };
}





