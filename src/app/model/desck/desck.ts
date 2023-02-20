import { Column } from "./column";

export interface Desck {
    name: string;
    date: Date;
    columns: Column[];
}