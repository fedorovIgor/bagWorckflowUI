import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagPriceComponent } from './bag-price.component';

describe('BagPriceComponent', () => {
  let component: BagPriceComponent;
  let fixture: ComponentFixture<BagPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
