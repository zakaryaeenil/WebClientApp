import { Commande } from "./commande";
import { Document } from "./document";
import { Offre } from "./offre";
import { User } from "./user";
import { Vehicule } from "./vehicule";

export interface Transporteur {
    transporteurId: number;
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
    nbrChauffeur: number;
    nbrKm: number;
    dateCreation: Date | null;
    commandes: Commande[];
    documents: Document[];
    offres: Offre[];
    users: User[];
    vehicules: Vehicule[];
}