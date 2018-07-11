import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reddit } from '../domain/reddit';

@Injectable()
export class RedditService {

    constructor(private http: HttpClient) {}

    getCarsSmall() {
        return this.http.get<any>('assets/data/reddit-home.json')
            .toPromise()
            .then(res => <Reddit[]> res.data)
            .then(data => data);
    }
}
