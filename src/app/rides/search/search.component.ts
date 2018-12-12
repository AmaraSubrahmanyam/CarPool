import { Component, OnInit } from '@angular/core';
import { Ride } from '../rides';
import { RideService } from '../rides.service';
import { NgForm } from '@angular/forms';
/*
* Author: Venugopal Vadla
*/
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pageTitle = 'Rides';
  rideSearchForm = new Ride();
  errorMessage: string = '';
  rides: Ride[];
  constructor(private rideService: RideService) { }

  ngOnInit() {
  }

  searchRide(rideForm: NgForm){
       
    this.rideService.searchRides(rideForm.value).subscribe(
      (rides: Ride[]) => {this.rides = rides,
        console.log(this.rides)
      },
      (err: any) => this.errorMessage = err.error
    );
      
  }

}
