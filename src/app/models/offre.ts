import { Commande } from "./commande";
import { Transporteur } from "./transporteur";

export interface Offre {
    offreId: number;
    note: string;
    prix: number;
    dateCreation: Date | null;
    commandeId: number;
    transporteurId: number;
    commande: Commande;
    transporteur: Transporteur;
}