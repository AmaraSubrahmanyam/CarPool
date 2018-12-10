import { Injectable } from "@angular/core";
import { Ride } from './rides'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RideService {
    private ridesUrl = 'api/rides';
    private rides: Ride[];

    constructor(private http: HttpClient) { }

    getRides(): Observable<Ride[]> {
        if (this.rides) {
            return of(this.rides);
        }
        return this.http.get<Ride[]>(this.ridesUrl)
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
                tap(data => console.log('createProduct: ' + JSON.stringify(data))),
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