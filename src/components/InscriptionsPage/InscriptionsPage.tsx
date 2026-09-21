import { requiredDocuments } from "@/types/document";
import { competitionTarifs } from "@/types/tarifs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, CalendarDays, Euro, UserCheck, Mail } from "lucide-react";

function InscriptionsPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-10 lg:py-14">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="max-w-3xl mb-10">
                    <Badge
                        variant="outline"
                        className="bg-pink-fleury/30 border-pink-fleury text-black-fleury mb-2 font-semibold"
                    >
                        Inscriptions & Tarifs
                    </Badge>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-black-fleury tracking-tight mb-4">
                        Saison 2026-2027
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg">
                        Retrouvez toutes les informations, documents et tarifs
                        pour rejoindre le Fleury Basket cette saison.
                    </p>
                </div>

                {/* --- ÉTAPE PAR ÉTAPE --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Étape 1 */}
                    <div className="bg-white/80 border-2 border-pink-fleury p-8 rounded-2xl shadow-xl backdrop-blur-sm relative group">
                        <span className="absolute top-4 left-4 text-4xl font-extrabold text-pink-fleury">
                            1
                        </span>
                        <div className="flex flex-col items-center text-center space-y-4 pt-6">
                            <FileText className="w-12 h-12 text-gray-fleury group-hover:scale-110 transition-transform" />
                            <h2 className="text-2xl font-bold text-black-fleury">
                                INFO & DOCUMENTS
                            </h2>
                            <ul className="text-sm text-gray-700 space-y-1.5 list-disc list-inside">
                                {requiredDocuments.map((doc) => (
                                    <li key={doc.id}>{doc.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Étape 2 */}
                    <div className="bg-white/80 border-2 border-pink-fleury p-8 rounded-2xl shadow-xl backdrop-blur-sm relative group">
                        <span className="absolute top-4 left-4 text-4xl font-extrabold text-pink-fleury">
                            2
                        </span>
                        <div className="flex flex-col items-center text-center space-y-4 pt-6">
                            <UserCheck className="w-12 h-12 text-gray-fleury group-hover:scale-110 transition-transform" />
                            <h2 className="text-2xl font-bold text-black-fleury">
                                INSCRIPTION EN LIGNE
                            </h2>
                            <p className="text-sm text-gray-700">
                                Remplissez le formulaire numérique sur notre
                                plateforme partenaire.
                            </p>
                            <Button
                                size="lg"
                                className="bg-pink-fleury hover:bg-pink-fleury/80 text-black-fleury font-bold shadow-xs"
                            >
                                FORMULAIRE EN LIGNE
                            </Button>
                            <p className="text-xs text-gray-500">
                                (Lien actif dès l'ouverture des inscriptions)
                            </p>
                        </div>
                    </div>

                    {/* Étape 3 */}
                    <div className="bg-white/80 border-2 border-pink-fleury p-8 rounded-2xl shadow-xl backdrop-blur-sm relative group">
                        <span className="absolute top-4 left-4 text-4xl font-extrabold text-pink-fleury">
                            3
                        </span>
                        <div className="flex flex-col items-center text-center space-y-4 pt-6">
                            <Euro className="w-12 h-12 text-gray-fleury group-hover:scale-110 transition-transform" />
                            <h2 className="text-2xl font-bold text-black-fleury">
                                PAIEMENT
                            </h2>
                            <p className="text-sm text-gray-700">
                                Réglez votre licence par carte bancaire (via la
                                plateforme) ou par chèque.
                            </p>
                            <div className="flex items-center gap-3 pt-2 text-xs text-gray-600">
                                <Badge
                                    variant="secondary"
                                    className="bg-slate-100"
                                >
                                    CB Ligne
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className="bg-slate-100"
                                >
                                    Chèque
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className="bg-slate-100"
                                >
                                    Espèces
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- TARIFS --- */}
                <div className="bg-white/80 border-2 border-pink-fleury p-8 rounded-2xl shadow-xl backdrop-blur-sm mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <CalendarDays className="w-10 h-10 text-pink-fleury" />
                        <h2 className="text-3xl font-extrabold text-black-fleury tracking-tight">
                            TARIFS DE LA LICENCE
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-10">
                        {/* Compétition */}
                        <div>
                            <h3 className="text-xl font-bold text-black-fleury mb-4 border-b border-gray-fleury/20 pb-2">
                                COMPÉTITION
                            </h3>
                            <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-thin">
                                <table className="w-full text-left text-sm">
                                    <thead className="text-xs text-gray-500 uppercase tracking-widest bg-slate-100">
                                        <tr>
                                            <th className="px-4 py-3">
                                                CATÉGORIE
                                            </th>
                                            <th className="px-4 py-3">
                                                ANNEES
                                            </th>
                                            <th className="px-4 py-3 text-right">
                                                PRIX
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {competitionTarifs.map((tarif) => (
                                            <tr
                                                key={tarif.id}
                                                className="hover:bg-pink-fleury/10 transition-colors"
                                            >
                                                <td className="px-4 py-3 font-semibold text-black-fleury whitespace-nowrap">
                                                    {tarif.name}
                                                </td>
                                                <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                                                    {tarif.years}
                                                </td>
                                                <td className="px-4 py-3 text-right font-extrabold text-black-fleury text-base whitespace-nowrap">
                                                    {tarif.price}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="text-center bg-pink-fleury/20 border border-pink-fleury p-8 rounded-2xl flex flex-col items-center gap-4">
                    <Mail className="w-8 h-8 text-black-fleury" />
                    <h3 className="text-lg font-semibold text-black-fleury">
                        Une question sur les inscriptions ?
                    </h3>
                    <p className="text-sm text-gray-700 max-w-md">
                        N'hésitez pas à nous contacter par e-mail ou à passer
                        nous voir au gymnase lors des entraînements.
                    </p>
                    <Button
                        variant="outline"
                        className="bg-pink-fleury hover:bg-pink-fleury/80 text-black-fleury font-bold shadow-xs"
                    >
                        NOUS CONTACTER
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default InscriptionsPage;





