import type { TeamCategory } from "../types/teamCategory";

export function normalizeCategory(
    linkedTeamName?: string,
    linkedTeamCategory?: string,
): TeamCategory {
    // On combine le nom et la catégorie pour couvrir tous les cas
    const textToTest =
        `${linkedTeamName || ""} ${linkedTeamCategory || ""}`.toUpperCase();

    if (textToTest.includes("U13") || textToTest.includes("U-13")) return "U13";
    if (textToTest.includes("U11") || textToTest.includes("U-11")) return "U11";
    if (textToTest.includes("U9") || textToTest.includes("U-9")) return "U9";
    if (textToTest.includes("U7") || textToTest.includes("U-7")) return "U7";
    if (textToTest.includes("SENIOR")) return "Seniors D3";

    return "Seniors D3"; // Fallback si non reconnu
}
