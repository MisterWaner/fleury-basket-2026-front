import { useState } from "react";
import {
    MapPin,
    Mail,
    Phone,
    Clock,
    Send,
    CheckCircle2,
    HelpCircle,
    ChevronDown,
    Navigation,
    MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { FAQItem } from "@/types/faq";

const faqList: FAQItem[] = [
    {
        question: "Comment puis-je faire un entraînement d'essai ?",
        answer: "Il suffit de vous présenter 10 minutes avant le début du créneau de votre catégorie au gymnase Auguste Delaune avec une tenue de sport et des baskets d'intérieur clean. Vous pouvez effectuer jusqu'à 2 séances d'essai gratuitement.",
    },
    {
        question: "À partir de quel âge accepte-t-on les enfants ?",
        answer: "Nous accueillons les enfants dès l'âge de 5 ans dans notre catégorie U7 (Micro-Basket / Mini-Basket) pour une découverte ludique du basketball.",
    },
    {
        question: "Quelles sont les pièces nécessaires pour l'inscription ?",
        answer: "La procédure se fait en ligne via e-LICENCE (FFBB). Vous aurez besoin d'une photo d'identité, d'une pièce d'identité et du formulaire de surclassement/médical si demandé.",
    },
    {
        question:
            "Le club accepte-t-il le Pass'Sport ou les chèques vacances ?",
        answer: "Oui ! Nous acceptons le Pass'Sport (déduction de 50€), les Atouts Normandie. Mais nous n'acceptons pas les chèques ANCV.",
    },
];

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "Inscription / Essai",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        // Traitement du formulaire (ex: envoi vers PocketBase ou Service email)
        setSubmitted(true);
    };

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };
    
    return (
        <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* --- EN-TÊTE --- */}
                <div className="max-w-3xl mb-12">
                    <Badge
                        variant="outline"
                        className="bg-pink-fleury/30 border-pink-fleury text-black-fleury mb-2 font-semibold"
                    >
                        Contact & Accès
                    </Badge>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-black-fleury tracking-tight mb-3">
                        Contactez le Fleury Basket
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-lg">
                        Une question sur les entraînements, une demande
                        d'inscription ou un partenariat ? Écrivez-nous ou venez
                        nous rencontrer au gymnase.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                    {/* --- COLONNE GAUCHE : INFOS DE CONTACT & ACCÈS (5 cols) --- */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Coordonnées */}
                        <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 shadow-2xs">
                            <h2 className="text-xl font-extrabold text-black-fleury mb-6 flex items-center gap-2">
                                <MessageSquare className="h-5 w-5 text-pink-fleury" />
                                Coordonnées du club
                            </h2>

                            <div className="space-y-6 text-sm">
                                {/* Gymnase */}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-100 rounded-2xl text-black-fleury shrink-0 mt-0.5">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-black-fleury mb-0.5">
                                            Gymnase Auguste Delaune
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                            Rue Serge Reggiani
                                            <br />
                                            14123 Fleury-sur-Orne
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-100 rounded-2xl text-black-fleury shrink-0 mt-0.5">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-black-fleury mb-0.5">
                                            Adresse email
                                        </h3>
                                        <a
                                            href="mailto:contact@fleurybasket.fr"
                                            className="text-gray-600 hover:text-pink-fleury text-xs sm:text-sm font-medium transition-colors"
                                        >
                                            contact@fleurybasket.fr
                                        </a>
                                    </div>
                                </div>

                                {/* Téléphone / Permanece */}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-100 rounded-2xl text-black-fleury shrink-0 mt-0.5">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-black-fleury mb-0.5">
                                            Téléphone / Secrétariat
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">
                                            02 31 XX XX XX
                                        </p>
                                        <span className="text-[11px] text-gray-400">
                                            Joignable les jours d'entraînement
                                        </span>
                                    </div>
                                </div>

                                {/* Horaires d'ouverture gymnase */}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-100 rounded-2xl text-black-fleury shrink-0 mt-0.5">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-black-fleury mb-0.5">
                                            Créneaux d'entraînement
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">
                                            Du Lundi au Vendredi : 17h30 - 22h30
                                            <br />
                                            Samedi (Matchs) : 09h00 - 19h00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Carte / Y aller */}
                        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <Badge className="bg-pink-fleury text-black-fleury font-bold border-none mb-3">
                                    Venir au gymnase
                                </Badge>
                                <h3 className="text-lg font-extrabold mb-2">
                                    Accès & Transports
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                                    Le gymnase Auguste Delaune dispose d'un
                                    grand parking gratuit. Accessible en bus
                                    Twisto via la ligne 4 (Arrêt Fleury Centre).
                                </p>
                            </div>

                            <a
                                href="https://maps.google.com/?q=Gymnase+Auguste+Delaune+Fleury-sur-Orne"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white hover:bg-slate-100 text-black-fleury font-bold rounded-xl text-xs sm:text-sm transition-all"
                            >
                                <Navigation className="h-4 w-4 text-pink-fleury" />
                                Ouvrir dans Google Maps
                            </a>
                        </div>
                    </div>

                    {/* --- COLONNE DROITE : FORMULAIRE DE CONTACT (7 cols) --- */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 shadow-2xs h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-extrabold text-black-fleury mb-2">
                                    Envoyez-nous un message
                                </h2>
                                <p className="text-gray-600 text-xs sm:text-sm mb-8">
                                    Remplissez le formulaire ci-dessous, notre
                                    équipe vous répondra sous 24 à 48h.
                                </p>

                                {submitted ? (
                                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center my-auto">
                                        <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                                        <h3 className="text-lg font-bold text-emerald-900 mb-1">
                                            Message envoyé avec succès !
                                        </h3>
                                        <p className="text-xs sm:text-sm text-emerald-700 max-w-sm mx-auto mb-6">
                                            Merci pour votre message. Un membre
                                            du bureau du Fleury Basket vous
                                            recontactera très rapidement.
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                setSubmitted(false);
                                                setFormData({
                                                    name: "",
                                                    email: "",
                                                    phone: "",
                                                    subject:
                                                        "Inscription / Essai",
                                                    message: "",
                                                });
                                            }}
                                            className="text-xs font-bold border-emerald-300 text-emerald-800 hover:bg-emerald-100"
                                        >
                                            Envoyer un autre message
                                        </Button>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        {/* Nom complet */}
                                        <div>
                                            <label className="block text-xs font-bold text-black-fleury uppercase tracking-wider mb-2">
                                                Nom & Prénom *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Ex: Jean Dupont"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        name: e.target.value,
                                                    })
                                                }
                                                className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-black-fleury focus:outline-none focus:ring-2 focus:ring-pink-fleury/50 focus:border-pink-fleury transition-all"
                                            />
                                        </div>

                                        {/* Email & Téléphone (Grid 2 cols) */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-black-fleury uppercase tracking-wider mb-2">
                                                    Adresse Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="jean.dupont@email.com"
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            email: e.target
                                                                .value,
                                                        })
                                                    }
                                                    className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-black-fleury focus:outline-none focus:ring-2 focus:ring-pink-fleury/50 focus:border-pink-fleury transition-all"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-bold text-black-fleury uppercase tracking-wider mb-2">
                                                    Téléphone
                                                </label>
                                                <input
                                                    type="tel"
                                                    placeholder="06 12 34 56 78"
                                                    value={formData.phone}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            phone: e.target
                                                                .value,
                                                        })
                                                    }
                                                    className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-black-fleury focus:outline-none focus:ring-2 focus:ring-pink-fleury/50 focus:border-pink-fleury transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* Objet / Sujet */}
                                        <div>
                                            <label className="block text-xs font-bold text-black-fleury uppercase tracking-wider mb-2">
                                                Sujet de la demande *
                                            </label>
                                            <select
                                                value={formData.subject}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        subject: e.target.value,
                                                    })
                                                }
                                                className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-black-fleury focus:outline-none focus:ring-2 focus:ring-pink-fleury/50 focus:border-pink-fleury transition-all font-medium"
                                            >
                                                <option value="Inscription / Essai">
                                                    Inscription / Séance d'essai
                                                </option>
                                                <option value="Renseignement Sportif">
                                                    Renseignement Équipe /
                                                    Créneaux
                                                </option>
                                                <option value="Sponsoring / Partenariat">
                                                    Sponsoring & Partenariats
                                                </option>
                                                <option value="Autre demande">
                                                    Autre demande
                                                </option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-xs font-bold text-black-fleury uppercase tracking-wider mb-2">
                                                Votre message *
                                            </label>
                                            <textarea
                                                required
                                                rows={5}
                                                placeholder="Précisez la catégorie ou le nom de l'enfant le cas échéant..."
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        message: e.target.value,
                                                    })
                                                }
                                                className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-black-fleury focus:outline-none focus:ring-2 focus:ring-pink-fleury/50 focus:border-pink-fleury transition-all resize-none"
                                            />
                                        </div>

                                        {/* Bouton d'envoi */}
                                        <Button
                                            type="submit"
                                            className="w-full py-3.5 bg-black-fleury hover:bg-gray-fleury text-white font-bold rounded-xl text-sm transition-all shadow-xs flex items-center justify-center gap-2 mt-4"
                                        >
                                            <Send className="h-4 w-4" />
                                            Envoyer le message
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SECTION FAQ --- */}
                <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 shadow-2xs">
                    <div className="text-center max-w-xl mx-auto mb-8">
                        <Badge
                            variant="outline"
                            className="bg-slate-100 text-black-fleury mb-2 font-semibold"
                        >
                            Questions fréquentes
                        </Badge>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-black-fleury">
                            Besoin d'une réponse rapide ?
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqList.map((faq, index) => {
                            const isOpen = openFaqIndex === index;
                            return (
                                <div
                                    key={index}
                                    className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full p-5 text-left font-bold text-black-fleury flex items-center justify-between gap-4 text-sm sm:text-base hover:bg-slate-100/60 transition-colors"
                                    >
                                        <span className="flex items-center gap-3">
                                            <HelpCircle className="h-4 w-4 text-pink-fleury shrink-0" />
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`h-4 w-4 text-gray-400 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-club-dark" : ""}`}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-100/80 leading-relaxed bg-white">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;






