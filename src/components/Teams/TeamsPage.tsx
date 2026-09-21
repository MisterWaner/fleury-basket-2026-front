import { useState } from "react";
import {
    Users,
    Clock,
    MapPin,
    User,
    ChevronRight,
    Calendar,
    Shield,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Team } from "@/types/teams";

const teamsData: Team[] = [
    {
        id: "seniors-d3",
        slug: "seniors-garcons",
        name: "Seniors Masculins D3",
        category: "Seniors",
        ageGroup: "18 ans et plus",
        coach: "Entraîneur diplômé",
        schedule: ["Mercredi : 21h30 - 23h00", "Vendredi : 21h00 - 22h30"],
        location: "Gymnase Auguste Delaune",
        description:
            "Équipe fanion compétition. Rigueur, esprit d'équipe et ambition dans le championnat départemental.",
        isRecruiting: true,
    },
    {
        id: "u13",
        name: "Équipe U13",
        slug: "u13-garcons",
        category: "Jeunes",
        ageGroup: "Nés en 2014 - 2015",
        coach: "Staff Jeunes",
        schedule: ["Mercredi : 17h30 - 19h00", "Vendredi : 18h00 - 19h30"],
        location: "Gymnase Auguste Delaune",
        description:
            "Perfectionnement individuel et collectif, apprentissage des systèmes de jeu et compétition le samedi.",
        isRecruiting: true,
    },
    {
        id: "u11",
        name: "Équipe U11",
        slug: "u11-mixtes",
        category: "Jeunes",
        ageGroup: "Nés en 2016 - 2017",
        coach: "Educateur diplômé",
        schedule: ["Mercredi : 16h00 - 17h30", "Vendredi : 17h00 - 18h00"],
        location: "Gymnase Auguste Delaune",
        description:
            "Développement des fondamentaux (dribble, passe, tir) et découverte du championnat.",
        isRecruiting: true,
    },
    {
        id: "u7-u9",
        name: "École de Basket (U7 - U9)",
        slug: "u7-u9",
        category: "Mini-Basket",
        ageGroup: "Nés de 2018 à 2021",
        coach: "Équipe d'animation Jeunes",
        schedule: ["Samedi : 10h00 - 11h30"],
        location: "Gymnase Auguste Delaune",
        description:
            "Apprentissage ludique du basket-ball par le jeu, développement de la motricité et du fair-play.",
        isRecruiting: true,
    },
];

const categoriesFilter = ["Toutes", "Seniors", "Jeunes", "Mini-Basket"];

function TeamsPage() {
    const [activeCategory, setActiveCategory] = useState<string>("Toutes");

    const filteredTeams = teamsData.filter((team) => {
        if (activeCategory === "Toutes") return true;
        return team.category === activeCategory;
    });

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
                                            {team.schedule.map((item, idx) => (
                                                <span
                                                    key={idx}
                                                    className="block font-semibold text-black-fleury"
                                                >
                                                    {item}
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
                                <span>Voir la fiche équipe & classement</span>
                                <ChevronRight className="h-4 w-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamsPage;


