import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { CateringComponent } from './components/catering/catering.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OrderCateringComponent } from './components/order-catering/order-catering.component';
import { BookAmenityComponent } from './components/book-amenity/book-amenity.component';
import { ModifyCateringComponent } from './components/modify-catering/modify-catering.component';
import { ChangeBookingComponent } from './components/change-booking/change-booking.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AmenitiesComponent,
    CateringComponent,
    SidebarComponent,
    OrderCateringComponent,
    BookAmenityComponent,
    ModifyCateringComponent,
    ChangeBookingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
