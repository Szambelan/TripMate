import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {homeData} from '../models/homeData.model';

@Injectable()
export class HomeService {
    readonly apiURL: string = 'http://localhost:5000';

    constructor(private http: HttpClient) {
    }

    getUserData(token: string) {
        let header = new HttpHeaders().set('auth-token', token);
        console.log(token);
        return this.http.get(this.apiURL + '/users/user', {headers: header});
    }

    editUserData(token: string, user: homeData) {
        const userBody: homeData = {
            email: user.email,
            name: user.name,
            surname: user.surname,
            phone: user.phone
        };
        let header = new HttpHeaders({'Content-Type': 'application/json'}).set('auth-token', token);
        return this.http.patch(this.apiURL + '/users/edit-profile', userBody, {headers: header});
    }
}
