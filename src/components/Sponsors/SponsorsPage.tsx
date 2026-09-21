import {
    Building2,
    Handshake,
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

const partnersList: Partner[] = [
    // Institutionnels
    {
        id: "1",
        name: "Ville de Fleury-sur-Orne",
        category: "institutionnel",
        description:
            "Partenaire institutionnel principal du club et mise à disposition des infrastructures.",
        logoUrl: "/images/sponsors/fleury-sur-orne.png",
        websiteUrl: "https://www.fleurysurorne.fr",
    },
    {
        id: "2",
        name: "Département du Calvados",
        category: "institutionnel",
        description:
            "Soutien au développement du sport amateur et à la formation des jeunes.",
        logoUrl: "/images/sponsors/calvados.png",
        websiteUrl: "https://www.calvados.fr",
    },
    {
        id: "3",
        name: "Région Normandie",
        category: "institutionnel",
        description:
            "Soutien aux associations sportives régionales et au dispositif Atouts Normandie.",
        logoUrl: "/images/sponsors/normandie.png",
        websiteUrl: "https://www.normandie.fr",
    },
    // Partenaires Majeurs / Officiels
    {
        id: "4",
        name: "Intersport Caen",
        category: "majeur",
        description:
            "Équipementier officiel du Fleury Basket pour le textile et le matériel d'entraînement.",
        logoUrl: "/images/sponsors/intersport.png",
        websiteUrl: "https://www.intersport.fr",
    },
    {
        id: "5",
        name: "Crédit Agricole Normandie",
        category: "majeur",
        description:
            "Partenaire majeur engagé auprès des équipes de jeunes et de la vie associative.",
        logoUrl: "/images/sponsors/credit-agricole.png",
        websiteUrl: "https://www.credit-agricole.fr",
    },
    {
        id: "6",
        name: "Super U Fleury-sur-Orne",
        category: "officiel",
        description:
            "Fournisseur des goûters et réceptions d'après-match lors des week-ends de compétition.",
        logoUrl: "/images/sponsors/super-u.png",
    },
    {
        id: "7",
        name: "Boulangerie Artisanale Fleury",
        category: "local",
        description:
            "Commerçant local engagé pour le soutien des manifestations du club.",
        logoUrl: "/images/sponsors/boulangerie.png",
    },
];

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
                <div className="mb-16">
                    <h2 className="text-xl font-extrabold text-black-fleury mb-6 flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-pink-fleury" />
                        Partenaires Institutionnels
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {partnersList
                            .filter((p) => p.category === "institutionnel")
                            .map((partner) => (
                                <div
                                    key={partner.id}
                                    className="bg-white rounded-3xl border border-gray-200/90 p-6 shadow-2xs flex flex-col justify-between hover:shadow-md transition-all duration-300"
                                >
                                    <div>
                                        <div className="h-20 bg-slate-50 rounded-2xl p-4 flex items-center justify-center mb-5 border border-gray-100">
                                            {/* Placeholder si pas de logo / remplacer par img */}
                                            <span className="font-extrabold text-slate-700 text-base text-center">
                                                {partner.name}
                                            </span>
                                        </div>
                                        <h3 className="font-extrabold text-black-fleury text-base mb-2">
                                            {partner.name}
                                        </h3>
                                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                            {partner.description}
                                        </p>
                                    </div>

                                    {partner.websiteUrl && (
                                        <a
                                            href={partner.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-black-fleury hover:text-pink-fleury transition-colors pt-2 border-t border-gray-100"
                                        >
                                            <span>Visiter le site web</span>
                                            <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                    )}
                                </div>
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
                        {partnersList
                            .filter((p) => p.category !== "institutionnel")
                            .map((partner) => (
                                <div
                                    key={partner.id}
                                    className="bg-white rounded-3xl border border-gray-200/90 p-6 shadow-2xs flex flex-col justify-between hover:shadow-md transition-all duration-300"
                                >
                                    <div>
                                        <div className="h-20 bg-slate-50 rounded-2xl p-4 flex items-center justify-center mb-4 border border-gray-100">
                                            <span className="font-bold text-slate-700 text-sm text-center">
                                                {partner.name}
                                            </span>
                                        </div>
                                        <div className="mb-2">
                                            <Badge
                                                className={`text-[10px] font-bold border-none ${
                                                    partner.category ===
                                                    "majeur"
                                                        ? "bg-pink-fleury text-black-fleury"
                                                        : "bg-slate-100 text-black-fleury"
                                                }`}
                                            >
                                                {partner.category === "majeur"
                                                    ? "Partenaire Majeur"
                                                    : "Partenaire Officiel"}
                                            </Badge>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                            {partner.description}
                                        </p>
                                    </div>

                                    {partner.websiteUrl && (
                                        <a
                                            href={partner.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-black-fleury hover:text-pink-fleury transition-colors pt-2 border-t border-gray-100"
                                        >
                                            <span>Voir le site</span>
                                            <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>

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

