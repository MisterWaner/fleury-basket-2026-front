import { useState, useEffect } from "react";
import Pocketbase, { ClientResponseError } from "pocketbase";
import type { PartnerRecord } from "@/types/partner";

const pbUrl =
    import.meta.env.PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090   ";
const pb = new Pocketbase(pbUrl);

export function usePartners() {
    const [partners, setPartners] = useState<PartnerRecord[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchPartners() {
            try {
                setLoading(true);
                setError(null);

                const records = await pb
                    .collection("partners")
                    .getFullList<PartnerRecord>({
                        sort: "category",
                        requestKey: null,
                    });

                if (!isMounted) return;
                setPartners(records);
            } catch (error) {
                console.error(
                    "❌ Erreur lors de la récupération des sponsors :",
                    error,
                );

                if (error instanceof ClientResponseError && error.isAbort) {
                    return;
                }
                if (isMounted) {
                    setError("Impossible de charger les partenaires.");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchPartners();

        return () => {
            isMounted = false;
        };
    }, []);

    return { partners, loading, error };
}
