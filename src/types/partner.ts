export interface Partner {
    id: string;
    name: string;
    category: "institutionnel" | "majeur" | "officiel" | "local";
    description: string;
    logoUrl: string;
    websiteUrl?: string;
}