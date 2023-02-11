import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaglistComponent } from './baglist.component';

describe('BaglistComponent', () => {
  let component: BaglistComponent;
  let fixture: ComponentFixture<BaglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaglistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
