import SponsorCard from "./SponsorCard";
import { usePartners } from "@/hooks/usePartners";
import {
    Building2,
    Handshake,
    Loader2,
    Award,
    ExternalLink,
    CheckCircle2,
    Mail,
    ShieldCheck,
    Sparkles,
    TrendingUp,
    Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Partner } from "@/types/partner";

const packages = [
    {
        title: "Pack Supporter",
        price: "300 €",
        tag: "Visibilité Locale",
        features: [
            "Logo sur la page Partenaires du site web",
            "Mention dans les publications réseaux sociaux",
            "Affiche partenaires dans la buvette du gymnase",
        ],
        highlight: false,
    },
    {
        title: "Pack Club",
        price: "750 €",
        tag: "Plus Populaire",
        features: [
            "Toutes les prestations du Pack Supporter",
            "Panneau publicitaire fixe dans le gymnase Auguste Delaune",
            "Logo sur les surmaillots d'entraînement",
            "Invitation aux événements VIP du club",
        ],
        highlight: true,
    },
    {
        title: "Pack Maillot / Majeur",
        price: "1 500 €+",
        tag: "Impact Maximal",
        features: [
            "Toutes les prestations du Pack Club",
            "Emplacement logo privilégié sur le maillot officiel de match",
            "Sponsor principal d'un tournoi ou d'une journée de championnat",
            "Mise en avant dédiée sur le site internet et les réseaux",
        ],
        highlight: false,
    },
];

function SponsorsPage() {
    const { partners, loading, error } = usePartners();
    return (
        <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* --- EN-TÊTE --- */}
                <div className="max-w-3xl mb-12">
                    <Badge
                        variant="outline"
                        className="bg-pink-fleury/30 border-pink-fleury text-black-fleury mb-2 font-semibold"
                    >
                        Nos Partenaires
                    </Badge>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-black-fleury tracking-tight mb-3">
                        Ils soutiennent le Fleury Basket
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-lg">
                        Grâce à l'engagement de nos partenaires institutionnels
                        et des entreprises locales, notre club continue de
                        grandir, de former les jeunes et de faire vivre le
                        basket à Fleury-sur-Orne.
                    </p>
                </div>

                {/* --- SECTION PARTENAIRES INSTITUTIONNELS --- */}
                {loading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin text-pink-fleury" />
                    </div>
                ) : error ? (
                    <p className="text-red-500 text-center py-8">{error}</p>
                ) : partners.length > 0 ? (
                    <>
                        <div className="mb-16">
                            <h2 className="text-xl font-extrabold text-black-fleury mb-6 flex items-center gap-2">
                                <Building2 className="h-5 w-5 text-pink-fleury" />
                                Partenaires Institutionnels
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {partners
                                    .filter(
                                        (p) => p.category === "institutionnel",
                                    )
                                    .map((partner) => (
                                        <SponsorCard
                                            key={partner.id}
                                            partner={partner}
                                        />
                                    ))}
                            </div>
                        </div>

                        {/* --- SECTION SPONSORS & ENTREPRISES --- */}
                        <div className="mb-20">
                            <h2 className="text-xl font-extrabold text-black-fleury mb-6 flex items-center gap-2">
                                <Handshake className="h-5 w-5 text-pink-fleury" />
                                Sponsors & Partenaires Privés
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {partners
                                    .filter(
                                        (p) => p.category !== "institutionnel",
                                    )
                                    .map((partner) => (
                                        <SponsorCard
                                            key={partner.id}
                                            partner={partner}
                                        />
                                    ))}
                            </div>
                        </div>
                    </>
                ) : null}

                {/* --- SECTION : DEVENIR PARTENAIRE / PACKAGES --- */}
                <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden">
                    <div className="max-w-3xl mb-12 relative z-10">
                        <Badge className="bg-pink-fleury text-black-fleury font-bold border-none mb-3">
                            Rejoignez l'aventure
                        </Badge>
                        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
                            Devenez partenaire du Fleury Basket
                        </h2>
                        <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
                            Associez l'image de votre entreprise aux valeurs du
                            sport collectif, du dynamisme local et de la
                            jeunesse. Nous proposons différentes formules
                            adaptées à vos objectifs de communication.
                        </p>
                    </div>

                    {/* Grille des Offres / Packs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-12">
                        {packages.map((pkg, idx) => (
                            <div
                                key={idx}
                                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                                    pkg.highlight
                                        ? "bg-white text-black-fleury border-2 border-pink-fleury shadow-xl scale-100 md:scale-105"
                                        : "bg-slate-800/90 text-white border border-slate-700"
                                }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span
                                            className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                                                pkg.highlight
                                                    ? "bg-pink-fleury/30 text-black-fleury"
                                                    : "bg-slate-700 text-gray-300"
                                            }`}
                                        >
                                            {pkg.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-extrabold mb-1">
                                        {pkg.title}
                                    </h3>
                                    <div className="text-2xl sm:text-3xl font-black mb-6">
                                        {pkg.price}{" "}
                                        <span className="text-xs font-normal text-gray-400">
                                            / saison
                                        </span>
                                    </div>

                                    <ul className="space-y-3 text-xs mb-8">
                                        {pkg.features.map((feat, fIdx) => (
                                            <li
                                                key={fIdx}
                                                className="flex items-start gap-2.5"
                                            >
                                                <CheckCircle2
                                                    className={`h-4 w-4 shrink-0 mt-0.5 ${
                                                        pkg.highlight
                                                            ? "text-pink-fleury"
                                                            : "text-pink-fleury"
                                                    }`}
                                                />
                                                <span
                                                    className={
                                                        pkg.highlight
                                                            ? "text-gray-700"
                                                            : "text-gray-300"
                                                    }
                                                >
                                                    {feat}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href="/contact?sujet=Sponsoring"
                                    className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-center transition-all block ${
                                        pkg.highlight
                                            ? "bg-black-fleury text-white hover:bg-slate-800"
                                            : "bg-white text-black-fleury hover:bg-slate-100"
                                    }`}
                                >
                                    Choisir cette formule
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Avantage fiscal mécénat */}
                    <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-pink-fleury/20 rounded-2xl text-pink-fleury shrink-0">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-extrabold text-sm sm:text-base">
                                    Défiscalisation & Mécénat
                                </h4>
                                <p className="text-xs text-gray-300">
                                    En tant qu'association sportive à but non
                                    lucratif, les dons et partenariats ouvrent
                                    droit à une réduction d'impôt sur les
                                    sociétés de{" "}
                                    <strong>60 % du montant du don</strong>.
                                </p>
                            </div>
                        </div>

                        <a
                            href="/contact?sujet=Sponsoring"
                            className="px-5 py-3 bg-pink-fleury text-black-fleury font-bold text-xs rounded-xl hover:bg-pink-300 transition-colors shrink-0 whitespace-nowrap"
                        >
                            Demander la plaquette
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SponsorsPage;

