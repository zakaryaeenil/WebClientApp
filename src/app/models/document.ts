import { Commande } from "./commande";
import { Expediteur } from "./expediteur";
import { Transporteur } from "./transporteur";
import { TypeDocument } from "./typeDocument";
import { User } from "./user";
import {Vehicule} from "./vehicule";

export interface Document {
    documentId: number;
    titre: string;
    note: string;
    doc: string;
    dateCreation: Date | null;
    commandeId: number | null;
    transporteurId: number | null;
    expediteurId: number | null;
    userId: number | null;
    vehiculeId: number | null;
    typeDocumentId: number | null;
    pathDocument: string;
    commande: Commande;
    expediteur: Expediteur;
    transporteur: Transporteur;
    typeDocument: TypeDocument;
    user: User;
    vehicule : Vehicule;
}