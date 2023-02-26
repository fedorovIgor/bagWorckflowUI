import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BagService } from '../bag.service';
import { BagPriceInfo } from '../model/bagPriceInfo';
import { Plan } from '../model/plan';

@Component({
  selector: 'app-bag-price',
  templateUrl: './bag-price.component.html',
  styleUrls: ['./bag-price.component.css']
})
export class BagPriceComponent implements  OnInit {

  plan !: Plan;
  bagPriceInfo : BagPriceInfo[] = [];

  constructor(private activateRoute: ActivatedRoute,
    private bagService: BagService,
    private router: Router) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.bagService.getPlan(params["id"]).subscribe(plan => {
        this.plan = plan;
        this.loadBagPriceInfo();
      });
    });
  }

  loadBagPriceInfo() {
    this.plan.planInfo.forEach(i => {
      this.bagService.getBagPriceInfo(i.id!).subscribe( cut => {
        this.bagPriceInfo.push(cut);
      })
    })

  }

  onClick() {
    if (this.plan.id === undefined)
      return ;

    this.router.navigateByUrl("/plan-info/" + this.plan.id)
  }

  onPlanDesck() {
    if (this.plan.id === undefined)
      return ;

    this.router.navigateByUrl("/plan-desck/" + this.plan.id)
  }
}
