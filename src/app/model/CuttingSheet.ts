import { CuttingSheetDetail } from "./CuttingSheetDetail";

export interface CuttingSheet {

    id : number;
    bagName : string;
    vendorCode : number;
    count : number;
    details : CuttingSheetDetail[];
}