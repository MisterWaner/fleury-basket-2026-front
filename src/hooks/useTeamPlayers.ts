import { useState, useEffect } from "react";
import PocketBase, { ClientResponseError } from "pocketbase";
import type { Player } from "@/types/player";

const pbUrl = import.meta.env.PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";
const pb = new PocketBase(pbUrl);

export function useTeamPlayers(teamId: string) {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!teamId) {
            setLoading(false);
            return;
        }

        let isMounted = true;

        async function fetchPlayers() {
            try {
                setLoading(true);
                setError(null);

                const teamData = await pb
                    .collection("teams")
                    .getFirstListItem(`slug="${teamId}"`);
                console.log("✅ Équipe reçue:", teamData);

                const records = await pb
                    .collection("players")
                    .getFullList<Player>({
                        filter: `team="${teamData.id}"`,
                        sort: "number",
                        requestKey: null,
                        expand: "team",
                    });
                console.log("Fetched players:", records);
                console.log("Team ID:", teamId);
                if (!isMounted) return;
                setPlayers(records);
            } catch (error) {
                console.error(
                    "❌ Erreur lors de la récupération des joueurs :",
                    error,
                );
                if (error instanceof ClientResponseError && error.isAbort) {
                    return;
                }
                if (isMounted) {
                    setError("Impossible de charger l'effectif.");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }
        fetchPlayers();

        return () => {
            isMounted = false;
        };
    }, [teamId]);

    return { players, loading, error };
}

