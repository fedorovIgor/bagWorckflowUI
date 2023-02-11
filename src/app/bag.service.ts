import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BAG, BAG_TO_PLAN, MATERIALS, MOCK_PLANS } from './mock-models';
import { Bag } from './model/bag';
import { Material } from './model/material';
import { Plan } from './model/plan';
import { PlanInfo } from './model/planInfo';

@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor(private http: HttpClient) { }

  getBags(): Observable<Bag[]> {
    return of(BAG);
  }

  saveBag(bag: Bag): void {
    BAG.push(bag);
  }

  getMaterials(): Observable<Material[]> {
    return of(MATERIALS);
  }

  addMaterial(material : Material) {
    MATERIALS.push(material);
  }

  updateMaterial(material : Material) {
    //MATERIALS.push(material);
  }

  getBagToPlan(): Observable<Bag[]> {
    return of(BAG_TO_PLAN);
  }

  addBagToPlan(bag : Bag): void {
    BAG_TO_PLAN[0] = bag
  }

  savePlan(plan : Plan) : Observable<Plan>{

    return this.http.post<Plan>("http://localhost:8080/api/v1/plan", plan)
    
    //MOCK_PLANS.push(plan);
  }

  getPlans() : Observable<Plan[]> {
    return this.http.get<Plan[]>("http://localhost:8080/api/v1/plan")
    //return of(MOCK_PLANS)
  }
}
