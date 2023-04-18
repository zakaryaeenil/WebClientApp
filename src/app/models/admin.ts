import { Role } from "./role";

export interface Admin {
    adminId: number;
    nomComplet: string;
    prenom: string;
    nom: string;
    tel: string;
    email: string;
    login: string;
    password: string;
    dateCreation: string | null;
    roleId: number;
    role: Role;
}