import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripViewEditComponent } from './trip-view-edit.component';

describe('TripViewEditComponent', () => {
  let component: TripViewEditComponent;
  let fixture: ComponentFixture<TripViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripViewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
