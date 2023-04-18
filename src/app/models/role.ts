import { Admin } from "./admin";
import { User } from "./user";

export interface Role {
    roleId: number;
    nom: string;
    note: string;
    admins: Admin[];
    users: User[];
}