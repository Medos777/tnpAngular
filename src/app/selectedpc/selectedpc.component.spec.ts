import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedpcComponent } from './selectedpc.component';

describe('SelectedpcComponent', () => {
  let component: SelectedpcComponent;
  let fixture: ComponentFixture<SelectedpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
