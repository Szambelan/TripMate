import {Component, OnInit} from '@angular/core';
import {newTrip} from '../../models/newTrip.model';
import {TripService} from '../../shared/trip.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-trip-add',
    templateUrl: './trip-add.component.html',
    styleUrls: ['./trip-add.component.css']
})
export class TripAddComponent implements OnInit {

    newTrip: newTrip;
    isTripError = false;
    isDateError = false;
    today = this.calendar.getToday();
    today1 = this.calendar.getToday();

    constructor(private tripService: TripService, private router: Router, private calendar: NgbCalendar) {
    }

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
            departureDate: '',
            arrivalDate: '',
            description: ''
        };
    }

    OnSubmit(form: NgForm) {

        if (form.value['departureDate']['year'] >= this.today['year']
            && ((form.value['departureDate']['month'] === this.today['month']
                && form.value['departureDate']['day'] >= this.today['day'])
                || form.value['departureDate']['month'] > this.today['month'])
            && form.value['arrivalDate']['year'] >= form.value['departureDate']['year']
            && ((form.value['arrivalDate']['month'] === form.value['departureDate']['month']
                && form.value['arrivalDate']['day'] >= form.value['departureDate']['day'])
                || form.value['arrivalDate']['month'] > form.value['departureDate']['month'])
        ) {
            const newDepartureDate = form.value['departureDate']['year'] + '-' + form.value['departureDate']['month'] + '-' + form.value['departureDate']['day'];
            const newArrivalDate = form.value['arrivalDate']['year'] + '-' + form.value['arrivalDate']['month'] + '-' + form.value['arrivalDate']['day'];
            const newForm = {
                cityFrom: form.value.cityFrom,
                cityTo: form.value.cityTo,
                seatsLeft: form.value.seatsLeft,
                departureDate: newDepartureDate,
                arrivalDate: newArrivalDate,
                description: form.value.description
            };

            console.log(newForm);
            this.tripService.addTrip(localStorage.getItem('userToken'), newForm).subscribe((data: any) => {
                    this.router.navigate(['/home/trip']);
                },
                (err: HttpErrorResponse) => {
                    this.isTripError = true;
                });
        } else {
            this.isDateError = true;
        }
    }

}
