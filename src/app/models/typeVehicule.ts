import { Vehicule } from "./vehicule";

export interface TypeVehicule {
    typeVehiculeId: number;
    titre: string;
    note: string;
    comptCharge: number | null;
    fretCharge: number | null;
    largeur: number | null;
    hauteur: number | null;
    metreCube: number | null;
    dateCreation: Date | null;
    vehicules: Vehicule[];
}