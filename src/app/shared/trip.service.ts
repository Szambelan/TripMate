import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {newTrip} from '../models/newTrip.model';
import {Trip} from '../models/trip.model';
import {homeData} from '../models/homeData.model';

@Injectable({
    providedIn: 'root'
})
export class TripService {
    readonly apiURL: string = 'http://localhost:5000';

    constructor(private http: HttpClient) {
    }

    addTrip(token: string, trip: newTrip) {
        const tripBody: newTrip = {
            cityFrom: trip.cityFrom,
            cityTo: trip.cityTo,
            seatsLeft: trip.seatsLeft,
            departureDate: trip.departureDate,
            arrivalDate: trip.arrivalDate,
            description: trip.description
        };
        console.log("tripBody" + tripBody);
        console.log(JSON.stringify(tripBody));
        let header = new HttpHeaders({'Content-Type': 'application/json'}).set('auth-token', token);
        return this.http.post(this.apiURL + '/offers/add', tripBody, {headers: header});
    }

    getTrip(token: string) {
        let header = new HttpHeaders({'Content-Type': 'application/json'}).set('auth-token', token);
        console.log(token);
        return this.http.get(this.apiURL + '/offers/published-offers', {headers: header});
    }

    getTripUserTakesPartIn(token: string) {
        let header = new HttpHeaders({'Content-Type': 'application/json'}).set('auth-token', token);
        return this.http.get(this.apiURL + '/users/trips', {headers: header});
    }

    deleteTrip(token: string, idTrip: string) {
        let header = new HttpHeaders().set('auth-token', token);
        return this.http.delete(this.apiURL + '/offers/' + idTrip, {headers: header});
    }

    getTAllrips() {
        return this.http.get(this.apiURL + '/offers');
    }

    reservateTrip(token: string, idTrip: string) {
        console.log('token: ' + token + ' idTrip: ' + idTrip);
        const header = new HttpHeaders({'Content-Type': 'application/json'}).set('auth-token', token);
        console.log(header);
        console.log(this.apiURL + '/users/book-trip/' + idTrip);
        return this.http.get(this.apiURL + '/users/book-trip/' + idTrip, {headers: header});
    }

//    editing the trip
    getTripData(idTrip: string) {
        return this.http.get(this.apiURL + '/offers/' + idTrip);
    }

    editTripData(idTrip: string, trip: newTrip) {
        const tripBody: newTrip = {
            cityFrom: trip.cityFrom,
            cityTo: trip.cityTo,
            seatsLeft: trip.seatsLeft,
            departureDate: trip.departureDate,
            arrivalDate: trip.arrivalDate,
            description: trip.description,
        };
        return this.http.patch(this.apiURL + '/offers/' + idTrip, tripBody);
    }

    searchTrips(searchFrom: string, searchTo: string) {
        //console.log(searchInput);
        return this.http.get(this.apiURL + '/offers/searcher?searchFrom=' + searchFrom + '&searchTo=' + searchTo );
    }
}
