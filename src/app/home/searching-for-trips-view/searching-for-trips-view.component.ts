import {Component, OnInit} from '@angular/core';
import {TripService} from '../../shared/trip.service';
import {NavigationEnd, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-all-trips-view',
    templateUrl: './searching-for-trips-view.component.html'
})
export class SearchingForTripsViewComponent implements OnInit {

    constructor(private tripService: TripService, private router: Router) {

        // TO REFRESH THE PAGE AFTER REMOVING TRIP--------------------
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
            return false;
        };
        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                // trick the Router into believing it's last link wasn't previously loaded
                this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });
        //  ---------------------------------


    }


    alltrips: any = [];
    searchedTrips: any = [];
    isFindingTripError = false;
    noFreePlaces = false;

    ngOnInit() {
        this.loadAllTrips();
        this.resetForm();
    }

    // showModal(): void {
    //     $('#myModal').modal('show');
    // }
    // sendModal(): void {
    //     // do something here
    //     this.hideModal();
    // }
    // hideModal(): void {
    //     document.getElementById('close-modal').click();
    // }


    resetForm(form?: NgForm) {
        if (form != null) {
            form.reset();
        }
    }

    loadAllTrips() {
        return this.tripService.getTAllrips().subscribe((data: {}) => {
            this.alltrips = data;
            console.log(this.alltrips);
        });
    }

    makeReservation(idTrip: string) {
        console.log(idTrip);
        this.tripService.reservateTrip(localStorage.getItem('userToken'), idTrip).subscribe((data: any) => {
                this.router.navigate(['/home/searchForTrips']);
            },
            (err: HttpErrorResponse) => {
                this.noFreePlaces = true;
            });
    }

    OnSubmit(form: NgForm) {

        const inputFrom = JSON.stringify(form.value.searchFrom);
        const newInputFrom = (inputFrom.substr(1, inputFrom.length - 2));

        const inputTo = JSON.stringify(form.value.searchTo);
        const newInputTo = (inputTo.substr(1, inputTo.length - 2));

        if (newInputFrom.length >= 2 && newInputTo.length >= 2) {
            return this.tripService.searchTrips(newInputFrom, newInputTo).subscribe((data: {}) => {
                this.searchedTrips = data;
                console.log('searchedTrips');
                console.log(JSON.stringify(this.searchedTrips));
                if (JSON.stringify(this.searchedTrips).includes('Offers with given cities not found')) {
                    this.isFindingTripError = true;
                }
            });
        } else if (newInputFrom.length >= 2 && newInputTo.length <= 2) {
            return this.tripService.searchTripsFrom(newInputFrom).subscribe((data: {}) => {
                this.searchedTrips = data;
                console.log('searchedTrips');
                console.log(JSON.stringify(this.searchedTrips));
            });
        } else if (newInputFrom.length <= 2 && newInputTo.length >= 2) {
            return this.tripService.searchTripsTo(newInputTo).subscribe((data: {}) => {
                this.searchedTrips = data;
                console.log('searchedTrips');
                console.log(JSON.stringify(this.searchedTrips));
            });
        }

    }
}

