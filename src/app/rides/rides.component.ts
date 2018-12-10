import { Component, OnInit } from '@angular/core';
import { RideService } from './rides.service'
import { Ride } from './rides';

@Component({
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {
  pageTitle = 'My Rides';
  rides: Ride[];
  errorMessage: string;
 

  constructor(private rideService: RideService) { }

  ngOnInit(): void {
    this.rideService.getRides().subscribe(
      (rides: Ride[]) => this.rides = rides,
      (err: any) => this.errorMessage = err.error
    );
  }

}
