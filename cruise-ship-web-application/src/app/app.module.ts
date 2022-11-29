import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
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

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AuthService } from "./shared/services/auth.service";

import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppRoutingModule,
    MatCardModule,
    MatDialogModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebase, 'Cruise-ship-web-application'),
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
