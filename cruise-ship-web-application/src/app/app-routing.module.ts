import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { CateringComponent } from './components/catering/catering.component';
import { OrderCateringComponent } from './components/order-catering/order-catering.component';
import { BookAmenityComponent } from './components/book-amenity/book-amenity.component';
import { ModifyCateringComponent } from './components/modify-catering/modify-catering.component';
import { ChangeBookingComponent } from './components/change-booking/change-booking.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'amenities/book', component: BookAmenityComponent},
  {path: 'amenities/change', component: ChangeBookingComponent},
  {path: 'amenities/edit', component: AmenitiesComponent},
  {path: 'catering/order', component: OrderCateringComponent},
  {path: 'catering/modify', component: ModifyCateringComponent},
  {path: 'catering/edit', component: CateringComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
