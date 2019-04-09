import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class UserService {
    readonly apiURL: string = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }


    registerUser(user: User) {
        const userBody: User = {
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: user.password,
        }
        const reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post(this.apiURL + '/api/users', userBody, {headers: reqHeader});
    }

    userAuthentication(email: string, password: string) {
        const data = JSON.stringify({email, password});
        const reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post(this.apiURL + '/api/auth', data, {headers: reqHeader});
    }

 }
