import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Données fictives pour la maquette UI
const newsItems = [
    {
        id: 1,
        title: "Reprise des entraînements pour la saison 2026-2027",
        excerpt:
            "Retrouvez tous les créneaux par catégorie au gymnase Auguste Delaune dès la semaine prochaine.",
        date: "15 Septembre 2026",
        category: "Club",
        image: "/images/news-1.jpg", // À remplacer ou laisser un fallback
    },
    {
        id: 2,
        title: "Stage de perfectionnement Jeunes pendant les vacances",
        excerpt:
            "Inscriptions ouvertes pour le stage U11-U15 organisé par nos entraîneurs diplômés.",
        date: "10 Septembre 2026",
        category: "Stage",
        image: "/images/news-2.jpg",
    },
    {
        id: 3,
        title: "Victoire encourageante des Seniors en préparation",
        excerpt:
            "Beau succès collective pour notre équipe fanion lors du tournoi de pré-saison.",
        date: "04 Septembre 2026",
        category: "Résultats",
        image: "/images/news-3.jpg",
    },
];

function NewsSection() {
    return (
        <section className="py-16 bg-slate-50 border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* --- EN-TÊTE DE SECTION --- */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                    <div>
                        <Badge
                            variant="outline"
                            className="bg-pink-fleury/30 border-pink-fleury text-black-fleury mb-2 font-semibold"
                        >
                            Vie du club
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-black-fleury tracking-tight">
                            Dernières Actualités
                        </h2>
                    </div>

                    <Button
                        variant="outline"
                        className="border-gray-fleury/50 text-black-fleury hover:bg-pink-fleury/30 font-semibold shrink-0"
                        render={<a href="/actualites" />}
                    >
                        Toutes les actualités
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                {/* --- GRILLE D'ARTICLES --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <article
                            key={item.id}
                            className="group flex flex-col bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden"
                        >
                            {/* Conteneur Image / Illustration */}
                            <div className="relative h-48 w-full bg-slate-200 overflow-hidden flex items-center justify-center">
                                {/* Image factice ou fallback aux couleurs du club */}
                                <div className="absolute inset-0 bg-linear-to-tr from-black-fleury/80 to-gray-fleury/40 z-10 opacity-30 group-hover:opacity-10 transition-opacity" />
                                <div className="flex flex-col items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-300">
                                    <Tag className="h-8 w-8 text-pink-fleury mb-1" />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Fleury Basket
                                    </span>
                                </div>

                                {/* Badge Catégorie */}
                                <Badge className="absolute top-3 left-3 z-20 bg-pink-fleury text-black-fleury font-bold shadow-2xs border-none">
                                    {item.category}
                                </Badge>
                            </div>

                            {/* Contenu de la Carte */}
                            <div className="flex flex-col flex-1 p-6">
                                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-2">
                                    <Calendar className="h-3.5 w-3.5 text-gray-fleury" />
                                    <span>{item.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-black-fleury group-hover:text-gray-fleury transition-colors line-clamp-2 mb-3 leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600 line-clamp-3 mb-6 flex-1 leading-relaxed">
                                    {item.excerpt}
                                </p>

                                <a
                                    href={`/actualites/${item.id}`}
                                    className="inline-flex items-center text-sm font-bold text-black-fleury group-hover:text-gray-fleury transition-colors mt-auto pt-4 border-t border-gray-100"
                                >
                                    Lire la suite
                                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NewsSection;

