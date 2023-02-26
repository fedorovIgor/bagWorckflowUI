import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagPriceComponent } from './bag-price/bag-price.component';
import { BagComponent } from './bag/bag.component';
import { BaglistComponent } from './baglist/baglist.component';
import { DesckComponent } from './desck/desck.component';
import { MaterialComponent } from './material/material.component';
import { PlanInfoComponent } from './plan-info/plan-info.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanComponent } from './plan/plan.component';

const routes: Routes = [
  { path: 'bag-create', component: BagComponent },
    { path: 'bag-list', component: BaglistComponent },
    {path: 'material', component: MaterialComponent},
    {path: 'plan', component: PlanComponent},
    {path: 'plan-list', component: PlanListComponent},
    {path: 'plan-info/:id', component: PlanInfoComponent},
    {path: 'plan-desck/:id', component: DesckComponent},
    {path: 'bag-price/:id', component: BagPriceComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
