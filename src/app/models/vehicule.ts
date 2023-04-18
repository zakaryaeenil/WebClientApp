import { Transporteur } from "./transporteur";
import { TypeVehicule } from "./typeVehicule";
import { CommandesVehicle } from "./commandesVehicle";
import { Document } from "./document";

export interface Vehicule {
    vehiculeId: number;
    titre: string;
    matricule: string;
    note: string;
    dateCreation: Date | null;
    transporteurId: number;
    typeVehiculeId: number;
    isActive: boolean | null;
    transporteur: Transporteur;
    typeVehicule: TypeVehicule;
    commandesVehicles: CommandesVehicle[];
    documents: Document[];
}