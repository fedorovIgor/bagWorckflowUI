import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plan } from '../model/plan';
import { PlanInfo } from '../model/planInfo';
import { PLANS_INFO } from './planModels';

@Injectable({
  providedIn: 'root'
})
export class PlanInfoService {

  constructor() { }

  addToPlansInfo(planInfo: PlanInfo) {
    PLANS_INFO.push(planInfo);
  }

  getAllPlansInfo() : PlanInfo[] {
    return PLANS_INFO;
  }

  clear() {
    PLANS_INFO.splice(0, PLANS_INFO.length);
  }

  
}
