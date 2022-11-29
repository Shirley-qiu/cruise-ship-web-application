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

  constructor(private amenityService: AmenityService) {};

  ngOnInit(): void {
    this.amenityService.getAmenities().subscribe(amenities => console.log(amenities));
  }

}
