import { MaterialConsumption } from "./materialConsumption";

export interface BagPriceInfo {
    bagId: number;
    bagName: string;
    bagPrice: number;
    totalPrice: number;
    bagsCount: number;
    materialsConsumption: MaterialConsumption[];
}