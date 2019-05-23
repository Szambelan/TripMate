import { Component, OnInit } from '@angular/core';
import {TripService} from '../../shared/trip.service';
import {NavigationEnd, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-trip-view',
  templateUrl: './trip-view.component.html',
  styleUrls: ['./trip-view.component.css']
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


  ngOnInit() {
    this.loadTrips();
    this.loadTripsUserTakesPartIn();
  }

  loadTrips() {
    return this.tripService.getTrip(localStorage.getItem('userToken')).subscribe((data: {}) => {
      this.trips = data;

      console.log(JSON.stringify(this.trips));
      console.log(JSON.stringify(data));
    });
  }

  loadTripsUserTakesPartIn() {
    return this.tripService.getTripUserTakesPartIn(localStorage.getItem('userToken')).subscribe((data: {}) => {
      this.tripsYouTakePartIn = data;
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



}
