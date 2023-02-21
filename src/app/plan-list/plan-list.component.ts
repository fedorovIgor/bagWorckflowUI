import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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

  totalPages: number = 0;
  currantPage: number = 0;
  totalPlans: number = 0;

  pageSize: number = 10;
  pageIndex: number = 0;

  constructor(private bagService: BagService,
              private router: Router){}
  
  ngOnInit(): void {
   this.getPlans();
  }

  getPlans() {
    this.bagService.getPlansPage(this.pageIndex, this.pageSize)
    .subscribe(p => {
      this.plans = p.plans;
      this.totalPages = p.totalPages;
      this.totalPlans = p.totalPlans;
    });
  }

  onClick(plan : Plan) {
    if (plan.id === undefined)
      return ;

    this.router.navigateByUrl("/plan-info/" + plan.id)
  }

  handlePageEvent(e: PageEvent) {
    
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.getPlans();
  }
}
