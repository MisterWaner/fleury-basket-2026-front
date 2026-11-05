import { Calendar, MapPin, Shield, Users, Loader2 } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter,  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Match } from "@/types/match";

interface NextMatchCardProps {
    nextMatch: Match | null;
    loading: boolean;
    error: string | null;
}

function NextMatchCard({ nextMatch, loading, error }: NextMatchCardProps) {
    return (
        <Card className="relative rounded-2xl bg-white/95 border-2 border-pink-fleury shadow-xl p-6 sm:p-8 backdrop-blur">
            {loading ? (
                <div className="flex items-center justify-center py-16">
                    <Loader2 className="h-8 w-8 animate-spin text-pink-fleury" />
                </div>
            ) : error ? (
                <div className="flex items-center justify-center py-16">
                    <span className="text-red-500 font-semibold">{error}</span>
                </div>
            ) : nextMatch ? (
                <>
                    <CardHeader>
                        {/* Badge En Tête */}
                        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                                {nextMatch?.isHome
                                    ? "Prochain match à domicile"
                                    : "Prochain match à l'extérieur"}
                            </span>
                            <Badge className="bg-pink-fleury text-black-fleury hover:bg-pink-fleury font-semibold border-none">
                                {nextMatch?.category}
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {/* Affichage des Équipes */}
                        <div className="flex items-center justify-around gap-4 my-6">
                            {/* Équipe Domicile */}
                            <div className="flex flex-col items-center text-center gap-2">
                                <div className="h-16 w-16 rounded-full bg-pink-fleury/50 border border-gray-fleury/50 flex items-center justify-center p-2 shadow-2xs">
                                    {nextMatch.isHome ? (
                                        <img
                                            src="./fleury-basket.png"
                                            className="flex h-full w-full object-contain text-black-fleury"
                                        />
                                    ) : (
                                        <Shield className="h-8 w-8 text-black-fleury" />
                                    )}
                                </div>
                                <span className="font-extrabold text-sm text-black-fleury leading-tight">
                                    {nextMatch.isHome
                                        ? nextMatch.homeTeam.toUpperCase()
                                        : nextMatch.opponent}
                                </span>
                            </div>

                            {/* VS */}
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-black text-gray-fleury/80 italic">
                                    VS
                                </span>
                            </div>

                            {/* Équipe Extérieure */}
                            <div className="flex flex-col items-center text-center gap-2">
                                <div className="h-16 w-16 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center p-2 shadow-2xs">
                                    {nextMatch.isHome ? (
                                        <Users className="h-8 w-8 text-black-fleury" />
                                    ) : (
                                        <img
                                            src="./fleury-basket.png"
                                            className="flex h-full w-full object-contain text-black-fleury"
                                        />
                                    )}
                                </div>
                                <span className="font-extrabold text-sm text-gray-700 leading-tight">
                                    {nextMatch.isHome
                                        ? nextMatch.opponent
                                        : nextMatch.homeTeam.toUpperCase()}
                                </span>
                            </div>
                        </div>

                        {/* Infos Horaires & Lieu */}
                        <div className="space-y-2.5 bg-pink-fleury/20 rounded-xl p-4 border border-pink-fleury/50 text-sm mb-6">
                            <div className="flex items-center gap-2.5 text-gray-800 font-semibold">
                                <Calendar className="h-4 w-4 text-club-dark shrink-0" />
                                <span>
                                    {nextMatch.date} • {nextMatch.time}
                                </span>
                            </div>
                            <div className="flex items-center gap-2.5 text-gray-700 font-medium text-xs sm:text-sm">
                                <MapPin className="h-4 w-4 text-club-dark shrink-0" />
                                <span>{nextMatch.location}</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="bg-transparent">
                        {/* Bouton vers le calendrier */}
                        <Button
                            className="w-full bg-black-fleury hover:bg-gray-800 text-white font-bold shadow-xs"
                            render={<a href="/calendrier" />}
                        >
                            Voir tous les matchs
                        </Button>
                    </CardFooter>
                </>
            ) : (
                <div className="text-center py-12 text-gray-500">
                    <p className="font-bold text-sm">
                        Aucun match à venir pour le moment.
                    </p>
                </div>
            )}
        </Card>
    );
}

export default NextMatchCard;








