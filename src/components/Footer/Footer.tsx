import { Trophy, MapPin, Mail, Phone, Heart, ArrowUpRight } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-slate-900 text-white border-t-4 border-pink-fleury relative overflow-hidden">
            {/* Bandeau d'accentuation supérieur */}
            <div className="h-1 w-full bg-linear-to-r from-pink-fleury via-gray-fleury to-pink-fleury opacity-80" />

            {/* Contenu principal du Footer */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* --- COLONNE 1 : IDENTITÉ DU CLUB --- */}
                    <div className="flex flex-col gap-4">
                        <a
                            href="/"
                            className="flex items-center gap-3 group w-fit"
                        >
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-fleury border border-gray-fleury shadow-xs transition-transform group-hover:scale-105">
                                <Trophy className="h-5 w-5 text-black-fleury" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-extrabold text-lg tracking-tight leading-none text-white group-hover:text-pink-fleury transition-colors">
                                    FLEURY BASKET
                                </span>
                                <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase mt-0.5">
                                    Fleury-sur-Orne
                                </span>
                            </div>
                        </a>

                        <p className="text-sm text-gray-300 leading-relaxed font-normal">
                            Club de basket-ball convivial et familial. De
                            l'école de mini-basket aux équipes seniors,
                            partageons la même passion du jeu.
                        </p>

                        {/* Réseaux sociaux */}
                        <div className="flex items-center gap-2 pt-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-9 w-9 border-slate-700 bg-slate-800 text-gray-300 hover:text-black-fleury hover:bg-pink-fleury hover:border-pink-fleury transition-all"
                                aria-label="Facebook"
                                render={
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />
                                }
                            >
                                <SiFacebook className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-9 w-9 border-slate-700 bg-slate-800 text-gray-300 hover:text-black-fleury hover:bg-pink-fleury hover:border-pink-fleury transition-all"
                                aria-label="Instagram"
                                render={
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />
                                }
                            >
                                <SiInstagram className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* --- COLONNE 2 : NAVIGATION RAPIDE --- */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-pink-fleury">
                            Navigation
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-pink-fleury transition-colors inline-flex items-center gap-1"
                                >
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/equipes"
                                    className="hover:text-pink-fleury transition-colors inline-flex items-center gap-1"
                                >
                                    Nos Équipes
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/calendrier"
                                    className="hover:text-pink-fleury transition-colors inline-flex items-center gap-1"
                                >
                                    Planning & Matchs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/actualites"
                                    className="hover:text-pink-fleury transition-colors inline-flex items-center gap-1"
                                >
                                    Actualités
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/rejoindre"
                                    className="hover:text-pink-fleury transition-colors inline-flex items-center gap-1 font-semibold text-pink-fleury"
                                >
                                    Inscriptions & Tarifs
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* --- COLONNE 3 : INFORMATIONS PRATIQUES --- */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-pink-fleury">
                            Le Gymnase
                        </h3>
                        <div className="space-y-3 text-sm text-gray-300">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="h-4 w-4 text-pink-fleury shrink-0 mt-1" />
                                <span>
                                    <strong className="block text-white">
                                        Gymnase Auguste Delaune
                                    </strong>
                                    Rue François Mitterrand
                                    <br />
                                    14123 Fleury-sur-Orne
                                </span>
                            </div>
                            <div className="pt-2 border-t border-slate-800">
                                <span className="text-xs text-gray-400 block font-medium">
                                    Entraînements :
                                </span>
                                <span className="text-xs text-gray-300">
                                    Du Lundi au Vendredi dès 17h30
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* --- COLONNE 4 : CONTACT & PERMANENCE --- */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-pink-fleury">
                            Contact
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>
                                <a
                                    href="mailto:contact@fleurybasket.fr"
                                    className="flex items-center gap-2.5 hover:text-pink-fleury transition-colors"
                                >
                                    <Mail className="h-4 w-4 text-pink-fleury shrink-0" />
                                    <span>contact@fleurybasket.fr</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:0200000000"
                                    className="flex items-center gap-2.5 hover:text-pink-fleury transition-colors"
                                >
                                    <Phone className="h-4 w-4 text-pink-fleury shrink-0" />
                                    <span>02 00 00 00 00</span>
                                </a>
                            </li>
                        </ul>

                        <div className="mt-2 p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                            <span className="text-xs font-semibold text-pink-fleury block">
                                Une question ?
                            </span>
                            <span className="text-xs text-gray-300">
                                Retrouvez nos bénévoles au gymnase pendant les
                                heures d'entraînement.
                            </span>
                        </div>
                    </div>
                </div>

                {/* --- LIGNE DE SÉPARATION ET COPYRIGHT --- */}
                <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                    <p>© {currentYear} Fleury Basket. Tous droits réservés.</p>
                    <div className="flex items-center gap-4">
                        <a
                            href="/mentions-legales"
                            className="hover:text-pink-fleury transition-colors"
                        >
                            Mentions Légales
                        </a>
                        <span>•</span>
                        <a
                            href="/confidentialite"
                            className="hover:text-pink-fleury transition-colors"
                        >
                            Politique de confidentialité
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
