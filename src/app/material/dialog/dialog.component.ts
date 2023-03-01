import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Material } from 'src/app/model/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class MaterialDialogComponent {

  detailProfile !: FormGroup;

  constructor(
      public dialogRef: MatDialogRef<MaterialDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public editData: any){}


  ngOnInit(): void {
    this.detailProfile = new FormGroup( {
      id:  new FormControl,
      name: new FormControl(''),
      balance: new FormControl(),
      materialPrice: new FormControl()
    })

    if(this.editData) {
      this.detailProfile.controls["id"].setValue(this.editData.id);
      this.detailProfile.controls["name"].setValue(this.editData.name);
      this.detailProfile.controls["balance"].setValue(this.editData.balance);
      this.detailProfile.controls["materialPrice"].setValue(this.editData.materialPrice);
    }
  }

  onSubmit() {

    let detail: Material = {
      "id": this.detailProfile.value.id,
      "name": this.detailProfile.value.name,
      "balance": this.detailProfile.value.balance,
      "materialPrice": this.detailProfile.value.materialPrice
    }

    console.log(this.detailProfile)
    this.dialogRef.close(detail);
  }
}
