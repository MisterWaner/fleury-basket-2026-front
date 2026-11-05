import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import type { Player } from "@/types/player";

import image from "@/assets/60348584_9440040.svg";

function PlayerCard({ player }: { player: Player }) {
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
            <CardFooter className="bg-pink-fleury/50">
                Numéro {player.number} - {player.position}
            </CardFooter>
        </Card>
    );
}

export default PlayerCard;

