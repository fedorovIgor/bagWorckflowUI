import { CuttingSheetDetail } from "./CuttingSheetDetail";

export interface CuttingSheet {

    id : number;
    bagName : string;
    vendorCode : number;
    count : number;
    materialName : string;
    status : string;
    details : CuttingSheetDetail[];
}
