import Pocketbase from "pocketbase";
import {
    Card,
    CardHeader,
    CardDescription,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Partner, PartnerRecord } from "@/types/partner";
import { ExternalLink } from "lucide-react";

const pbUrl = import.meta.env.PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";
const pb = new Pocketbase(pbUrl);

export default function SponsorCard({ partner }: { partner: PartnerRecord }) {
    const logoUrl = partner.logo
        ? pb.files.getURL(partner, partner.logo)
        : null;

    return (
        <Card className="bg-white rounded-3xl border border-gray-200/90 p-6 shadow-2xs flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <CardHeader>
                <CardTitle className="font-extrabold text-center text-black-fleury text-base mb-2">
                    {partner.name}
                </CardTitle>
                <Badge
                    className={`text-[10px] font-bold border-none ${
                        partner.category === "majeur"
                            ? "bg-pink-fleury text-black-fleury"
                            : "bg-slate-100 text-black-fleury"
                    }`}
                >
                    {partner.category === "majeur"
                        ? "Partenaire Majeur"
                        : partner.category === "institutionnel"
                          ? "Partenaire Institutionnel"
                          : partner.category === "officiel"
                            ? "Partenaire Officiel"
                            : "Partenaire Local"}
                </Badge>
            </CardHeader>
            <CardContent className="grid grid-rows-2 mt-4">
                {logoUrl && (
                    <img
                        src={logoUrl}
                        alt={partner.name}
                        className="w-1/2 mx-auto mb-4 self-center"
                    />
                )}
                <CardDescription className="text-center self-center">{partner.description}</CardDescription>
            </CardContent>
            <CardFooter className="bg-transparent">
                <a
                    href={partner.websiteUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-black-fleury hover:text-pink-fleury transition-colors pt-2  border-gray-100"
                >
                    <span>Visiter le site web</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                </a>
            </CardFooter>
        </Card>
    );
}

