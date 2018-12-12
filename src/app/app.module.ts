import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { RidesComponent } from './rides/rides.component';
import { AddRideComponent } from './rides/add-ride/add-ride.component';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SearchComponent } from './rides/search/search.component';
/*
* Author: Subramanyam Amara
*/
@NgModule({
  declarations: [
    AppComponent,
    RidesComponent,
    AddRideComponent,
    CustomerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
