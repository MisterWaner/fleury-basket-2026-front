// Dictionnaire des mois en français pour la conversion numérique
export const MONTH_MAP: Record<string, number> = {
    janv: 0,
    jan: 0,
    janvier: 0,
    févr: 1,
    fevr: 1,
    fev: 1,
    février: 1,
    fevrier: 1,
    mars: 2,
    mar: 2,
    avril: 3,
    avr: 3,
    mai: 4,
    juin: 5,
    juil: 6,
    juill: 6,
    juillet: 6,
    août: 7,
    aout: 7,
    sept: 8,
    sep: 8,
    septembre: 8,
    oct: 9,
    octo: 9,
    octobre: 9,
    nov: 10,
    nove: 10,
    novembre: 10,
    déc: 11,
    dec: 11,
    décembre: 11,
    decembre: 11,
};

export function parseFrenchDateString(dateStr: string): number {
    if (!dateStr) return 0;

    const parts = dateStr.trim().split(" ");
    const day = parseInt(parts[0], 10) || 1;
    const monthRaw = (parts[1] || "").toLowerCase().replace(".", "");
    const month = MONTH_MAP[monthRaw] ?? 0;

    // Détermination de l'année sportive (Saison 2026-2027)
    // Septembre à Décembre -> 2026, Janvier à Juin -> 2027
    const year = month >= 8 ? 2026 : 2027;

    const timeParts = (parts[2] || "10h00").split("h");
    const hours = parseInt(timeParts[0], 10) || 10;
    const minutes = parseInt(timeParts[1], 10) || 0;

    return new Date(year, month, day, hours, minutes).getTime();
}
