import { Commande } from "./commande";

export interface Statut {
    statutId: number;
    nom: string;
    commandes: Commande[];
}