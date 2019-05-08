import { Component, OnInit } from '@angular/core';
import { newTrip } from '../../models/newTrip.model';
import {TripService} from '../../shared/trip.service';
import {Route, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-trip-add',
  templateUrl: './trip-add.component.html',
  styleUrls: ['./trip-add.component.css']
})
export class TripAddComponent implements OnInit {

  newTrip: newTrip;

  isTripError =  false;

  constructor(private tripService: TripService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.newTrip = {
      cityFrom: '',
      cityTo: '',
      seatsLeft: 1,
      departureDate:	'',
      arrivalDate: '',
      description: ''
    };
  }

  OnSubmit(form: NgForm) {
    console.log(form.value);
    this.tripService.addTrip(localStorage.getItem('userToken'), form.value).subscribe((data: any) => {
          this.router.navigate(['/home/trip']); //DO POPRAWY - ajax, nie routing??
        },
        (err: HttpErrorResponse) => {
          this.isTripError = true;
        });
  }

}
