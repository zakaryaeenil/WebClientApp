import { Commande } from "./commande";

export interface ExtraCommande {
    extraCommandeId: number;
    titre: string;
    note: string;
    prix: number;
    dateCreation: Date | null;
    commandeId: number;
    commande: Commande;
}