import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BAG, BAG_TO_PLAN, MATERIALS, MOCK_PLANS } from './mock-models';
import { Bag } from './model/bag';
import { CuttingSheet } from './model/CuttingSheet';
import { Material } from './model/material';
import { Plan } from './model/plan';
import { PlanInfo } from './model/planInfo';

@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor(private http: HttpClient) { }

  getBags(): Observable<Bag[]> {
    return this.http.get<Bag[]>("http://localhost:8080/api/v1/bag")
  }

  saveBag(bag: Bag): Observable<Bag> {
    return this.http.post<Bag>("http://localhost:8080/api/v1/bag", bag)
  }


  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>("http://localhost:8080/api/v1/material")
  }

  addMaterial(material : Material) : Observable<Material> {
    return this.http.post<Material>("http://localhost:8080/api/v1/material", material)
  }

  updateMaterial(material : Material) :  Observable<Material> {
    return this.http.put<Material>("http://localhost:8080/api/v1/material", material)
  }

  getCuttingSheet(planInfoId: number) : Observable<CuttingSheet> {
    return this.http.get<CuttingSheet>("http://localhost:8080/api/v1/sheet/" + planInfoId);
  }


  getBagToPlan(): Observable<Bag[]> {
    return of(BAG_TO_PLAN);
  }

  addBagToPlan(bag : Bag): void {
    BAG_TO_PLAN[0] = bag
  }

  savePlan(plan : Plan) : Observable<Plan>{

    return this.http.post<Plan>("http://localhost:8080/api/v1/plan", plan)
    
  }

  getPlans() : Observable<Plan[]> {
    return this.http.get<Plan[]>("http://localhost:8080/api/v1/plan")
  }

  getPlan(id : number) : Observable<Plan> {
    return this.http.get<Plan>("http://localhost:8080/api/v1/plan/" + id );
  }
}
