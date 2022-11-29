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

import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'amenities/book', component: BookAmenityComponent, canActivate: [AuthGuard]},
  {path: 'amenities/change', component: ChangeBookingComponent, canActivate: [AuthGuard]},
  {path: 'amenities/edit', component: AmenitiesComponent, canActivate: [AuthGuard]},
  {path: 'catering/order', component: OrderCateringComponent, canActivate: [AuthGuard]},
  {path: 'catering/modify', component: ModifyCateringComponent, canActivate: [AuthGuard]},
  {path: 'catering/edit', component: CateringComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
