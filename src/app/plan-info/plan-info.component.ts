import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BagService } from '../bag.service';
import { CuttingSheet } from '../model/CuttingSheet';
import { Plan } from '../model/plan';

@Component({
  selector: 'app-plan-info',
  templateUrl: './plan-info.component.html',
  styleUrls: ['./plan-info.component.css']
})
export class PlanInfoComponent implements  OnInit {

  plan !: Plan;
  cuttingSheets : CuttingSheet[] = [];

  constructor(private activateRoute: ActivatedRoute,
    private bagService: BagService,
    private router: Router) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.bagService.getPlan(params["id"]).subscribe(plan => {
        this.plan = plan;
        this.loadCuttingSheets();
      });
    });
  }

  loadCuttingSheets() {
    this.plan.planInfo.forEach(i => {
      this.bagService.getCuttingSheet(i.id!).subscribe( cut => {
        this.cuttingSheets.push(cut);
      })
    })

  }

  onClick() {
    if (this.plan.id === undefined)
      return ;

    this.router.navigateByUrl("/plan-desck/" + this.plan.id)
  }

}
