import { Component, OnInit } from '@angular/core';
import { BagService } from '../bag.service';
import { Plan } from '../model/plan';
import { PlanInfoService } from '../plan/planInfo.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  
  plans : Plan[] = [];

  constructor(private bagService: BagService){}
  
  ngOnInit(): void {
    this.bagService.getPlans()
      .subscribe(p => this.plans = p);
  }

  
}
