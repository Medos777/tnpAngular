import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutLaptopComponent } from './ajout-laptop.component';

describe('AjoutLaptopComponent', () => {
  let component: AjoutLaptopComponent;
  let fixture: ComponentFixture<AjoutLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
