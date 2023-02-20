import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesckComponent } from './desck.component';

describe('DesckComponent', () => {
  let component: DesckComponent;
  let fixture: ComponentFixture<DesckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
