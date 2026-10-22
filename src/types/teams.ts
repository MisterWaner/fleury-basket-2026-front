import type { Player } from "@/types/player";
import type { Match } from "@/types/match";
import type { RankingItem } from "@/types/ranking";

export interface TeamRecord {
    id: string;
    name: string;
    category?: string;
}

export interface Team {
    id: string;
    name: string;
    slug: string;
    category: string;
    ageGroup: string;
    coach: string;
    slot: { day: string; time: string; location: string }[];
    location: string;
    description: string;
    isRecruiting: boolean;
}

export interface TeamDetails {
    id: string;
    name: string;
    category: string;
    division: string;
    coach: string;
    location: string;
    trainingSlots: { day: string; time: string; location: string }[];
    roster: Player[];
    recentMatches: Match[];
    ranking: RankingItem[];
    allMatches: Match[];

}

export interface TeamDetailPageProps {
    teamId: string;

}