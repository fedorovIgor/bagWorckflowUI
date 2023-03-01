import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BagService } from '../bag.service';
import { Material } from '../model/material';
import { MaterialDialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  materials : Material[] = [];
  displayedColumns: string[] = ['name', 'balance', 'materialPrice'];
  dataSource : any ;

  constructor(private bagService: BagService,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.bagService.getMaterials()
      .subscribe(m =>{
        this.materials = m;
        this.dataSource = new MatTableDataSource(this.materials);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clickedRows(material: Material) {
    const dialogRef = this.dialog.open(MaterialDialogComponent, {
      width: '300px',
      data: material
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === undefined) 
        return;
      

      const index = this.materials.indexOf(material);

      if (index == -1)
          dialogRef.close();

      this.bagService.updateMaterial(result)
        .subscribe();
      this.materials[index] = result;
      this.dataSource = new MatTableDataSource(this.materials);

      dialogRef.close();
    });
  }

  addMaterial() {
    const dialogRef = this.dialog.open(MaterialDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === undefined)
        return;

      this.bagService.addMaterial(result)
        .subscribe((d) => {
          this.materials.push(d);
          this.dataSource.data = this.materials
        });
      
      dialogRef.close();
    });
  }
}
