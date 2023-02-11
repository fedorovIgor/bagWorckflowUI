import { Bag } from "./model/bag"
import { Material } from "./model/material";
import { Plan } from "./model/plan";
import { PlanInfo } from "./model/planInfo";

export let BAG: Bag[] = [
    {id: 1, name: "Fiato", attribute: 1221, details: [
        {id: 1, name: "стенка задняя", count:2, area: 2, length: 12, width: 12},
        {id: 2, name: "стенка передня", count:2, area: 2, length: 12, width: 12},
        {id: 3, name: "ручка", count:1, area: 2, length: 12, width: 12}
    ] },
    {id: 2, name: "Avrora", attribute: 5542, details: [
        {id: 4, name: "стенка задняя", count:2, area: 21, length: 12, width: 12},
        {id: 5, name: "стенка передня", count:2, area: 22, length: 12, width: 12},
        {id: 6, name: "ручка", count:1, area: 2, length: 12, width: 12}
    ] }
];

export let MATERIALS: Material[] = [
    {id: 1, name: "Кожа", balance: 12},
    {id: 2, name: "Кожкартон", balance: 200}
];

export let MOCK_PLANS : Plan [] = [];

export let BAG_TO_PLAN : Bag[] = [];

