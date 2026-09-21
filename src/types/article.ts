export interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    category: 'Vie du club' | 'Résultats' | 'Stage' | 'Compétition' | 'Événement' | 'Tournois';
    author: string;
    imageUrl?: string;
    featured?: boolean;
}