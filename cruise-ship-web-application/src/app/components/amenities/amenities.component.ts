import { Component, OnInit } from '@angular/core';
import { Amenity } from '../../models/amenity';
import { AmenityService } from '../../shared/services/amenity.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {
  amenities?: Amenity[];
  currentAmenity?: Amenity;
  currentIndex = -1;
  title = '';

  imagesData: any = [
    "./assets/img/bar.jpg",
    "./assets/img/cafe.jpg",
    "./assets/img/gym.jpg",
    "./assets/img/sky_lounge.jpg",
    "./assets/img/restaurant.jpg",
  ];

  constructor(private amenityService: AmenityService) {};

  ngOnInit(): void {
    //this.amenityService.getAmenities().subscribe(amenities => this.amenities = amenities);
    this.retrieveAmenities();
  }

  refreshList(): void {
    this.currentAmenity = undefined;
    this.currentIndex = -1;
    this.retrieveAmenities();
  }

  retrieveAmenities(): void {
    this.amenityService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.amenities = data;
    });
  }

  setActiveAmenity(amenity: Amenity, index: number): void {
    this.currentAmenity = amenity;
    this.currentIndex = index;
  }

  update() {

  }

}
