import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Amenity } from 'src/app/models/amenity';

@Injectable({
  providedIn: 'root'
})
export class AmenityService {
  amenityCollection: AngularFirestoreCollection<Amenity>;
  amenityDoc: AngularFirestoreDocument<Amenity>;
  amenities: Observable<Amenity[]>;
  amenity: Observable<Amenity>;

  constructor(private afs: AngularFirestore) { 
    this.amenityCollection = this.afs.collection('amenities', 
    ref => ref.orderBy('title', 'asc'));
  }

  getAll(): AngularFirestoreCollection<Amenity> {
    return this.amenityCollection;
  }

  update(id: string, data: any): Promise<void> {
    return this.amenityCollection.doc(id).update(data);
  }

  newAmenity(amenity: Amenity) {
    this.amenityCollection.add(amenity);
  }
}
