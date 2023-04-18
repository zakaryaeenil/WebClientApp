import { Document } from "./document";

export interface TypeDocument {
    typeDocumentId: number;
    titre: string;
    note: string;
    dateCreation: Date | null;
    documents: Document[];
}