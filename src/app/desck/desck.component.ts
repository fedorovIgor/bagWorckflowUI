import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BagService } from '../bag.service';
import { CuttingSheet } from '../model/CuttingSheet';
import { Desck } from '../model/desck/desck';
import { Position } from '../model/desck/position';
import { Plan } from '../model/plan';

@Component({
  selector: 'app-desck',
  templateUrl: './desck.component.html',
  styleUrls: ['./desck.component.css']
})
export class DesckComponent implements OnInit {
  
  desck: Desck = {
      name: "",
      date: new Date(),
      columns: [
        {
          name: "ЗАПЛАНИРОВАНО",
          status: "PLANNED",
          position: []
        },
        {
          name: "РАСКРОЙ",
          status: "CUT",
          position: []
        },
        {
          name: "СКЛЕЙКА",
          status: "GLUING",
          position: []
        },
        {
          name: "КРАСКА",
          status: "PAINT",
          position: []
        },
        {
          name: "ПОШИВ",
          status:  "SEWING",
          position: []
        },
        {
          name: "ОТГРУЗКА",
          status: "SHIPMENT",
          position: []
        },
        {
          name: "ЗАВЕРШЕНО",
          status: "COMPLETED",
          position: []
        },
      ]
  }
  plan !: Plan;
  cuttingSheets : CuttingSheet[] = [];

  constructor(private activateRoute: ActivatedRoute,
    private bagService: BagService,
    private router: Router,
    private _snackBar: MatSnackBar) {}
  

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.bagService.getPlan(params["id"]).subscribe(plan => {
        this.plan = plan;
        this.loadCuttingSheets();

        this.loadDesck();
      });
    });
  }

  loadCuttingSheets() {
    this.plan.planInfo.forEach(i => {
      this.bagService.getCuttingSheet(i.id!).subscribe( cut => {
        this.cuttingSheets.push(cut);
        this.addCuttingSheetToDesck(cut);
      })
    })
  }


  loadDesck() {
    this.desck.name = "Пан от " ;
    this.desck.date  = this.plan.date;
  }

  //PLANNED, CUT, GLUING, PAINT, SEWING, SHIPMENT, COMPLETED;
  addCuttingSheetToDesck(s : CuttingSheet) {
    let position: Position = {
      id: s.id,
      bagName: s.bagName,
      count: s.count,
      articul: s.vendorCode,
      materialName: s.materialName
    }

    console.log("display position" + position);

    if (s.status == "PLANNED") 
      this.desck.columns
        .find(i => i.name === "ЗАПЛАНИРОВАНО")
        ?.position.push(position)
    
    
    if (s.status == "CUT")
      this.desck.columns
        .find(i => i.name === "РАСКРОЙ")
        ?.position.push(position)

    if (s.status == "GLUING")
      this.desck.columns
        .find(i => i.name === "СКЛЕЙКА")
        ?.position.push(position)

    if (s.status == "PAINT")
      this.desck.columns
        .find(i => i.name === "КРАСКА")
        ?.position.push(position)

    if (s.status == "SEWING")
      this.desck.columns
        .find(i => i.name === "ПОШИВ")
        ?.position.push(position)
                    
    if (s.status == "SHIPMENT")
      this.desck.columns
        .find(i => i.name === "ОТГРУЗКА")
        ?.position.push(position)

    if (s.status == "COMPLETED")
      this.desck.columns
        .find(i => i.name === "ЗАВЕРШЕНО")
        ?.position.push(position)
  }



  onClick() {
    if (this.plan.id === undefined)
      return ;

    this.router.navigateByUrl("/plan-info/" + this.plan.id)
  }

  
  onBagPrice() {
    if (this.plan.id === undefined)
      return ;

    this.router.navigateByUrl("/bag-price/" + this.plan.id)
  }

  drop(event: CdkDragDrop<Position[]>, status : string) {

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data, 
        event.previousIndex,
        event.currentIndex);
    } else {

      console.log(event)
      this.updateCutingSheetStatus(event.item.data, status)
        .subscribe( x => {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex)
          } , (error: any) => {
            console.log(error)
            if (error.status == 403)
            this._snackBar.open("неавторизованный пользователь", "close");
          }
        );

      
    }
  }

  updateCutingSheetStatus(position : Position, status : string) : Observable<CuttingSheet> {
    let cuttingSheet : CuttingSheet = {
      id : position.id,
      bagName : position.bagName,
      vendorCode : position.articul,
      count : position.count,
      status : status,
      materialName : position.materialName,
      details : []
    }
    return this.bagService.updateStatus(cuttingSheet)
  }   

}
