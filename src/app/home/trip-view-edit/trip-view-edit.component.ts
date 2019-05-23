import { Component, OnInit } from '@angular/core';
import {TripService} from '../../shared/trip.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-trip-view-edit',
  templateUrl: './trip-view-edit.component.html',
  styleUrls: ['./trip-view-edit.component.css']
})
export class TripViewEditComponent implements OnInit {

  constructor(private tripService: TripService, private router: Router) { }

  Trip: any;
  error = false;

  ngOnInit() {
    this.loadTripData();
  }

  loadTripData() {
    return this.tripService.getTripData(localStorage.getItem('idTrip')).subscribe((data => {
      this.Trip = data;
    }));
  }

  OnSubmit(form: NgForm) {
    this.tripService.editTripData(localStorage.getItem('idTrip'), form.value).subscribe((data: any) => {
          this.router.navigate(['/home/trip']);
        },
        (err: HttpErrorResponse) => {
          this.error = true;
        });
  }

}
