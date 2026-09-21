export interface Player {
    number: number;
    name: string;
    position: string;
}

export interface Match {
    id: string;
    opponent: string;
    date: string;
    time: string;
    isHome: boolean;
    scoreHome?: number;
    scoreAway?: number;
    status: "played" | "upcoming" | "canceled";
}

export interface RankingItem {
    position: number;
    team: string;
    played: number;
    won: number;
    lost: number;
    drawn: number;
    points: number;
    isCurrentTeam?: boolean;
}

export interface Team {
    id: string;
    name: string;
    slug: string;
    category: string;
    ageGroup: string;
    coach: string;
    schedule: string[];
    location: string;
    description: string;
    isRecruiting: boolean;
}