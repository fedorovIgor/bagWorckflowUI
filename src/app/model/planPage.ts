import { Plan } from "./plan";

export interface PlanPage {
    totalPages : number;
    totalPlans : number;
    plans: Plan[];
}