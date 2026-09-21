export interface Document {
    id: string;
    title: string;
    description: string;
}

export const requiredDocuments: Document[] = [
    {
        id: "photo",
        title: "Photo d'identité",
        description: "Une photo d'identité récente (numérique ou papier).",
    },
    {
        id: "medical",
        title: "Certificat Médical",
        description:
            "Un certificat médical de non-contre-indication à la pratique du basket (valable 3 ans).",
    },
    {
        id: "id_parent",
        title: "Pièce d'identité (Parent)",
        description:
            "Une copie de la pièce d'identité du représentant légal (pour les mineurs).",
    },
    {
        id: "ffbb",
        title: "Formulaire FFBB",
        description:
            "Le formulaire de demande de licence FFBB, dûment complété.",
    },
];
