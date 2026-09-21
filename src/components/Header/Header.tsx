import { useState } from "react";
import {
    Menu,
    Trophy,
    Calendar,
    Users,
    Newspaper,
    Mail,
    type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navLinks: { name: string; href: string; icon: LucideIcon }[] = [
    { name: "Accueil", href: "/", icon: Trophy },
    { name: "Équipes", href: "/equipes", icon: Users },
    { name: "Calendrier & Matchs", href: "/calendrier", icon: Calendar },
    { name: "Actualités", href: "/actualites", icon: Newspaper },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Nos Partenaires", href: "/nos-partenaires", icon: Trophy },
];

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-pink-fleury bg-white/95 backdrop-blur shadow-xs">
            {/* Bandeau supérieur aux couleurs du club */}
            <div className="h-1.5 w-full bg-linear-to-r from-pink-fleury via-gray-fleury to-pink-fleury" />

            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
                {/* --- LOGO DU CLUB (Protections shrink-0 et whitespace-nowrap ajoutées) --- */}
                <a
                    href="/"
                    className="flex items-center gap-2.5 shrink-0 group"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-fleury border border-gray-fleury shadow-xs transition-transform group-hover:scale-105">
                        <Trophy className="h-5 w-5 text-black-fleury shrink-0" />
                    </div>
                    <div className="flex flex-col whitespace-nowrap">
                        <span className="font-extrabold text-base sm:text-lg tracking-tight leading-none text-club-dark group-hover:text-gray-fleury transition-colors">
                            FLEURY BASKET
                        </span>
                        <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase mt-0.5">
                            Site Officiel
                        </span>
                    </div>
                </a>

                {/* --- NAVIGATION DESKTOP (Bascule sur lg: 1024px au lieu de md:) --- */}
                <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-1.5 px-2.5 2xl:px-3 py-2 2xl:text-sm font-semibold text-gray-700 hover:text-club-dark hover:bg-club-pink/60 rounded-md transition-all whitespace-nowrap hover:bg-pink-fleury"
                            >
                                <Icon className="h-4 w-4 text-gray-fleury shrink-0" />
                                <span>{link.name}</span>
                            </a>
                        );
                    })}
                </nav>

                {/* --- BOUTON D'ACTION DESKTOP (Bascule sur xl: 1280px) --- */}
                <div className="hidden xl:flex items-center shrink-0">
                    <Button
                        variant="default"
                        className="bg-pink-fleury hover:bg-pink-fleury/80 text-black-fleury font-bold border border-gray-fleury/40 shadow-xs whitespace-nowrap text-xs 2xl:text-sm px-3 2xl:px-4"
                        render={<a href="/rejoindre" />}
                    >
                        <span>Rejoindre</span>
                        <span className="hidden 2xl:inline">le club</span>
                    </Button>
                </div>

                {/* --- MENU MOBILE & TABLETTE (Affiché jusqu'à xl: 1280px) --- */}
                <div className="flex xl:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger
                            render={
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="border-pink-fleury bg-pink-fleury/20 hover:bg-pink-fleury/50"
                                    aria-label="Ouvrir le menu"
                                />
                            }
                        >
                            <Menu className="h-5 w-5 text-club-dark" />
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="w-75 border-l-2 border-pink-fleury"
                        >
                            <SheetHeader className="text-left border-b border-pink-fleury/50 pb-4 mb-4">
                                <SheetTitle className="flex items-center gap-2.5">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-fleury border border-gray-fleury">
                                        <Trophy className="h-4 w-4 text-black-fleury" />
                                    </div>
                                    <span className="font-bold text-base text-club-dark">
                                        FLEURY BASKET
                                    </span>
                                </SheetTitle>
                            </SheetHeader>

                            {/* Liens Drawer Mobile / Tablette */}
                            <div className="flex flex-col gap-1.5">
                                {navLinks.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 px-3 py-3 text-base font-semibold rounded-lg text-gray-fleury hover:bg-pink-fleury/50 transition-colors"
                                        >
                                            <div className="p-1.5 rounded-md bg-pink-fleury/40">
                                                <Icon className="h-4 w-4 text-black-fleury" />
                                            </div>
                                            <span>{link.name}</span>
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Bouton Drawer */}
                            <div className="mt-8 pt-4 border-t border-pink-fleury/50 mx-4">
                                <Button
                                    className="w-full bg-pink-fleury hover:bg-pink-fleury/80 text-black-fleury font-bold border border-gray-fleury/30 shadow-xs"
                                    onClick={() => setIsOpen(false)}
                                    render={
                                        <a href="/rejoindre">
                                            Rejoindre le club
                                        </a>
                                    }
                                />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

export default Header;

