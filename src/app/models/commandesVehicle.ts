import { Commande } from "./commande";
import { Vehicule } from "./vehicule";

export interface CommandesVehicle {
    commandeId: number;
    vehiculeId: number;
    commande: Commande;
    vehicule: Vehicule;
}