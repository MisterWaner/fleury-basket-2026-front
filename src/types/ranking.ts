import type { TeamRecord } from "@/types/teams";

export interface RankingRecord {
    id: string;
    team: string;
    position: number;
    played: number;
    won: number;
    lost: number;
    points: number;
    pointsFor: number;
    pointsAgainst: number;
    pointsDiff: number;
    isCurrentTeam?: boolean;
    expand?: {
        team_ref?: TeamRecord
    }
}

export interface RankingItem {
    position: number;
    team: string;
    played: number;
    won: number;
    lost: number;
    points: number;
    pointsFor: number;
    pointsAgainst: number;
    pointsDiff: number;
    isCurrentTeam?: boolean;
}

export interface RankingOptions {
    teamId?: string;
    category?: string;
}

