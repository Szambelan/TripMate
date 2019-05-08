import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { newTrip } from '../models/newTrip.model';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  readonly apiURL: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  addTrip(token: string, trip: newTrip){
    const tripBody: newTrip = {
      cityFrom: trip.cityFrom,
      cityTo: trip.cityTo,
      seatsLeft:	trip.seatsLeft,
      departureDate: trip.departureDate,
      arrivalDate: trip.arrivalDate,
     description: trip.description
    };
    let header = new HttpHeaders({'Content-Type': 'application/json'}).set('auth-token', token);
    return this.http.post(this.apiURL + '/offers/add', tripBody, {headers: header});
  }
}
