import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../module/profile';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private httpClient: HttpClient) { }

    /** GET profile from the server */
    getProfileDetails(): Observable<Profile> {
        const url = 'https://jsonplaceholder.typicode.com/users/1';
        return this.httpClient.get<Profile>(url);

    }

}


