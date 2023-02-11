
import { PlanInfo } from "./planInfo";

export interface Plan {
    id ?: number;
    date : Date;
    planInfo: PlanInfo[];
}