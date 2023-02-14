import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BagService } from '../bag.service';
import { Plan } from '../model/plan';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  
  plans : Plan[] = [];

  constructor(private bagService: BagService,
              private router: Router){}
  
  ngOnInit(): void {
    this.bagService.getPlans()
      .subscribe(p => this.plans = p);
  }

  onClick(plan : Plan) {
    if (plan.id === undefined)
      return ;

    this.router.navigateByUrl("/plan-info/" + plan.id)
  }
}
