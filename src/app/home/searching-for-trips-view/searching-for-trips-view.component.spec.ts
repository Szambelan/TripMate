import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingForTripsViewComponent } from './searching-for-trips-view.component';

describe('SearchingForTripsViewComponent', () => {
  let component: SearchingForTripsViewComponent;
  let fixture: ComponentFixture<SearchingForTripsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingForTripsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingForTripsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
