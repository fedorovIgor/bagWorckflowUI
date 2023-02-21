import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BAG, BAG_TO_PLAN, MATERIALS, MOCK_PLANS } from './mock-models';
import { Bag } from './model/bag';
import { CuttingSheet } from './model/CuttingSheet';
import { Material } from './model/material';
import { Plan } from './model/plan';
import { PlanInfo } from './model/planInfo';
import { PlanPage } from './model/planPage';

@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor(private http: HttpClient) { }

  hostLink: string = "http://192.168.1.100:8080/";

  getBags(): Observable<Bag[]> {
    return this.http.get<Bag[]>(this.hostLink + "api/v1/bag")
  }

  saveBag(bag: Bag): Observable<Bag> {
    return this.http.post<Bag>(this.hostLink + "api/v1/bag", bag)
  }


  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(this.hostLink + "api/v1/material")
  }

  addMaterial(material : Material) : Observable<Material> {
    return this.http.post<Material>(this.hostLink +  "api/v1/material", material)
  }

  updateMaterial(material : Material) :  Observable<Material> {
    return this.http.put<Material>(this.hostLink + "api/v1/material", material)
  }

  getCuttingSheet(planInfoId: number) : Observable<CuttingSheet> {
    return this.http.get<CuttingSheet>(this.hostLink + "api/v1/sheet/" + planInfoId);
  }


  getBagToPlan(): Observable<Bag[]> {
    return of(BAG_TO_PLAN);
  }

  addBagToPlan(bag : Bag): void {
    BAG_TO_PLAN[0] = bag
  }

  savePlan(plan : Plan) : Observable<Plan>{

    return this.http.post<Plan>(this.hostLink + "api/v1/plan", plan)
    
  }

  getPlansPage(page: number, size: number) : Observable<PlanPage> {
    return this.http.get<PlanPage>(this.hostLink + "api/v1/plan" 
          + "?page=" + page
          + "&size=" + size)
  }

  getPlan(id : number) : Observable<Plan> {
    return this.http.get<Plan>(this.hostLink + "api/v1/plan/" + id );
  }

  updateStatus(sheet :  CuttingSheet) : Observable<CuttingSheet>  {
    return this.http.put<CuttingSheet>(this.hostLink + "api/v1/sheet", sheet );
  }
}
