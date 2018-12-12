import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ride } from './../rides'
import { Router } from '@angular/router';
import { RideService } from './../rides.service'

/*
* Author: Nageswara Rao Pammi
*/

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.css']
})
export class AddRideComponent implements OnInit {

  rideForm = new Ride();
  errorMessage: string = '';

  constructor(private router: Router, private rideService: RideService) { }

  ngOnInit() {
  }


  saveRide(rideForm: NgForm): void {
   
    this.rideService.createRide(rideForm.value)
      .subscribe(
        () => this.onSaveComplete(),
        (error: any) => this.errorMessage = <any>error
      );
    
  }

  onSaveComplete(): void {
    console.log('inside On Save');
    this.router.navigate(['/rides']);
  }
}
