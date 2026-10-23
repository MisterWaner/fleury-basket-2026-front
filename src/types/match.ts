import type { TeamCategory } from "./teamCategory";
import type { TeamRecord } from "./teams";

export interface MatchRecord {
    id: string;
    customId: string;
    team: string;
    category?: string;
    opponent: string;
    date: string; // Ex: "1 nov. 10h00"
    location?: string;
    status: "SCHEDULED" | "FINISHED";
    homeScore?: number | null;
    awayScore?: number | null;
    isHome: boolean;
    expand?: {
        team?: TeamRecord;
    };
}

export interface Match {
    id: string;
    category: TeamCategory;
    opponent: string;
    homeTeam: string;
    awayTeam: string;
    date: string;
    time: string;
    location: string;
    isHome: boolean;
    status: "upcoming" | "completed";
    scoreHome?: number;
    scoreAway?: number;
}

export interface FormatMatchOptions {
    teamName?: string;
    teamCategory?: TeamCategory
}