export interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    category: 'Club' | 'Stage' | 'Compétition' | 'Événement';
    author: string;
    imageUrl?: string;
    featured?: boolean;
}