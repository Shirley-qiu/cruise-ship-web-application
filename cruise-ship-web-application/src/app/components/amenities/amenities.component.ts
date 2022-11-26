import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Amenity } from './amenities'
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {

  constructor(private store: AngularFirestore) {}  amenities = this.store.collection('amenities').valueChanges({ idField: 'id' });

  ngOnInit(): void {
  }

  @Input() amenity: Amenity | null = null;
  @Output() edit = new EventEmitter<Amenity>();

  listAmenities: Amenity[] = [
    {
      title: 'Gym',
      description: 'This is a gym'
    },
    {
      title: 'Bar',
      description: 'This is a bar'
    }
  ];

}
