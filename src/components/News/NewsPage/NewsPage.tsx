import { useState, useMemo } from "react";
import {
    Calendar,
    Search,
    ArrowRight,
    Tag,
    User,
    ChevronLeft,
    ChevronRight,
    Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/types/article";

const mockArticles: Article[] = [
    {
        id: "1",
        slug: "victoire-seniors-garcons",
        title: "Victoire éclatante des Seniors G1 à domicile contre Caen BC !",
        excerpt:
            "Retour sur la magnifique prestation collective de notre équipe fanion ce samedi au gymnase Auguste Delaune.",
        category: "Résultats",
        date: "15 Mars 2026",
        author: "Bureau Fleury Basket",
        imageUrl: "/images/news-1.jpg",
        featured: true,
    },
    {
        id: "2",
        slug: "stage-basket-paques-2026",
        title: "Stage de Pâques 2026 : Inscrivez vos enfants dès maintenant",
        excerpt:
            "Le club organise un stage de perfectionnement ouvert aux U9, U11 et U13 pendant les vacances de Pâques.",
        category: "Événement",
        date: "10 Mars 2026",
        author: "Commission Jeunes",
        imageUrl: "/images/news-2.jpg",
    },
    {
        id: "3",
        slug: "tournoi-3x3-printemps",
        title: "Grand Tournoi 3x3 ouvert à tous fin Avril",
        excerpt:
            "Venez défier les meilleures équipes de la région lors de notre tournoi annuel homologué 3x3 FFBB.",
        category: "Tournois",
        date: "02 Mars 2026",
        author: "Animation Club",
        imageUrl: "/images/news-3.jpg",
    },
    {
        id: "4",
        title: "Assemblée Générale du club : Compte-rendu et perspectives",
        slug: "ag-compte-rendu-2026",
        excerpt:
            "Retour sur les faits marquants de la saison écoulée et présentation des nouveaux projets pour le développement du mini-basket.",
        date: "02 Septembre 2026",
        category: "Vie du club",
        author: "Bureau Fleury Basket",
    },
    {
        id: "5",
        title: "Soirée Flammekueche et Loto du club : Réservez votre date !",
        slug: "soiree-loto-club-2026",
        excerpt:
            "Notre événement annuel de convivialité aura lieu le samedi 14 novembre à la salle socioculturelle de Fleury-sur-Orne.",
        date: "28 Août 2026",
        category: "Événement",
        author: "Comité d'Animation",
    },
    {
        id: "6",
        title: "Lancement de l'école de Mini-Basket (U7 - U9)",
        slug: "lancement-ecole-mini-basket",
        excerpt:
            "Accompagnez vos enfants dans leurs premiers pas sur les parquets tous les samedis matins au gymnase Auguste Delaune.",
        date: "20 Août 2026",
        category: "Vie du club",
        author: "Responsable École de Basket",
    },
];

const categories = [
    "Toutes",
    "Vie du club",
    "Résultats",
    "Stage",
    "Compétition",
    "Événement",
    "Tournois",
];

function NewsPage() {
    const [selectedCategory, setSelectedCategory] = useState("Toutes");
    const [searchQuery, setSearchQuery] = useState("");

    // Article à la une (le premier marqué 'featured' ou le premier tout court)
    const featuredArticle = useMemo(() => {
        return mockArticles.find((a) => a.featured) || mockArticles[0];
    }, []);

    // Filtrage des articles pour la grille
    const filteredArticles = useMemo(() => {
        return mockArticles.filter((article) => {
            const matchesCategory =
                selectedCategory === "Toutes" ||
                article.category === selectedCategory;
            const matchesSearch =
                article.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                article.excerpt
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* --- EN-TÊTE --- */}
                <div className="max-w-3xl mb-10">
                    <Badge
                        variant="outline"
                        className="bg-pink-fleury/30 border-pink-fleury text-black-fleury mb-2 font-semibold"
                    >
                        Vie du club
                    </Badge>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-black-fleury tracking-tight mb-3">
                        Actualités & Vie du Club
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-lg">
                        Résultats des matchs, événements à venir, stages et
                        infos officielles du Fleury Basket.
                    </p>
                </div>

                {/* --- ARTICLE À LA UNE (FEATURED) --- */}
                {featuredArticle &&
                    searchQuery === "" &&
                    selectedCategory === "Toutes" && (
                        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden mb-12">
                            <div className="grid grid-cols-1 lg:grid-cols-12">
                                {/* Illustration / Visuel */}
                                <div className="lg:col-span-5 bg-linear-to-br from-black-fleury via-slate-800 to-gray-fleury p-8 sm:p-12 flex flex-col justify-between relative min-h-60">
                                    <Badge className="self-start bg-pink-fleury text-black-fleury font-bold border-none">
                                        À la une
                                    </Badge>

                                    <div className="my-auto text-center py-6">
                                        <Newspaper className="h-16 w-16 text-pink-fleury/60 mx-auto mb-2" />
                                        <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                                            Fleury Basket News
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                                        <Calendar className="h-3.5 w-3.5 text-pink-fleury" />
                                        <span>{featuredArticle.date}</span>
                                    </div>
                                </div>

                                {/* Contenu Article */}
                                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <Badge
                                                variant="secondary"
                                                className="bg-slate-100 text-black-fleury font-bold"
                                            >
                                                {featuredArticle.category}
                                            </Badge>
                                            <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                                                <User className="h-3 w-3" />
                                                {featuredArticle.author}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl sm:text-3xl font-extrabold text-black-fleury tracking-tight mb-4 leading-snug">
                                            {featuredArticle.title}
                                        </h2>

                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                            {featuredArticle.excerpt}
                                        </p>
                                    </div>

                                    <a
                                        href={`/actualites/${featuredArticle.slug}`}
                                        className="inline-flex items-center text-sm font-bold text-black-fleury hover:text-gray-fleury transition-colors pt-4 border-t border-gray-100"
                                    >
                                        Lire l'article complet
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                {/* --- BARRE DE RECHERCHE ET FILTRES --- */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-gray-200/90 shadow-2xs">
                    {/* Recherche */}
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Rechercher un article..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-black-fleury placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-fleury/50 focus:border-pink-fleury transition-all"
                        />
                    </div>

                    {/* Filtres Catégories */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                                    selectedCategory === cat
                                        ? "bg-black-fleury border-black-fleury text-white shadow-2xs"
                                        : "bg-slate-50 border-gray-200 text-gray-600 hover:bg-slate-100"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- GRILLE D'ARTICLES --- */}
                {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                        {filteredArticles.map((article) => (
                            <article
                                key={article.id}
                                className="group bg-white rounded-2xl border border-gray-200/90 shadow-2xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
                            >
                                {/* Visual Header / Miniature */}
                                <div className="relative h-44 bg-slate-100 p-4 flex flex-col justify-between border-b border-gray-100">
                                    <div className="flex items-center justify-between">
                                        <Badge className="bg-pink-fleury text-black-fleury font-bold border-none">
                                            {article.category}
                                        </Badge>
                                    </div>

                                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500">
                                        <Calendar className="h-3.5 w-3.5 text-pink-fleury" />
                                        <span>{article.date}</span>
                                    </div>
                                </div>

                                {/* Contenu */}
                                <div className="p-5 sm:p-6 flex flex-col flex-1">
                                    <h3 className="text-lg font-extrabold text-black-fleury group-hover:text-gray-fleury transition-colors line-clamp-2 mb-2.5 leading-snug">
                                        {article.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 mb-6 flex-1 leading-relaxed">
                                        {article.excerpt}
                                    </p>

                                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                                        <span className="text-[11px] font-medium text-gray-400">
                                            {article.author}
                                        </span>
                                        <a
                                            href={`/actualites/${article.slug}`}
                                            className="inline-flex items-center text-xs font-bold text-black-fleury group-hover:text-gray-fleury transition-colors"
                                        >
                                            Lire
                                            <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    /* État vide */
                    <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center mb-12">
                        <Newspaper className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-black-fleury mb-1">
                            Aucun article trouvé
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto">
                            Aucun résultat ne correspond à votre recherche ou au
                            filtre sélectionné.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NewsPage;

