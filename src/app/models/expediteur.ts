import { Commande } from "./commande";
import { Document } from "./document";
import { User } from "./user";

export interface Expediteur {
    expediteurId: number;
    logo: string;
    nomComplet: string;
    tel: string;
    email: string;
    adresse: string;
    revision: string;
    nbrCommande: number;
    note: string;
    nbrUsers: number;
    isActive: boolean | null;
    nbrCertification: number;
    dateCreation: Date | null;
    commandes: Commande[];
    documents: Document[];
    users: User[];
}