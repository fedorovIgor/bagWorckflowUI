import { Component, OnInit } from '@angular/core';
import { BagService } from '../bag.service';
import { Bag } from '../model/bag';

@Component({
  selector: 'app-baglist',
  templateUrl: './baglist.component.html',
  styleUrls: ['./baglist.component.css']
})
export class BaglistComponent implements OnInit {

  bags !: Bag[];

  constructor(private bagService: BagService) {}

  ngOnInit(): void {
    this.bagService.getBags()
      .subscribe(bags => this.bags = bags);
  }


  addNewBag() {
    console.log("click");
  }

  addToPlan(bag : Bag) {
    this.bagService.addBagToPlan(bag);
  }
}
