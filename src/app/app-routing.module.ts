import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagComponent } from './bag/bag.component';
import { BaglistComponent } from './baglist/baglist.component';
import { MaterialComponent } from './material/material.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanComponent } from './plan/plan.component';

const routes: Routes = [
  { path: 'bag-create', component: BagComponent },
    { path: 'bag-list', component: BaglistComponent },
    {path: 'material', component: MaterialComponent},
    {path: 'plan', component: PlanComponent},
    {path: 'plan-list', component: PlanListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
