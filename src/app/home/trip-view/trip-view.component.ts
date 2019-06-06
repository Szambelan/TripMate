import {Component, OnInit} from '@angular/core';
import {TripService} from '../../shared/trip.service';
import {NavigationEnd, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-trip-view',
    templateUrl: './trip-view.component.html'
})
export class TripViewComponent implements OnInit {

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

    trips: any = [];
    tripsYouTakePartIn: any = [];
    isDeletedTripError = false;
    usersToAccept: any = [];
    allUsers: any = [];

    ngOnInit() {
        this.loadTrips();
        this.loadUsersToAccept();
        this.loadAllUsers();
        this.loadTripsUserTakesPartIn();
    }

    loadAllUsers() {
        return this.tripService.getAllUsers().subscribe((data: {}) => {
            this.allUsers = data;
        });
    }

    loadTrips() {
        return this.tripService.getTrip(localStorage.getItem('userToken')).subscribe((data: {}) => {
            this.trips = data;
            // console.log(JSON.stringify(this.trips));
        });
    }

    loadUsersToAccept() {
        return this.tripService.getUsersToAccept(localStorage.getItem('userToken')).subscribe((data: {}) => {
            this.usersToAccept = data;
        });
    }

    loadTripsUserTakesPartIn() {
        return this.tripService.getTripUserTakesPartIn(localStorage.getItem('userToken')).subscribe((data: {}) => {
            this.tripsYouTakePartIn = data;
        });
    }

    getTripUsersToAccept(tripId: string) {
        return this.usersToAccept.filter(function(user) {
            const toAcceptGood = user.toAccept.filter(function(id) {
                return id._id === tripId;
            });
            if (((((JSON.stringify(user.toAccept)).indexOf(JSON.stringify(toAcceptGood))) == -1) ||
                ((JSON.stringify(user.toAccept)) == (JSON.stringify(toAcceptGood))))
                && (JSON.stringify(toAcceptGood) !== '[]')) {
                return user;
            } else {
                return;
            }
        });
    }

    getAcceptedUsers(tripId: string) {
        return this.allUsers.filter(function(user) {
            return user.trips.includes(tripId);
        });
    }

    acceptUser(tripId: string, userId: string) {
        return this.tripService.userAccepted(localStorage.getItem('userToken'), tripId, userId).subscribe((data: any) => {
                this.router.navigate(['/home/trip']);
            },
            (err: HttpErrorResponse) => {
                this.isDeletedTripError = true;
            });
    }

    rejectUser(tripId: string, userId: string) {
        console.log('idUser: ' + userId + '\n tripid: ' + tripId);
        return this.tripService.userRejected(localStorage.getItem('userToken'), tripId, userId).subscribe((data: any) => {
                this.router.navigate(['/home/trip']);
            },
            (err: HttpErrorResponse) => {
                this.isDeletedTripError = true;
            });
    }

    deleteTrip(idTrip: string) {
        console.log(JSON.stringify(idTrip));
        this.tripService.deleteTrip(localStorage.getItem('userToken'), idTrip).subscribe((data: any) => {
                this.router.navigate(['/home/trip']);
            },
            (err: HttpErrorResponse) => {
                this.isDeletedTripError = true;
            });
    }

    tripEditSite(idTrip: string) {
        localStorage.setItem('idTrip', idTrip);
        this.router.navigate(['/home/tripEdit']);
    }

    resignation(idTrip: string) {
        this.tripService.resignationFromTrip(localStorage.getItem('userToken'), idTrip).subscribe((data: any) => {
            this.router.navigate(['/home/trip']);
        });
    }


}
