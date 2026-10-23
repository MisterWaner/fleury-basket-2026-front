import type { RankingRecord, RankingItem } from "@/types/ranking";

export function formatRankingRecordToRankingItem(record: RankingRecord): RankingItem {
    const rawTeamName =
        record.team || record.expand?.team_ref?.name || "Équipe inconnue";

    const pointsFor = record.pointsFor ?? 0;
    const pointsAgainst = record.pointsAgainst ?? 0;
    const calculatedDiff = record.pointsDiff ?? (pointsFor - pointsAgainst);

    return {
        position: record.position,
        team: rawTeamName,
        played: record.played ?? 0,
        won: record.won ?? 0,
        lost: record.lost ?? 0,
        points: record.points ?? 0,
        pointsFor,
        pointsAgainst,
        pointsDiff: calculatedDiff,
        isCurrentTeam: record.isCurrentTeam
    }
}