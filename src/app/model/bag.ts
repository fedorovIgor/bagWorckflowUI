import { Detail } from "./detail";

export interface Bag {
    id ?: number;
    name: string;
    attribute: number;
    details: Detail[];
}