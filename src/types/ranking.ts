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

