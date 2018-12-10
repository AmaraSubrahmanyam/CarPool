import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { RidesComponent } from './rides/rides.component';
import { AddRideComponent } from './rides/add-ride/add-ride.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import {RidesData} from './rides/rides-data';
@NgModule({
  declarations: [
    AppComponent,
    RidesComponent,
    AddRideComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(RidesData),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
