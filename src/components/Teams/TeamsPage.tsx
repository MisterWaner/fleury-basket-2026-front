import { useState, useEffect } from "react";
import pocketbase, { ClientResponseError } from "pocketbase";
import {
    Users,
    Clock,
    MapPin,
    User,
    ChevronRight,
    Calendar,
    Shield,
    ArrowRight,
    Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Team } from "@/types/teams";

const pbUrl = import.meta.env.PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";
const pb = new pocketbase(pbUrl);

const categoriesFilter = ["Toutes", "Seniors", "Jeunes", "Mini-Basket"];

function TeamsPage() {
    const [activeCategory, setActiveCategory] = useState<string>("Toutes");
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchTeams() {
            try {
                setLoading(true);
                setError(null);

                const records = await pb.collection("teams").getFullList<Team>({
                    requestKey: null,
                });

                if (!isMounted) return;
                setTeams(records);
            } catch (error) {
                console.error("Erreur chargement équipes :", error);
                if (isMounted) {
                    if (error instanceof ClientResponseError) {
                        setError(
                            error?.message ||
                                "Impossible de charger la liste des équipes.",
                        );
                    } else {
                        setError("Impossible de charger la liste des équipes.");
                    }
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        }
        fetchTeams();

        return () => {
            isMounted = false;
        };
    }, []);

    const filteredTeams = teams.filter((team) => {
        if (activeCategory === "Toutes") return true;
        return team.category?.toLowerCase() === activeCategory.toLowerCase();
    });

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-pink-fleury" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <p className="text-rose-600 font-bold mb-4">{error}</p>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen py-10 lg:py-14">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* --- EN-TÊTE --- */}
                <div className="max-w-3xl mb-10">
                    <Badge
                        variant="outline"
                        className="bg-pink-fleury/30 border-pink-fleury text-black-fleury mb-2 font-semibold"
                    >
                        Fleury Basket
                    </Badge>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-black-fleury tracking-tight mb-4">
                        Nos Équipes
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg">
                        De l'école de mini-basket jusqu'aux équipes seniors,
                        découvrez nos créneaux d'entraînement et l'encadrement
                        du club.
                    </p>
                </div>

                {/* --- FILTRES --- */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider shrink-0 mr-2">
                        Catégorie :
                    </span>
                    {categoriesFilter.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                                activeCategory === cat
                                    ? "bg-black-fleury border-black-fleury text-white shadow-2xs"
                                    : "bg-white border-gray-200 text-gray-600 hover:bg-slate-100"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* --- GRILLE D'ÉQUIPES --- */}
                {filteredTeams.length === 0 ? (
                    <p className="text-sm text-gray-500 italic">
                        Aucune équipe trouvée dans cette catégorie.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredTeams.map((team) => (
                            <div
                                key={team.id}
                                className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs hover:shadow-md transition-all p-6 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Badge & Age */}
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <Badge className="bg-pink-fleury text-black-fleury font-bold border-none">
                                            {team.category}
                                        </Badge>
                                        <span className="text-xs font-semibold text-gray-500 bg-slate-100 px-2.5 py-1 rounded-md">
                                            {team.ageGroup}
                                        </span>
                                    </div>

                                    {/* Nom de l'équipe */}
                                    <h2 className="text-2xl font-extrabold text-black-fleury mb-2">
                                        {team.name}
                                    </h2>

                                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                        {team.description}
                                    </p>

                                    {/* Infos d'entraînement */}
                                    <div className="space-y-3 pt-4 border-t border-gray-100 text-sm">
                                        <div className="flex items-start gap-3 text-gray-700">
                                            <Clock className="h-4 w-4 text-pink-fleury shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-bold block text-xs text-gray-500 uppercase">
                                                    Créneaux
                                                </span>
                                                {team.slot.map((item, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="block font-semibold text-black-fleury"
                                                    >
                                                        {typeof item ===
                                                        "string"
                                                            ? item
                                                            : `${item.day || ""} : ${item.time || ""}`}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 text-gray-700">
                                            <MapPin className="h-4 w-4 text-pink-fleury shrink-0" />
                                            <div>
                                                <span className="font-bold block text-xs text-gray-500 uppercase">
                                                    Lieu
                                                </span>
                                                <span className="font-semibold text-black-fleury">
                                                    {team.location}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 text-gray-700">
                                            <User className="h-4 w-4 text-pink-fleury shrink-0" />
                                            <div>
                                                <span className="font-bold block text-xs text-gray-500 uppercase">
                                                    Encadrement
                                                </span>
                                                <span className="font-semibold text-black-fleury">
                                                    {team.coach}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                                    {team.isRecruiting && (
                                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                                            <Shield className="h-3.5 w-3.5" />
                                            Recrutement ouvert
                                        </span>
                                    )}

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="ml-auto border-gray-fleury/40 hover:bg-pink-fleury/30 text-black-fleury font-bold"
                                        render={<a href="/rejoindre" />}
                                    >
                                        S'inscrire
                                        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                                    </Button>
                                </div>
                                {/* Bouton vers la fiche détaillée */}
                                <a
                                    href={`/equipes/${team.slug}`}
                                    className="w-full py-2.5 bg-slate-100 hover:bg-black-fleury hover:text-white text-black-fleury font-bold rounded-xl text-xs transition-all duration-200 flex items-center justify-center gap-1.5 mt-4"
                                >
                                    <span>
                                        Voir la fiche équipe & classement
                                    </span>
                                    <ChevronRight className="h-4 w-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TeamsPage;

