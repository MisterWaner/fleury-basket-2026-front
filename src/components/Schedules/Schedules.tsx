import { useState } from "react";
import {
    Calendar as CalendarIcon,
    MapPin,
    Trophy,
    ChevronRight,
    Clock,
    Filter,
    CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Types d'équipes du club
type TeamCategory = "Tous" | "Seniors D3" | "U13" | "U11" | "U9" | "U7";

interface Match {
    id: string;
    category: TeamCategory;
    homeTeam: string;
    awayTeam: string;
    date: string;
    time: string;
    location: string;
    isHome: boolean;
    status: "upcoming" | "completed";
    scoreHome?: number;
    scoreAway?: number;
}

// Données statiques pour la maquette UI
const mockMatches: Match[] = [
    // Matchs à venir
    {
        id: "1",
        category: "Seniors D3",
        homeTeam: "Fleury Basket",
        awayTeam: "Caen Basket Calvados",
        date: "Samedi 26 Septembre 2026",
        time: "20:30",
        location: "Gymnase Auguste Delaune, Fleury",
        isHome: true,
        status: "upcoming",
    },
    {
        id: "2",
        category: "U13",
        homeTeam: "LCBO Basket",
        awayTeam: "Fleury Basket",
        date: "Samedi 26 Septembre 2026",
        time: "14:00",
        location: "Gymnase Municipal, Louvigny",
        isHome: false,
        status: "upcoming",
    },
    {
        id: "3",
        category: "U11",
        homeTeam: "Fleury Basket",
        awayTeam: "USM Blainville",
        date: "Dimanche 27 Septembre 2026",
        time: "10:30",
        location: "Gymnase Auguste Delaune, Fleury",
        isHome: true,
        status: "upcoming",
    },
    // Derniers Résultats
    {
        id: "4",
        category: "Seniors D3",
        homeTeam: "Hérouville Basket",
        awayTeam: "Fleury Basket",
        date: "Samedi 19 Septembre 2026",
        time: "20:00",
        location: "Gymnase Allois, Hérouville",
        isHome: false,
        status: "completed",
        scoreHome: 58,
        scoreAway: 64,
    },
    {
        id: "5",
        category: "U13",
        homeTeam: "Fleury Basket",
        awayTeam: "ASPTT Caen",
        date: "Samedi 19 Septembre 2026",
        time: "15:00",
        location: "Gymnase Auguste Delaune, Fleury",
        isHome: true,
        status: "completed",
        scoreHome: 42,
        scoreAway: 38,
    },
];

const categories: TeamCategory[] = [
    "Tous",
    "Seniors D3",
    "U13",
    "U11",
    "U9",
    "U7",
];

function Schedules() {
    const [selectedCategory, setSelectedCategory] =
        useState<TeamCategory>("Tous");
    const [activeTab, setActiveTab] = useState<"upcoming" | "completed">(
        "upcoming",
    );

    //Filtrage des matchs
    const filteredMatches = mockMatches.filter((match) => {
        const matchesCategory =
            selectedCategory === "Tous" || match.category === selectedCategory;
        const matchesStatus = match.status === activeTab;
        return matchesCategory && matchesStatus;
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
                        Saison 2026 - 2027
                    </Badge>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-club-dark tracking-tight mb-4">
                        Calendrier & Résultats
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg">
                        Retrouvez tous les matchs à venir de nos équipes ainsi
                        que les derniers résultats du Fleury Basket.
                    </p>
                </div>

                {/* --- BARRE DE FILTRES ET ONGLETS --- */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs">
                    {/* Onglets Prochains Matchs / Résultats */}
                    <div className="flex bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
                        <button
                            onClick={() => setActiveTab("upcoming")}
                            className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                                activeTab === "upcoming"
                                    ? "bg-black-fleury text-white shadow-2xs"
                                    : "text-gray-600 hover:text-club-dark"
                            }`}
                        >
                            Prochains Matchs
                        </button>
                        <button
                            onClick={() => setActiveTab("completed")}
                            className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                                activeTab === "completed"
                                    ? "bg-black-fleury text-white shadow-2xs"
                                    : "text-gray-600 hover:text-black-fleury"
                            }`}
                        >
                            Derniers Résultats
                        </button>
                    </div>

                    {/* Filtre par catégorie */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                        <Filter className="h-4 w-4 text-gray-400 shrink-0 ml-1" />
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider shrink-0 mr-1">
                            Équipe :
                        </span>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                                    selectedCategory === cat
                                        ? "bg-pink-fleury border-pink-fleury text-black-fleury font-bold"
                                        : "bg-slate-50 border-gray-200 text-gray-600 hover:bg-slate-100"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- LISTE DES MATCHS --- */}
                {filteredMatches.length > 0 ? (
                    <div className="space-y-4">
                        {filteredMatches.map((match) => {
                            const isFleuryWinner =
                                match.status === "completed" &&
                                ((match.homeTeam.includes("Fleury") &&
                                    (match.scoreHome ?? 0) >
                                        (match.scoreAway ?? 0)) ||
                                    (match.awayTeam.includes("Fleury") &&
                                        (match.scoreAway ?? 0) >
                                            (match.scoreHome ?? 0)));

                            return (
                                <div
                                    key={match.id}
                                    className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex flex-col lg:flex-row items-center justify-between gap-6"
                                >
                                    {/* Badge Catégorie & Date */}
                                    <div className="flex items-center gap-3 w-full lg:w-48 shrink-0">
                                        <Badge className="bg-pink-fleury/40 text-black-fleury font-bold border-none">
                                            {match.category}
                                        </Badge>
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                                            <CalendarIcon className="h-3.5 w-3.5 text-gray-fleury" />
                                            <span>
                                                {match.date
                                                    .split(" ")
                                                    .slice(0, 3)
                                                    .join(" ")}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Panneau central : Affichage des équipes / Score */}
                                    <div className="flex items-center justify-center gap-4 sm:gap-8 w-full max-w-xl">
                                        {/* Équipe Domicile */}
                                        <div className="flex-1 text-right">
                                            <span
                                                className={`block font-extrabold text-sm sm:text-base ${match.homeTeam.includes("Fleury") ? "text-black-fleury" : "text-gray-700"}`}
                                            >
                                                {match.homeTeam}
                                            </span>
                                            {match.isHome && (
                                                <span className="text-[10px] font-bold uppercase text-pink-fleury tracking-wider">
                                                    Domicile
                                                </span>
                                            )}
                                        </div>

                                        {/* Score ou Heure du match */}
                                        <div className="shrink-0 bg-slate-100 px-4 py-2 rounded-xl text-center min-w-22.5 border border-gray-200">
                                            {match.status === "completed" ? (
                                                <div className="text-lg sm:text-xl font-black text-black-fleury tracking-tight">
                                                    {match.scoreHome} -{" "}
                                                    {match.scoreAway}
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center gap-1 text-sm font-bold text-black-fleury">
                                                    <Clock className="h-3.5 w-3.5 text-gray-fleury" />
                                                    <span>{match.time}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Équipe Extérieur */}
                                        <div className="flex-1 text-left">
                                            <span
                                                className={`block font-extrabold text-sm sm:text-base ${match.awayTeam.includes("Fleury") ? "text-black-fleury" : "text-gray-700"}`}
                                            >
                                                {match.awayTeam}
                                            </span>
                                            {!match.isHome && (
                                                <span className="text-[10px] font-bold uppercase text-pink-fleury tracking-wider">
                                                    Extérieur
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Infos Lieu / Statut Victoire */}
                                    <div className="flex items-center justify-between lg:justify-end gap-4 w-full lg:w-64 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-100">
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                                            <MapPin className="h-4 w-4 text-pink-fleury shrink-0" />
                                            <span className="truncate max-w-45">
                                                {match.location}
                                            </span>
                                        </div>

                                        {match.status === "completed" &&
                                            isFleuryWinner && (
                                                <Badge className="bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold shrink-0">
                                                    Victoire
                                                </Badge>
                                            )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    /* État vide si aucun match ne correspond au filtre */
                    <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                        <Trophy className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-black-fleury mb-1">
                            Aucun match trouvé
                        </h3>
                        <p className="text-sm text-gray-500 max-w-sm mx-auto">
                            Aucune rencontre ne correspond au filtre sélectionné
                            pour cette catégorie.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Schedules;

