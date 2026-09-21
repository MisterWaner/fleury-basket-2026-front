export interface TarifCategory {
    id: string;
    name: string;
    years: string;
    price: string;
}

export const competitionTarifs: TarifCategory[] = [
    {
        id: "senior",
        name: "Seniors",
        years: "Nés en 2008 et avant",
        price: "140 €",
    },
    { id: "u13", name: "U13", years: "2014-2015", price: "125 €" },
    { id: "u11", name: "U11", years: "2016-2017", price: "120 €" },
    { id: "u9_u7", name: "U9/U7", years: "2018-2019", price: "95 €" },
];

