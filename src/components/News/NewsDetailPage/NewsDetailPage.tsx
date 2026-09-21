import {
    Calendar,
    User,
    Tag,
    ChevronLeft,
    Share2,
    ArrowRight,
    MessageCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function NewsDetailPage() {
    const article = {
        title: "Victoire éclatante des Seniors G1 à domicile contre Caen BC !",
        slug: "victoire-seniors-garcons",
        category: "Résultats",
        date: "15 Mars 2026",
        author: "Bureau Fleury Basket",
        readTime: "3 min de lecture",
        imageUrl: "/images/news-1.jpg",
        excerpt:
            "Retour sur la magnifique prestation collective de notre équipe fanion ce samedi au gymnase Auguste Delaune.",
        content: `
      <p class="mb-4">Ce samedi soir, le gymnase Auguste Delaune était en ébullition pour la réception de Caen BC 2 dans le cadre de la 14ème journée de Régionale 2. Portés par un public venu en nombre, nos Seniors Garçons ont livré un match plein d'intensité.</p>
      
      <h3 class="text-xl font-extrabold text-club-dark mt-6 mb-3">Un premier quart-temps sous haute tension</h3>
      <p class="mb-4">Le début de rencontre a été très engagé. Avec une défense agressive dès le premier coup de sifflet, les visiteurs ont posé quelques difficultés à nos meneurs. Cependant, grâce à une belle adresse à trois points de Lucas Martin, l'équipe a su garder la tête hors de l'eau (18-16 à la fin du 1er quart).</p>
      
      <blockquote class="border-l-4 border-club-pink pl-4 italic text-gray-700 my-6">
        "Nous avons su rester calmes pendant les moments forts de l'adversaire et concrétiser nos contre-attaques dans le money-time." — Marc Dupont, Entraîneur.
      </blockquote>

      <h3 class="text-xl font-extrabold text-club-dark mt-6 mb-3">L'accélération décisive au 3ème quart</h3>
      <p class="mb-4">C'est au retour des vestiaires que la différence s'est faite. En enchaînant trois interceptions consécutives transformées en paniers faciles, le Fleury Basket a infligé un 12-2 en l'espace de 4 minutes. Score final : 78 à 72.</p>
    `,
        relatedArticles: [
            {
                slug: "victoire-seniors-g1",
                title: "Victoire éclatante des Seniors G1 à domicile contre Caen BC !",
                date: "15 Mars 2026",
                category: "Résultats",
            },
            {
                slug: "stage-basket-paques-2026",
                title: "Stage de Pâques 2026 : Inscrivez vos enfants dès maintenant",
                date: "10 Mars 2026",
                category: "Événements",
            },
            {
                slug: "tournoi-3x3-printemps",
                title: "Grand Tournoi 3x3 ouvert à tous fin Avril",
                date: "02 Mars 2026",
                category: "Tournois",
            },
        ],
    };

    return (
        <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                {/* Lien Retour */}
                <a
                    href="/actualites"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-black-fleury transition-colors mb-6"
                >
                    <ChevronLeft className="h-4 w-4" />
                    Retour aux actualités
                </a>

                {/* --- EN-TÊTE DE L'ARTICLE --- */}
                <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 shadow-2xs mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-pink-fleury text-black-fleury font-bold border-none">
                            {article.category}
                        </Badge>
                        <span className="text-xs text-gray-400 font-medium">
                            {article.readTime}
                        </span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl font-extrabold text-black-fleury leading-tight mb-6">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1.5 font-medium">
                                <User className="h-3.5 w-3.5 text-pink-fleury" />
                                {article.author}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5 text-pink-fleury" />
                                {article.date}
                            </span>
                        </div>

                        <button
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    window.location.href,
                                )
                            }
                            className="inline-flex items-center gap-1.5 font-bold text-black-fleury hover:text-pink-fleury transition-colors"
                        >
                            <Share2 className="h-3.5 w-3.5" />
                            Partager
                        </button>
                    </div>
                </div>

                {/* --- IMAGE DE COUVERTURE --- */}
                <div className="h-64 sm:h-96 bg-slate-200 rounded-3xl overflow-hidden mb-8 shadow-xs relative">
                    <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center text-gray-400 text-sm font-bold">
                        [ Photo de l'article / Match ]
                    </div>
                </div>

                {/* --- CORPS DE L'ARTICLE --- */}
                <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 shadow-2xs mb-12">
                    <div
                        className="prose prose-slate max-w-none text-gray-700 text-sm sm:text-base leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </div>

                {/* --- ARTICLES SIMILAIRES --- */}
                <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8">
                    <h2 className="text-lg font-extrabold mb-6">
                        À lire aussi
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {article.relatedArticles.map((rel, i) => (
                            <a
                                key={i}
                                href={`/actualites/${rel.slug}`}
                                className="p-4 rounded-2xl bg-slate-800 hover:bg-slate-700/80 transition-all border border-slate-700 block"
                            >
                                <Badge className="bg-pink-fleury text-black-fleury text-[10px] font-bold border-none mb-2">
                                    {rel.category}
                                </Badge>
                                <h3 className="font-bold text-sm text-white mb-2 line-clamp-2">
                                    {rel.title}
                                </h3>
                                <span className="text-[11px] text-gray-400">
                                    {rel.date}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsDetailPage;

