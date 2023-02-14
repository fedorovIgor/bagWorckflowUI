import { Component, Inject, OnInit} from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Detail } from 'src/app/model/detail';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  detailProfile !: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any){}


  ngOnInit(): void {
    this.detailProfile = new FormGroup( {
      name: new FormControl('', [Validators.required]),
      area: new FormControl(),
      count: new FormControl(),
      length: new FormControl(),
      width: new FormControl(),
      note: new FormControl() 
    })

    if(this.editData) {
      this.detailProfile.controls["name"].setValue(this.editData.name);
      this.detailProfile.controls["area"].setValue(this.editData.area);
      this.detailProfile.controls["count"].setValue(this.editData.count);
      this.detailProfile.controls["length"].setValue(this.editData.length);
      this.detailProfile.controls["width"].setValue(this.editData.width);
      this.detailProfile.controls["note"].setValue(this.editData.note);
    }
  }

  
  
  onSubmit() {

    let detail: Detail = {
      "name": this.detailProfile.value.name,
      "count": this.detailProfile.value.count,
      "area": this.detailProfile.value.area,
      "length": this.detailProfile.value.length,
      "width": this.detailProfile.value.width,
      "note": this.detailProfile.value.notes
      
    }

    console.log(this.detailProfile)
    this.dialogRef.close(detail);
  }

 
}
