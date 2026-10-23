import { useState, useEffect } from "react";
import pocketbase, { ClientResponseError } from "pocketbase";
import type { MatchRecord } from "@/types/match";
import type { Player } from "@/types/player";
import type { TeamDetails } from "@/types/teams";
import { formatMatchRecordToMatch } from "@/helpers/formatMatch";
import { parseFrenchDateString } from "@/helpers/parseFrenchDateString";

const pbUrl = import.meta.env.PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";
const pb = new pocketbase(pbUrl);

export function useTeamDetails(teamId: string) {
    const [team, setTeam] = useState<TeamDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchTeamDetails() {
            if (!teamId) {
                console.warn("⚠️ Aucun teamId fourni au hook !");
                if (isMounted) {
                    setError("ID de l'équipe manquant");
                    setLoading(false);
                }
                return;
            }

            try {
                setLoading(true);
                setError(null);

                console.log("🔍 Chargement de l'équipe ID:", teamId);
                const teamData = await pb
                    .collection("teams")
                    .getFirstListItem(`slug="${teamId}"`);
                console.log("✅ Équipe reçue:", teamData);

                const records = await pb
                    .collection("matches")
                    .getFullList<MatchRecord>({
                        filter: `team = "${teamData.id}"`,
                        sort: "+date",
                    });

                if (!isMounted) return;

                const trainingSlots = Array.isArray(teamData.slot)
                    ? teamData.slot
                    : [
                          {
                              day: "Entraînement",
                              time: "Horaires à venir",
                              location:
                                  teamData.location ||
                                  "Gymnase Auguste Delaune",
                          },
                      ];

                const upCommingRecords = (records || []).filter(
                    (record) => record.status?.toUpperCase() !== "FINISHED"
                );

                const sortedAllRecords = [...(records || [])].sort((a, b) => {
                    return parseFrenchDateString(a.date) - parseFrenchDateString(b.date);
                });

                const allMatches = sortedAllRecords.map((record) => formatMatchRecordToMatch(record, { teamName: teamData.name, teamCategory: teamData.category }));

                const sortedUpCommingRecords = [...upCommingRecords].sort((a, b) => parseFrenchDateString(a.date) - parseFrenchDateString(b.date)).slice(0, 4);

                const recentMatches = sortedUpCommingRecords.map((record) => formatMatchRecordToMatch(record, { teamName: teamData.name, teamCategory: teamData.category }));

                setTeam({
                    id: teamData.id,
                    name: teamData.name,
                    category: teamData.category,
                    division: teamData.division || "Championnat Départemental",
                    coach: teamData.coach || "Non renseigné",
                    location: teamData.location || "Gymnase Auguste Delaune",
                    trainingSlots: trainingSlots,
                    roster: [],
                    ranking: [],
                    recentMatches: recentMatches,
                    allMatches: allMatches,
                });
            } catch (error) {
                console.error(
                    "❌ Erreur chargement équipe PocketBase :",
                    error,
                );
                if (isMounted) {
                    setError("Impossible de charger les détails de l'équipe.");
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        fetchTeamDetails();
        return () => {
            isMounted = false;
        };
    }, [teamId]);

    return {
        team,
        loading,
        error,
    };
}



