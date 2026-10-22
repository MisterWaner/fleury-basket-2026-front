import { useState, useEffect } from "react";
import pocketbase, { ClientResponseError } from "pocketbase";
import type { Match } from "@/types/match";
import type { MatchRecord } from "@/types/match";
import type { Player } from "@/types/player";
import type { TeamDetails } from "@/types/teams";
import { normalizeCategory } from "@/helpers/normalizeCategory";

const pbUrl = import.meta.env.PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";
const pb = new pocketbase(pbUrl);

// Dictionnaire des mois en français pour la conversion numérique
const MONTH_MAP: Record<string, number> = {
    janv: 0, jan: 0, janvier: 0,
    févr: 1, fevr: 1, fev: 1, février: 1, fevrier: 1,
    mars: 2, mar: 2,
    avril: 3, avr: 3,
    mai: 4,
    juin: 5,
    juil: 6, juill: 6, juillet: 6,
    août: 7, aout: 7,
    sept: 8, sep: 8, septembre: 8,
    oct: 9, octo: 9, octobre: 9,
    nov: 10, nove: 10, novembre: 10,
    déc: 11, dec: 11, décembre: 11, decembre: 11,
};

function parseFrenchDateString(dateStr: string): number {
    if (!dateStr) return 0;

    const parts = dateStr.trim().split(" ");
    const day = parseInt(parts[0], 10) || 1;
    const monthRaw = (parts[1] || "").toLowerCase().replace(".", "");
    const month = MONTH_MAP[monthRaw] ?? 0;

    // Détermination de l'année sportive (Saison 2026-2027)
    // Septembre à Décembre -> 2026, Janvier à Juin -> 2027
    const year = month >= 8 ? 2026 : 2027;

    const timeParts = (parts[2] || "10h00").split("h");
    const hours = parseInt(timeParts[0], 10) || 10;
    const minutes = parseInt(timeParts[1], 10) || 0;

    return new Date(year, month, day, hours, minutes).getTime();
}

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

                const formatMatchItem = (record: MatchRecord): Match => {
                    const rawDate = record.date || "";
                    const parts = rawDate.split(" ");
                    const dayNum = parts[0] || "";
                    const monthStr = parts[1] || "";
                    const timeStr = parts[2] || "10h00";

                    const formattedDate = `${dayNum} ${monthStr} 2026`;
                    const formattedTime = timeStr.replace("h", ":");

                    const teamName = teamData.name || "FLEURY BASKET";
                    const opponent = record.opponent;
                    const homeTeam = record.isHome ? teamName : opponent;
                    const awayTeam = record.isHome ? opponent : teamName;

                    // On accepte 0 et tous les nombres valides pour les scores

                    // Détermination robuste du statut
                    const isCompleted =
                        record.status?.toUpperCase() === "FINISHED";
                    const homeScore =
                        isCompleted && typeof record.homeScore === "number"
                            ? record.homeScore
                            : undefined;
                    const awayScore =
                        isCompleted && typeof record.awayScore === "number"
                            ? record.awayScore
                            : undefined;

                    let location = "Gymnase Auguste Delaune, Fleury-Sur-Orne";
                    if (!record.isHome) {
                        location = "À l'extérieur (salle de l'adversaire)";
                    }

                    return {
                        id: record.id,
                        category: teamData.category,
                        opponent,
                        homeTeam,
                        awayTeam,
                        date: formattedDate,
                        time: formattedTime,
                        location,
                        isHome: record.isHome,
                        status: isCompleted ? "completed" : "upcoming",
                        scoreHome: homeScore,
                        scoreAway: awayScore,
                    };
                };

                const upCommingRecords = (records || []).filter(
                    (record) => record.status?.toUpperCase() !== "FINISHED"
                );

                const sortedAllRecords = [...(records || [])].sort((a, b) => {
                    return parseFrenchDateString(a.date) - parseFrenchDateString(b.date);
                });

                const allMatches = sortedAllRecords.map(formatMatchItem);

                const sortedUpCommingRecords = [...upCommingRecords].sort((a, b) => parseFrenchDateString(a.date) - parseFrenchDateString(b.date)).slice(0, 4);

                const recentMatches = sortedUpCommingRecords.map(formatMatchItem);

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



