import { Injectable } from "@angular/core";
import { Ride } from './rides'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RideService {
    private ridesUrl = 'http://localhost:3000/Ride';
    private rides: Ride[];

    constructor(private http: HttpClient) { }

    getRides(): Observable<Ride[]> {
        return this.http.get<Ride[]>(this.ridesUrl)
            .pipe(
                tap(data => this.rides = data),
                catchError(this.handleError)
            );
    }

    searchRides(ride: Ride): Observable<Ride[]> {
        let conditions = [];
        if (ride.startsFrom) {
            conditions.push(`startsFrom=${ride.startsFrom}`);
        }
        if (ride.endTo) {
            conditions.push(`endTo=${ride.endTo}`);
        }
        if (ride.startDate) {
            conditions.push(`startDate=${ride.startDate}`);
        }
        if (ride.seats) {
            conditions.push(`seats=${ride.seats}`);
        }
        let rideUrlForSearch = 'http://localhost:3000/Ride?';
        for (let i = 0; i < conditions.length; i++) {
            rideUrlForSearch = rideUrlForSearch + conditions[i] + '&';
        }
        console.log('rideUrlForSearch' + rideUrlForSearch);
        return this.http.get<Ride[]>(rideUrlForSearch)
            .pipe(
                tap(data => this.rides = data),
                catchError(this.handleError)
            );
    }

    createRide(ride: Ride): Observable<Ride> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        ride.id = null;
        return this.http.post<Ride>(this.ridesUrl, ride, { headers: headers })
            .pipe(
                tap(data => console.log('createRide: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    private handleError(err) {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }
}