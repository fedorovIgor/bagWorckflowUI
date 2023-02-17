import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BagService } from '../bag.service';
import { Bag } from '../model/bag';
import { Detail } from '../model/detail';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent {

  bag: Bag = {
    name: "",
    attribute: 0,
    details: []
  };

  constructor(public dialog: MatDialog,
    private bagService: BagService,
    private router: Router) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

      if (result !== undefined)
        this.bag.details.push(result);

      dialogRef.close();
    });
  }

  openEditDialog(detail: Detail) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: detail
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === undefined)
        return;
        
      const index = this.bag.details.indexOf(detail);

      if (index == -1)
        return;

      this.bag.details[index] = result;

      dialogRef.close();
    });
  }

  deleteDetail(detail: Detail) {
    const index = this.bag.details.indexOf(detail);

    if (index == -1)
      return;

    this.bag.details.splice(index, 1);
  }



  saveBag() {
    this.bagService.saveBag(this.bag)
      .subscribe(b => this.router.navigateByUrl("/bag-list"));
  }

}
