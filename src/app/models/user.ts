import { Expediteur } from "./expediteur";
import { Role } from "./role";
import { Transporteur } from "./transporteur";
import { Document } from "./document";

export interface User {
    userId: number;
    nomComplet: string;
    nom: string;
    prenom: string;
    tel: string;
    email: string;
    isActive: boolean | null;
    password: string;
    dateCreation: Date | null;
    expediteurId: number | null;
    transporteurId: number | null;
    roleId: number;
    expediteur: Expediteur;
    role: Role;
    transporteur: Transporteur;
    documents: Document[];
}