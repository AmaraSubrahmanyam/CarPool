import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RidesComponent } from './rides/rides.component';
import {AddRideComponent} from './rides/add-ride/add-ride.component';
import { SearchComponent } from './rides/search/search.component';
/*
* Author: Subramanyam Amara
*/
const routes: Routes = [
  { path: 'rides', component: RidesComponent },
  { path: 'submitRide', component: AddRideComponent },
  { path: 'findRide', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
