import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Amenity } from '../../models/amenity';
import { AmenityService } from '../../shared/services/amenity.service';

@Component({
  selector: 'app-amenities-details',
  templateUrl: './amenities-details.component.html',
  styleUrls: ['./amenities-details.component.css']
})
export class AmenitiesDetailsComponent implements OnInit {

  @Input() amenity: Amenity;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentAmenity: Amenity = {
    title: '',
    description: '',
    available: true,
  };
  message = '';

  constructor(private amenityService: AmenityService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentAmenity = { ...this.amenity };
  }

  updateAvailable(status: boolean): void {
    if (this.currentAmenity.id) {
      this.amenityService.update(this.currentAmenity.id, { available: status })
      .then(() => {
        this.currentAmenity.available = status;
        this.message = 'The availability was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateAmenity(): void {
    const data = {
      title: this.currentAmenity.title,
      description: this.currentAmenity.description,
      available: this.currentAmenity.available
    };

    if (this.currentAmenity.id) {
      this.amenityService.update(this.currentAmenity.id, data)
        .then(() => this.message = 'The amenity was updated successfully!')
        .catch(err => console.log(err));
    }
  }

}
