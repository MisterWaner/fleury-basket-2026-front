import { ArrowRight, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function CtaSection() {
    return (
        <section className="py-16 bg-linear-to-r from-black-fleury via-slate-800 to-black-fleury text-white relative overflow-hidden">
            {/* Halo lumineux rose en fond */}
            <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-pink-fleury/20 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur">
                    <div className="space-y-4 max-w-2xl text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-fleury/20 border border-pink-fleury/40 text-pink-fleury text-xs font-bold uppercase tracking-wider">
                            <Users className="h-3.5 w-3.5" />
                            Saison 2026-2027
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            Envie de chausser les baskets avec nous ?
                        </h2>

                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            Des U7 jusqu'aux Seniors, le Fleury Basket accueille
                            les joueurs et joueuses de tous niveaux. Venez
                            effectuer 2 séances d'essai gratuites !
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300 font-medium pt-2">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-pink-fleury shrink-0" />
                                Encadrement diplômé
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-pink-fleury shrink-0" />
                                2 séances d'essai offertes
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-pink-fleury shrink-0" />
                                Ambiance conviviale & familiale
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-pink-fleury shrink-0" />
                                Gymnase moderne à Fleury
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
                        <Button
                            size="lg"
                            className="bg-pink-fleury hover:bg-pink-fleury/80 text-black-fleury font-bold text-base px-8 border border-gray-fleury/40 shadow-md w-full sm:w-auto"
                            render={<a href="/rejoindre" />}
                        >
                            S'inscrire / Nous contacter
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CtaSection;

