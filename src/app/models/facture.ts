import { Commande } from "./commande";

export interface Facture {
    factureId: number;
    titre: string;
    note: string;
    dateCreation: Date | null;
    commandeId: number;
    commande: Commande;
}