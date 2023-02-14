import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { BagService } from '../bag.service';
import { Bag } from '../model/bag';
import { Detail } from '../model/detail';
import { Material } from '../model/material';
import { Plan } from '../model/plan';
import { PlanInfo } from '../model/planInfo';
import { PlanInfoService } from './planInfo.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit{

  bag !: Bag;
  materialsNames : string[] = [];
  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;

  planInfo : PlanInfo[] = [];

  form = this.fb.group({
    bagId: new FormControl(),
    count: new FormControl(),
    details: this.fb.array([])
  });


  constructor(private bagSerrvice : BagService,
              private planService : PlanInfoService,
              private fb: FormBuilder,
              public dialog: MatDialog,
              private router: Router) {}

  ngOnInit(): void {
    this.planInfo = this.planService.getAllPlansInfo()

    this.bagSerrvice.getBagToPlan()
      .subscribe(b => this.bag = b[0]);

    this.bagSerrvice.getMaterials()
      .subscribe(m =>  {
        this.materialsNames = m.map(mat => mat.name);

        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    if (this.bag) {
      if (this.bag.id !== undefined) {
        this.form.controls["bagId"].setValue(this.bag.id);
      } 
      this.bag.details.forEach(d => this.addDetailForm(d))
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.materialsNames.filter(materialsNames => materialsNames.toLowerCase().includes(filterValue));
  }

  get details(): FormArray {
    return this.form.controls["details"] as FormArray;
  }


  addDetailForm(detail: Detail) {
    const detailsForm = this.fb.group({
        detailId: [detail.id],
        detailName: [detail.name],
        materialName: ['']
    });
  
    this.details.push(detailsForm);
  }

  addBag() {
    const p: PlanInfo = {
      bagId: this.form.value.bagId,
      count: this.form.value.count,
      bagName: this.bag.name,
      sheetDetails: []
    } 

    this.form.value.details?.forEach(i => {
      let s = {
        detailId: (<any>i).detailId,
        materialName: (<any>i).materialName
      }

      p.sheetDetails.push(s);
    } )

    this.planService.addToPlansInfo(p);

  }

  savePlan() {

    const info : PlanInfo[] = this.planInfo;

    const p : Plan = {
      date: new Date,
      planInfo: info
    }

    
    this.bagSerrvice.savePlan(p)
      .subscribe(pl => this.router.navigateByUrl("/plan-list"))

    this.planService.clear();
  }

}
