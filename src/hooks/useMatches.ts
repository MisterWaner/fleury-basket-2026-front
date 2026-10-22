import { useState, useEffect } from "react";
import PocketBase, { ClientResponseError } from "pocketbase";
import type { TeamCategory } from "../types/teamCategory";
import type { MatchRecord, Match } from "../types/match";
import { normalizeCategory } from "../helpers/normalizeCategory";

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

                const formattedMatches: Match[] = (records || []).map(
                    (record) => {
                        // Analyse de la date textuelle (ex: "1 nov. 10h00")
                        const rawDate = record.date || "";
                        const parts = rawDate.split(" ");
                        const dayNum = parts[0] || "";
                        const monthStr = parts[1] || "";
                        const timeStr = parts[2] || "10h00";

                        // Reconstitution propre pour l'affichage
                        const formattedDate = `${dayNum} ${monthStr} 2026`;
                        const formattedTime = timeStr.replace("h", ":");

                        // Détermination des noms des équipes selon isHome
                        const teamName = "FLEURY BASKET"; // Nom de ton club
                        const opponent = record.opponent;
                        const homeTeam = record.isHome
                            ? teamName
                            : opponent;
                        const awayTeam = record.isHome
                            ? opponent
                            : teamName;


                        // Gestion des scores
                        const scoreHome =
                            typeof record.homeScore === "number" &&
                            record.homeScore > 0
                                ? record.homeScore
                                : undefined;
                        const scoreAway =
                            typeof record.awayScore === "number" &&
                            record.awayScore > 0
                                ? record.awayScore
                                : undefined;

                        let location =
                            "Gymnase Auguste Delaune, Fleury-Sur-Orne";
                        if (!record.isHome) {
                            location = "A l'extérieur (salle de l'adversaire)";
                        }

                        const linkedTeamName =
                            record.expand?.team?.name || "FLEURY BASKET";
                        const linkedTeamCategory = record.expand?.team?.category;

                        // Normalisation précise de la catégorie
                        const category = normalizeCategory(
                            linkedTeamName,
                            linkedTeamCategory,
                        );

                        console.log(
                            "Nom équipe:",
                            record.expand?.team?.name,
                            "| Catégorie BDD:",
                            record.expand?.team?.category,
                        );

                        console.log("🔍 Match brut :", {
                            rawRecord: record,
                            hasExpand: !!record.expand,
                            teamField: record.team,
                        });

                        return {
                            id: record.id,
                            category,
                            opponent,
                            homeTeam,
                            awayTeam,
                            date: formattedDate,
                            time: formattedTime,
                            location: location,
                            isHome: record.isHome,
                            status:
                                record.status === "FINISHED"
                                    ? "completed"
                                    : "upcoming",
                            scoreHome,
                            scoreAway,
                        };
                    },
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



