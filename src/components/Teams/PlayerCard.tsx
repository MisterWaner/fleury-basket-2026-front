import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import type { Player } from "@/types/player";

import image from "@/assets/60348584_9440040.svg";

const positionMap: Record<string, string> = {
    "poste 1": "Meneur",
    "poste 2": "Arrière",
    "poste 3": "Ailier",
    "poste 4": "Ailier Fort",
    "poste 5": "Pivot",
};

function PlayerCard({ player }: { player: Player }) {
    const formatPositionCard = (pos: string) => {
        const cleanedPos = pos.trim().toLowerCase();
        // Si on trouve une correspondance dans notre map, on l'utilise, sinon on garde la valeur d'origine
        return positionMap[cleanedPos] || pos;
    };

    const renderedPositions = () => {
        if (!player.position) return "Position inconnue";

        if (Array.isArray(player.position)) {
            return player.position
                .map((pos) => formatPositionCard(pos))
                .join(" • ");
        }

        return formatPositionCard(player.position);
    };

    return (
        <Card className="bg-pink-fleury/50">
            <CardHeader className="text-lg font-bold text-center">
                {player.name}
            </CardHeader>
            <CardContent>
                {player.photo ? (
                    <img
                        src={player.photo}
                        alt={player.name}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <img
                        src={image.src}
                        alt="Player"
                        className="w-full h-auto object-contain"
                    />
                )}
            </CardContent>
            <CardFooter className="bg-pink-fleury/50 flex flex-col gap-2">
                <p>Numéro {player.number}</p>
                <p>{renderedPositions()}</p>
            </CardFooter>
        </Card>
    );
}

export default PlayerCard;


