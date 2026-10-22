import { useState } from "react";
import { useTeamDetails } from "@/hooks/useTeamDetails";
import {
    Trophy,
    Users,
    Calendar,
    Clock,
    MapPin,
    ChevronLeft,
    CheckCircle2,
    XCircle,
    Sparkles,
    UserCheck,
    Loader2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { TeamDetailPageProps } from "@/types/teams";
import type { Match } from "@/types/match";
import type { RankingItem } from "@/types/ranking";
import type { Player } from "@/types/player";

function TeamDetailPage({ teamId }: TeamDetailPageProps) {
    const [activeTab, setActiveTab] = useState<
        "overview" | "roster" | "matches" | "ranking"
    >("overview");

    const { team, loading, error } = useTeamDetails(teamId);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-pink-fleury" />
            </div>
        );
    }

    if (error || !team) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <p className="text-rose-600 font-bold mb-4">
                    {error || "Équipe introuvable."}
                </p>
                <a
                    href="/equipes"
                    className="text-xs font-bold text-gray-500 hover:underline"
                >
                    Retour aux équipes
                </a>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Bouton Retour */}
                <a
                    href="/equipes"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-black-fleury transition-colors mb-6"
                >
                    <ChevronLeft className="h-4 w-4" />
                    Retour à toutes les équipes
                </a>

                {/* --- EN-TÊTE DE L'ÉQUIPE --- */}
                <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 mb-8 relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Badge className="bg-pink-fleury text-black-fleury font-bold border-none">
                                    {team.category}
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="text-gray-300 border-slate-700"
                                >
                                    {team.division}
                                </Badge>
                            </div>
                            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-2">
                                {team.name}
                            </h1>
                            <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-2">
                                <UserCheck className="h-4 w-4 text-pink-fleury" />
                                Entraîneur :{" "}
                                <span className="text-white font-medium">
                                    {team.coach}
                                </span>
                            </p>
                        </div>

                        {/* Navigation par onglets interne */}
                        <div className="flex flex-wrap gap-2 bg-slate-800/80 p-1.5 rounded-2xl border border-slate-700/80">
                            {[
                                { id: "overview", label: "Vue générale" },
                                { id: "roster", label: "Effectif" },
                                { id: "matches", label: "Matchs" },
                                { id: "ranking", label: "Classement" },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                                        activeTab === tab.id
                                            ? "bg-pink-fleury text-black-fleury shadow-xs"
                                            : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- CONTENU PAR ONGLETS --- */}

                {/* 1. VUE GÉNÉRALE */}
                {activeTab === "overview" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Créneaux et Encadrement (5 cols) */}
                        <div className="lg:col-span-5 space-y-6">
                            {/* Entraînements */}
                            <div className="bg-white rounded-3xl border border-gray-200/90 p-6 shadow-2xs">
                                <h2 className="text-lg font-extrabold text-black-fleury mb-4 flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-pink-fleury" />
                                    Créneaux d'entraînement
                                </h2>
                                <div className="space-y-3">
                                    {team.trainingSlots.map((slot, i) => (
                                        <div
                                            key={i}
                                            className="p-4 bg-slate-50 rounded-2xl border border-gray-100"
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="font-extrabold text-black-fleury text-sm">
                                                    {slot.day}
                                                </span>
                                                <span className="text-xs font-bold text-black-fleury bg-pink-50 px-2.5 py-0.5 rounded-full">
                                                    {slot.time}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
                                                <MapPin className="h-3.5 w-3.5" />
                                                {slot.location}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Staff */}
                            <div className="bg-white rounded-3xl border border-gray-200/90 p-6 shadow-2xs">
                                <h2 className="text-lg font-extrabold text-black-fleury mb-4 flex items-center gap-2">
                                    <Users className="h-5 w-5 text-pink-fleury" />
                                    Encadrement
                                </h2>
                                <div className="space-y-3 text-xs sm:text-sm">
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                        <span className="text-gray-500">
                                            Entraîneur principal
                                        </span>
                                        <span className="font-bold text-black-fleury">
                                            {team.coach}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Prochains & Derniers Matchs (7 cols) */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="bg-white rounded-3xl border border-gray-200/90 p-6 shadow-2xs">
                                <h2 className="text-lg font-extrabold text-black-fleury mb-6 flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-pink-fleury" />
                                    Actualité des Matchs
                                </h2>

                                <div className="space-y-4">
                                    {team.recentMatches.map((m) => (
                                        <div
                                            key={m.id}
                                            className="p-4 rounded-2xl border border-gray-100 bg-slate-50/60 flex flex-col sm:flex-row items-center justify-between gap-4"
                                        >
                                            <div className="flex items-center gap-3">
                                                <Badge
                                                    className={
                                                        m.isHome
                                                            ? "bg-black-fleury text-white"
                                                            : "bg-slate-200 text-black-fleury"
                                                    }
                                                >
                                                    {m.isHome ? "DOM" : "EXT"}
                                                </Badge>
                                                <div>
                                                    <div className="font-extrabold text-black-fleury text-sm sm:text-base">
                                                        {m.isHome
                                                            ? `Fleury Basket vs ${m.opponent}`
                                                            : `${m.opponent} vs Fleury Basket`}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        {m.date} à {m.time}
                                                    </div>
                                                </div>
                                            </div>

                                            {m.status === "completed" ? (
                                                <div className="text-right">
                                                    <span
                                                        className={`text-base font-black ${
                                                            (m.isHome &&
                                                                m.scoreHome! >
                                                                    m.scoreAway!) ||
                                                            (!m.isHome &&
                                                                m.scoreAway! >
                                                                    m.scoreHome!)
                                                                ? "text-emerald-600"
                                                                : "text-rose-600"
                                                        }`}
                                                    >
                                                        {m.scoreHome} -{" "}
                                                        {m.scoreAway}
                                                    </span>
                                                    <span className="block text-[10px] uppercase font-bold text-gray-400">
                                                        Terminé
                                                    </span>
                                                </div>
                                            ) : (
                                                <Badge
                                                    variant="outline"
                                                    className="border-pink-fleury text-black-fleury font-bold text-xs"
                                                >
                                                    À venir
                                                </Badge>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. EFFECTIF */}
                {activeTab === "roster" && (
                    <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 shadow-2xs">
                        <h2 className="text-xl font-extrabold text-black-fleury mb-6 flex items-center gap-2">
                            <Users className="h-5 w-5 text-pink-fleury" />
                            Effectif Joueurs
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {team.roster.map((player) => (
                                <div
                                    key={player.number}
                                    className="p-4 bg-slate-50 rounded-2xl border border-gray-100 flex items-center gap-4"
                                >
                                    <div className="w-12 h-12 bg-black-fleury text-pink-fleury rounded-xl flex items-center justify-center font-black text-lg shrink-0">
                                        #{player.number}
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-black-fleury text-sm sm:text-base">
                                            {player.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 font-medium">
                                            {player.position}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 3. LISTE DES MATCHS */}
                {activeTab === "matches" && (
                    <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 shadow-2xs">
                        <h2 className="text-xl font-extrabold text-black-fleury mb-6">
                            Calendrier complet de la saison
                        </h2>
                        <div className="space-y-3">
                            {team.allMatches.map((m) =>
                                (() => {
                                    const isCompleted =
                                        m.status === "completed" &&
                                        m.scoreHome !== undefined &&
                                        m.scoreAway !== undefined;
                                    const isWin = m.isHome
                                        ? (m.scoreHome ?? 0) >
                                          (m.scoreAway ?? 0)
                                        : (m.scoreAway ?? 0) >
                                          (m.scoreHome ?? 0);
                                    return (
                                        <div
                                            key={m.id}
                                            className="p-4 rounded-2xl border border-gray-100 flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className="text-xs font-bold text-gray-400 w-20">
                                                    {m.date}
                                                </span>
                                                <span className="font-bold text-black-fleury text-sm">
                                                    {m.isHome
                                                        ? `vs ${m.opponent}`
                                                        : `@ ${m.opponent}`}
                                                </span>
                                            </div>
                                            {isCompleted ? (
                                                <div
                                                    className={`font-black text-xs px-3 py-1.5 rounded-xl border ${
                                                        isWin
                                                            ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                                                            : "bg-rose-100 text-rose-800 border-rose-200"
                                                    }`}
                                                >
                                                    {m.scoreHome} -{" "}
                                                    {m.scoreAway}
                                                </div>
                                            ) : (
                                                <span className="text-xs bg-pink-50 text-black-fleury font-bold px-2.5 py-1 rounded-md">
                                                    {m.time || "À venir"}
                                                </span>
                                            )}
                                        </div>
                                    );
                                })(),
                            )}
                        </div>
                    </div>
                )}

                {/* 4. CLASSEMENT */}
                {activeTab === "ranking" && (
                    <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 shadow-2xs">
                        <h2 className="text-xl font-extrabold text-black-fleury mb-6 flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-pink-fleury" />
                            Classement Départementale 3 (Poule B)
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b border-gray-200 text-gray-400 uppercase text-[10px] tracking-wider">
                                        <th className="py-3 px-3">Pos</th>
                                        <th className="py-3 px-3">Équipe</th>
                                        <th className="py-3 px-3 text-center">
                                            MJ
                                        </th>
                                        <th className="py-3 px-3 text-center">
                                            V
                                        </th>
                                        <th className="py-3 px-3 text-center">
                                            D
                                        </th>
                                        <th className="py-3 px-3 text-right">
                                            Pts
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {team.ranking.map((row) => (
                                        <tr
                                            key={row.position}
                                            className={
                                                row.isCurrentTeam
                                                    ? "bg-pink-50/60 font-bold text-black-fleury"
                                                    : "hover:bg-slate-50"
                                            }
                                        >
                                            <td className="py-3 px-3 font-bold">
                                                {row.position}
                                            </td>
                                            <td className="py-3 px-3 flex items-center gap-2">
                                                {row.team}
                                                {row.isCurrentTeam && (
                                                    <Badge className="bg-pink-fleury text-black-fleury text-[9px] py-0 px-1.5">
                                                        Mon Club
                                                    </Badge>
                                                )}
                                            </td>
                                            <td className="py-3 px-3 text-center">
                                                {row.played}
                                            </td>
                                            <td className="py-3 px-3 text-center text-emerald-600 font-bold">
                                                {row.won}
                                            </td>
                                            <td className="py-3 px-3 text-center text-rose-600 font-bold">
                                                {row.lost}
                                            </td>
                                            <td className="py-3 px-3 text-right font-black">
                                                {row.points}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TeamDetailPage;


