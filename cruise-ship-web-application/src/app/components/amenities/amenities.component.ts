import { Component, OnInit } from '@angular/core';
import { Amenity } from '../../models/amenity';
import { AmenityService } from '../../shared/services/amenity.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {
  amenities: Amenity[];

  imagesData: any = [
    "./assets/img/gym.jpg",
    "./assets/img/restaurant.jpg",
    "./assets/img/cafe.jpg",
    "./assets/img/bar.jpg",
    "./assets/img/sky_lounge.jpg",
  ];

  constructor(private amenityService: AmenityService) {};

  ngOnInit(): void {
    this.amenityService.getAmenities().subscribe(amenities => this.amenities = amenities);

  }

}
