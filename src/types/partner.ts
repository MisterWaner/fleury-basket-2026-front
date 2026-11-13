export interface PartnerRecord {
    id: string;
    name: string;
    category: "institutionnel" | "majeur" | "officiel" | "local";
    description?: string;
    logo: string;
    websiteUrl?: string;
    collectionId?: string;
    collectionName?: string;
}

export interface Partner {
    id: string;
    name: string;
    category: "institutionnel" | "majeur" | "officiel" | "local";
    description: string;
    logoUrl: string;
    websiteUrl?: string;
}