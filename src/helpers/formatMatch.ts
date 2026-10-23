import type { Match, MatchRecord, FormatMatchOptions } from "../types/match";
import { MONTH_MAP } from "./parseFrenchDateString";
import { normalizeCategory } from "./normalizeCategory";

export function formatMatchRecordToMatch(
    record: MatchRecord,
    options: FormatMatchOptions = {},
): Match {
    // Analyse de la date textuelle (ex: "1 nov. 10h00")
    const rawDate = record.date || "";
    const parts = rawDate.split(" ");
    const dayNum = parts[0] || "";
    const monthStr = parts[1] || "";
    const timeStr = parts[2] || "10h00";

    // Reconstitution propre pour l'affichage
    const cleanMonth = monthStr.toLowerCase().replace(".", "");
    const monthIndex = MONTH_MAP[cleanMonth] ?? 0;
    const year = monthIndex >= 8 ? 2026 : 2027;
    const formattedDate = `${dayNum} ${monthStr} ${year}`;
    const formattedTime = timeStr.replace("h", ":");

    // Détermination des noms des équipes selon isHome
    const teamName =
        options.teamName || record.expand?.team?.name || "FLEURY BASKET";
    const opponent = record.opponent;
    const homeTeam = record.isHome ? teamName : opponent;
    const awayTeam = record.isHome ? opponent : teamName;

    // Statut & Scores
    const isCompleted = record.status?.toUpperCase() === "FINISHED";
    const homeScore =
        isCompleted && typeof record.homeScore === "number"
            ? record.homeScore
            : undefined;
    const awayScore =
        isCompleted && typeof record.awayScore === "number"
            ? record.awayScore
            : undefined;

    // Lieu du match
    let location = "Gymnase Auguste Delaune, Fleury-Sur-Orne";
    if (!record.isHome) {
        location = "À l'extérieur (salle de l'adversaire)";
    }

    // Catégorie
    const rawCategory = options.teamCategory || record.expand?.team?.category;
    const category = normalizeCategory(teamName, rawCategory);
    
    return {
        id: record.id,
        category,
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
}

