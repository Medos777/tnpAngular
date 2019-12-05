import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePcComponent } from './delete-pc.component';

describe('DeletePcComponent', () => {
  let component: DeletePcComponent;
  let fixture: ComponentFixture<DeletePcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
