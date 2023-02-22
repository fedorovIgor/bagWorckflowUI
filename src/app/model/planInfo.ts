import { SheetDetail } from "./sheetDetail";

export interface PlanInfo {
    id ?: number;
    bagId: number;
    bagName: string;
    count: number;
    materialName : string;
    sheetDetails: SheetDetail[];
}