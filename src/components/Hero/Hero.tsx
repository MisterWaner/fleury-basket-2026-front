import { Calendar, ArrowRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NextMatchCard from "@/components/Hero/NextMachCard";
import { useNextMatch } from "@/hooks/useNextMatch";

function Hero() {
    const { nextMatch, loading, error } = useNextMatch();

    return (
        <section className="relative overflow-hidden bg-linear-to-b from-pink-fleury/30 via-white to-white py-12 lg:py-20 border-b border-pink-fleury/40">
            {/* --- LOGO DU CLUB EN ARRIÈRE-PLAN --- */}
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
                aria-hidden="true"
            >
                <img
                    src="/fleury-basket.png"
                    alt="Fleury Basket"
                    className="w-112.5 sm:w-150 lg:w-187.5 max-w-none opacity-[0.07] grayscale contrast-200 transform -translate-x-10 sm:-translate-x-16 lg:-translate-x-1/4 -translate-y-4"
                />
            </div>

            {/* --- Formes lumineuses décoratives --- */}
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-pink-fleury/40 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 -right-24 h-80 w-80 rounded-full bg-gray-fleury/20 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* --- COLONNE GAUCHE : ACCROCHE & BOUTONS --- */}
                    <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
                        <Badge
                            variant="outline"
                            className="bg-white/90 border-gray-fleury/50 text-black-fleury px-3.5 py-1 text-xs font-semibold rounded-full shadow-2xs backdrop-blur"
                        >
                            <Trophy className="h-3.5 w-3.5 text-black-fleury mr-1.5" />
                            Saison 2026-2027 • Fleury-sur-Orne
                        </Badge>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black-fleury tracking-tight leading-[1.1]">
                            Passion, Esprit d'Équipe et{" "}
                            <span className="underline decoration-pink-fleury decoration-wavy underline-offset-4">
                                Basket-Ball
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium max-w-2xl">
                            Bienvenue sur le site officiel du club. Rejoignez
                            nos équipes jeunes et seniors, suivez les résultats
                            en direct et venez supporter nos joueurs au gymnase
                            !
                        </p>

                        {/* Boutons d'action */}
                        <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="bg-pink-fleury hover:bg-pink-fleury/80 text-black-fleury font-bold border border-gray-fleury/40 shadow-xs w-full sm:w-auto"
                                render={<a href="/rejoindre" />}
                            >
                                Rejoindre le club
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-gray-fleury/50 text-gray-800 hover:bg-pink-fleury/30 font-semibold w-full sm:w-auto bg-white/80 backdrop-blur"
                                render={<a href="/calendrier" />}
                            >
                                <Calendar className="mr-2 h-4 w-4 text-gray-fleury" />
                                Voir le planning
                            </Button>
                        </div>

                        {/* Statistiques rapides */}
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-pink-fleury/60 w-full max-w-lg mt-2">
                            <div>
                                <span className="block text-2xl font-extrabold text-black-fleury">
                                    5
                                </span>
                                <span className="text-xs text-gray-600 font-semibold uppercase">
                                    Équipes
                                </span>
                            </div>
                            <div>
                                <span className="block text-2xl font-extrabold text-black-fleury">
                                    60+
                                </span>
                                <span className="text-xs text-gray-600 font-semibold uppercase">
                                    Licenciés
                                </span>
                            </div>
                            <div>
                                <span className="block text-2xl font-extrabold text-black-fleury">
                                    100%
                                </span>
                                <span className="text-xs text-gray-600 font-semibold uppercase">
                                    Passion
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* --- COLONNE DROITE : CARD PROCHAIN MATCH --- */}
                    <div className="lg:col-span-5 w-full">
                        <NextMatchCard
                            nextMatch={nextMatch}
                            loading={loading}
                            error={error}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

